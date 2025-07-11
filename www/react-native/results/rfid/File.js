import { FileData } from "./FileData";
import { RFIDDataFileType } from "./RFIDDataFileType";
import { RFIDErrorCodes } from "../../rfid/RFIDErrorCodes";
import { SecurityObjectCertificates } from "./SecurityObjectCertificates";

export class File {
    fileData
    fileID
    notifications
    pAStatus
    readingStatus
    readingTime
    type
    typeName
    docFieldsText
    docFieldsGraphics
    docFieldsOriginals
    certificates

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new File();
        result.readingTime = jsonObject["readingTime"];
        result.type = jsonObject["type"];
        result.typeName = jsonObject["typeName"];
        result.pAStatus = jsonObject["pAStatus"];
        result.readingStatus = jsonObject["readingStatus"];
        result.fileID = jsonObject["fileID"];
        result.fileData = FileData.fromJson(jsonObject["fileData"]);
        result.certificates = SecurityObjectCertificates.fromJson(jsonObject["certificates"]);
        result.notifications = jsonObject["notifications"];
        result.docFieldsText = jsonObject["docFieldsText"];
        result.docFieldsGraphics = jsonObject["docFieldsGraphics"];
        result.docFieldsOriginals = jsonObject["docFieldsOriginals"];
        
        return result;
    }
}
