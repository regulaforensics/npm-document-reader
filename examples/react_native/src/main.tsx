import { DocumentReader, DocReaderAction, FieldType, GraphicFieldType, InitConfig, RecognizeConfig, ResultType, RFIDConfig, ScannerConfig, Scenario, Results, DocReaderException, DocReaderScenario } from '@regulaforensics/document-reader'
import { loadAsset, pickImage } from '../index'
import { initializeWithBTDevice, setupBTDevice, useBtDevice } from './extra/bt_device'
import { useRfidSelfHostedUI, rfidSelfHostedUI } from './extra/custom_rfid'

var documentReader = DocumentReader.instance
var selectedScenario = Scenario.MRZ
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

export function handleCompletion(action: DocReaderAction, results: Results | null, error: DocReaderException | null) {
  handleException(error)
  if (DocReaderAction.stopped(action) && !shouldRfid(results)) {
    displayResults(results)
  } else if (DocReaderAction.finished(action) && shouldRfid(results)) {
    isReadingRfid = true
    readRfid()
  }
}

export async function displayResults(results: Results | null) {
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

function shouldRfid(results: Results | null) {
  return doRfid &&
    !isReadingRfid &&
    results != null && results.chipPage != 0
}

var initialize = async () => {
  setStatus("Initializing...")

  var license = await loadAsset("regula.license")
  var initConfig = new InitConfig(license)
  initConfig.delayedNNLoad = true
  var [success, error] = await documentReader.initialize(initConfig)

  handleException(error)
  return success
}

export function handleException(error: DocReaderException | null) {
  if (error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
}

// --------------------------------------------------------------------------------------------------------------------

var documentUIImage: HTMLImageElement
var portraitUIImage: HTMLImageElement
export function main() {
  documentUIImage = document.getElementById("document-image") as HTMLImageElement
  portraitUIImage = document.getElementById("portrait-image") as HTMLImageElement
  document.getElementById("scan")!.onclick = () => scan()
  document.getElementById("recognize")!.onclick = () => recognize()

  // custom rfid
  if (useRfidSelfHostedUI) readRfid = () => rfidSelfHostedUI()

  // bt device
  if (!useBtDevice) init()
  else {
    setupBTDevice()
    initialize = initializeWithBTDevice
  }
}

export function setStatus(data: string | null) {
  if (data != null)
    document.getElementById("status")!.innerHTML = data
}

function setPortrait(data: string | null) {
  if (data != null)
    portraitUIImage.src = "data:image/png;base64," + data
}

function setDocImage(data: string | null) {
  if (data != null)
    documentUIImage.src = "data:image/png;base64," + data
}

function clearResults() {
  setStatus("Ready")
  portraitUIImage.src = "images/portrait.png"
  documentUIImage.src = "images/document.png"
}

function setCanRfid(data: boolean) {
  var checkbox = document.getElementById('rfid-checkbox') as HTMLInputElement
  var checkboxDescription = document.getElementById("rfid-checkbox-description")!
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

function setScenarios(data: DocReaderScenario[]) {
  var scenariosContainer = document.getElementById("scenarios")!

  data.forEach(scenario => {
    var checked = selectedScenario == scenario.name ? "checked" : ""
    var scenarioElement = `<div class="row radio">
      <input type="radio" name="scenario" id="${scenario.name}" value="${scenario.name}" ${checked}>
      <span id="${scenario.name}-caption" style="width: 200px; padding-left: 5px;">${scenario.caption}</span>
    </div>`
    scenariosContainer.insertAdjacentHTML("beforeend", scenarioElement)
  })

  data.forEach(scenario => {
    var element = document.getElementById(scenario.name) as HTMLInputElement
    var elementCaption = document.getElementById(scenario.name + "-caption")!
    var onclick = () => {
      selectedScenario = scenario.name as Scenario
      element.checked = true
    }
    element.onclick = onclick
    elementCaption.onclick = onclick
  })
}
