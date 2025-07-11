export declare class GlaresCheckParams {
    /**
     * Part of margin from the edges of the image that is ignored by glares check.
     * Example: value 0.07 is 7% of image area is ignored.
     */
    readonly imgMarginPart?: number;

    /**
     * The maximum allowable part of glared area.
     * Example: value 0.1 is 10% allowed.
     */
    readonly maxGlaringPart?: number;

    constructor(
        options?: {
            imgMarginPart?: number,
            maxGlaringPart?: number,
        }
    );

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): GlaresCheckParams;
}
