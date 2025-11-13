import { DocFormat } from './DocumentType';
import { CheckResult } from './status/CheckResult';

/** Structure is used for storing element bounds detection result._ */
export declare class Position {
    /** Document format. */
    readonly docFormat: DocFormat;
    /** Document width. */
    readonly width: number;
    /** Document height. */
    readonly height: number;
    /** Document rotation angle. */
    readonly angle: number;
    /** Resolution in dots per inch. */
    readonly dpi: number;
    /** Internal use parameter. */
    readonly inverse: number;
    /** Internal use parameter. */
    readonly perspectiveTr: number;
    /** Internal use parameter. */
    readonly objArea: number;
    /** Internal use parameter. */
    readonly objIntAngleDev: number;
    /** Internal use parameter. */
    readonly resultStatus: CheckResult;
    /** Document center coordinates. */
    readonly center: Coordinate | null;
    /** Document left top corner coordinates. */
    readonly leftTop: Coordinate | null;
    /** Document left bottom corner coordinates. */
    readonly leftBottom: Coordinate | null;
    /** Document right top corner coordinates. */
    readonly rightTop: Coordinate | null;
    /** Document right bottom corner coordinates. */
    readonly rightBottom: Coordinate | null;
    /** Index of the document page, whence the result is received. */
    readonly pageIndex: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Position | null;
}

/** Structure describing point coordinate. */
export declare class Coordinate {
    readonly x: number;
    readonly y: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Coordinate | null;
}
