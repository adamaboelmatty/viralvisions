#!/usr/bin/env python3
import os
import pandas as pd
import re
import subprocess
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Directory containing CSV files
csv_directory = './data/'
component_file_path = './src/app/rankings/page.tsx'

def get_latest_csv(directory):
    """Get the most recent CSV file from the directory"""
    try:
        files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith('.csv')]
        if not files:
            raise FileNotFoundError(f"No CSV files found in {directory}")
        latest_file = max(files, key=os.path.getmtime)
        return latest_file
    except Exception as e:
        logger.error(f"Error getting latest CSV: {e}")
        raise

def read_csv(csv_file_path):
    """Read and process the CSV data"""
    try:
        data = pd.read_csv(csv_file_path)
        logger.info(f"CSV Columns: {list(data.columns)}")

        # Map to your specific CSV column names
        creator_id_col = 'Creator ID'
        username_col = "Creator's username"
        diamonds_col = 'Diamonds'
        valid_days_col = 'Valid go LIVE days'
        
        updates = {}
        for _, row in data.iterrows():
            try:
                creator_id = str(row[creator_id_col]).strip()
                if creator_id not in updates:
                    updates[creator_id] = {
                        'diamondCount': int(row[diamonds_col]),
                        'validDays': int(row[valid_days_col]),
                        'username': str(row[username_col]).strip(),
                        'currentStreak': int(row[valid_days_col])
                    }
            except (ValueError, TypeError) as e:
                logger.warning(f"Skipping row due to error with creator {row[username_col]}: {e}")
                continue

        logger.info(f"Processed {len(updates)} unique creators")
        return updates

    except KeyError as e:
        logger.error(f"Error: Could not find required column: {e}")
        logger.error(f"Available columns: {list(data.columns)}")
        raise
    except Exception as e:
        logger.error(f"Error processing CSV: {e}")
        raise

def update_users_array(component_file_path, updates):
    """Update the users array in the TypeScript component"""
    try:
        with open(component_file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Find the users array
        users_match = re.search(r'const users = \[(.*?)\]\s*\.sort\(\(a, b\) => b\.diamondCount - a\.diamondCount\);', content, re.DOTALL)
        if not users_match:
            raise ValueError("Could not find the `users` array in the file.")
        
        users_array = users_match.group(1)
        existing_ids = set()
        updated_users = []
        existing_avatars = {}  # Store existing avatar URLs

        # Process existing users and store their avatar URLs
        for user_block in re.finditer(r'{\s*id: "[^"]+".*?}(?=\s*,\s*{|\s*\])', users_array, re.DOTALL):
            user_text = user_block.group(0)
            user_id_match = re.search(r'id: "([^"]+)"', user_text)
            avatar_url_match = re.search(r'avatarUrl: "([^"]+)"', user_text)
            
            if user_id_match and avatar_url_match:
                user_id = user_id_match.group(1)
                existing_avatars[user_id] = avatar_url_match.group(1)
                existing_ids.add(user_id)
                
                if user_id in updates:
                    # Update existing user but keep their current avatar URL
                    update_data = updates[user_id]
                    update_data['avatarUrl'] = existing_avatars[user_id]
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
                    logger.info(f"Updated existing user: {user_id}")
                else:
                    # Keep existing user without updates
                    updated_users.append(user_text)
                    logger.info(f"Kept existing user without updates: {user_id}")

        # Add new users
        for user_id, user_data in updates.items():
            if user_id not in existing_ids:
                avatar_url = existing_avatars.get(
                    user_id, 
                    "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg"
                )
                new_user = f'''{{
  id: "{user_id}",
  username: "{user_data['username']}",
  avatarUrl: "{avatar_url}",
  diamondCount: {user_data['diamondCount']},
  currentStreak: {user_data['currentStreak']},
  validDays: {user_data['validDays']}
}}'''
                updated_users.append(new_user)
                logger.info(f"Added new user: {user_id}")

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

        logger.info(f"\nSummary:")
        logger.info(f"Total existing users: {len(existing_ids)}")
        logger.info(f"Total updates processed: {len(updates)}")
        logger.info(f"New users added: {len(updates) - len(existing_ids)}")

    except Exception as e:
        logger.error(f"Error updating users array: {e}")
        raise

def git_commit_and_push(csv_file):
    """Handle Git operations with proper error checking"""
    try:
        # Check git status first
        status = subprocess.run(
            ["git", "status", "--porcelain"],
            check=True,
            capture_output=True,
            text=True
        )

        if status.stdout.strip():
            # Stage both the component file and the CSV
            logger.info("Staging modified files...")
            subprocess.run(["git", "add", component_file_path], check=True)
            subprocess.run(["git", "add", "data/creator_data.csv"], check=True)
            
            # Commit changes
            logger.info("Committing changes...")
            commit_message = f"Update rankings using {os.path.basename(csv_file)}"
            subprocess.run(["git", "commit", "-m", commit_message], check=True)
            
            # Push changes
            logger.info("Pushing changes to remote...")
            subprocess.run(["git", "push", "origin", "main"], check=True)
            
            logger.info("Changes pushed to GitHub successfully!")
        else:
            logger.info("No changes to commit")
            
    except subprocess.CalledProcessError as e:
        logger.error(f"Git operation failed: {e}")
        if e.output:
            logger.error(f"Git output: {e.output.decode()}")
        raise

if __name__ == "__main__":
    try:
        logger.info("Starting rankings update process...")
        latest_csv = get_latest_csv(csv_directory)
        logger.info(f"Reading data from: {latest_csv}")
        updates = read_csv(latest_csv)
        logger.info(f"Found {len(updates)} updates to apply")
        update_users_array(component_file_path, updates)
        git_commit_and_push(latest_csv)
        logger.info("Update process completed successfully!")
    except Exception as e:
        logger.error(f"Error during update process: {e}")
        raise