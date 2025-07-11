export declare class Rect {
    readonly bottom: number;
    readonly top: number;
    readonly left: number;
    readonly right: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Rect | null;
}
