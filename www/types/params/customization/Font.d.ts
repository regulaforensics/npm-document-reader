export declare class Font {
    /**
     * Font family.
     *
     * Beware that Android and iOS have diffrent font names,
     * so you will have to use if condition.
     */
    readonly name: string;

    /**
     * Font size.
     */
    readonly size?: number;

    /**
     * Font style.
     *
     * Android only.
     */
    readonly style?: FontStyle;

    constructor(name: string, options?: { size?: number, style?: FontStyle });

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): Font;
}

export declare enum FontStyle {
    NORMAL = 0,
    BOLD = 1,
    ITALIC = 2,
    BOLD_ITALIC = 3,
}
