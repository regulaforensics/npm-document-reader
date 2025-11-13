import { DocReaderOrientation } from "../info/DocReaderScenario";

/**
 * Params that influence the scanning process, camera view controller
 * customization and etc.
 */
export declare class Functionality {
    /**
     * If set to `true`, as soon as document is located during video mode,
     * picture wil be taken and processed as single frame.
     *
     * Used for devices with poor-quality video preview.
     *
     * Android only.
     */
    pictureOnBoundsReady?: boolean;
    /**
     * If it's set to `true`, the button that allows you to turn on/off
     * the torch will be displayed.
     *
     * @default true
     */
    showTorchButton?: boolean;
    /**
     * If it's set to `true`, the button that allows you to close the scanner
     * will be displayed.
     *
     * @default true
     */
    showCloseButton?: boolean;
    /**
     * If it's set to `true`, camera frames won't be taken for recognition
     * while a device is moving based on motion sensors.
     *
     * @default true
     */
    videoCaptureMotionControl?: boolean;
    /**
     * If it's set to `true`, the button that allows you to take a picture
     * and process it as a single frame will be displayed.
     *
     * @default false
     */
    showCaptureButton?: boolean;
    /**
     * @deprecated Not used in new UI
     * If it's set to `true`, the button that allows you to change the camera
     * frame type will be displayed.
     *
     * @default false
     */
    showChangeFrameButton?: boolean;
    /**
     * If it's set to `true`, the button that allows you to skip processing
     * of the next page of a document will be displayed.
     *
     * @default true
     */
    showSkipNextPageButton?: boolean;
    /**
     * If it's set to `true`, allows you to connect to the external
     * Regula Bluetooth devices like Regula 1120 and others.
     */
    useAuthenticator?: boolean;
    /**
     * If it's set to `true`, camera frames won't be taken for recognition
     * while a camera is focusing.
     *
     * @default true
     */
    skipFocusingFrames?: boolean;
    /**
     * If it's set to `true`, the button that allows you to change a position
     * of a capture device for the video session will be displayed.
     *
     * @default false
     */
    showCameraSwitchButton?: boolean;
    /**
     * If it's set to `true`, the metadata will be displayed over the camera
     * preview during document processing, namely the perspective angle value.
     *
     * @default false
     */
    displayMetadata?: boolean;
    /**
     * If it's set to `true`, allows you to adjust a zoom level using the pinch
     * gesture (its range is from 1x to 10x).
     *
     * @default false
     */
    isZoomEnabled?: boolean;
    /**
     * Allows you to disable all validations of having a torch in case Android
     * returns that it's not available, but it can be used when checks are skipped.
     *
     * @default false
     *
     * Android only.
     */
    isCameraTorchCheckDisabled?: boolean;
    /**
     * If set to `true`, video during processing of the document will be recorded.
     * This can be used later for debugging and troubleshooting.
     *
     * @default false
     */
    recordScanningProcess?: boolean;
    /**
     * If it's set to `true`, scanner operate in manual multipage scanning mode.
     * Set this flag to true, if you wanna create for example, custom logic
     * (or UI) between scanning document pages.
     *
     * @default false
     */
    manualMultipageMode?: boolean;
    /**
     * If it's set to `true`, once the scanning process is finished,
     * the scanner will be dismissed.
     *
     * @default true
     *
     * iOS only.
     */
    singleResult?: boolean;
    /**
     * If set, torch (if available) will turn on immediately on camera preview start.
     *
     * @default false
     */
    torchTurnedOn?: boolean;
    /**
     * When enabled, the SDK prevents both screen recording and screenshots.
     *
     * @default false
     */
    preventScreenRecording?: boolean;
    /**
     * Allows you to specify a time interval when the Capture button
     * has to be displayed after the document is detected.
     * Don't forget to set the {@link showCaptureButton} to `true`,
     * otherwise, it won't be displayed.
     *
     * @default 5
     */
    showCaptureButtonDelayFromDetect?: number;
    /**
     * Allows you to specify a time interval when the Capture button
     * has to be displayed after the scanning process is started.
     * Don't forget to set the {@link showCaptureButton} to `true`,
     * otherwise, it won't be displayed.
     *
     * @default 10
     */
    showCaptureButtonDelayFromStart?: number;
    /**
     * Use the parameter to set the time limit (in seconds) for the RFID chip reading,
     * beyond which it does not continue regardless of its result.
     *
     * Android only.
     */
    rfidTimeout?: number;
    /**
     * Sets a limit on the number of pages to be processed.
     */
    forcePagesCount?: number;
    /**
     * Allows you to specify an orientation of the camera view controller.
     *
     * @default {@link DocReaderOrientation.ALL}
     */
    orientation?: DocReaderOrientation;
    /**
     * Allows you to specify the video processing mode.
     *
     * @default {@link CaptureMode.AUTO}
     */
    captureMode?: CaptureMode;
    /**
     * Allows you to specify the camera API.
     *
     * @default {@link CameraMode.AUTO}
     *
     * Android only.
     */
    cameraMode?: CameraMode;
    /**
     * Allows you to specify a position of a capture device for the video session.
     *
     * @default {@link CameraPosition.UNSPECIFIED}
     *
     * IOS only.
     */
    cameraPositionIOS?: CameraPosition;
    /**
     * Set this setting to override the default cropping frame provided by scenarios.
     *
     * @default {@link DocReaderFrame.SCENARIO_DEFAULT}
     */
    cameraFrame?: DocReaderFrame;
    /**
     * Allows you to specify a name of a Regula device that will be used
     * with Document Reader SDK.
     */
    btDeviceName?: string;
    /**
     * Allows you to set the desired zoom level (its range from 1x to 10x).
     *
     * @default 1.0
     */
    zoomFactor?: number;
    /**
     * Allows you to control exposure.
     *
     * Android only.
     */
    exposure?: number;
    /**
     * Android only.
     */
    videoRecordingSizeDownscaleFactor?: number;
    /**
     * A list of devices that must not use the camera2 API.
     *
     * Android only.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    excludedCamera2Models?: string[];
    /**
     * Allows you to specify the frame resolution.
     *
     * Android only. For iOS use {@link cameraResolutionIOS}
     */
    cameraResolutionAndroid?: CameraSize;
    /**
     * Allows you to specify the frame resolution.
     *
     * iOS only. For  Android use {@link cameraResolutionAndroid}
     */
    cameraResolutionIOS?: CaptureSessionPreset;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): Functionality;
}

export declare enum CameraPosition {
    UNSPECIFIED = 0,
    BACK = 1,
    FRONT = 2,
}

export declare enum CaptureMode {
    /** A flow of frames is taken for recognition right after a scenario is started. */
    AUTO = 0,
    /** A flow of frames is taken for recognition right after the Capture button is pushed. */
    CAPTURE_VIDEO = 1,
    /** A single frame is taken for recognition right after the Capture button is pushed. */
    CAPTURE_FRAME = 2,
}

export declare enum CameraMode {
    AUTO = 0,
    CAMERA1 = 1,
    CAMERA2 = 2,
}

export declare enum CaptureSessionPreset {
    /** An AVCaptureSession preset suitable for low quality output. */
    LOW = 0,
    /** An AVCaptureSession preset suitable for medium quality output. */
    MEDIUM = 1,
    /** An AVCaptureSession preset suitable for high quality video and audio output. */
    HIGH = 2,
    /** An AVCaptureSession preset suitable for high resolution photo quality output. */
    PHOTO = 3,
    /**
     * An AVCaptureSession preset indicating that the formats of the session's
     * inputs are being given priority.
     */
    INPUT_PRIORITY = 4,
    /** An AVCaptureSession preset suitable for 1280x720 video output. */
    PRESET_1280x720 = 6,
    /** An AVCaptureSession preset suitable for 1920x1080 video output. */
    PRESET_1920x1080 = 7,
    /** An AVCaptureSession preset suitable for 3840x2160 (UHD 4K) video output. */
    PRESET_3840x2160 = 8,
    /** An AVCaptureSession preset producing 960x540 Apple iFrame video and audio content. */
    FRAME_960x540 = 9,
    /** An AVCaptureSession preset producing 1280x720 Apple iFrame video and audio content. */
    FRAME_1280x720 = 10,
    /** An AVCaptureSession preset suitable for 640x480 video output. */
    PRESET_640x480 = 12,
    /** An AVCaptureSession preset suitable for 352x288 video output. */
    PRESET_352x288 = 13,
}

export declare enum DocReaderFrame {
    /** Size of the frame depends on the scenario, that means default values are used. */
    SCENARIO_DEFAULT = "id1",
    /** Full frame. */
    MAX = "max",
    /** No frame. */
    NONE = "none",
    /**
     * Size of the frame corresponds to the ID-3 format in the portrait mode
     * and to the ID-1 in the landscape mode.
     */
    DOCUMENT = "document",
}

export declare class CameraSize {
    readonly width: number;
    readonly height: number;

    constructor(width: number, height: number);

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CameraSize | null;
}
