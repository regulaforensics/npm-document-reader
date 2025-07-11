import { document } from '../index'
import * as RNFS from 'react-native-fs'
import { Platform } from 'react-native'
import { DocumentReader, InitConfig } from '@regulaforensics/document-reader'

var documentReader = DocumentReader.instance
var useBtDevice = false
var ready = false
var isReadingCustomRfid = false

async function init() {
  if (!await initialize()) return
  setStatus("Ready")
}

async function initialize() {
  setStatus("Initializing...")

  var license = await loadAssetIfExists("regula.license")
  var config = new InitConfig(license!)
  var [success, error] = await documentReader.initialize(config)

  if (!success && error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
  return success
}

async function loadAssetIfExists(path: string): Promise<string | null> {
  if (Platform.OS === 'ios') path = RNFS.MainBundlePath + "/" + path
  var readFile = Platform.OS === 'ios' ? RNFS.readFile : RNFS.readFileRes
  try {
    return await readFile(path, 'base64')
  } catch {
    return null
  }
}

var setStatus = (data: string) => document.getElementById("status").innerHTML = data

export function onload() {
  document.getElementById("main").style.display = isReadingCustomRfid ? "none" : "flex"
  document.getElementById("custom-rfid").style.display = isReadingCustomRfid ? "flex" : "none"
  document.getElementById("bt-device").style.display = (useBtDevice && !ready) ? "flex" : "none"

  // document.getElementById("scan").onclick = () => scan()

  init()
}
