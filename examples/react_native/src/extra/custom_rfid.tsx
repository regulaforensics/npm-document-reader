import { document } from '../../index'
import { DocReaderAction, DocumentReader, RFIDConfig, RFIDDataFileType, RFIDNotificationCodes } from "@regulaforensics/document-reader"
import { displayResults, setStatus } from "../main"

export const useRfidSelfHostedUI = false

export function rfidSelfHostedUI() {
    var config = RFIDConfig.withoutUI((action, results, _) => {
        if (DocReaderAction.stopped(action)) stop()
        if (DocReaderAction.finished(action)) displayResults(results)
        if (DocReaderAction.interrupted(action)) setStatus("Error reading RFID")
    })

    config.onProgress = async (notification) => {
        if (notification.progress == 1) return
        if (notification.notificationCode == RFIDNotificationCodes.PCSC_READING_DATAGROUP)
            setDescription(await RFIDDataFileType.getTranslation(notification.dataFileType))
        setStatus("Reading RFID")
        setProgress(notification.progress)
    }

    setup()
    DocumentReader.instance.rfid(config)
}

function setup() {
    setStatus("Reading RFID")
    setDescription("Place your phone on top of the NFC tag")
    setProgress(-1)
    currentProgress = -1
    setShowing(true)
    document.getElementById("cancel-rfid").onclick = () => stop()
}

function stop() {
    DocumentReader.instance.stopRFIDReader()
    displayResults(null)
    setShowing(false)
}

function setDescription(data) {
    document.getElementById("rfid-description").innerHTML = data
}

var currentProgress = -1
function setProgress(next) {
    var progress = document.getElementById("progress")
    // make progress bar look better
    if (next == 0) return // ignore idle 0s, leave progress at 100 while its not moving
    if (next < currentProgress) next = 0 // move to 0 if progress finaly started moving
    if (next >= 95) next = 100 // rfid never returns 100 and it looks ugly, fix it
    if (next < currentProgress) progress.style.transition = 'none' // instantly reset progress
    else progress.style.transition = 'width 0.5s' // smoothly increase progress

    progress.style.width = next + "%"
    currentProgress = next
}

function setShowing(data) {
    document.getElementById("main").style.display = data ? "none" : "flex"
    document.getElementById("custom-rfid").style.display = data ? "flex" : "none"
}
