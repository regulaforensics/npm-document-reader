import { Font } from "./Font";

export declare class CustomizationFonts {
    rfidProcessingScreenHintLabel?: Font;
    rfidProcessingScreenProgressLabel?: Font;
    rfidProcessingScreenResultLabel?: Font;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CustomizationFonts;
}
