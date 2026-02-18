import { DocumentReader } from '../../index';

export class CustomizationImages {
    get rfidProcessingScreenFailureImage() { return this._rfidProcessingScreenFailureImage; }
    set rfidProcessingScreenFailureImage(val) {
        this._rfidProcessingScreenFailureImage = val;
        this._set({ "rfidProcessingScreenFailureImage": val });
    }

    get rfidEnableNfcImage() { return this._rfidEnableNfcImage; }
    set rfidEnableNfcImage(val) {
        this._rfidEnableNfcImage = val;
        this._set({ "rfidEnableNfcImage": val });
    }

    get mdlProcessingScreenFailureImage() { return this._mdlProcessingScreenFailureImage; }
    set mdlProcessingScreenFailureImage(val) {
        this._mdlProcessingScreenFailureImage = val;
        this._set({ "mdlProcessingScreenFailureImage": val });
    }

    get mdlEnableNfcImage() { return this._mdlEnableNfcImage; }
    set mdlEnableNfcImage(val) {
        this._mdlEnableNfcImage = val;
        this._set({ "mdlEnableNfcImage": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new CustomizationImages();
        result._rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"];
        result._rfidEnableNfcImage = jsonObject["rfidEnableNfcImage"];
        result._mdlProcessingScreenFailureImage = jsonObject["mdlProcessingScreenFailureImage"];
        result._mdlEnableNfcImage = jsonObject["mdlEnableNfcImage"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "images": json };
        var parent = DocumentReader.instance.customization;
        if (this === parent.images) parent._set(parentJson);
    }

    toJson() {
        return {
            "rfidProcessingScreenFailureImage": this.rfidProcessingScreenFailureImage,
            "rfidEnableNfcImage": this.rfidEnableNfcImage,
            "mdlProcessingScreenFailureImage": this.mdlProcessingScreenFailureImage,
            "mdlEnableNfcImage": this.mdlEnableNfcImage,
        }
    }
}
