import { setupIonicReact } from '@ionic/react'
import '@ionic/react/css/core.css'
import './main.css'
import { File } from '@awesome-cordova-plugins/file'
import { DocumentReader, DocReaderException, InitConfig, DocReaderAction, Results, FieldType, GraphicFieldType, ResultType, RFIDConfig, ScannerConfig, Scenario, DocReaderScenario, RecognizeConfig } from '@regulaforensics/document-reader'
import { StatusBar, Style } from '@capacitor/status-bar'
import { setupBTDevice, useBtDevice } from './extra/bt_device'
import { advancedRfid, rfidOption, RfidOption, selfHostedUIRfid } from './extra/custom_rfid'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera'

const documentReader = DocumentReader.instance
var selectedScenario = Scenario.MRZ
var doRfid = false
var isReadingRfid = false

async function init() {
  if (!await initializeReader()) return
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
  var image = await Camera.getPicture({
    destinationType: DestinationType.DATA_URL,
    mediaType: MediaType.PICTURE,
    sourceType: PictureSourceType.PHOTOLIBRARY
  })
  clearResults()
  documentReader.recognize(
    RecognizeConfig.withScenario(selectedScenario, { image: image }),
    handleCompletion,
  )
}

export function handleCompletion(action: DocReaderAction, results?: Results, error?: DocReaderException) {
  handleException(error)
  if (DocReaderAction.stopped(action) && !shouldRfid(results)) {
    displayResults(results)
  } else if (DocReaderAction.finished(action) && shouldRfid(results)) {
    isReadingRfid = true
    readRfid()
  }
}

export async function displayResults(results?: Results) {
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

var readRfid = () => documentReader.rfid(new RFIDConfig(handleCompletion))

var shouldRfid = (results?: Results) => doRfid && !isReadingRfid && results != null && results.chipPage != 0

async function initializeReader() {
  setStatus("Initializing...")

  var license = await loadAsset("regula.license")
  var initConfig = new InitConfig(license)
  var [success, error] = await documentReader.initialize(initConfig)

  handleException(error)
  return success
}

export function handleException(error: DocReaderException) {
  if (error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
}

// --------------------------------------------------------------------------------------------------------------------

async function loadAsset(path: string): Promise<string> {
  var dir = await File.resolveDirectoryUrl(File.applicationDirectory + "public/assets")
  var fileEntry = await File.getFile(dir, path, {})
  var result = await new Promise<string>((resolve, _) => {
    fileEntry.file(file => {
      var reader = new FileReader()
      reader.onloadend = (_) => resolve(reader.result as string)
      reader.readAsDataURL(file)
    })
  })
  return result
}

var documentUIImage: HTMLImageElement
var portraitUIImage: HTMLImageElement
document.addEventListener('deviceready', () => {
  documentUIImage = document.getElementById("document-image") as HTMLImageElement
  portraitUIImage = document.getElementById("portrait-image") as HTMLImageElement
  document.getElementById("scan").onclick = () => scan()
  document.getElementById("recognize").onclick = () => recognize()

  // btDevice
  if (!useBtDevice) init()
  else setupBTDevice()

  // rfid
  if (rfidOption == RfidOption.Advanced) readRfid = () => advancedRfid()
  if (rfidOption == RfidOption.SelfHostedUI) readRfid = () => selfHostedUIRfid()
})

export var setStatus = (data: string) => { if (data != null) document.getElementById("status").innerHTML = data }
var setPortrait = (data: string) => { if (data != null) portraitUIImage.src = "data:image/png;base64," + data }
var setDocImage = (data: string) => { if (data != null) documentUIImage.src = "data:image/png;base64," + data }
var clearResults = () => {
  setStatus("Ready")
  portraitUIImage.src = "images/portrait.png"
  documentUIImage.src = "images/document.png"
}
var setScenarios = (data: DocReaderScenario[]) => {
  const scenariosContainer = document.getElementById("scenarios")
  data.forEach(scenario => scenariosContainer.appendChild(createScenarioElement(scenario)))
}
var createScenarioElement = (scenario: DocReaderScenario) => {
  const div = document.createElement('div')
  div.className = 'row radio'

  const input = document.createElement('input')
  input.type = 'radio'
  input.name = 'scenario'
  input.value = scenario.name
  input.checked = scenario.name === selectedScenario

  const span = document.createElement('span')
  span.style.width = '200px'
  span.style.paddingLeft = '5px'
  span.textContent = scenario.caption

  input.onclick = () => selectedScenario = scenario.name as Scenario
  span.onclick = () => input.click()

  div.appendChild(input)
  div.appendChild(span)

  return div
}
var setCanRfid = (data: boolean) => {
  var checkbox = document.getElementById('rfid-checkbox') as HTMLInputElement
  var checkboxDescription = document.getElementById("rfid-checkbox-description")
  if (data) {
    checkbox.disabled = false
    checkbox.onclick = () => {
      doRfid = !doRfid
      checkbox.checked = doRfid
    }
    checkboxDescription.innerHTML = "Process rfid reading"
    checkboxDescription.onclick = () => checkbox.click()
  }
}

setupIonicReact()
StatusBar.setStyle({ style: Style.Light })
