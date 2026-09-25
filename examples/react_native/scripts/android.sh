#!/usr/bin/env bash
set -e

adb reverse tcp:8081 tcp:8081 >/dev/null || :
if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open -a 'Android Studio' android
    # Check Metro for this product on port 8081.
    if [[ "$(curl --silent --max-time 2 http://localhost:8081/status)" != "packager-status:running" ]]; then
        npm start
    fi
else
    expo run:android --device --port 8081
fi
