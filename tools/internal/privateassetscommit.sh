#!/usr/bin/env bash

set -e

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 destination_directory"
  exit 1
fi

destination_directory="$1"

if [ ! -d "$destination_directory" ]; then
  echo "Error: Destination directory does not exist"
  exit 1
fi

start_line=$(grep -n "# Private main website files" "$(pwd)/.gitignore" | cut -d: -f1)
if [ -z "$start_line" ]; then
  echo "Error: Marker '# Private main website files' not found in the .gitignore (what the fuck?)"
  exit 1
fi

start_line=$((start_line + 1))

awk "NR >= $start_line" "$(pwd)/.gitignore" | while read -r line; do
  # Remove the leading slash from the path
  relative_path="${line#/}"
  
  # Full path to the file/directory
  full_path="$(pwd)/$relative_path"
  
  # Copy files or directories to the destination directory
  if [ -e "$full_path" ]; then
    cp -r "$full_path" "$destination_directory"
  else
    echo "Warning: $full_path does not exist."
  fi
done

echo "Files copied to $destination_directory"