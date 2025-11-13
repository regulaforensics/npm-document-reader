import { NativeModules, NativeEventEmitter } from 'react-native'

import { Results } from '../results/Results'
import { DocReaderException } from '../info/DocReaderException'
import { RFIDException } from '../info/RFIDException'
import { PrepareProgress } from '../info/PrepareProgress'
import { RFIDNotification } from '../rfid/RFIDNotification'
import { PAResourcesIssuer } from '../rfid/PAResourcesIssuer'
import { TAChallenge } from '../rfid/TAChallenge'

const { RNDocumentReader } = NativeModules
var eventManager = new NativeEventEmitter(RNDocumentReader)

export async function exec(name, params) {
    return RNDocumentReader.exec(name, params)
}

function _setEvent(id, completion, fromJson) {
    eventManager.removeAllListeners(id)
    if (completion == null) return
    if (fromJson == null) eventManager.addListener(id, completion)
    else eventManager.addListener(id, data => {
        data = fromJson(data)
        if (data !== null && typeof data[Symbol.iterator] === 'function') completion(...data)
        else completion(data)
    })
}

export function _setDocumentReaderCompletion(completion) {
    _setEvent("completion", completion, json => {
        var jsonObject = JSON.parse(json)
        var action = jsonObject["action"];
        var results = Results.fromJson(jsonObject["results"]);
        var error = DocReaderException.fromJson(jsonObject["error"]);
        return [action, results, error]
    })
}

export function _setRFIDCompletion(completion) {
    _setEvent("completion", completion, json => {
        var jsonObject = JSON.parse(json)
        var action = jsonObject["action"];
        var results = Results.fromJson(jsonObject["results"]);
        var error = RFIDException.fromJson(jsonObject["error"]);
        return [action, results, error]
    })
}

export function _setDocumentReaderPrepareCompletion(completion) {
    _setEvent("database_progress", completion, json => PrepareProgress.fromJson(JSON.parse(json)))
}

export function _setCustomButtonTappedCompletion(completion) {
    _setEvent("onCustomButtonTappedEvent", completion)
}

export function _setVideoEncoderCompletion(completion) {
    _setEvent("video_encoder_completion", completion)
}

export function _setRFIDProgressCompletion(completion) {
    _setEvent("rfidOnProgressCompletion", completion, json => RFIDNotification.fromJson(JSON.parse(json)))
}

export function _setChipDetectedCompletion(completion) {
    _setEvent("rfidOnChipDetectedEvent", completion)
}

export function _setRetryReadChipCompletion(completion) {
    _setEvent("rfidOnRetryReadChipEvent", completion, json => RFIDException.fromJson(JSON.parse(json)))
}

export function _setPaCertificateCompletion(completion) {
    _setEvent("pa_certificate_completion", completion, json => {
        var jsonObject = JSON.parse(json)
        var serialNumber = jsonObject["serialNumber"]
        var issuer = PAResourcesIssuer.fromJson(jsonObject["issuer"])
        return [serialNumber, issuer, async certificates => {
            await exec("providePACertificates", [certificates])
        }]
    })
}

export function _setTaCertificateCompletion(completion) {
    _setEvent("ta_certificate_completion", completion, data => {
        return [data, async certificates => {
            await exec("provideTACertificates", [certificates])
        }]
    })
}

export function _setTaSignatureCompletion(completion) {
    _setEvent("ta_signature_completion", completion, json => {
        return [TAChallenge.fromJson(json.decode(msg)), async signature => {
            await exec("provideTASignature", [signature])
        }]
    })
}
