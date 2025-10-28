import { DocumentReader } from '../../index';

export class CustomizationColors {
    get rfidProcessingScreenBackground() { return this._rfidProcessingScreenBackground; }
    set rfidProcessingScreenBackground(val) {
        this._rfidProcessingScreenBackground = val;
        this._set({ "rfidProcessingScreenBackground": val });
    }

    get rfidProcessingScreenHintLabelText() { return this._rfidProcessingScreenHintLabelText; }
    set rfidProcessingScreenHintLabelText(val) {
        this._rfidProcessingScreenHintLabelText = val;
        this._set({ "rfidProcessingScreenHintLabelText": val });
    }

    get rfidProcessingScreenHintLabelBackground() { return this._rfidProcessingScreenHintLabelBackground; }
    set rfidProcessingScreenHintLabelBackground(val) {
        this._rfidProcessingScreenHintLabelBackground = val;
        this._set({ "rfidProcessingScreenHintLabelBackground": val });
    }

    get rfidProcessingScreenProgressLabelText() { return this._rfidProcessingScreenProgressLabelText; }
    set rfidProcessingScreenProgressLabelText(val) {
        this._rfidProcessingScreenProgressLabelText = val;
        this._set({ "rfidProcessingScreenProgressLabelText": val });
    }

    get rfidProcessingScreenProgressBar() { return this._rfidProcessingScreenProgressBar; }
    set rfidProcessingScreenProgressBar(val) {
        this._rfidProcessingScreenProgressBar = val;
        this._set({ "rfidProcessingScreenProgressBar": val });
    }

    get rfidProcessingScreenProgressBarBackground() { return this._rfidProcessingScreenProgressBarBackground; }
    set rfidProcessingScreenProgressBarBackground(val) {
        this._rfidProcessingScreenProgressBarBackground = val;
        this._set({ "rfidProcessingScreenProgressBarBackground": val });
    }

    get rfidProcessingScreenResultLabelText() { return this._rfidProcessingScreenResultLabelText; }
    set rfidProcessingScreenResultLabelText(val) {
        this._rfidProcessingScreenResultLabelText = val;
        this._set({ "rfidProcessingScreenResultLabelText": val });
    }

    get rfidProcessingScreenLoadingBar() { return this._rfidProcessingScreenLoadingBar; }
    set rfidProcessingScreenLoadingBar(val) {
        this._rfidProcessingScreenLoadingBar = val;
        this._set({ "rfidProcessingScreenLoadingBar": val });
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

    get rfidEnableNfcButtonBackground() { return this._rfidEnableNfcButtonBackground; }
    set rfidEnableNfcButtonBackground(val) {
        this._rfidEnableNfcButtonBackground = val;
        this._set({ "rfidEnableNfcButtonBackground": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new CustomizationColors();
        result._rfidProcessingScreenBackground = jsonObject["rfidProcessingScreenBackground"];
        result._rfidProcessingScreenHintLabelText = jsonObject["rfidProcessingScreenHintLabelText"];
        result._rfidProcessingScreenHintLabelBackground = jsonObject["rfidProcessingScreenHintLabelBackground"];
        result._rfidProcessingScreenProgressLabelText = jsonObject["rfidProcessingScreenProgressLabelText"];
        result._rfidProcessingScreenProgressBar = jsonObject["rfidProcessingScreenProgressBar"];
        result._rfidProcessingScreenProgressBarBackground = jsonObject["rfidProcessingScreenProgressBarBackground"];
        result._rfidProcessingScreenResultLabelText = jsonObject["rfidProcessingScreenResultLabelText"];
        result._rfidProcessingScreenLoadingBar = jsonObject["rfidProcessingScreenLoadingBar"];
        result._rfidEnableNfcTitleText = jsonObject["rfidEnableNfcTitleText"];
        result._rfidEnableNfcDescriptionText = jsonObject["rfidEnableNfcDescriptionText"];
        result._rfidEnableNfcButtonText = jsonObject["rfidEnableNfcButtonText"];
        result._rfidEnableNfcButtonBackground = jsonObject["rfidEnableNfcButtonBackground"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "colors": json };
        var parent = DocumentReader.instance.customization;
        if (this === parent.colors) parent._set(parentJson);
    }

    toJson() {
        return {
            "rfidProcessingScreenBackground": this.rfidProcessingScreenBackground,
            "rfidProcessingScreenHintLabelText": this.rfidProcessingScreenHintLabelText,
            "rfidProcessingScreenHintLabelBackground": this.rfidProcessingScreenHintLabelBackground,
            "rfidProcessingScreenProgressLabelText": this.rfidProcessingScreenProgressLabelText,
            "rfidProcessingScreenProgressBar": this.rfidProcessingScreenProgressBar,
            "rfidProcessingScreenProgressBarBackground": this.rfidProcessingScreenProgressBarBackground,
            "rfidProcessingScreenResultLabelText": this.rfidProcessingScreenResultLabelText,
            "rfidProcessingScreenLoadingBar": this.rfidProcessingScreenLoadingBar,
            "rfidEnableNfcTitleText": this.rfidEnableNfcTitleText,
            "rfidEnableNfcDescriptionText": this.rfidEnableNfcDescriptionText,
            "rfidEnableNfcButtonText": this.rfidEnableNfcButtonText,
            "rfidEnableNfcButtonBackground": this.rfidEnableNfcButtonBackground,
        }
    }
}
