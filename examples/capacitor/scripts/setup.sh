#!/usr/bin/env bash
set -e

npm install
ionic cap sync ios || {
    cd ios/App
    pod update
    cd ../../
}

cp public/assets/db.dat ios/App/App/
cp public/assets/db.dat android/app/src/main/assets/Regula/
