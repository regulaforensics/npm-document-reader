import { RFIDDataFileType } from "../results/rfid/RFIDDataFileType";

export class RFIDNotification {
    notificationCode
    dataFileType
    progress

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new RFIDNotification()

        result.notificationCode = jsonObject["notificationCode"]
        result.dataFileType = jsonObject["dataFileType"]
        result.progress = jsonObject["progress"]

        return result
    }

    toJson() {
        return {
            "notificationCode": this.notificationCode,
            "dataFileType": this.dataFileType,
            "progress": this.progress,
        }
    }
}

export const RFIDNotificationCodes = {
    ERROR: 65536,
    DOCUMENT_READY: 65537,
    READ_PROTOCOL4: 65539,
    READ_PROTOCOL3: 65546,
    PROGRESS: 65547,
    TA_STEP: 65550,
    SM_REQUIRED: 65551,
    ISO_ERROR: 69632,
    PA_REQUEST: 77824,
    SM_ESTABLISHED: 81935,
    PCSC_READER_DISCONNECTED: 131072,
    PCSC_READER_LIST_CHANGED: 131073,
    PCSC_BYTES_RECEIVED: 131074,
    PCSC_TOTAL_READING_TIME: 131075,
    PCSC_DATA_RECEIVED: 131076,
    PCSC_BYTES_SENT: 131077,
    PCSC_TOTAL_READING_SPEED: 131078,
    PCSC_TOTAL_PROCESS_TIME: 131079,
    PCSC_READER_LIST_CHANGING: 131080,
    PCSC_EXT_LENGTH_SUPPORT: 131088,
    PA_CERTIFICATE_CHAIN: 131089,
    PA_CERTIFICATE_CHAIN_ITEM: 131090,
    SCENARIO: 131104,
    PCSC_READING_DATAGROUP: 196608,
    PCSC_FILE_NOT_FOUND: 262144,
    PCSC_END_OF_FILE: 327680,
    PCSC_FILE_ACCESS_DENIED: 393216,
    PCSC_APPLICATION_SELECTED: 458752,
    AC_PROCEDURE_START: 524288,
    AC_PROCEDURE_FINISH: 589824,
    PA_SECURITY_OBJECT_CHECK: 655360,
    PA_FILE_CHECK: 720896,
    PCSC_UPDATING_DATAGROUP: 786432,
    AUXILIARY_DATA_VALIDATION: 851968,
    RI_SECTOR_ID: 917504,
    BIOMETRICS_EMPTY_PLACEHOLDER: 983040
}
