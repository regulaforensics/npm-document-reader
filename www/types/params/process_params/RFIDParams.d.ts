export declare class RFIDParams {
    /**
     * A list of notification codes that should be ignored during
     * passive authentication (PA).
     */
    readonly paIgnoreNotificationCodes?: number[];

    constructor(
        options?: {
            paIgnoreNotificationCodes?: number[],
        }
    );

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): RFIDParams;
}
