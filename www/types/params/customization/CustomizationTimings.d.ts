export declare class CustomizationTimings {
    nextPageIdCardStartDelay?: number;
    nextPageIdCardEndDelay?: number;
    nextPagePassportShiftStartDelay?: number;
    nextPagePassportShiftEndDelay?: number;
    nextPagePassportFlipStartDelay?: number;
    nextPagePassportFlipEndDelay?: number;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CustomizationTimings;
}
