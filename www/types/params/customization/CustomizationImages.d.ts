export declare class CustomizationImages {
    helpAnimation?: string;
    livenessAnimation?: string;
    borderBackground?: string;
    torchButtonOn?: string;
    torchButtonOff?: string;
    captureButton?: string;
    switchButton?: string;
    closeButton?: string;
    /** Base64 string. */
    rfidProcessingScreenFailureImage?: string;
    /** Android only. */
    rfidEnableNfcImage?: string;
    /** Android only. */
    rfidDisableNfcImage?: string;
    mdlProcessingScreenFailureImage?: string;
    /** Android only. */
    mdlEnableNfcImage?: string;
    /** Android only. */
    mdlDisableNfcImage?: string;
    nextPageIdCardFront?: string;
    nextPageIdCardBack?: string;
    nextPagePassportShift?: string;
    nextPagePassportFlipStart?: string;
    nextPagePassportFlipClean?: string;
    nextPagePassportFlipTop?: string;
    nextPagePassportFlipBottom?: string;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CustomizationImages;
}
