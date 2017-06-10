#!/usr/bin/env bash

sentry-cli releases set-commits "$TRAVIS_COMMIT" --commit "${TRAVIS_REPO_SLUG,,}@$TRAVIS_COMMIT"
sentry-cli releases new "$TRAVIS_COMMIT"
