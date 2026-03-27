import { DocumentReader } from '../../index';

export class CustomizationImages {
    get helpAnimation() { return this._helpAnimation; }
    set helpAnimation(val) {
        this._helpAnimation = val;
        this._set({ "helpAnimation": val });
    }
    
    get livenessAnimation() { return this._livenessAnimation; }
    set livenessAnimation(val) {
        this._livenessAnimation = val;
        this._set({ "livenessAnimation": val });
    }
    
    get borderBackground() { return this._borderBackground; }
    set borderBackground(val) {
        this._borderBackground = val;
        this._set({ "borderBackground": val });
    }
    
    get torchButtonOn() { return this._torchButtonOn; }
    set torchButtonOn(val) {
        this._torchButtonOn = val;
        this._set({ "torchButtonOn": val });
    }
    
    get torchButtonOff() { return this._torchButtonOff; }
    set torchButtonOff(val) {
        this._torchButtonOff = val;
        this._set({ "torchButtonOff": val });
    }
    
    get captureButton() { return this._captureButton; }
    set captureButton(val) {
        this._captureButton = val;
        this._set({ "captureButton": val });
    }
    
    get switchButton() { return this._switchButton; }
    set switchButton(val) {
        this._switchButton = val;
        this._set({ "switchButton": val });
    }
    
    get closeButton() { return this._closeButton; }
    set closeButton(val) {
        this._closeButton = val;
        this._set({ "closeButton": val });
    }
    
    get multipageButton() { return this._multipageButton; }
    set multipageButton(val) {
        this._multipageButton = val;
        this._set({ "multipageButton": val });
    }
    
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

    get rfidDisableNfcImage() { return this._rfidDisableNfcImage; }
    set rfidDisableNfcImage(val) {
        this._rfidDisableNfcImage = val;
        this._set({ "rfidDisableNfcImage": val });
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

    get mdlDisableNfcImage() { return this._mdlDisableNfcImage; }
    set mdlDisableNfcImage(val) {
        this._mdlDisableNfcImage = val;
        this._set({ "mdlDisableNfcImage": val });
    }
    
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
    
    get nextPagePassportShift() { return this._nextPagePassportShift; }
    set nextPagePassportShift(val) {
        this._nextPagePassportShift = val;
        this._set({ "nextPagePassportShift": val });
    }
    
    get nextPagePassportFlipStart() { return this._nextPagePassportFlipStart; }
    set nextPagePassportFlipStart(val) {
        this._nextPagePassportFlipStart = val;
        this._set({ "nextPagePassportFlipStart": val });
    }
    
    get nextPagePassportFlipClean() { return this._nextPagePassportFlipClean; }
    set nextPagePassportFlipClean(val) {
        this._nextPagePassportFlipClean = val;
        this._set({ "nextPagePassportFlipClean": val });
    }
    
    get nextPagePassportFlipTop() { return this._nextPagePassportFlipTop; }
    set nextPagePassportFlipTop(val) {
        this._nextPagePassportFlipTop = val;
        this._set({ "nextPagePassportFlipTop": val });
    }
    
    get nextPagePassportFlipBottom() { return this._nextPagePassportFlipBottom; }
    set nextPagePassportFlipBottom(val) {
        this._nextPagePassportFlipBottom = val;
        this._set({ "nextPagePassportFlipBottom": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new CustomizationImages();

        result._helpAnimation = jsonObject["helpAnimation"];
        result._livenessAnimation = jsonObject["livenessAnimation"];
        result._borderBackground = jsonObject["borderBackground"];
        result._torchButtonOn = jsonObject["torchButtonOn"];
        result._torchButtonOff = jsonObject["torchButtonOff"];
        result._captureButton = jsonObject["captureButton"];
        result._switchButton = jsonObject["switchButton"];
        result._closeButton = jsonObject["closeButton"];
        result._multipageButton = jsonObject["multipageButton"];
        result._rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"];
        result._rfidEnableNfcImage = jsonObject["rfidEnableNfcImage"];
        result._rfidDisableNfcImage = jsonObject["rfidDisableNfcImage"];
        result._mdlProcessingScreenFailureImage = jsonObject["mdlProcessingScreenFailureImage"];
        result._mdlEnableNfcImage = jsonObject["mdlEnableNfcImage"];
        result._mdlDisableNfcImage = jsonObject["mdlDisableNfcImage"];
        result._nextPageIdCardFront = jsonObject["nextPageIdCardFront"];
        result._nextPageIdCardBack = jsonObject["nextPageIdCardBack"];
        result._nextPagePassportShift = jsonObject["nextPagePassportShift"];
        result._nextPagePassportFlipStart = jsonObject["nextPagePassportFlipStart"];
        result._nextPagePassportFlipClean = jsonObject["nextPagePassportFlipClean"];
        result._nextPagePassportFlipTop = jsonObject["nextPagePassportFlipTop"];
        result._nextPagePassportFlipBottom = jsonObject["nextPagePassportFlipBottom"];

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
            "helpAnimation": this.helpAnimation,
            "livenessAnimation": this.livenessAnimation,
            "borderBackground": this.borderBackground,
            "torchButtonOn": this.torchButtonOn,
            "torchButtonOff": this.torchButtonOff,
            "captureButton": this.captureButton,
            "switchButton": this.switchButton,
            "closeButton": this.closeButton,
            "multipageButton": this.multipageButton,
            "rfidProcessingScreenFailureImage": this.rfidProcessingScreenFailureImage,
            "rfidEnableNfcImage": this.rfidEnableNfcImage,
            "rfidDisableNfcImage": this.rfidDisableNfcImage,
            "mdlProcessingScreenFailureImage": this.mdlProcessingScreenFailureImage,
            "mdlEnableNfcImage": this.mdlEnableNfcImage,
            "mdlDisableNfcImage": this.mdlDisableNfcImage,
            "nextPageIdCardFront": this.nextPageIdCardFront,
            "nextPageIdCardBack": this.nextPageIdCardBack,
            "nextPagePassportShift": this.nextPagePassportShift,
            "nextPagePassportFlipStart": this.nextPagePassportFlipStart,
            "nextPagePassportFlipClean": this.nextPagePassportFlipClean,
            "nextPagePassportFlipTop": this.nextPagePassportFlipTop,
            "nextPagePassportFlipBottom": this.nextPagePassportFlipBottom,
        }
    }
}
