export declare class CustomizationImages {
    helpAnimation?: string | null;
    livenessAnimation?: string | null;
    borderBackground?: string | null;
    torchButtonOn?: string | null;
    torchButtonOff?: string | null;
    captureButton?: string | null;
    switchButton?: string | null;
    closeButton?: string | null;
    multipageButton?: string | null;
    /** Base64 string. */
    rfidProcessingScreenFailureImage?: string | null;
    /** Android only. */
    rfidEnableNfcImage?: string | null;
    /** Android only. */
    rfidDisableNfcImage?: string | null;
    mdlProcessingScreenFailureImage?: string | null;
    /** Android only. */
    mdlEnableNfcImage?: string | null;
    /** Android only. */
    mdlDisableNfcImage?: string | null;
    nextPageIdCardFront?: string | null;
    nextPageIdCardBack?: string | null;
    nextPagePassportShift?: string | null;
    nextPagePassportFlipStart?: string | null;
    nextPagePassportFlipClean?: string | null;
    nextPagePassportFlipTop?: string | null;
    nextPagePassportFlipBottom?: string | null;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CustomizationImages;
}
