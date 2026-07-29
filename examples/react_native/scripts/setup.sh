#!/usr/bin/env bash
set -e

npm install
npx expo prebuild --no-install
cd ios
pod install || pod update || exit
cd ../

mkdir -p android/app/src/main/assets/Regula
mv android/app/src/main/res/raw/db.dat android/app/src/main/assets/Regula/