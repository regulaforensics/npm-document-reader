import { File } from "./File";
import { RFIDErrorCodes } from '../../rfid/RFIDErrorCodes';

export class Application {
    applicationID
    dataHashAlgorithm
    files
    status
    type
    unicodeVersion
    version

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Application();
        result.applicationID = jsonObject["applicationID"];
        result.dataHashAlgorithm = jsonObject["dataHashAlgorithm"];
        result.status = jsonObject["status"];
        result.type = jsonObject["type"];
        result.unicodeVersion = jsonObject["unicodeVersion"];
        result.version = jsonObject["version"];
        
        if (jsonObject["files"] != null) {
            result.files = [];
            for (const item of jsonObject["files"]) {
                const file = File.fromJson(item);
                if (file != null) {
                    result.files.push(file);
                }
            }
        }
        
        return result;
    }
}

export const RFIDApplicationType = {
    E_PASSPORT: 1,
    E_ID: 2,
    E_SIGN: 3,
    E_DL: 4,
    LDS2_TRAVEL_RECORDS: 5,
    LDS2_VISA_RECORDS: 6,
    LDS2_ADD_BIOMETRICS: 7,
    E_DTC_PC: 8
}
