export declare class FaceApiSearchParams {
    /**
     * The number of returned Persons limit.
     * @default 100
     */
    readonly limit: number;

    /**
     * The similarity distance threshold, should be between 0.0 and 2.0,
     * where 0.0 is for returning results for only the most similar persons
     * and 2.0 is for all the persons, even the dissimilar ones.
     * If not set, the default 1.0 value is used.
     * @default 1
     */
    readonly threshold: number;

    /**
     * The IDs of the groups in which the search is performed.
     */
    readonly groupIds?: string[];

    constructor(
        options?: {
            limit?: number,
            threshold?: number,
            groupIds?: string[],
        }
    );

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): FaceApiSearchParams;
}
