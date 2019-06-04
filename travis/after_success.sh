#!/usr/bin/env bash

sentry-cli releases finalize "$TRAVIS_COMMIT" || exit 1
firebase deploy -P development --token "$FIREBASE_TOKEN" || exit 1
firebase deploy -P production --token "$FIREBASE_TOKEN" || exit 1
firebase database:set --token "$FIREBASE_TOKEN" --data \"$TRAVIS_COMMIT\" --confirm /deploy_commit_hash || exit 1
sentry-cli releases deploys "$TRAVIS_COMMIT" new -e "production" || exit 1
