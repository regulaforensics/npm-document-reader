import { DocumentReader, InitConfig } from "@regulaforensics/document-reader"
import { handleException, init, setStatus } from "../main"

export const useBtDevice = false
export const btDeviceName = "Regula 0000"

export function setupBTDevice() {
  var connectButton = document.getElementById("connect")!
  connectButton.style.display = "flex"
  connectButton.onclick = () => connect()
  setStatus("Connect to a bluetooth device")
}

async function connect() {
  setStatus("Searching for devices...")
  if (await DocumentReader.instance.connectBluetoothDevice(btDeviceName)) {
    await init()
    DocumentReader.instance.functionality.useAuthenticator = true
    document.getElementById("bt-device")!.style.display = "none"
  } else
    setStatus("Failed to connect")
}

export async function initializeWithBTDevice() {
  setStatus("Initializing...")

  var initConfig = InitConfig.withBleDevice()
  initConfig.delayedNNLoad = true
  var [success, error] = await DocumentReader.instance.initialize(initConfig)

  handleException(error)
  return success
}
