export declare class AuthenticityPropertiesParams {
    /** Set to true to enable detection of the document holder’s signature. */
    checkHoldersSignature?: boolean;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): AuthenticityPropertiesParams;
}
