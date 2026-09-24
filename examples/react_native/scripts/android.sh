#!/usr/bin/env bash
set -e

adb reverse tcp:8081 tcp:8081 >/dev/null || :
if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open -a 'Android Studio' android
    # check if metro is already running
    if [[ -z $(pgrep -f 'expo start') ]]; then
        npm start
    fi
else
    expo run:android --device
fi
