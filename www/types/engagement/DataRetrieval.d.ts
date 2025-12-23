import { DocumentRequestMDL } from "./DocumentRequestMDL";
import { MDLIntentToRetain } from "./NameSpaceMDL";

export declare class DataRetrieval {
    constructor(deviceRetrieval: MDLDocRequestPreset);

    setDocRequestPreset(docRequestPreset: MDLDocRequestPreset, intentToRetain: MDLIntentToRetain): void
    addDocRequest(request: DocumentRequestMDL): void;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): DataRetrieval | null;
}

export declare enum MDLDocRequestPreset {
    ALL = 0,
    AGE = 1,
    STANDARD_ID = 2,
    TRAVEL = 3,
    DRIVERS_LICENSE = 4,
}

export declare enum MDLDeviceRetrieval {
    NFC = 1,
    BLE = 2,
}
