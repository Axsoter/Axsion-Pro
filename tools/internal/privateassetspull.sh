#!/usr/bin/env bash

set -e

# Create a temporary directory
temp_directory="/tmp/axsion-pro-private-assets"

# Ensure the temporary directory doesn't exist before cloning
if [ -d "$temp_directory" ]; then
  rm -rf "$temp_directory"
fi

echo "Cloning repo into temporary directory..."
git clone https://github.com/Axsoter/axsion-pro-private-assets.git "$temp_directory" --quiet
echo "Done!"

#

echo "Copying files from temp directory to current working directory..."

start_line=$(grep -n "# Private main website files" "$(pwd)/.gitignore" | cut -d: -f1)
if [ -z "$start_line" ]; then
  echo "Error: Marker '# Private main website files' not found in the .gitignore."
  exit 1
fi

start_line=$((start_line + 1))

awk "NR >= $start_line" "$(pwd)/.gitignore" | while read -r line; do
  # Remove the leading slash from the path
  relative_path="${line#/}"

  # Full path to the file/directory in the temp directory
  full_path="$temp_directory/$relative_path"
  target_path="$(pwd)/$relative_path"

  if [ -d "$full_path" ]; then
    echo "Copying directory '$relative_path'..."
    # Ensure the target directory exists
    mkdir -p "$target_path"
    # Copy the contents of the source directory to the target directory
    cp -r "$full_path/" "$target_path/"
  elif [ -f "$full_path" ]; then
    echo "Copying file '$relative_path'..."
    # Ensure the parent directory exists
    mkdir -p "$(dirname "$target_path")"
    # Copy the file
    cp "$full_path" "$target_path"
  else
    echo "Warning: $full_path does not exist in the temp directory."
  fi
done

echo "Done!"

#

echo "Cleaning up..."

rm -rf "$temp_directory"

echo "All done!"