import { MDLIntentToRetain } from "./NameSpaceMDL";
import { DocumentRequestMDL } from "./DocumentRequestMDL";

export class DataRetrieval {
    deviceRetrieval
    docRequestPreset
    intentToRetain = MDLIntentToRetain.FALSE
    requests = []

    constructor(deviceRetrieval) {
        this.deviceRetrieval = deviceRetrieval
    }

    setDocRequestPreset(docRequestPreset, intentToRetain) {
        this.docRequestPreset = docRequestPreset
        this.intentToRetain = intentToRetain
    }

    addDocRequest(request) {
        requests.push(request);
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DataRetrieval(jsonObject["deviceRetrieval"])

        result.docRequestPreset = jsonObject["docRequestPreset"]
        result.intentToRetain = jsonObject["intentToRetain"]
        result.requests = (jsonObject["requests"]).map(item => DocumentRequestMDL.fromJson(item));

        return result
    }

    toJson() {
        return {
            "deviceRetrieval": this.deviceRetrieval,
            "docRequestPreset": this.docRequestPreset,
            "intentToRetain": this.intentToRetain,
            "requests": this.requests.map(item => item.toJson())
        }
    }
}

export const MDLDocRequestPreset = {
    ALL: 0,
    AGE: 1,
    STANDARD_ID: 2,
    TRAVEL: 3,
    DRIVERS_LICENSE: 4,
}

export const MDLDeviceRetrieval = {
    NFC: 1,
    BLE: 2,
}
