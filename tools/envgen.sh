#!/usr/bin/env bash

set -e

echo "Copying files..."
cp "$(pwd)/.env.template" "$(pwd)/.env"

echo "Generating secrets..."
sed -i "s|AUTH_SECRET=.*|AUTH_SECRET=\"$(openssl rand -base64 33)\"|" "$(pwd)/.env"

echo "Done!"