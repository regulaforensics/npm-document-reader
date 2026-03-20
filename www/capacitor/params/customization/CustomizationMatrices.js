import { DocumentReader } from '../../index';

export class CustomizationMatrices {
    get nextPageIdCardFront() { return this._nextPageIdCardFront; }
    set nextPageIdCardFront(val) {
        this._nextPageIdCardFront = val;
        this._set({ "nextPageIdCardFront": val });
    }

    get nextPageIdCardBack() { return this._nextPageIdCardBack; }
    set nextPageIdCardBack(val) {
        this._nextPageIdCardBack = val;
        this._set({ "nextPageIdCardBack": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new CustomizationMatrices();

        result._nextPageIdCardFront = jsonObject["nextPageIdCardFront"];
        result._nextPageIdCardBack = jsonObject["nextPageIdCardBack"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "matrices": json };
        var parent = DocumentReader.instance.customization;
        if (this === parent.matrices) parent._set(parentJson);
    }

    toJson() {
        return {
            "nextPageIdCardFront": this.nextPageIdCardFront,
            "nextPageIdCardBack": this.nextPageIdCardBack,
        }
    }
}
