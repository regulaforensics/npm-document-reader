export declare class LivenessParams {
    checkOVI?: boolean;
    checkMLI?: boolean;
    checkHolo?: boolean;
    checkED?: boolean;
    checkBlackAndWhiteCopy?: boolean;

    /**
     * This parameter is used to enable Dynaprint detection.
     */
    checkDynaprint?: boolean;

    checkGeometry?: boolean;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): LivenessParams;
}
