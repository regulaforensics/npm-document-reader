#!/usr/bin/env bash
set -e

npm install
cd ios/App
pod install || pod update
cd ../../

cp public/assets/db.dat ios/App/App/
cp public/assets/db.dat android/app/src/main/assets/Regula/
