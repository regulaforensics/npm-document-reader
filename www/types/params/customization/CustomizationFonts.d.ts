import { Font } from "./Font";

export declare class CustomizationFonts {
    rfidProcessingScreenHintLabel?: Font;
    rfidProcessingScreenProgressLabel?: Font;
    rfidProcessingScreenResultLabel?: Font;
    /** Android only. */
    rfidEnableNfcTitleText?: number;
    /** Android only. */
    rfidEnableNfcDescriptionText?: number;
    /** Android only. */
    rfidEnableNfcButtonText?: number;
    mdlProcessingScreenHintLabel?: number;
    mdlProcessingScreenProgressLabel?: number;
    mdlProcessingScreenResultLabel?: number;
    /** Android only. */
    mdlEnableNfcTitleText?: number;
    /** Android only. */
    mdlEnableNfcDescriptionText?: number;
    /** Android only. */
    mdlEnableNfcButtonText?: number;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CustomizationFonts;
}
