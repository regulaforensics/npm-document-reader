# Regula Document Reader React Native demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-document-reader.git`.
2. Execute `npm run setup` within this directory.
3. Run the app: 
  * IOS: `npm run ios`.
  * Android: `npm run android`.

**Note**: this is just one way of running the app. You can also pass `-o` or `--open` argument to the command, and this will open Xcode/Android Studio, then run the app directly from the IDE. Overall, this is a more consistent way, so if you're having troubles running the app from terminal, try running it from the IDE. Just don't forget to make sure that Metro Bundler is running(`npm start`).

## Additional examples

### Bluetooth device

In order to connect to an external scanning device, change the `useBtDevice` constant to true in `src/extra/bt_device`, and set `btDeviceName` to the name of your device. After running the app, click `Connect`.

### RFID self hosted UI

This app also demonstraits how you can implement you own UI for the RFID reading process. To enable it, change the `useRfidSelfHostedUI` constant to true in `src/extra/custom_rfid`. Run the app and initiate RFID reading.
