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

    get rfidEnableNfcTitleText() { return this._rfidEnableNfcTitleText; }
    set rfidEnableNfcTitleText(val) {
        this._rfidEnableNfcTitleText = val;
        this._set({ "rfidEnableNfcTitleText": val });
    }

    get rfidEnableNfcDescriptionText() { return this._rfidEnableNfcDescriptionText; }
    set rfidEnableNfcDescriptionText(val) {
        this._rfidEnableNfcDescriptionText = val;
        this._set({ "rfidEnableNfcDescriptionText": val });
    }

    get rfidEnableNfcButtonText() { return this._rfidEnableNfcButtonText; }
    set rfidEnableNfcButtonText(val) {
        this._rfidEnableNfcButtonText = val;
        this._set({ "rfidEnableNfcButtonText": val });
    }

    get mdlProcessingScreenHintLabel() { return this._mdlProcessingScreenHintLabel; }
    set mdlProcessingScreenHintLabel(val) {
        this._mdlProcessingScreenHintLabel = val;
        this._set({ "mdlProcessingScreenHintLabel": val });
    }

    get mdlProcessingScreenProgressLabel() { return this._mdlProcessingScreenProgressLabel; }
    set mdlProcessingScreenProgressLabel(val) {
        this._mdlProcessingScreenProgressLabel = val;
        this._set({ "mdlProcessingScreenProgressLabel": val });
    }

    get mdlProcessingScreenResultLabel() { return this._mdlProcessingScreenResultLabel; }
    set mdlProcessingScreenResultLabel(val) {
        this._mdlProcessingScreenResultLabel = val;
        this._set({ "mdlProcessingScreenResultLabel": val });
    }

    get mdlEnableNfcTitleText() { return this._mdlEnableNfcTitleText; }
    set mdlEnableNfcTitleText(val) {
        this._mdlEnableNfcTitleText = val;
        this._set({ "mdlEnableNfcTitleText": val });
    }

    get mdlEnableNfcDescriptionText() { return this._mdlEnableNfcDescriptionText; }
    set mdlEnableNfcDescriptionText(val) {
        this._mdlEnableNfcDescriptionText = val;
        this._set({ "mdlEnableNfcDescriptionText": val });
    }

    get mdlEnableNfcButtonText() { return this._mdlEnableNfcButtonText; }
    set mdlEnableNfcButtonText(val) {
        this._mdlEnableNfcButtonText = val;
        this._set({ "mdlEnableNfcButtonText": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new CustomizationFonts();
        result._rfidProcessingScreenHintLabel = Font.fromJson(jsonObject["rfidProcessingScreenHintLabel"]);
        result._rfidProcessingScreenProgressLabel = Font.fromJson(jsonObject["rfidProcessingScreenProgressLabel"]);
        result._rfidProcessingScreenResultLabel = Font.fromJson(jsonObject["rfidProcessingScreenResultLabel"]);
        result._rfidEnableNfcTitleText = Font.fromJson(jsonObject["rfidEnableNfcTitleText"]);
        result._rfidEnableNfcDescriptionText = Font.fromJson(jsonObject["rfidEnableNfcDescriptionText"]);
        result._rfidEnableNfcButtonText = Font.fromJson(jsonObject["rfidEnableNfcButtonText"]);
        result._mdlProcessingScreenHintLabel = Font.fromJson(jsonObject["mdlProcessingScreenHintLabel"]);
        result._mdlProcessingScreenProgressLabel = Font.fromJson(jsonObject["mdlProcessingScreenProgressLabel"]);
        result._mdlProcessingScreenResultLabel = Font.fromJson(jsonObject["mdlProcessingScreenResultLabel"]);
        result._mdlEnableNfcTitleText = Font.fromJson(jsonObject["mdlEnableNfcTitleText"]);
        result._mdlEnableNfcDescriptionText = Font.fromJson(jsonObject["mdlEnableNfcDescriptionText"]);
        result._mdlEnableNfcButtonText = Font.fromJson(jsonObject["mdlEnableNfcButtonText"]);

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
            "rfidEnableNfcTitleText": this.rfidEnableNfcTitleText?.toJson(),
            "rfidEnableNfcDescriptionText": this.rfidEnableNfcDescriptionText?.toJson(),
            "rfidEnableNfcButtonText": this.rfidEnableNfcButtonText?.toJson(),
            "mdlProcessingScreenHintLabel": this.mdlProcessingScreenHintLabel?.toJson(),
            "mdlProcessingScreenProgressLabel": this.mdlProcessingScreenProgressLabel?.toJson(),
            "mdlProcessingScreenResultLabel": this.mdlProcessingScreenResultLabel?.toJson(),
            "mdlEnableNfcTitleText": this.mdlEnableNfcTitleText?.toJson(),
            "mdlEnableNfcDescriptionText": this.mdlEnableNfcDescriptionText?.toJson(),
            "mdlEnableNfcButtonText": this.mdlEnableNfcButtonText?.toJson(),
        }
    }
}
