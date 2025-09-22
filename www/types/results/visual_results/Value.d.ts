import { ResultType } from "../Results";
import { Rect } from './Rect';
import { RFIDOrigin } from './RFIDOrigin';
import { Symbol } from './Symbol';

/** Structure describing single value of the field. */
export declare class Value {
    /** Identifies zone whence data is extracted. */
    readonly sourceType: ResultType;
    /** A value. */
    readonly value?: string;
    /** An original value. */
    readonly originalValue?: string;
    /** An index of the document page whence the textual field is extracted. */
    readonly pageIndex: number;
    /** Field rectangular area coordinates on the image. */
    readonly boundRect?: Rect;
    /** RFID origin data. Only for the 'RFID' source. */
    readonly rfidOrigin?: RFIDOrigin;
    /** List of all symbols for this value. */
    readonly originalSymbols: Symbol[];
    /** Textual field recognition probability (0 - 100, %). */
    readonly probability: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Value | null;
}
