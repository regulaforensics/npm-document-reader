import { DocumentReader } from '../../index';
import { Font } from './Font';

export class CustomizationFonts {
    get rfidProcessingScreenHintLabel() { return this._rfidProcessingScreenHintLabel; }
    set rfidProcessingScreenHintLabel(val) {
        this._rfidProcessingScreenHintLabel = val;
        this._set({ "rfidProcessingScreenHintLabel": val });
    }

    get rfidProcessingScreenProgressLabel() { return this._rfidProcessingScreenProgressLabel; }
    set rfidProcessingScreenProgressLabel(val) {
        this._rfidProcessingScreenProgressLabel = val;
        this._set({ "rfidProcessingScreenProgressLabel": val });
    }

    get rfidProcessingScreenResultLabel() { return this._rfidProcessingScreenResultLabel; }
    set rfidProcessingScreenResultLabel(val) {
        this._rfidProcessingScreenResultLabel = val;
        this._set({ "rfidProcessingScreenResultLabel": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CustomizationFonts();
        result._rfidProcessingScreenHintLabel = Font.fromJson(jsonObject["rfidProcessingScreenHintLabel"]);
        result._rfidProcessingScreenProgressLabel = Font.fromJson(jsonObject["rfidProcessingScreenProgressLabel"]);
        result._rfidProcessingScreenResultLabel = Font.fromJson(jsonObject["rfidProcessingScreenResultLabel"]);
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "fonts": json };
        var parent = DocumentReader.instance.customization;
        if (this === parent.fonts) parent._set(parentJson);
    }

    toJson() {
        return {
            "rfidProcessingScreenHintLabel": this.rfidProcessingScreenHintLabel?.toJson(),
            "rfidProcessingScreenProgressLabel": this.rfidProcessingScreenProgressLabel?.toJson(),
            "rfidProcessingScreenResultLabel": this.rfidProcessingScreenResultLabel?.toJson(),
        }
    }
}
