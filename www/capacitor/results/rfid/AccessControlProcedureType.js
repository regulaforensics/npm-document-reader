import { RFIDErrorCodes } from "../../rfid/RFIDErrorCodes";
import { RFIDAccessControlProcedureType } from "./RFIDAccessControlProcedureType";

export class AccessControlProcedureType {
    activeOptionIdx
    notifications
    status
    type

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new AccessControlProcedureType();
        result.activeOptionIdx = jsonObject["activeOptionIdx"];
        result.status = jsonObject["status"];
        result.type = jsonObject["type"];
        result.notifications = jsonObject["notifications"];
        
        return result;
    }
}
