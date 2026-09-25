#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open ios/Document.xcworkspace
    # Check Metro for this product on port 8081.
    if [[ "$(curl --silent --max-time 2 http://localhost:8081/status)" != "packager-status:running" ]]; then
        npm start
    fi
else
    npx expo run:ios --device --port 8081
fi
