#!/usr/bin/env bash
set -e

npx esbuild www/src/main.js --bundle --outfile=www/bundle.js
