#!/usr/bin/env bash
set -e

npm install

if expo prebuild; then
    rc=0
else
    rc=$?
fi

printf 'expo prebuild exit code: %d\n' "$rc"

if (( rc != 0 )); then
    exit "$rc"
fi

mkdir -p android/app/src/main/assets/Regula
mv android/app/src/main/res/raw/db.dat android/app/src/main/assets/Regula/