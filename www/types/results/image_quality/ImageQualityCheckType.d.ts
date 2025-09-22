export declare enum ImageQualityCheckType {
    /** Will be returned if a non-existent value was passed. */
    UNKNOWN = -1,
    /** Glares presence check. */
    IMAGE_GLARES = 0,
    /** Focus quality check. */
    IMAGE_FOCUS = 1,
    /** Image resolution check. */
    IMAGE_RESOLUTION = 2,
    /** Image colorness check. */
    IMAGE_COLORNESS = 3,
    /** Image perspective check, i.e. the deviation of the corners of the document from the value of 90 degrees is checked. */
    PERSPECTIVE = 4,
    /** Image quality check if the whole document page is completely within the image. */
    BOUNDS = 5,
    /** Image moire check. */
    SCREEN_CAPTURE = 6,
    /** Portrait image check. */
    PORTRAIT = 7,
    /** Handwritten image check. */
    HANDWRITTEN = 8,
    /** Signals whether the document image is bright enough. */
    BRIGHTNESS = 9,
    /** Document occlusion check. */
    OCCLUSION = 10
}

export declare namespace ImageQualityCheckType {
    function getTranslation(value: ImageQualityCheckType): Promise<string>;
}
