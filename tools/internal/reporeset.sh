#!/usr/bin/env bash

set -e

git switch dev
git reset --soft $(git merge-base main HEAD)
git commit -m "\"initial\" commit"

# DO NOT UNCOMMENT THE LINE BELOW UNTIL SOMEONE HAS DONE AN "ARE YOU SURE YOU WANT TO PUSH" THING TO THIS SCRIPT
# git push --force