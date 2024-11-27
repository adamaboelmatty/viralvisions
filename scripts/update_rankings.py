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

# Read the CSV file
def read_csv(csv_file_path):
    data = pd.read_csv(csv_file_path)
    print("CSV Columns:", list(data.columns))  # Debug column names

    # Map expected columns dynamically
    creator_id_col = [col for col in data.columns if 'Creator ID' in col][0]
    diamonds_col = [col for col in data.columns if 'Diamond' in col][0]
    valid_days_col = [col for col in data.columns if 'Valid' in col][0]

    updates = {}
    for _, row in data.iterrows():
        try:
            creator_id = str(row[creator_id_col]).strip()
            diamonds = int(row[diamonds_col])
            valid_days = int(row[valid_days_col])
            updates[creator_id] = (diamonds, valid_days)
        except (ValueError, TypeError) as e:
            print(f"Warning: Skipping row due to error: {e}")
            continue

    return updates

def update_users_array(component_file_path, updates):
    with open(component_file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Find the users array
    users_match = re.search(r'const users = \[(.*?)\]\s*\.sort\(\(a, b\) => b\.diamondCount - a\.diamondCount\);', content, re.DOTALL)
    if not users_match:
        raise ValueError("Could not find the `users` array in the file.")
    
    users_array = users_match.group(1)
    updated_users = []

    # Update each user in the array
    for user_block in re.finditer(r'{\s*id: "[^"]+".*?}(?=\s*,\s*{|\s*\])', users_array, re.DOTALL):
        user_text = user_block.group(0)
        user_id_match = re.search(r'id: "([^"]+)"', user_text)
        
        if user_id_match and user_id_match.group(1) in updates:
            user_id = user_id_match.group(1)
            new_diamond_count, new_valid_days = updates[user_id]
            
            # Replace diamond count and valid days while preserving everything else
            user_text = re.sub(
                r'(diamondCount:) *\d+',
                f'\\1 {new_diamond_count}',
                user_text
            )
            user_text = re.sub(
                r'(validDays:) *\d+',
                f'\\1 {new_valid_days}',
                user_text
            )
        
        updated_users.append(user_text)

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

    print("Updated the `users` array successfully!")

# Commit and push the changes to GitHub
def git_commit_and_push(csv_file):
    try:
        subprocess.run(["git", "add", component_file_path], check=True)
        subprocess.run(["git", "commit", "-m", f"Update rankings using {os.path.basename(csv_file)}"], check=True)
        subprocess.run(["git", "push", "origin", "main"], check=True)
        print("Changes pushed to GitHub successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error in git operations: {e}")
        raise

# Main function
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