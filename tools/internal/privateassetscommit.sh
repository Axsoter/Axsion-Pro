#!/usr/bin/env bash

set -e

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 commit_message"
  exit 1
fi

temp_directory="/tmp/axsion-pro-private-assets"
commit_message="$1"

# Remove existing temp directory if it exists
if [ -d "$temp_directory" ]; then
  rm -rf "$temp_directory"
fi

echo "Cloning repo into temporary directory..."
git clone https://github.com/Axsoter/axsion-pro-private-assets.git "$temp_directory" --quiet
echo "Done!"

#

echo "Copying files to temp directory"

start_line=$(grep -n "# Private main website files" "$(pwd)/.gitignore" | cut -d: -f1)
if [ -z "$start_line" ]; then
  echo "Error: Marker '# Private main website files' not found in the .gitignore."
  exit 1
fi

start_line=$((start_line + 1))

awk "NR >= $start_line" "$(pwd)/.gitignore" | while read -r line; do
  # Remove the leading slash from the path
  relative_path="${line#/}"

  # Full path to the file/directory
  source_path="$(pwd)/$relative_path"
  temp_path="$temp_directory/$relative_path"

  if [ -d "$source_path" ]; then
    echo "Copying directory '$relative_path'..."
    # Ensure the target directory exists
    mkdir -p "$temp_path"
    # Copy the contents of the source directory to the target directory
    cp -r "$source_path/"* "$temp_path/"
  elif [ -f "$source_path" ]; then
    echo "Copying file '$relative_path'..."
    # Ensure the parent directory exists, not the file's directory itself
    mkdir -p "$(dirname "$temp_path")"
    # Copy the file
    cp "$source_path" "$temp_path"
  else
    echo "Warning: $source_path does not exist. (have you pulled anything yet?)"
  fi
done

echo "Done!"

#

echo "Committing and pushing with message '$commit_message'..."

cd "$temp_directory"

# Stage all changes
git add .

# Commit the changes with the provided message
git commit -m "$commit_message" --quiet

# Push the changes to the remote repository
git push origin main --quiet

echo "Done!"

#

echo "Cleaning up..."

rm -rf "$temp_directory"

echo "All done!"