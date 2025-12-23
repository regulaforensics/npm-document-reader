import { LivenessParams } from "./LivenessParams";

export declare class AuthenticityParams {
    /**
     * This parameter is used to enable document liveness check.
     */
    useLivenessCheck?: boolean;

    livenessParams: LivenessParams;
    checkUVLuminiscence?: boolean;
    checkIRB900?: boolean;
    checkImagePatterns?: boolean;
    checkFibers?: boolean;
    checkExtMRZ?: boolean;
    checkExtOCR?: boolean;
    checkAxial?: boolean;
    checkBarcodeFormat?: boolean;
    checkIRVisibility?: boolean;
    checkIPI?: boolean;
    checkPhotoEmbedding?: boolean;
    checkPhotoComparison?: boolean;
    checkLetterScreen?: boolean;
    checkSecurityText?: boolean;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): AuthenticityParams;
}
