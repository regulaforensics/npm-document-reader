import { exec } from '../internal/bridge';
import { DocumentReader } from '../index';
import { DocReaderOrientation } from '../info/DocReaderScenario';

export class Functionality {
    get pictureOnBoundsReady() { return this._pictureOnBoundsReady; }
    set pictureOnBoundsReady(val) {
        this._pictureOnBoundsReady = val;
        this._set({ "pictureOnBoundsReady": val });
    }

    get showTorchButton() { return this._showTorchButton; }
    set showTorchButton(val) {
        this._showTorchButton = val;
        this._set({ "showTorchButton": val });
    }

    get showCloseButton() { return this._showCloseButton; }
    set showCloseButton(val) {
        this._showCloseButton = val;
        this._set({ "showCloseButton": val });
    }

    get videoCaptureMotionControl() { return this._videoCaptureMotionControl; }
    set videoCaptureMotionControl(val) {
        this._videoCaptureMotionControl = val;
        this._set({ "videoCaptureMotionControl": val });
    }

    get showCaptureButton() { return this._showCaptureButton; }
    set showCaptureButton(val) {
        this._showCaptureButton = val;
        this._set({ "showCaptureButton": val });
    }

    get showChangeFrameButton() { return this._showChangeFrameButton; }
    set showChangeFrameButton(val) {
        this._showChangeFrameButton = val;
        this._set({ "showChangeFrameButton": val });
    }

    get showSkipNextPageButton() { return this._showSkipNextPageButton; }
    set showSkipNextPageButton(val) {
        this._showSkipNextPageButton = val;
        this._set({ "showSkipNextPageButton": val });
    }

    get useAuthenticator() { return this._useAuthenticator; }
    set useAuthenticator(val) {
        this._useAuthenticator = val;
        this._set({ "useAuthenticator": val });
    }

    get skipFocusingFrames() { return this._skipFocusingFrames; }
    set skipFocusingFrames(val) {
        this._skipFocusingFrames = val;
        this._set({ "skipFocusingFrames": val });
    }

    get showCameraSwitchButton() { return this._showCameraSwitchButton; }
    set showCameraSwitchButton(val) {
        this._showCameraSwitchButton = val;
        this._set({ "showCameraSwitchButton": val });
    }

    get displayMetadata() { return this._displayMetadata; }
    set displayMetadata(val) {
        this._displayMetadata = val;
        this._set({ "displayMetadata": val });
    }

    get isZoomEnabled() { return this._isZoomEnabled; }
    set isZoomEnabled(val) {
        this._isZoomEnabled = val;
        this._set({ "isZoomEnabled": val });
    }

    get isCameraTorchCheckDisabled() { return this._isCameraTorchCheckDisabled; }
    set isCameraTorchCheckDisabled(val) {
        this._isCameraTorchCheckDisabled = val;
        this._set({ "isCameraTorchCheckDisabled": val });
    }

    get recordScanningProcess() { return this._recordScanningProcess; }
    set recordScanningProcess(val) {
        this._recordScanningProcess = val;
        this._set({ "recordScanningProcess": val });
    }

    get manualMultipageMode() { return this._manualMultipageMode; }
    set manualMultipageMode(val) {
        this._manualMultipageMode = val;
        this._set({ "manualMultipageMode": val });
    }

    get singleResult() { return this._singleResult; }
    set singleResult(val) {
        this._singleResult = val;
        this._set({ "singleResult": val });
    }

    get torchTurnedOn() { return this._torchTurnedOn; }
    set torchTurnedOn(val) {
        this._torchTurnedOn = val;
        this._set({ "torchTurnedOn": val });
    }

    get preventScreenRecording() { return this._preventScreenRecording; }
    set preventScreenRecording(val) {
        this._preventScreenRecording = val;
        this._set({ "preventScreenRecording": val });
    }

    get homeIndicatorAutoHide() { return this._homeIndicatorAutoHide; }
    set homeIndicatorAutoHide(val) {
        this._homeIndicatorAutoHide = val;
        this._set({ "homeIndicatorAutoHide": val });
    }

    get showCaptureButtonDelayFromDetect() { return this._showCaptureButtonDelayFromDetect; }
    set showCaptureButtonDelayFromDetect(val) {
        this._showCaptureButtonDelayFromDetect = val;
        this._set({ "showCaptureButtonDelayFromDetect": val });
    }

    get showCaptureButtonDelayFromStart() { return this._showCaptureButtonDelayFromStart; }
    set showCaptureButtonDelayFromStart(val) {
        this._showCaptureButtonDelayFromStart = val;
        this._set({ "showCaptureButtonDelayFromStart": val });
    }

    get rfidTimeout() { return this._rfidTimeout; }
    set rfidTimeout(val) {
        this._rfidTimeout = val;
        this._set({ "rfidTimeout": val });
    }

    get forcePagesCount() { return this._forcePagesCount; }
    set forcePagesCount(val) {
        this._forcePagesCount = val;
        this._set({ "forcePagesCount": val });
    }

    get orientation() { return this._orientation; }
    set orientation(val) {
        this._orientation = val;
        this._set({ "orientation": val });
    }

    get captureMode() { return this._captureMode; }
    set captureMode(val) {
        this._captureMode = val;
        this._set({ "captureMode": val });
    }

    get cameraMode() { return this._cameraMode; }
    set cameraMode(val) {
        this._cameraMode = val;
        this._set({ "cameraMode": val });
    }

    get cameraPositionIOS() { return this._cameraPositionIOS; }
    set cameraPositionIOS(val) {
        this._cameraPositionIOS = val;
        this._set({ "cameraPositionIOS": val });
    }

    get cameraFrame() { return this._cameraFrame; }
    set cameraFrame(val) {
        this._cameraFrame = val;
        this._set({ "cameraFrame": val });
    }

    get btDeviceName() { return this._btDeviceName; }
    set btDeviceName(val) {
        this._btDeviceName = val;
        this._set({ "btDeviceName": val });
    }

    get zoomFactor() { return this._zoomFactor; }
    set zoomFactor(val) {
        this._zoomFactor = val;
        this._set({ "zoomFactor": val });
    }

    get exposure() { return this._exposure; }
    set exposure(val) {
        this._exposure = val;
        this._set({ "exposure": val });
    }

    get videoRecordingSizeDownscaleFactor() { return this._videoRecordingSizeDownscaleFactor; }
    set videoRecordingSizeDownscaleFactor(val) {
        this._videoRecordingSizeDownscaleFactor = val;
        this._set({ "videoRecordingSizeDownscaleFactor": val });
    }

    get mdlTimeout() { return this._mdlTimeout; }
    set mdlTimeout(val) {
        this._mdlTimeout = val;
        this._set({ "mdlTimeout": val });
    }

    get excludedCamera2Models() { return this._excludedCamera2Models; }
    set excludedCamera2Models(val) {
        this._excludedCamera2Models = val;
        this._set({ "excludedCamera2Models": val });
    }

    get cameraResolutionAndroid() { return this._cameraResolutionAndroid; }
    set cameraResolutionAndroid(val) {
        this._cameraResolutionAndroid = val;
        this._set({ "cameraSize": val });
    }

    get cameraResolutionIOS() { return this._cameraResolutionIOS; }
    set cameraResolutionIOS(val) {
        this._cameraResolutionIOS = val;
        this._set({ "videoSessionPreset": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new Functionality();
        result._pictureOnBoundsReady = jsonObject["pictureOnBoundsReady"];
        result._showTorchButton = jsonObject["showTorchButton"];
        result._showCloseButton = jsonObject["showCloseButton"];
        result._videoCaptureMotionControl = jsonObject["videoCaptureMotionControl"];
        result._showCaptureButton = jsonObject["showCaptureButton"];
        result._showChangeFrameButton = jsonObject["showChangeFrameButton"];
        result._showSkipNextPageButton = jsonObject["showSkipNextPageButton"];
        result._useAuthenticator = jsonObject["useAuthenticator"];
        result._skipFocusingFrames = jsonObject["skipFocusingFrames"];
        result._showCameraSwitchButton = jsonObject["showCameraSwitchButton"];
        result._displayMetadata = jsonObject["displayMetadata"];
        result._isZoomEnabled = jsonObject["isZoomEnabled"];
        result._isCameraTorchCheckDisabled = jsonObject["isCameraTorchCheckDisabled"];
        result._recordScanningProcess = jsonObject["recordScanningProcess"];
        result._manualMultipageMode = jsonObject["manualMultipageMode"];
        result._singleResult = jsonObject["singleResult"];
        result._torchTurnedOn = jsonObject["torchTurnedOn"];
        result._preventScreenRecording = jsonObject["preventScreenRecording"];
        result._homeIndicatorAutoHide = jsonObject["homeIndicatorAutoHide"];
        result._showCaptureButtonDelayFromDetect = jsonObject["showCaptureButtonDelayFromDetect"];
        result._showCaptureButtonDelayFromStart = jsonObject["showCaptureButtonDelayFromStart"];
        result._rfidTimeout = jsonObject["rfidTimeout"];
        result._forcePagesCount = jsonObject["forcePagesCount"];
        result._orientation = jsonObject["orientation"];
        result._captureMode = jsonObject["captureMode"];
        result._cameraMode = jsonObject["cameraMode"];
        result._cameraPositionIOS = jsonObject["cameraPositionIOS"];
        result._cameraFrame = jsonObject["cameraFrame"];
        result._btDeviceName = jsonObject["btDeviceName"];
        result._zoomFactor = jsonObject["zoomFactor"];
        result._exposure = jsonObject["exposure"];
        result._videoRecordingSizeDownscaleFactor = jsonObject["videoRecordingSizeDownscaleFactor"];
        result._mdlTimeout = jsonObject["mdlTimeout"];
        result._excludedCamera2Models = jsonObject["excludedCamera2Models"];
        result._cameraResolutionAndroid = CameraSize.fromJson(jsonObject["cameraSize"]);
        result._cameraResolutionIOS = jsonObject["videoSessionPreset"];

        return result;
    }

    toJson() {
        return {
            "pictureOnBoundsReady": this.pictureOnBoundsReady,
            "showTorchButton": this.showTorchButton,
            "showCloseButton": this.showCloseButton,
            "videoCaptureMotionControl": this.videoCaptureMotionControl,
            "showCaptureButton": this.showCaptureButton,
            "showChangeFrameButton": this.showChangeFrameButton,
            "showSkipNextPageButton": this.showSkipNextPageButton,
            "useAuthenticator": this.useAuthenticator,
            "skipFocusingFrames": this.skipFocusingFrames,
            "showCameraSwitchButton": this.showCameraSwitchButton,
            "displayMetadata": this.displayMetadata,
            "isZoomEnabled": this.isZoomEnabled,
            "isCameraTorchCheckDisabled": this.isCameraTorchCheckDisabled,
            "recordScanningProcess": this.recordScanningProcess,
            "manualMultipageMode": this.manualMultipageMode,
            "singleResult": this.singleResult,
            "torchTurnedOn": this.torchTurnedOn,
            "preventScreenRecording": this.preventScreenRecording,
            "homeIndicatorAutoHide": this.homeIndicatorAutoHide,
            "showCaptureButtonDelayFromDetect": this.showCaptureButtonDelayFromDetect,
            "showCaptureButtonDelayFromStart": this.showCaptureButtonDelayFromStart,
            "rfidTimeout": this.rfidTimeout,
            "forcePagesCount": this.forcePagesCount,
            "orientation": this.orientation,
            "captureMode": this.captureMode,
            "cameraMode": this.cameraMode,
            "cameraPositionIOS": this.cameraPositionIOS,
            "cameraFrame": this.cameraFrame,
            "btDeviceName": this.btDeviceName,
            "zoomFactor": this.zoomFactor,
            "exposure": this.exposure,
            "videoRecordingSizeDownscaleFactor": this.videoRecordingSizeDownscaleFactor,
            "mdlTimeout": this.mdlTimeout,
            "excludedCamera2Models": this.excludedCamera2Models,
            "cameraSize": this.cameraResolutionAndroid?.toJson(),
            "videoSessionPreset": this.cameraResolutionIOS,
        }
    }

    _apply() { this._set(this); }
    _set(json) {
        if (this === DocumentReader.instance.functionality)
            exec("setFunctionality", [json]);
    }
}

export const CameraPosition = {
    UNKNOWN: -1,
    UNSPECIFIED: 0,
    BACK: 1,
    FRONT: 2,
};

export const CaptureMode = {
    UNKNOWN: -1,
    AUTO: 0,
    CAPTURE_VIDEO: 1,
    CAPTURE_FRAME: 2,
};

export const CameraMode = {
    UNKNOWN: -1,
    AUTO: 0,
    CAMERA1: 1,
    CAMERA2: 2,
};

export const CaptureSessionPreset = {
    UNKNOWN: -1,
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    PHOTO: 3,
    INPUT_PRIORITY: 4,
    PRESET_1280x720: 6,
    PRESET_1920x1080: 7,
    PRESET_3840x2160: 8,
    FRAME_960x540: 9,
    FRAME_1280x720: 10,
    PRESET_640x480: 12,
    PRESET_352x288: 13,
};

export const DocReaderFrame = {
    UNKNOWN: "",
    SCENARIO_DEFAULT: "id1",
    MAX: "max",
    NONE: "none",
    DOCUMENT: "document",
};

export class CameraSize {
    width
    height

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        return new CameraSize(jsonObject["width"], jsonObject["height"]);
    }

    toJson() {
        return {
            "width": this.width,
            "height": this.height,
        }
    }
}
