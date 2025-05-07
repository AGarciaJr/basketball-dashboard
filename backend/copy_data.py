import os
import shutil

def copy_data_files():
    # Source and destination directories
    src_dir = "data"
    dest_dir = "../frontend/src/data"
    
    # Create destination directory if it doesn't exist
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
    
    # Copy each season file
    for filename in os.listdir(src_dir):
        if filename.startswith("players_") and filename.endswith(".json"):
            src_path = os.path.join(src_dir, filename)
            dest_path = os.path.join(dest_dir, filename)
            shutil.copy2(src_path, dest_path)
            print(f"Copied {filename} to frontend")

if __name__ == "__main__":
    copy_data_files() 