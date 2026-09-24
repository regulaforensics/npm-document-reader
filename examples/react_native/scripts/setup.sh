#!/usr/bin/env bash
set -e

npm install
rm -rf node_modules/expo/node_modules/expo-modules-core/android/.cxx # Temp fix of the bug in expo@58.0.0-preview.3
# Run CocoaPods separately because Expo prebuild can return success even when pod installation fails.
npx expo prebuild --no-install
(cd ios && (pod install || pod update))

mkdir -p android/app/src/main/assets/Regula
mv android/app/src/main/res/raw/db.dat android/app/src/main/assets/Regula/
