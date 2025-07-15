import { document } from '../index'
import * as RNFS from 'react-native-fs'
import { Platform } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

import { DocumentReader, DocReaderAction, FieldType, GraphicFieldType, InitConfig, RecognizeConfig, ResultType, RFIDConfig, ScannerConfig, Scenario } from '@regulaforensics/document-reader'
import { setupBTDevice, useBtDevice } from './extra/bt_device'
import { useRfidSelfHostedUI, rfidSelfHostedUI } from './extra/custom_rfid'

var documentReader = DocumentReader.instance
var selectedScenario
var doRfid = false
var isReadingRfid = false

async function init() {
  if (!await initialize()) return
  setScenarios(documentReader.availableScenarios)
  setCanRfid(await documentReader.isRFIDAvailableForUse())
  setStatus("Ready")
}

async function scan() {
  if (!await documentReader.isReady()) return
  clearResults()
  documentReader.startScanner(
    ScannerConfig.withScenario(selectedScenario),
    handleCompletion,
  )
}

async function recognize() {
  if (!await documentReader.isReady()) return
  var image = await pickImage()
  if (image == null) return

  clearResults()
  documentReader.recognize(
    RecognizeConfig.withScenario(selectedScenario, { image: image }),
    handleCompletion,
  )
}

export function handleCompletion(action, results, error) {
  handleException(error)
  if (DocReaderAction.stopped(action) && !shouldRfid(results)) {
    displayResults(results)
  } else if (DocReaderAction.finished(action) && shouldRfid(results)) {
    isReadingRfid = true
    readRfid()
  }
}

export async function displayResults(results) {
  isReadingRfid = false
  clearResults()
  if (results == null) return

  var name = await results.textFieldValueByType(FieldType.SURNAME_AND_GIVEN_NAMES)
  var docImage = await results.graphicFieldImageByType(GraphicFieldType.DOCUMENT_IMAGE)
  var portrait = await results.graphicFieldImageByType(GraphicFieldType.PORTRAIT)
  portrait = await results.graphicFieldImageByTypeSource(GraphicFieldType.PORTRAIT, ResultType.RFID_IMAGE_DATA) ?? portrait

  setStatus(name)
  setPortrait(portrait)
  setDocImage(docImage)
}

var readRfid = () => {
  documentReader.rfid(new RFIDConfig(handleCompletion))
}

function shouldRfid(results) {
  return doRfid &&
    !isReadingRfid &&
    results != null && results.chipPage != 0
}

async function initialize() {
  setStatus("Initializing...")

  var license = await loadAsset("regula.license")
  var initConfig = new InitConfig(license)
  var [success, error] = await documentReader.initialize(initConfig)

  handleException(error)
  return success
}

export function handleException(error) {
  if (error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
}

// ui --------------------------------------------------------------------------------------------------------------------

export function setStatus(data) {
  if (data != null)
    document.getElementById("status").innerHTML = data
}

function setPortrait(data) {
  if (data != null)
    portraitUIImage.src = "data:image/png;base64," + data
}

function setDocImage(data) {
  if (data != null)
    documentUIImage.src = "data:image/png;base64," + data
}

function clearResults() {
  setStatus("Ready")
  portraitUIImage.src = "images/portrait.png"
  documentUIImage.src = "images/document.png"
}

function setCanRfid(data) {
  var checkbox // implicitly any, since cordova sample is pure js
  checkbox = document.getElementById('rfid-checkbox')
  var checkboxDescription = document.getElementById("rfid-checkbox-description")
  if (data) {
    checkbox.disabled = false
    checkboxDescription.innerHTML = "Process rfid reading"
    checkboxDescription.onclick = () => {
      doRfid = !doRfid
      checkbox.checked = doRfid
    }
  }
}

// not equal --------------------------------------------------------------------------------------------------------------------

async function loadAsset(path: string): Promise<string> {
  if (Platform.OS === 'ios') path = RNFS.MainBundlePath + "/" + path
  var readFile = Platform.OS === 'ios' ? RNFS.readFile : RNFS.readFileRes
  return await readFile(path, 'base64')
}

async function pickImage(): Promise<string | null> {
  var response = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
    includeBase64: true
  })
  return response?.assets?.[0].base64!
}

var documentUIImage
var portraitUIImage
export function onload() {
  documentUIImage = document.getElementById("document-image")
  portraitUIImage = document.getElementById("portrait-image")
  document.getElementById("scan").onclick = () => scan()
  document.getElementById("recognize").onclick = () => recognize()

  // custom rfid
  if (useRfidSelfHostedUI) readRfid = () => rfidSelfHostedUI()

  // bt device
  if (!useBtDevice) init()
  else setupBTDevice()
}

// not resolved --------------------------------------------------------------------------------------------------------------------

function setScenarios(data) {
  selectedScenario = Scenario.MRZ
  // const scenariosContainer = document.getElementById("scenarios")
  // data.forEach(scenario => scenariosContainer.appendChild(createScenarioElement(scenario)))
}

function createScenarioElement(scenario) {
  // const div = document.createElement('div')
  // div.className = 'row radio'

  // const input = document.createElement('input')
  // input.type = 'radio'
  // input.name = 'scenario'
  // input.value = scenario.name
  // input.checked = scenario.name === selectedScenario

  // const span = document.createElement('span')
  // span.style.width = '200px'
  // span.style.paddingLeft = '5px'
  // span.textContent = scenario.caption

  // input.onclick = () => selectedScenario = scenario.name
  // span.onclick = () => input.click()

  // div.appendChild(input)
  // div.appendChild(span)

  // return div
}
