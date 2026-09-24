#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open ios/Document.xcworkspace
    # check if metro is already running
    if [[ -z $(pgrep -f 'expo start') ]]; then
        npm start
    fi
else
    npx expo run:ios  --device
fi
