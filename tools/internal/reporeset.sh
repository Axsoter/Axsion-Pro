#!/usr/bin/env bash

set -e

git switch $1
git reset --soft $(git merge-base $2 HEAD)
git commit -m "\"initial\" commit"

# DO NOT UNCOMMENT THE LINE BELOW UNTIL SOMEONE HAS DONE AN "ARE YOU SURE YOU WANT TO PUSH" THING TO THIS SCRIPT
# git push --force