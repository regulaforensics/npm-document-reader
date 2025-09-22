import { FileData } from "./FileData";
import { RFIDDataFileType } from "./RFIDDataFileType";
import { RFIDErrorCodes } from "../../rfid/RFIDErrorCodes";
import { SecurityObjectCertificates } from "./SecurityObjectCertificates";

export declare class File {
    readonly fileData?: FileData;
    readonly fileID?: string;
    readonly notifications: number[];
    readonly pAStatus: RFIDErrorCodes;
    readonly readingStatus: RFIDErrorCodes;
    readonly readingTime: number;
    readonly type: RFIDDataFileType;
    readonly typeName: string;
    readonly docFieldsText: number[];
    readonly docFieldsGraphics: number[];
    readonly docFieldsOriginals: number[];
    readonly certificates?: SecurityObjectCertificates;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): File | null;
}
