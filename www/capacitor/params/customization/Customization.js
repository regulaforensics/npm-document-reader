import { exec } from '../../internal/bridge';
import { DocumentReader } from '../../index';
import { CustomizationColors } from './CustomizationColors';
import { CustomizationFonts } from './CustomizationFonts';
import { CustomizationImages } from './CustomizationImages';
import { Font } from './Font';

export class Customization {
    get showStatusMessages() { return this._showStatusMessages; }
    set showStatusMessages(val) {
        this._showStatusMessages = val;
        this._set({ "showStatusMessages": val });
    }

    get showResultStatusMessages() { return this._showResultStatusMessages; }
    set showResultStatusMessages(val) {
        this._showResultStatusMessages = val;
        this._set({ "showResultStatusMessages": val });
    }

    get showHelpAnimation() { return this._showHelpAnimation; }
    set showHelpAnimation(val) {
        this._showHelpAnimation = val;
        this._set({ "showHelpAnimation": val });
    }

    get showNextPageAnimation() { return this._showNextPageAnimation; }
    set showNextPageAnimation(val) {
        this._showNextPageAnimation = val;
        this._set({ "showNextPageAnimation": val });
    }

    get showBackgroundMask() { return this._showBackgroundMask; }
    set showBackgroundMask(val) {
        this._showBackgroundMask = val;
        this._set({ "showBackgroundMask": val });
    }

    get cameraFrameBorderWidth() { return this._cameraFrameBorderWidth; }
    set cameraFrameBorderWidth(val) {
        this._cameraFrameBorderWidth = val;
        this._set({ "cameraFrameBorderWidth": val });
    }

    get cameraFrameLineLength() { return this._cameraFrameLineLength; }
    set cameraFrameLineLength(val) {
        this._cameraFrameLineLength = val;
        this._set({ "cameraFrameLineLength": val });
    }

    get cameraFrameOffsetWidth() { return this._cameraFrameOffsetWidth; }
    set cameraFrameOffsetWidth(val) {
        this._cameraFrameOffsetWidth = val;
        this._set({ "cameraFrameOffsetWidth": val });
    }

    get cameraFrameShapeType() { return this._cameraFrameShapeType; }
    set cameraFrameShapeType(val) {
        this._cameraFrameShapeType = val;
        this._set({ "cameraFrameShapeType": val });
    }

    get status() { return this._status; }
    set status(val) {
        this._status = val;
        this._set({ "status": val });
    }

    get resultStatus() { return this._resultStatus; }
    set resultStatus(val) {
        this._resultStatus = val;
        this._set({ "resultStatus": val });
    }

    get multipageButtonText() { return this._multipageButtonText; }
    set multipageButtonText(val) {
        this._multipageButtonText = val;
        this._set({ "multipageButtonText": val });
    }

    get cameraFrameDefaultColor() { return this._cameraFrameDefaultColor; }
    set cameraFrameDefaultColor(val) {
        this._cameraFrameDefaultColor = val;
        this._set({ "cameraFrameDefaultColor": val });
    }

    get cameraFrameActiveColor() { return this._cameraFrameActiveColor; }
    set cameraFrameActiveColor(val) {
        this._cameraFrameActiveColor = val;
        this._set({ "cameraFrameActiveColor": val });
    }

    get statusTextColor() { return this._statusTextColor; }
    set statusTextColor(val) {
        this._statusTextColor = val;
        this._set({ "statusTextColor": val });
    }

    get resultStatusTextColor() { return this._resultStatusTextColor; }
    set resultStatusTextColor(val) {
        this._resultStatusTextColor = val;
        this._set({ "resultStatusTextColor": val });
    }

    get resultStatusBackgroundColor() { return this._resultStatusBackgroundColor; }
    set resultStatusBackgroundColor(val) {
        this._resultStatusBackgroundColor = val;
        this._set({ "resultStatusBackgroundColor": val });
    }

    get multipageButtonBackgroundColor() { return this._multipageButtonBackgroundColor; }
    set multipageButtonBackgroundColor(val) {
        this._multipageButtonBackgroundColor = val;
        this._set({ "multipageButtonBackgroundColor": val });
    }

    get tintColor() { return this._tintColor; }
    set tintColor(val) {
        this._tintColor = val;
        this._set({ "tintColor": val });
    }

    get activityIndicatorColor() { return this._activityIndicatorColor; }
    set activityIndicatorColor(val) {
        this._activityIndicatorColor = val;
        this._set({ "activityIndicatorColor": val });
    }

    get statusBackgroundColor() { return this._statusBackgroundColor; }
    set statusBackgroundColor(val) {
        this._statusBackgroundColor = val;
        this._set({ "statusBackgroundColor": val });
    }

    get cameraPreviewBackgroundColor() { return this._cameraPreviewBackgroundColor; }
    set cameraPreviewBackgroundColor(val) {
        this._cameraPreviewBackgroundColor = val;
        this._set({ "cameraPreviewBackgroundColor": val });
    }

    get backgroundMaskColor() { return this._backgroundMaskColor; }
    set backgroundMaskColor(val) {
        this._backgroundMaskColor = val;
        this._set({ "backgroundMaskColor": val });
    }

    get multipageButtonTextColor() { return this._multipageButtonTextColor; }
    set multipageButtonTextColor(val) {
        this._multipageButtonTextColor = val;
        this._set({ "multipageButtonTextColor": val });
    }

    get statusPositionMultiplier() { return this._statusPositionMultiplier; }
    set statusPositionMultiplier(val) {
        this._statusPositionMultiplier = val;
        this._set({ "statusPositionMultiplier": val });
    }

    get resultStatusPositionMultiplier() { return this._resultStatusPositionMultiplier; }
    set resultStatusPositionMultiplier(val) {
        this._resultStatusPositionMultiplier = val;
        this._set({ "resultStatusPositionMultiplier": val });
    }

    get toolbarSize() { return this._toolbarSize; }
    set toolbarSize(val) {
        this._toolbarSize = val;
        this._set({ "toolbarSize": val });
    }

    get backgroundMaskAlpha() { return this._backgroundMaskAlpha; }
    set backgroundMaskAlpha(val) {
        this._backgroundMaskAlpha = val;
        this._set({ "backgroundMaskAlpha": val });
    }

    get customStatusPositionMultiplier() { return this._customStatusPositionMultiplier; }
    set customStatusPositionMultiplier(val) {
        this._customStatusPositionMultiplier = val;
        this._set({ "customStatusPositionMultiplier": val });
    }

    get cameraFrameVerticalPositionMultiplier() { return this._cameraFrameVerticalPositionMultiplier; }
    set cameraFrameVerticalPositionMultiplier(val) {
        this._cameraFrameVerticalPositionMultiplier = val;
        this._set({ "cameraFrameVerticalPositionMultiplier": val });
    }

    get cameraFrameLandscapeAspectRatio() { return this._cameraFrameLandscapeAspectRatio; }
    set cameraFrameLandscapeAspectRatio(val) {
        this._cameraFrameLandscapeAspectRatio = val;
        this._set({ "cameraFrameLandscapeAspectRatio": val });
    }

    get cameraFramePortraitAspectRatio() { return this._cameraFramePortraitAspectRatio; }
    set cameraFramePortraitAspectRatio(val) {
        this._cameraFramePortraitAspectRatio = val;
        this._set({ "cameraFramePortraitAspectRatio": val });
    }

    get cameraFrameCornerRadius() { return this._cameraFrameCornerRadius; }
    set cameraFrameCornerRadius(val) {
        this._cameraFrameCornerRadius = val;
        this._set({ "cameraFrameCornerRadius": val });
    }

    get livenessAnimationPositionMultiplier() { return this._livenessAnimationPositionMultiplier; }
    set livenessAnimationPositionMultiplier(val) {
        this._livenessAnimationPositionMultiplier = val;
        this._set({ "livenessAnimationPositionMultiplier": val });
    }

    get nextPageAnimationStartDelay() { return this._nextPageAnimationStartDelay; }
    set nextPageAnimationStartDelay(val) {
        this._nextPageAnimationStartDelay = val;
        this._set({ "nextPageAnimationStartDelay": val });
    }

    get nextPageAnimationEndDelay() { return this._nextPageAnimationEndDelay; }
    set nextPageAnimationEndDelay(val) {
        this._nextPageAnimationEndDelay = val;
        this._set({ "nextPageAnimationEndDelay": val });
    }

    get activityIndicatorPortraitPositionMultiplier() { return this._activityIndicatorPortraitPositionMultiplier; }
    set activityIndicatorPortraitPositionMultiplier(val) {
        this._activityIndicatorPortraitPositionMultiplier = val;
        this._set({ "activityIndicatorPortraitPositionMultiplier": val });
    }

    get activityIndicatorLandscapePositionMultiplier() { return this._activityIndicatorLandscapePositionMultiplier; }
    set activityIndicatorLandscapePositionMultiplier(val) {
        this._activityIndicatorLandscapePositionMultiplier = val;
        this._set({ "activityIndicatorLandscapePositionMultiplier": val });
    }

    get cameraPreviewVerticalPositionMultiplier() { return this._cameraPreviewVerticalPositionMultiplier; }
    set cameraPreviewVerticalPositionMultiplier(val) {
        this._cameraPreviewVerticalPositionMultiplier = val;
        this._set({ "cameraPreviewVerticalPositionMultiplier": val });
    }

    get multipageButtonPositionMultiplier() { return this._multipageButtonPositionMultiplier; }
    set multipageButtonPositionMultiplier(val) {
        this._multipageButtonPositionMultiplier = val;
        this._set({ "multipageButtonPositionMultiplier": val });
    }

    get multipageAnimationFrontImage() { return this._multipageAnimationFrontImage; }
    set multipageAnimationFrontImage(val) {
        this._multipageAnimationFrontImage = val;
        this._set({ "multipageAnimationFrontImage": val });
    }

    get multipageAnimationBackImage() { return this._multipageAnimationBackImage; }
    set multipageAnimationBackImage(val) {
        this._multipageAnimationBackImage = val;
        this._set({ "multipageAnimationBackImage": val });
    }

    get borderBackgroundImage() { return this._borderBackgroundImage; }
    set borderBackgroundImage(val) {
        this._borderBackgroundImage = val;
        this._set({ "borderBackgroundImage": val });
    }

    get helpAnimationImage() { return this._helpAnimationImage; }
    set helpAnimationImage(val) {
        this._helpAnimationImage = val;
        this._set({ "helpAnimationImage": val });
    }

    get closeButtonImage() { return this._closeButtonImage; }
    set closeButtonImage(val) {
        this._closeButtonImage = val;
        this._set({ "closeButtonImage": val });
    }

    get captureButtonImage() { return this._captureButtonImage; }
    set captureButtonImage(val) {
        this._captureButtonImage = val;
        this._set({ "captureButtonImage": val });
    }

    get cameraSwitchButtonImage() { return this._cameraSwitchButtonImage; }
    set cameraSwitchButtonImage(val) {
        this._cameraSwitchButtonImage = val;
        this._set({ "cameraSwitchButtonImage": val });
    }

    get torchButtonOnImage() { return this._torchButtonOnImage; }
    set torchButtonOnImage(val) {
        this._torchButtonOnImage = val;
        this._set({ "torchButtonOnImage": val });
    }

    get torchButtonOffImage() { return this._torchButtonOffImage; }
    set torchButtonOffImage(val) {
        this._torchButtonOffImage = val;
        this._set({ "torchButtonOffImage": val });
    }

    get changeFrameButtonExpandImage() { return this._changeFrameButtonExpandImage; }
    set changeFrameButtonExpandImage(val) {
        this._changeFrameButtonExpandImage = val;
        this._set({ "changeFrameButtonExpandImage": val });
    }

    get changeFrameButtonCollapseImage() { return this._changeFrameButtonCollapseImage; }
    set changeFrameButtonCollapseImage(val) {
        this._changeFrameButtonCollapseImage = val;
        this._set({ "changeFrameButtonCollapseImage": val });
    }

    get livenessAnimationImage() { return this._livenessAnimationImage; }
    set livenessAnimationImage(val) {
        this._livenessAnimationImage = val;
        this._set({ "livenessAnimationImage": val });
    }

    get multipageButtonImage() { return this._multipageButtonImage; }
    set multipageButtonImage(val) {
        this._multipageButtonImage = val;
        this._set({ "multipageButtonImage": val });
    }

    get statusTextFont() { return this._statusTextFont; }
    set statusTextFont(val) {
        this._statusTextFont = val;
        this._set({ "statusTextFont": val });
    }

    get resultStatusTextFont() { return this._resultStatusTextFont; }
    set resultStatusTextFont(val) {
        this._resultStatusTextFont = val;
        this._set({ "resultStatusTextFont": val });
    }

    get multipageButtonTextFont() { return this._multipageButtonTextFont; }
    set multipageButtonTextFont(val) {
        this._multipageButtonTextFont = val;
        this._set({ "multipageButtonTextFont": val });
    }

    get customLabelStatus() { return this._customLabelStatus; }
    set customLabelStatus(val) {
        this._customLabelStatus = val;
        this._set({ "customLabelStatus": val });
    }

    get cameraFrameLineCap() { return this._cameraFrameLineCap; }
    set cameraFrameLineCap(val) {
        this._cameraFrameLineCap = val;
        this._set({ "cameraFrameLineCap": val });
    }

    get uiCustomizationLayer() { return this._uiCustomizationLayer; }
    set uiCustomizationLayer(val) {
        this._uiCustomizationLayer = val;
        this._set({ "uiCustomizationLayer": val });
    }

    get helpAnimationImageTransformsIOS() { return this._helpAnimationImageTransformsIOS; }
    set helpAnimationImageTransformsIOS(val) {
        this._helpAnimationImageTransformsIOS = val;
        this._set({ "helpAnimationImageContentMode": val });
    }

    get multipageAnimationFrontImageTransformsIOS() { return this._multipageAnimationFrontImageTransformsIOS; }
    set multipageAnimationFrontImageTransformsIOS(val) {
        this._multipageAnimationFrontImageTransformsIOS = val;
        this._set({ "multipageAnimationFrontImageContentMode": val });
    }

    get multipageAnimationBackImageTransformsIOS() { return this._multipageAnimationBackImageTransformsIOS; }
    set multipageAnimationBackImageTransformsIOS(val) {
        this._multipageAnimationBackImageTransformsIOS = val;
        this._set({ "multipageAnimationBackImageContentMode": val });
    }

    get livenessAnimationImageTransformsIOS() { return this._livenessAnimationImageTransformsIOS; }
    set livenessAnimationImageTransformsIOS(val) {
        this._livenessAnimationImageTransformsIOS = val;
        this._set({ "livenessAnimationImageContentMode": val });
    }

    get borderBackgroundImageTransformsIOS() { return this._borderBackgroundImageTransformsIOS; }
    set borderBackgroundImageTransformsIOS(val) {
        this._borderBackgroundImageTransformsIOS = val;
        this._set({ "borderBackgroundImageContentMode": val });
    }

    get helpAnimationImageTransformsAndroid() { return this._helpAnimationImageTransformsAndroid; }
    set helpAnimationImageTransformsAndroid(val) {
        this._helpAnimationImageTransformsAndroid = val;
        this._set({ "helpAnimationImageMatrix": val });
    }

    get multipageAnimationFrontImageTransformsAndroid() { return this._multipageAnimationFrontImageTransformsAndroid; }
    set multipageAnimationFrontImageTransformsAndroid(val) {
        this._multipageAnimationFrontImageTransformsAndroid = val;
        this._set({ "multipageAnimationFrontImageMatrix": val });
    }

    get multipageAnimationBackImageTransformsAndroid() { return this._multipageAnimationBackImageTransformsAndroid; }
    set multipageAnimationBackImageTransformsAndroid(val) {
        this._multipageAnimationBackImageTransformsAndroid = val;
        this._set({ "multipageAnimationBackImageMatrix": val });
    }

    get livenessAnimationImageTransformsAndroid() { return this._livenessAnimationImageTransformsAndroid; }
    set livenessAnimationImageTransformsAndroid(val) {
        this._livenessAnimationImageTransformsAndroid = val;
        this._set({ "livenessAnimationImageMatrix": val });
    }

    get borderBackgroundImageTransformsAndroid() { return this._borderBackgroundImageTransformsAndroid; }
    set borderBackgroundImageTransformsAndroid(val) {
        this._borderBackgroundImageTransformsAndroid = val;
        this._set({ "borderBackgroundImageMatrix": val });
    }

    get colors() { return this._colors; }
    set colors(val) {
        this._colors = val;
        val._apply(this);
    }

    get fonts() { return this._fonts; }
    set fonts(val) {
        this._fonts = val;
        val._apply(this);
    }

    get images() { return this._images; }
    set images(val) {
        this._images = val;
        val._apply(this);
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new Customization();

        result._showStatusMessages = jsonObject["showStatusMessages"];
        result._showResultStatusMessages = jsonObject["showResultStatusMessages"];
        result._showHelpAnimation = jsonObject["showHelpAnimation"];
        result._showNextPageAnimation = jsonObject["showNextPageAnimation"];
        result._showBackgroundMask = jsonObject["showBackgroundMask"];
        result._cameraFrameBorderWidth = jsonObject["cameraFrameBorderWidth"];
        result._cameraFrameLineLength = jsonObject["cameraFrameLineLength"];
        result._cameraFrameShapeType = jsonObject["cameraFrameShapeType"];
        result._cameraFrameOffsetWidth = jsonObject["cameraFrameOffsetWidth"];
        result._status = jsonObject["status"];
        result._resultStatus = jsonObject["resultStatus"];
        result._multipageButtonText = jsonObject["multipageButtonText"];
        result._cameraFrameDefaultColor = jsonObject["cameraFrameDefaultColor"];
        result._cameraFrameActiveColor = jsonObject["cameraFrameActiveColor"];
        result._statusTextColor = jsonObject["statusTextColor"];
        result._resultStatusTextColor = jsonObject["resultStatusTextColor"];
        result._resultStatusBackgroundColor = jsonObject["resultStatusBackgroundColor"];
        result._multipageButtonBackgroundColor = jsonObject["multipageButtonBackgroundColor"];
        result._tintColor = jsonObject["tintColor"];
        result._activityIndicatorColor = jsonObject["activityIndicatorColor"];
        result._statusBackgroundColor = jsonObject["statusBackgroundColor"];
        result._cameraPreviewBackgroundColor = jsonObject["cameraPreviewBackgroundColor"];
        result._backgroundMaskColor = jsonObject["backgroundMaskColor"];
        result._multipageButtonTextColor = jsonObject["multipageButtonTextColor"];
        result._statusPositionMultiplier = jsonObject["statusPositionMultiplier"];
        result._resultStatusPositionMultiplier = jsonObject["resultStatusPositionMultiplier"];
        result._toolbarSize = jsonObject["toolbarSize"];
        result._backgroundMaskAlpha = jsonObject["backgroundMaskAlpha"];
        result._customStatusPositionMultiplier = jsonObject["customStatusPositionMultiplier"];
        result._cameraFrameVerticalPositionMultiplier = jsonObject["cameraFrameVerticalPositionMultiplier"];
        result._cameraFrameLandscapeAspectRatio = jsonObject["cameraFrameLandscapeAspectRatio"];
        result._cameraFrameCornerRadius = jsonObject["cameraFrameCornerRadius"];
        result._cameraFramePortraitAspectRatio = jsonObject["cameraFramePortraitAspectRatio"];
        result._livenessAnimationPositionMultiplier = jsonObject["livenessAnimationPositionMultiplier"];
        result._nextPageAnimationStartDelay = jsonObject["nextPageAnimationStartDelay"];
        result._nextPageAnimationEndDelay = jsonObject["nextPageAnimationEndDelay"];
        result._activityIndicatorPortraitPositionMultiplier = jsonObject["activityIndicatorPortraitPositionMultiplier"];
        result._activityIndicatorLandscapePositionMultiplier = jsonObject["activityIndicatorLandscapePositionMultiplier"];
        result._cameraPreviewVerticalPositionMultiplier = jsonObject["cameraPreviewVerticalPositionMultiplier"];
        result._multipageButtonPositionMultiplier = jsonObject["multipageButtonPositionMultiplier"];
        result._multipageAnimationFrontImage = jsonObject["multipageAnimationFrontImage"];
        result._multipageAnimationBackImage = jsonObject["multipageAnimationBackImage"];
        result._borderBackgroundImage = jsonObject["borderBackgroundImage"];
        result._helpAnimationImage = jsonObject["helpAnimationImage"];
        result._closeButtonImage = jsonObject["closeButtonImage"];
        result._captureButtonImage = jsonObject["captureButtonImage"];
        result._cameraSwitchButtonImage = jsonObject["cameraSwitchButtonImage"];
        result._torchButtonOnImage = jsonObject["torchButtonOnImage"];
        result._torchButtonOffImage = jsonObject["torchButtonOffImage"];
        result._changeFrameButtonExpandImage = jsonObject["changeFrameButtonExpandImage"];
        result._changeFrameButtonCollapseImage = jsonObject["changeFrameButtonCollapseImage"];
        result._livenessAnimationImage = jsonObject["livenessAnimationImage"];
        result._multipageButtonImage = jsonObject["multipageButtonImage"];
        result._customLabelStatus = jsonObject["customLabelStatus"];
        result._cameraFrameLineCap = jsonObject["cameraFrameLineCap"];
        result._uiCustomizationLayer = jsonObject["uiCustomizationLayer"];
        result._statusTextFont = Font.fromJson(jsonObject["statusTextFont"]);
        result._resultStatusTextFont = Font.fromJson(jsonObject["resultStatusTextFont"]);
        result._multipageButtonTextFont = Font.fromJson(jsonObject["multipageButtonTextFont"]);
        result._helpAnimationImageTransformsIOS = jsonObject["helpAnimationImageContentMode"];
        result._multipageAnimationFrontImageTransformsIOS = jsonObject["multipageAnimationFrontImageContentMode"];
        result._multipageAnimationBackImageTransformsIOS = jsonObject["multipageAnimationBackImageContentMode"];
        result._livenessAnimationImageTransformsIOS = jsonObject["livenessAnimationImageContentMode"];
        result._borderBackgroundImageTransformsIOS = jsonObject["borderBackgroundImageContentMode"];
        result._helpAnimationImageTransformsAndroid = jsonObject["helpAnimationImageMatrix"];
        result._multipageAnimationFrontImageTransformsAndroid = jsonObject["multipageAnimationFrontImageMatrix"];
        result._multipageAnimationBackImageTransformsAndroid = jsonObject["multipageAnimationBackImageMatrix"];
        result._livenessAnimationImageTransformsAndroid = jsonObject["livenessAnimationImageMatrix"];
        result._borderBackgroundImageTransformsAndroid = jsonObject["borderBackgroundImageMatrix"];

        result._colors = CustomizationColors.fromJson(jsonObject["colors"]);
        result._fonts = CustomizationFonts.fromJson(jsonObject["fonts"]);
        result._images = CustomizationImages.fromJson(jsonObject["images"]);

        return result;
    }

    toJson() {
        return {
            "showStatusMessages": this.showStatusMessages,
            "showResultStatusMessages": this.showResultStatusMessages,
            "showHelpAnimation": this.showHelpAnimation,
            "showNextPageAnimation": this.showNextPageAnimation,
            "showBackgroundMask": this.showBackgroundMask,
            "cameraFrameBorderWidth": this.cameraFrameBorderWidth,
            "cameraFrameLineLength": this.cameraFrameLineLength,
            "cameraFrameShapeType": this.cameraFrameShapeType,
            "cameraFrameOffsetWidth": this.cameraFrameOffsetWidth,
            "status": this.status,
            "resultStatus": this.resultStatus,
            "multipageButtonText": this.multipageButtonText,
            "cameraFrameDefaultColor": this.cameraFrameDefaultColor,
            "cameraFrameActiveColor": this.cameraFrameActiveColor,
            "statusTextColor": this.statusTextColor,
            "resultStatusTextColor": this.resultStatusTextColor,
            "resultStatusBackgroundColor": this.resultStatusBackgroundColor,
            "multipageButtonBackgroundColor": this.multipageButtonBackgroundColor,
            "tintColor": this.tintColor,
            "activityIndicatorColor": this.activityIndicatorColor,
            "statusBackgroundColor": this.statusBackgroundColor,
            "cameraPreviewBackgroundColor": this.cameraPreviewBackgroundColor,
            "backgroundMaskColor": this.backgroundMaskColor,
            "multipageButtonTextColor": this.multipageButtonTextColor,
            "statusPositionMultiplier": this.statusPositionMultiplier,
            "resultStatusPositionMultiplier": this.resultStatusPositionMultiplier,
            "toolbarSize": this.toolbarSize,
            "backgroundMaskAlpha": this.backgroundMaskAlpha,
            "customStatusPositionMultiplier": this.customStatusPositionMultiplier,
            "cameraFrameVerticalPositionMultiplier": this.cameraFrameVerticalPositionMultiplier,
            "cameraFrameLandscapeAspectRatio": this.cameraFrameLandscapeAspectRatio,
            "cameraFramePortraitAspectRatio": this.cameraFramePortraitAspectRatio,
            "cameraFrameCornerRadius": this.cameraFrameCornerRadius,
            "livenessAnimationPositionMultiplier": this.livenessAnimationPositionMultiplier,
            "nextPageAnimationStartDelay": this.nextPageAnimationStartDelay,
            "nextPageAnimationEndDelay": this.nextPageAnimationEndDelay,
            "activityIndicatorPortraitPositionMultiplier": this.activityIndicatorPortraitPositionMultiplier,
            "activityIndicatorLandscapePositionMultiplier": this.activityIndicatorLandscapePositionMultiplier,
            "cameraPreviewVerticalPositionMultiplier": this.cameraPreviewVerticalPositionMultiplier,
            "multipageButtonPositionMultiplier": this.multipageButtonPositionMultiplier,
            "multipageAnimationFrontImage": this.multipageAnimationFrontImage,
            "multipageAnimationBackImage": this.multipageAnimationBackImage,
            "borderBackgroundImage": this.borderBackgroundImage,
            "helpAnimationImage": this.helpAnimationImage,
            "closeButtonImage": this.closeButtonImage,
            "captureButtonImage": this.captureButtonImage,
            "cameraSwitchButtonImage": this.cameraSwitchButtonImage,
            "torchButtonOnImage": this.torchButtonOnImage,
            "torchButtonOffImage": this.torchButtonOffImage,
            "changeFrameButtonExpandImage": this.changeFrameButtonExpandImage,
            "changeFrameButtonCollapseImage": this.changeFrameButtonCollapseImage,
            "livenessAnimationImage": this.livenessAnimationImage,
            "multipageButtonImage": this.multipageButtonImage,
            "customLabelStatus": this.customLabelStatus,
            "cameraFrameLineCap": this.cameraFrameLineCap,
            "uiCustomizationLayer": this.uiCustomizationLayer,
            "statusTextFont": this.statusTextFont?.toJson(),
            "resultStatusTextFont": this.resultStatusTextFont?.toJson(),
            "multipageButtonTextFont": this.multipageButtonTextFont?.toJson(),
            "helpAnimationImageContentMode": this.helpAnimationImageTransformsIOS,
            "multipageAnimationFrontImageContentMode": this.multipageAnimationFrontImageTransformsIOS,
            "multipageAnimationBackImageContentMode": this.multipageAnimationBackImageTransformsIOS,
            "livenessAnimationImageContentMode": this.livenessAnimationImageTransformsIOS,
            "borderBackgroundImageContentMode": this.borderBackgroundImageTransformsIOS,
            "helpAnimationImageMatrix": this.helpAnimationImageTransformsAndroid,
            "multipageAnimationFrontImageMatrix": this.multipageAnimationFrontImageTransformsAndroid,
            "multipageAnimationBackImageMatrix": this.multipageAnimationBackImageTransformsAndroid,
            "livenessAnimationImageMatrix": this.livenessAnimationImageTransformsAndroid,
            "borderBackgroundImageMatrix": this.borderBackgroundImageTransformsAndroid,
            "colors": this.colors?.toJson(),
            "fonts": this.fonts?.toJson(),
            "images": this.images?.toJson(),
        }
    }

    _apply() { this._set(this); }
    _set(json) {
        if (this === DocumentReader.instance.customization)
            exec("setCustomization", [json]);
    }
}

export const Cap = {
    BUTT: 0,
    ROUND: 1,
    SQUARE: 2
};

export const FrameShapeType = {
    LINE: 0,
    CORNER: 1
};

export const ViewContentMode = {
    SCALE_TO_FILL: 0,
    SCALE_ASPECT_FIT: 1,
    SCALE_ASPECT_FILL: 2,
    REDRAW: 3,
    CENTER: 4,
    TOP: 5,
    BOTTOM: 6,
    LEFT: 7,
    RIGHT: 8,
    TOP_LEFT: 9,
    TOP_RIGHT: 10,
    BOTTOM_LEFT: 11,
    BOTTOM_RIGHT: 12
};

export const CustomButtonTag = {
    CLOSE: 1001,
    TORCH: 1002,
    CAPTURE: 1003,
    CHANGE_FRAME: 1004,
    SKIP: 1005,
    CAMERA_SWITCH: 1006
};
