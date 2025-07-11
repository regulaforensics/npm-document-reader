import { CustomizationColors } from "./CustomizationColors";
import { CustomizationFonts } from "./CustomizationFonts";
import { CustomizationImages } from "./CustomizationImages";
import { Font } from "./Font";

/**
 * Params that relate to the camera view controller customization and etc.
 */
export declare class Customization {
    /**
     * If it's set to `true`, status messages during the document processing
     * will be shown.
     *
     * @default true
     */
    showStatusMessages?: boolean;

    /**
     * @deprecated Not used in new UI
     * If it's set to `true`, result status messages during the document processing
     * will be shown.
     *
     * @default true
     */
    showResultStatusMessages?: boolean;

    /**
     * If it's set to `true`, the animation showing how to position a document
     * will be displayed.
     *
     * @default false
     */
    showHelpAnimation?: boolean;

    /**
     * If it's set to `true`, the animation asking for processing
     * the next page will be displayed.
     *
     * @default true
     */
    showNextPageAnimation?: boolean;

    /**
     * If it's set to `true`, the background mask next to the camera frame
     * will be displayed.
     *
     * @default true
     */
    showBackgroundMask?: boolean;

    /**
     * Allows you to set thickness of the camera frame borders.
     *
     * @default 3
     */
    cameraFrameBorderWidth?: number;

    /**
     * Allows you to set length of the lines of the camera frame.
     *
     * It's applied once you change the {@link cameraFrameShapeType} property to
     * {@link FrameShapeType.CORNER}.
     *
     * @default 25
     */
    cameraFrameLineLength?: number;

    /**
     * Allows you to set an offset for the camera frame (portrait orientation).
     *
     * @default 3
     */
    cameraFrameOffsetWidth?: number;

    /**
     * Allows you to set a shape type for the camera frame.
     *
     * @default {@link FrameShapeType.LINE}
     */
    cameraFrameShapeType?: FrameShapeType;

    /**
     * Allows you to set any string to the status.
     */
    status?: string;

    /**
     * @deprecated Not used in new UI
     * Allows you to set any string to the result status.
     */
    resultStatus?: string;

    multipageButtonText?: string;

    /** Allows you to set a color for the camera frame when a document is out of the camera frame or is not detected. */
    cameraFrameDefaultColor?: number;

    /** Allows you to set a color for the camera frame when a document is detected. */
    cameraFrameActiveColor?: number;

    /** Allows you to set a color for the status messages. */
    statusTextColor?: number;

    /**
     * @deprecated Not used in new UI
     * Allows you to set a color for the result status messages.
     */
    resultStatusTextColor?: number;

    /**
     * @deprecated Not used in new UI
     * Allows you to set a color of the background for the result status messages.
     */
    resultStatusBackgroundColor?: number;

    /**
     * Allows you to set a color for the "Skip next page" button.
     */
    multipageButtonBackgroundColor?: number;

    /**
     * Allows you to set a color for all visual elements.
     */
    tintColor?: number;

    /**
     * Allows you to set a color for the activity indicator.
     */
    activityIndicatorColor?: number;

    /**
     * Allows you to set a background color for the status messages.
     */
    statusBackgroundColor?: number;

    /**
     * Allows you to set a background color for the camera preview
     * (top and bottom frames).
     */
    cameraPreviewBackgroundColor?: number;

    /**
     * Allows you to set color for background mask area.
     */
    backgroundMaskColor?: number;

    multipageButtonTextColor?: number;

    /**
     * Allows you to change the location of the status.
     *
     * For example, if you set the multiplier to 0.5 and the number of pixels
     * by vertical is equal to 800, your message will be centralized and located
     * at 200 px from the top, i.e. (800 / 2) * 0.5 = 200 px. If the multiplier
     * is equal to 1, the message will be centered. If the multiplier is equal
     * to zero, the default location will be used.
     *
     * @default 0
     */
    statusPositionMultiplier?: number;

    /**
     * @deprecated Not used in new UI
     * Allows you to change the location of the result status.
     *
     * For example, if you set the multiplier to 0.5 and the number of pixels
     * by vertical is equal to 800, your message will be centralized and located
     * at 200 px from the top, i.e. (800 / 2) * 0.5 = 200 px. If the multiplier
     * is equal to 1, the message will be centered. If the multiplier is equal
     * to zero, the default location will be used.
     *
     * @default 0
     */
    resultStatusPositionMultiplier?: number;

    /**
     * Allows you to set a size for the toolbar
     * (it's where all buttons are located).
     */
    toolbarSize?: number;

    /**
     * Allows you to set intensity of the background mask.
     *
     * @default 1.0
     */
    backgroundMaskAlpha?: number;

    /**
     * Allows you to change the location of the custom status.
     *
     * For example, if you set the multiplier to 0.5 and the number of pixels
     * by vertical is equal to 800, your message will be centralized and located
     * at 200 px from the top, i.e. (800 / 2) * 0.5 = 200 px. If the multiplier
     * is equal to 1, the message will be centered. If the multiplier is equal
     * to zero, the default location will be used.
     *
     * @default 1
     */
    customStatusPositionMultiplier?: number;

    /**
     * Allows you to change the location of the camera frame vertically.
     * @default 1
     */
    cameraFrameVerticalPositionMultiplier?: number;

    /**
     * Allows you to set an aspect ratio of the camera frame (landscape orientation).
     * @default 0
     */
    cameraFrameLandscapeAspectRatio?: number;

    /**
     * Allows you to set an aspect ratio of the camera frame (portrait orientation).
     *
     * @default 0
     */
    cameraFramePortraitAspectRatio?: number;

    /**
     * Allows you to set a corner radius of the camera frame.
     *
     * @default 10
     */
    cameraFrameCornerRadius?: number;

    /**
     * Allows you to change the location of the liveness animation.
     *
     * For example, if you set the multiplier to 0.5 and the number of pixels
     * by vertical is equal to 800, the animation will be centralized and located
     * at 200 px from the top, i.e. (800 / 2) * 0.5 = 200 px. If the multiplier
     * is set to 1, the animation will be centered. If the multiplier is
     * set to 0, the default value will be used.
     *
     * @default 1
     */
    livenessAnimationPositionMultiplier?: number;

    /**
     * Animation delay before flip.
     *
     * @default 0
     */
    nextPageAnimationStartDelay?: number;

    /**
     * Animation delay after flip.
     *
     * @default 0
     */
    nextPageAnimationEndDelay?: number;

    /**
     * Allows you to set an offset for the activity indicator (portrait orientation).
     * If not set, activity indicator always centered in the camera border.
     */
    activityIndicatorPortraitPositionMultiplier?: number;

    /**
     * Allows you to set an offset for the activity indicator (landscape orientation).
     * If not set, activity indicator always centered in the camera border.
     */
    activityIndicatorLandscapePositionMultiplier?: number;

    /**
     * Allows you to change the vertical offset of the camera preview layer.
     * If you need to raise the layer 50% of its height up, then you specify 0.5.
     * If you need to lower the layer 75% of its height, then enter 1.75.
     * Valid values: from 0 (the layer will be raised completely up) to 2 (the layer will be completely lowered down).
     */
    cameraPreviewVerticalPositionMultiplier?: number;

    /**
     * Allows you to set any image for the multipage animation (front side). Base64 string.
     */
    multipageAnimationFrontImage?: string;

    /**
     * Allows you to set any image for the multipage animation (back side). Base64 string.
     */
    multipageAnimationBackImage?: string;

    /**
     * Allows you to set any image within the camera frame. Base64 string.
     */
    borderBackgroundImage?: string;

    /**
     * Allows you to set any image for the help animation. Base64 string.
     */
    helpAnimationImage?: string;

    /**
     * Allows you to set any image for the close button. Base64 string.
     */
    closeButtonImage?: string;

    /**
     * Allows you to set any image for the capture button. Base64 string.
     */
    captureButtonImage?: string;

    /**
     * Allows you to set any image for the button that allows
     * changing positions of the capture device. Base64 string.
     */
    cameraSwitchButtonImage?: string;

    /**
     * Allows you to set any image for the torch button when its state is ON. Base64 string.
     */
    torchButtonOnImage?: string;

    /**
     * Allows you to set any image for the torch button when its state is OFF. Base64 string.
     */
    torchButtonOffImage?: string;

    /**
     * @deprecated Not used in new UI
     * Allows you to set any image for the button that allows changing
     * shapes of the camera (expanded state). Base64 string.
     */
    changeFrameButtonExpandImage?: string;

    /**
     * @deprecated Not used in new UI
     * Allows you to set any image for the button that allows changing
     * shapes of the camera (collapsed state). Base64 string.
     */
    changeFrameButtonCollapseImage?: string;

    /**
     * Allows you to set any image for the liveness animation.
     *
     * When set to `null` the default image will be used.
     * This property can be set during the scanning process to tailor
     * the user experiese for different types of documents.
     * Base64 string.
     */
    livenessAnimationImage?: string;

    /**
     * Allows you to set a font for the status messages.
     */
    statusTextFont?: Font;

    /**
     * @deprecated Not used in new UI
     * Allows you to set a font for the result status messages.
     */
    resultStatusTextFont?: Font;

    multipageButtonTextFont?: Font;

    /**
     * Allows you to create a custom status.
     */
    customLabelStatus?: string;

    /**
     * Allows you to customize the beginning and ending of stroked lines
     * of the camera frame.
     *
     * @default {@link Cap.BUTT}
     */
    cameraFrameLineCap?: Cap;

    /**
     * JSON structure defining labels and graphic elements
     * to be added to the Camera UI.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    uiCustomizationLayer?: Record<string, any>;

    /**
     * Allows you to specify how a view of the help animation adjusts
     * its content when its size changes.
     *
     * @default {@link ViewContentMode.SCALE_ASPECT_FIT}
     *
     * IOS only. For Android use {@link helpAnimationImageTransformsAndroid}.
     */
    helpAnimationImageTransformsIOS?: ViewContentMode;

    /**
     * Allows you to specify how a view of the multipage animation (front side)
     * adjusts its content when its size changes.
     *
     * @default {@link ViewContentMode.SCALE_TO_FILL}
     *
     * IOS only. For Android use {@link multipageAnimationFrontImageTransformsAndroid}.
     */
    multipageAnimationFrontImageTransformsIOS?: ViewContentMode;

    /**
     * Allows you to specify how a view of the multipage animation (back side)
     * adjusts its content when its size changes.
     *
     * @default {@link ViewContentMode.SCALE_TO_FILL}
     *
     * IOS only. For Android use {@link multipageAnimationBackImageTransformsAndroid}.
     */
    multipageAnimationBackImageTransformsIOS?: ViewContentMode;

    /**
     * Allows you to specify how a view of the liveness animation
     * adjusts its content when its size changes.
     *
     * @default {@link ViewContentMode.SCALE_ASPECT_FIT}
     *
     * IOS only. For Android use {@link livenessAnimationImageTransformsAndroid}.
     */
    livenessAnimationImageTransformsIOS?: ViewContentMode;

    /**
     * Allows you to specify how a view within the camera frame adjusts
     * its content when its size changes.
     *
     * @default {@link ViewContentMode.SCALE_ASPECT_FIT}
     *
     * IOS only. For Android use {@link borderBackgroundImageTransformsAndroid}.
     */
    borderBackgroundImageTransformsIOS?: ViewContentMode;

    /**
     * Matrix used to scale help animation.
     *
     * Android class `android.graphics.Matrix`.
     * Passed as `Matrix.setValues()`
     *
     * Android only. For iOS use {@link helpAnimationImageTransformsIOS}.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    helpAnimationImageTransformsAndroid?: number[];

    /**
     * Matrix used to scale multipage animation (front side).
     *
     * Android class `android.graphics.Matrix`.
     * Passed as `Matrix.setValues()`
     *
     * Android only. For iOS use {@link multipageAnimationFrontImageTransformsIOS}.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    multipageAnimationFrontImageTransformsAndroid?: number[];

    /**
     * Matrix used to scale multipage animation (back side).
     *
     * Android class `android.graphics.Matrix`.
     * Passed as `Matrix.setValues()`
     *
     * Android only. For iOS use {@link multipageAnimationBackImageTransformsIOS}.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    multipageAnimationBackImageTransformsAndroid?: number[];

    /**
     * Matrix used to scale liveness animation.
     *
     * Android class `android.graphics.Matrix`.
     * Passed as `Matrix.setValues()`
     *
     * Android only. For iOS use {@link livenessAnimationImageTransformsIOS}.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    livenessAnimationImageTransformsAndroid?: number[];

    /**
     * Matrix used to scale the view within the camera frame.
     *
     * Android class `android.graphics.Matrix`.
     * Passed as `Matrix.setValues()`
     *
     * Android only. For iOS use {@link borderBackgroundImageTransformsIOS}.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    borderBackgroundImageTransformsAndroid?: number[];

    colors: CustomizationColors;
    fonts: CustomizationFonts;
    images: CustomizationImages;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): Customization;
}

export declare enum Cap {
    BUTT = 0,
    ROUND = 1,
    SQUARE = 2,
}

export declare enum FrameShapeType {
    /**
     * Camera frame is rectangle.
     */
    LINE = 0,
    /**
     * Camera frame only consists of corners of the rectangle.
     */
    CORNER = 1,
}

/**
 * Clone of iOS native enum `UIViewContentMode`
 */
export declare enum ViewContentMode {
    SCALE_TO_FILL = 0,
    /**
     * Contents scaled to fit with fixed aspect. remainder is transparent.
     */
    SCALE_ASPECT_FIT = 1,
    /**
     * Contents scaled to fill with fixed aspect. some portion of content may be clipped.
     */
    SCALE_ASPECT_FILL = 2,
    /**
     * redraw on bounds change (calls -setNeedsDisplay).
     */
    REDRAW = 3,
    /**
     * contents remain same size. positioned adjusted.
     */
    CENTER = 4,
    TOP = 5,
    BOTTOM = 6,
    LEFT = 7,
    RIGHT = 8,
    TOP_LEFT = 9,
    TOP_RIGHT = 10,
    BOTTOM_LEFT = 11,
    BOTTOM_RIGHT = 12,
}

/**
 *  Button tags for UI customization.
 */
export declare enum CustomButtonTag {
    CLOSE = 1001,
    TORCH = 1002,
    CAPTURE = 1003,
    CHANGE_FRAME = 1004,
    SKIP = 1005,
    CAMERA_SWITCH = 1006,
}
