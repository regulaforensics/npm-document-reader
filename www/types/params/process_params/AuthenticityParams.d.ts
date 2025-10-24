import { FilterObject } from "./FilterObject";
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

    setCheckFilter(checkType: AuthenticityCheckType, filter: FilterObject): void;

    removeCheckFilter(checkType: AuthenticityCheckType): void;

    clearCheckFilter(): void;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): AuthenticityParams;
}

export declare enum AuthenticityCheckType {
    USE_LIVENESS = "checkLiveness",
    UV_LUMINISCENCE = "checkUVLuminiscence",
    IR_B900 = "checkIRB900",
    IMAGE_PATTERNS = "checkImagePatterns",
    FIBERS = "checkFibers",
    EXT_MRZ = "checkExtMRZ",
    EXT_OCR = "checkExtOCR",
    AXIAL = "checkAxial",
    BARCODE_FORMAT = "checkBarcodeFormat",
    IR_VISIBILITY = "checkIRVisibility",
    IPI = "checkIPI",
    PHOTO_EMBEDDING = "checkPhotoEmbedding",
    PHOTO_COMPARISON = "checkPhotoComparison",
    LETTER_SCREEN = "checkLetterScreen",
    SECURITY_TEXT = "checkSecurityText",
}
