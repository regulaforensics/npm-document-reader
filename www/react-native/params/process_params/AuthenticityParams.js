import { DocumentReader } from '../../index';
import { LivenessParams } from './LivenessParams';
import { FilterObject } from './FilterObject';

export class AuthenticityParams {
    get useLivenessCheck() { return this._useLivenessCheck; }
    set useLivenessCheck(val) {
        this._useLivenessCheck = val;
        this._set({ "useLivenessCheck": val });
    }

    get livenessParams() { return this._livenessParams; }
    set livenessParams(val) { (this._livenessParams = val)._apply(); }

    get checkUVLuminiscence() { return this._checkUVLuminiscence; }
    set checkUVLuminiscence(val) {
        this._checkUVLuminiscence = val;
        this._set({ "checkUVLuminiscence": val });
    }

    get checkIRB900() { return this._checkIRB900; }
    set checkIRB900(val) {
        this._checkIRB900 = val;
        this._set({ "checkIRB900": val });
    }

    get checkImagePatterns() { return this._checkImagePatterns; }
    set checkImagePatterns(val) {
        this._checkImagePatterns = val;
        this._set({ "checkImagePatterns": val });
    }

    get checkFibers() { return this._checkFibers; }
    set checkFibers(val) {
        this._checkFibers = val;
        this._set({ "checkFibers": val });
    }

    get checkExtMRZ() { return this._checkExtMRZ; }
    set checkExtMRZ(val) {
        this._checkExtMRZ = val;
        this._set({ "checkExtMRZ": val });
    }

    get checkExtOCR() { return this._checkExtOCR; }
    set checkExtOCR(val) {
        this._checkExtOCR = val;
        this._set({ "checkExtOCR": val });
    }

    get checkAxial() { return this._checkAxial; }
    set checkAxial(val) {
        this._checkAxial = val;
        this._set({ "checkAxial": val });
    }

    get checkBarcodeFormat() { return this._checkBarcodeFormat; }
    set checkBarcodeFormat(val) {
        this._checkBarcodeFormat = val;
        this._set({ "checkBarcodeFormat": val });
    }

    get checkIRVisibility() { return this._checkIRVisibility; }
    set checkIRVisibility(val) {
        this._checkIRVisibility = val;
        this._set({ "checkIRVisibility": val });
    }

    get checkIPI() { return this._checkIPI; }
    set checkIPI(val) {
        this._checkIPI = val;
        this._set({ "checkIPI": val });
    }

    get checkPhotoEmbedding() { return this._checkPhotoEmbedding; }
    set checkPhotoEmbedding(val) {
        this._checkPhotoEmbedding = val;
        this._set({ "checkPhotoEmbedding": val });
    }

    get checkPhotoComparison() { return this._checkPhotoComparison; }
    set checkPhotoComparison(val) {
        this._checkPhotoComparison = val;
        this._set({ "checkPhotoComparison": val });
    }

    get checkLetterScreen() { return this._checkLetterScreen; }
    set checkLetterScreen(val) {
        this._checkLetterScreen = val;
        this._set({ "checkLetterScreen": val });
    }

    get checkSecurityText() { return this._checkSecurityText; }
    set checkSecurityText(val) {
        this._checkSecurityText = val;
        this._set({ "checkSecurityText": val });
    }

    _checkFilters = {};

    setCheckFilter(checkType, filter) {
        this._checkFilters[checkType] = filter;
        this._set({
            "setCheckFilter": {
                "checkType": checkType,
                "filterObject": filter.toJson(),
            },
        });
    }

    removeCheckFilter(checkType) {
        delete this._checkFilters[checkType];
        this._set({ "removeCheckFilter": checkType });
    }

    clearCheckFilter() {
        this._checkFilters = {};
        this._set({ "clearCheckFilter": null });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return new AuthenticityParams();

        const result = new AuthenticityParams();

        result._useLivenessCheck = jsonObject["useLivenessCheck"];
        result._livenessParams = LivenessParams.fromJson(jsonObject["livenessParams"]);
        result._checkUVLuminiscence = jsonObject["checkUVLuminiscence"];
        result._checkIRB900 = jsonObject["checkIRB900"];
        result._checkImagePatterns = jsonObject["checkImagePatterns"];
        result._checkFibers = jsonObject["checkFibers"];
        result._checkExtMRZ = jsonObject["checkExtMRZ"];
        result._checkExtOCR = jsonObject["checkExtOCR"];
        result._checkAxial = jsonObject["checkAxial"];
        result._checkBarcodeFormat = jsonObject["checkBarcodeFormat"];
        result._checkIRVisibility = jsonObject["checkIRVisibility"];
        result._checkIPI = jsonObject["checkIPI"];
        result._checkPhotoEmbedding = jsonObject["checkPhotoEmbedding"];
        result._checkPhotoComparison = jsonObject["checkPhotoComparison"];
        result._checkLetterScreen = jsonObject["checkLetterScreen"];
        result._checkSecurityText = jsonObject["checkSecurityText"];
        result._checkFilters = Object.fromEntries(Object.entries(jsonObject["checkFilters"] ?? {})
            .map(([k, v]) => [k, FilterObject.fromJson(v)]));

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "authenticityParams": json };
        const parent = DocumentReader.instance.processParams;
        if (this === parent.authenticityParams) parent._set(parentJson);
    }

    toJson() {
        return {
            "useLivenessCheck": this.useLivenessCheck,
            "livenessParams": this.livenessParams?.toJson(),
            "checkUVLuminiscence": this.checkUVLuminiscence,
            "checkIRB900": this.checkIRB900,
            "checkImagePatterns": this.checkImagePatterns,
            "checkFibers": this.checkFibers,
            "checkExtMRZ": this.checkExtMRZ,
            "checkExtOCR": this.checkExtOCR,
            "checkAxial": this.checkAxial,
            "checkBarcodeFormat": this.checkBarcodeFormat,
            "checkIRVisibility": this.checkIRVisibility,
            "checkIPI": this.checkIPI,
            "checkPhotoEmbedding": this.checkPhotoEmbedding,
            "checkPhotoComparison": this.checkPhotoComparison,
            "checkLetterScreen": this.checkLetterScreen,
            "checkSecurityText": this.checkSecurityText,
            "checkFilters": Object.fromEntries(Object.entries(this._checkFilters).map(([k, v]) => [k, v.toJson()])),
        }
    }
}

export const AuthenticityCheckType = {
    USE_LIVENESS: "checkLiveness",
    UV_LUMINISCENCE: "checkUVLuminiscence",
    IR_B900: "checkIRB900",
    IMAGE_PATTERNS: "checkImagePatterns",
    FIBERS: "checkFibers",
    EXT_MRZ: "checkExtMRZ",
    EXT_OCR: "checkExtOCR",
    AXIAL: "checkAxial",
    BARCODE_FORMAT: "checkBarcodeFormat",
    IR_VISIBILITY: "checkIRVisibility",
    IPI: "checkIPI",
    PHOTO_EMBEDDING: "checkPhotoEmbedding",
    PHOTO_COMPARISON: "checkPhotoComparison",
    LETTER_SCREEN: "checkLetterScreen",
    SECURITY_TEXT: "checkSecurityText",
};
