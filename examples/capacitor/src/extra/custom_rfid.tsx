import { DocReaderAction, DocumentReader, Results, RFIDConfig, RFIDDataFileType, RFIDErrorCodes, RFIDNotificationCodes } from "@regulaforensics/document-reader"
import { displayResults, handleCompletion, setStatus } from "../main"

export enum RfidOption {
    Basic,
    Advanced,
    SelfHostedUI
}

export const rfidOption: RfidOption = RfidOption.Basic

export function advancedRfid() {
    var config = new RFIDConfig(handleCompletion)

    config.onChipDetected = () => console.log("Chip detected, reading rfid.")
    config.onRetryReadChip = async (error) => console.log(await RFIDErrorCodes.getTranslation(error.code) + ". Retrying...")

    DocumentReader.instance.rfid(config)
}

export function selfHostedUIRfid() {
    var config = RFIDConfig.withoutUI((action, results, error) => {
        if (DocReaderAction.stopped(action)) finish(results)
        if (error != null) {
            setStatus("Try again")
            setDescription("Error" + error.message)
            console.log(error.code + ": " + error.message)
        }
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

function finish(results: Results) {
    DocumentReader.instance.stopRFIDReader()
    setShowing(false)
    displayResults(results)
}

function setup() {
    document.getElementById("cancel-rfid").onclick = () => finish(null)

    setStatus("Reading RFID")
    setDescription("Place your phone on top of the NFC tag")
    setProgress(0)
    setShowing(true)
}

var setDescription = (data: string) => document.getElementById("rfid-description").innerHTML = data
var setProgress = (next: number) => {
    var progress = document.getElementById("progress")
    var previous = parseInt(progress.style.width.substring(0, progress.style.width.length - 1))
    // make progress bar look better
    if (next <= 0) return // ignore idle 0s, leave progress at 100 while its not moving
    if (next < previous) next = 0 // move to 0 if progress finaly started moving
    if (next >= 95) next = 100 // rfid never returns 100 and it looks ugly, fix it
    if (next < previous) progress.style.transition = 'none' // instantly reset progress
    else progress.style.transition = 'width 0.5s' // smoothly increase progress

    progress.style.width = next + "%"
}
var setShowing = (data: boolean) => {
    document.getElementById("main").style.display = data ? "none" : "flex"
    document.getElementById("custom-rfid").style.display = data ? "flex" : "none"
}
