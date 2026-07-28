import { DocumentReader } from '../../index';

export class AuthenticityPropertiesParams {
    get checkHoldersSignature() { return this._checkHoldersSignature; }
    set checkHoldersSignature(val) {
        this._checkHoldersSignature = val;
        this._set({ "checkHoldersSignature": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return new AuthenticityPropertiesParams();

        const result = new AuthenticityPropertiesParams();
        result._checkHoldersSignature = jsonObject["checkHoldersSignature"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "propertiesParams": json };
        var parent = DocumentReader.instance.processParams.authenticityParams;
        if (this === parent.propertiesParams) parent._set(parentJson);
    }

    toJson() {
        return {
            "checkHoldersSignature": this.checkHoldersSignature,
        }
    }
}
