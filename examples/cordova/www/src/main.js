document.addEventListener('ready', onDeviceReady)
async function onDeviceReady() {
  DocumentReader = DocumentReaderPlugin.DocumentReader
  InitConfig = DocumentReaderPlugin.InitConfig

  setStatus = (data) => document.getElementById("status").innerHTML = data

  documentReader = DocumentReader.instance
  useBtDevice = false
  ready = false
  isReadingCustomRfid = false

  document.getElementById("main").style.display = isReadingCustomRfid ? "none" : "flex"
  document.getElementById("custom-rfid").style.display = isReadingCustomRfid ? "flex" : "none"
  document.getElementById("bt-device").style.display = (useBtDevice && !ready) ? "flex" : "none"

  init()
}

async function init() {
  if (!await initialize()) return
  setStatus("Ready")
}

async function initialize() {
  setStatus("Initializing...")

  var license = await loadAssetIfExists("regula.license")
  var initConfig = new InitConfig(license)
  var [success, error] = await documentReader.initialize(initConfig)
  
  if (!success && error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
  return success
}

async function loadAssetIfExists(path) {
  path = cordova.file.applicationDirectory + "www/" + path
  return new Promise((resolve, _) => {
    window.resolveLocalFileSystemURL(path, (fileEntry) => {
      fileEntry.file((file) => {
        var reader = new FileReader()
        reader.onloadend = function (_) { resolve(this.result) }
        reader.readAsDataURL(file)
      })
    }, (_) => resolve(null))
  })
}
