import { LivenessParams } from "./LivenessParams";
import { AuthenticityPropertiesParams } from "./AuthenticityPropertiesParams";

export declare class AuthenticityParams {
    /** This parameter is used to enable document liveness check. */
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
    /** Set to true to enable detection of the document properties, such as holder's signature and other attributes. */
    checkProperties?: boolean;
    propertiesParams: AuthenticityPropertiesParams;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): AuthenticityParams;
}
