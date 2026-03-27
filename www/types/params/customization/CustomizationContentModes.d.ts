export declare class CustomizationContentModes {
    nextPageIdCardFront?: ViewContentMode;
    nextPageIdCardBack?: ViewContentMode;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): CustomizationContentModes;
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
