export declare class OcclusionCheckParams {
    /** The maximum size for the occluded area of a document; only those exceeding this size will be validated. */
    readonly maxOcclusionPart?: number;

    constructor(
        options?: {
            maxOcclusionPart?: number,
        }
    );

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): OcclusionCheckParams;
}
