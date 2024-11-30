import os
import pandas as pd
import re
import subprocess

# Directory containing CSV files
csv_directory = './data/'
component_file_path = './src/app/rankings/page.tsx'

# Get the most recent CSV file
def get_latest_csv(directory):
    files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith('.csv')]
    latest_file = max(files, key=os.path.getmtime)
    return latest_file

def read_csv(csv_file_path):
    data = pd.read_csv(csv_file_path)
    print("CSV Columns:", list(data.columns))

    try:
        # Map to your specific CSV column names
        creator_id_col = 'Creator ID'
        username_col = "Creator's username"
        diamonds_col = 'Diamonds'
        valid_days_col = 'Valid go LIVE days'  # This will be used for streaks
        
        updates = {}
        for _, row in data.iterrows():
            try:
                creator_id = str(row[creator_id_col]).strip()
                # Only add each creator once
                if creator_id not in updates:
                    updates[creator_id] = {
                        'diamondCount': int(row[diamonds_col]),
                        'validDays': int(row[valid_days_col]),
                        'username': str(row[username_col]).strip(),
                        'currentStreak': int(row[valid_days_col]),  # Using Valid go LIVE days as streak
                        'avatarUrl': "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg"
                    }
            except (ValueError, TypeError) as e:
                print(f"Warning: Skipping row due to error with creator {row[username_col]}: {e}")
                continue

        print(f"Processed {len(updates)} unique creators")
        return updates

    except KeyError as e:
        print(f"Error: Could not find required column: {e}")
        print("Available columns:", list(data.columns))
        raise

def update_users_array(component_file_path, updates):
    with open(component_file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Find the users array
    users_match = re.search(r'const users = \[(.*?)\]\s*\.sort\(\(a, b\) => b\.diamondCount - a\.diamondCount\);', content, re.DOTALL)
    if not users_match:
        raise ValueError("Could not find the `users` array in the file.")
    
    users_array = users_match.group(1)
    existing_ids = set()
    updated_users = []

    # First, process existing users
    for user_block in re.finditer(r'{\s*id: "[^"]+".*?}(?=\s*,\s*{|\s*\])', users_array, re.DOTALL):
        user_text = user_block.group(0)
        user_id_match = re.search(r'id: "([^"]+)"', user_text)
        
        if user_id_match:
            user_id = user_id_match.group(1)
            existing_ids.add(user_id)
            
            if user_id in updates:
                # Update existing user
                update_data = updates[user_id]
                user_text = re.sub(
                    r'(diamondCount:) *\d+',
                    f'\\1 {update_data["diamondCount"]}',
                    user_text
                )
                user_text = re.sub(
                    r'(validDays:) *\d+',
                    f'\\1 {update_data["validDays"]}',
                    user_text
                )
                user_text = re.sub(
                    r'(currentStreak:) *\d+',
                    f'\\1 {update_data["currentStreak"]}',
                    user_text
                )
                updated_users.append(user_text)
                print(f"Updated existing user: {user_id}")
            else:
                # Keep existing user without updates
                updated_users.append(user_text)
                print(f"Kept existing user without updates: {user_id}")

    # Then add new users
    for user_id, user_data in updates.items():
        if user_id not in existing_ids:
            new_user = f'''{{
  id: "{user_id}",
  username: "{user_data['username']}",
  avatarUrl: "{user_data['avatarUrl']}",
  diamondCount: {user_data['diamondCount']},
  currentStreak: {user_data['currentStreak']},
  validDays: {user_data['validDays']}
}}'''
            updated_users.append(new_user)
            print(f"Added new user: {user_id}")

    # Join all user objects with proper formatting
    new_users_array = ",\n  ".join(updated_users)
    
    # Replace the entire users array while maintaining the sorting
    new_content = re.sub(
        r'const users = \[.*?\]\s*\.sort\(\(a, b\) => b\.diamondCount - a\.diamondCount\);',
        f'const users = [\n  {new_users_array}\n].sort((a, b) => b.diamondCount - a.diamondCount);',
        content,
        flags=re.DOTALL
    )

    # Write the updated content back to the file
    with open(component_file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)

    print(f"\nSummary:")
    print(f"Total existing users: {len(existing_ids)}")
    print(f"Total updates processed: {len(updates)}")
    print(f"New users added: {len(updates) - len(existing_ids)}")

def git_commit_and_push(csv_file):
    try:
        subprocess.run(["git", "add", component_file_path], check=True)
        subprocess.run(["git", "commit", "-m", f"Update rankings using {os.path.basename(csv_file)}"], check=True)
        subprocess.run(["git", "push", "origin", "main"], check=True)
        print("Changes pushed to GitHub successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error in git operations: {e}")
        raise

# Main execution block
if __name__ == "__main__":
    try:
        print("Starting rankings update process...")
        latest_csv = get_latest_csv(csv_directory)
        print(f"Reading data from: {latest_csv}")
        updates = read_csv(latest_csv)
        print(f"Found {len(updates)} updates to apply")
        update_users_array(component_file_path, updates)
        git_commit_and_push(latest_csv)
        print("Update process completed successfully!")
    except Exception as e:
        print(f"Error during update process: {e}")
        raise