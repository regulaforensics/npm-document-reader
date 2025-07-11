import { RFIDErrorCodes } from "../rfid/RFIDErrorCodes";

export class RFIDException {
    code
    message

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new RFIDException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}
