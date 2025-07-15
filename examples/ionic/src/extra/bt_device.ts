import { DocumentReader, InitConfig } from "@regulaforensics/document-reader"
import { handleException, setStatus } from "../main"

export const useBtDevice = false
const btDeviceName = "Regula 0000"

export function setupBTDevice() {
  document.getElementById("bt-device").style.display = "flex"
  document.getElementById("connect").onclick = () => connect()
  setStatus("Connect to a bluetooth device")
}

async function connect() {
  setStatus("Searching for devices...")
  if (await DocumentReader.instance.connectBluetoothDevice(btDeviceName)) {
    await initialize()
    DocumentReader.instance.functionality.useAuthenticator = true
    document.getElementById("bt-device").style.display = "none"
  } else
    setStatus("Failed to connect")
}

async function initialize() {
  setStatus("Initializing...")

  var initConfig = InitConfig.withBleDevice()
  initConfig.delayedNNLoad = true
  var [success, error] = await DocumentReader.instance.initialize(initConfig)

  handleException(error)
  return success
}
