#!/usr/bin/env bash

sentry-cli releases finalize "$TRAVIS_COMMIT"
firebase deploy --token "$FIREBASE_TOKEN"
firebase database:set --token "$FIREBASE_TOKEN" --data \"$TRAVIS_COMMIT\" --confirm /deploy_commit_hash
sentry-cli releases deploys "$TRAVIS_COMMIT" new -e "production"
