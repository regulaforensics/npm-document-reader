import { Font } from "./Font";

export declare class CustomizationFonts {
    rfidProcessingScreenHintLabel?: Font;
    rfidProcessingScreenProgressLabel?: Font;
    rfidProcessingScreenResultLabel?: Font;
    /** Android only. */
    rfidEnableNfcTitleText?: Font;
    /** Android only. */
    rfidEnableNfcDescriptionText?: Font;
    /** Android only. */
    rfidEnableNfcButtonText?: Font;
    mdlProcessingScreenHintLabel?: Font;
    mdlProcessingScreenProgressLabel?: Font;
    mdlProcessingScreenResultLabel?: Font;
    /** Android only. */
    mdlEnableNfcTitleText?: Font;
    /** Android only. */
    mdlEnableNfcDescriptionText?: Font;
    /** Android only. */
    mdlEnableNfcButtonText?: Font;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CustomizationFonts;
}
