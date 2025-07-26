import { DocumentReader, DocReaderAction, FieldType, GraphicFieldType, InitConfig, RecognizeConfig, ResultType, RFIDConfig, ScannerConfig, Scenario } from '@regulaforensics/document-reader'
import { loadAsset, pickImage } from '../index'
import { initializeWithBTDevice, setupBTDevice, useBtDevice } from './extra/bt_device'
import { useRfidSelfHostedUI, rfidSelfHostedUI } from './extra/custom_rfid'

var documentReader = DocumentReader.instance
var selectedScenario
var doRfid = false
var isReadingRfid = false

export async function init() {
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

var initialize = async () => {
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

// --------------------------------------------------------------------------------------------------------------------

var documentUIImage
var portraitUIImage
export function main() {
  documentUIImage = document.getElementById("document-image")
  portraitUIImage = document.getElementById("portrait-image")
  document.getElementById("scan").onclick = () => scan()
  document.getElementById("recognize").onclick = () => recognize()

  // custom rfid
  if (useRfidSelfHostedUI) readRfid = () => rfidSelfHostedUI()

  // bt device
  if (!useBtDevice) init()
  else {
    setupBTDevice()
    initialize = initializeWithBTDevice
  }
}

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
    var onclick = () => {
      doRfid = !doRfid
      checkbox.checked = doRfid
    }
    checkbox.onclick = onclick
    checkboxDescription.onclick = onclick
  }
}

function setScenarios(data) {
  selectedScenario = Scenario.MRZ
  var scenariosContainer = document.getElementById("scenarios")

  data.forEach(scenario => {
    var checked = selectedScenario == scenario.name ? "checked" : ""
    var scenarioElement = `<div class="row radio">
      <input type="radio" name="scenario" id="${scenario.name}" value="${scenario.name}" ${checked}>
      <span id="${scenario.name}-caption" style="width: 200px; padding-left: 5px;">${scenario.caption}</span>
    </div>`
    scenariosContainer.insertAdjacentHTML("beforeend", scenarioElement)
  })

  data.forEach(scenario => {
    var element
    element = document.getElementById(scenario.name)
    var elementCaption = document.getElementById(scenario.name + "-caption")
    var onclick = () => {
      selectedScenario = scenario.name
      element.checked = true
    }
    element.onclick = onclick
    elementCaption.onclick = onclick
  })
}
