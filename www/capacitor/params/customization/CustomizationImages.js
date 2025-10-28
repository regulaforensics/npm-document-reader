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

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CustomizationImages();
        result._rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"];
        result._rfidEnableNfcImage = jsonObject["rfidEnableNfcImage"];
        
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
        }
    }
}
