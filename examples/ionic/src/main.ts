import { Component } from '@angular/core'
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx'
import { File } from '@awesome-cordova-plugins/file'
import { Camera } from '@awesome-cordova-plugins/camera/ngx'
import { Platform } from '@ionic/angular'
import { DocumentReader, InitConfig } from '@regulaforensics/document-reader'

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
  var config = new InitConfig(license)
  var [success, error] = await documentReader.initialize(config)
  
  if (!success && error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
  return success
}

async function loadAssetIfExists(path: string): Promise<string | null> {
  try {
    var dir = await File.resolveDirectoryUrl(File.applicationDirectory + "www/assets")
    var fileEntry = await File.getFile(dir, path, null)
    var result = await new Promise<string | null>((resolve, _) => {
      fileEntry.file(file => {
        var reader = new FileReader()
        reader.onloadend = (_) => resolve(reader.result as string)
        reader.readAsDataURL(file)
      }, _ => resolve(null))
    })
    return result
  } catch (_) {
    return null
  }
}

var documentReader = DocumentReader.instance
var setStatus = (data: string) => document.getElementById("status").innerHTML = data

@Component({
  selector: 'app-root',
  templateUrl: 'main.html',
  styleUrl: 'main.css'
})
export class Main {
  constructor(platform: Platform, dialogs: Dialogs, camera: Camera) {
    platform.ready().then(() => {
      document.getElementById("main").style.display = isReadingCustomRfid ? "none" : "flex"
      document.getElementById("custom-rfid").style.display = isReadingCustomRfid ? "flex" : "none"
      document.getElementById("bt-device").style.display = (useBtDevice && !ready) ? "flex" : "none"

      init()
    });
  }
}
