#!/usr/bin/env bash
set -e

npm install
vite build
npx cap sync

cp public/assets/db.dat ios/App/App/
cp public/assets/db.dat android/app/src/main/assets/Regula/
