import { Rect } from './Rect';

/** Structure describing single value of the field. */
export declare class Symbol {
    /** ASCII code of symbol. */
    readonly code: number;
    /** Bounds result of the particular value. */
    readonly rect?: Rect;
    /** Symbol recognition probability (0–100, %). */
    readonly probability: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Symbol | null;
}
