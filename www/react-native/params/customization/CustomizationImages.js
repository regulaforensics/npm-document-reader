import { DocumentReader } from '../../index';

export class CustomizationImages {
    get rfidProcessingScreenFailureImage() { return this._rfidProcessingScreenFailureImage; }
    set rfidProcessingScreenFailureImage(val) {
        this._rfidProcessingScreenFailureImage = val;
        this._set({ "rfidProcessingScreenFailureImage": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CustomizationImages();
        result._rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "images": json };
        var parent = DocumentReader.instance.customization;
        if (this === parent.images) parent._set(parentJson);
    }
}
