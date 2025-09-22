import { CheckResult } from "../status/CheckResult";
import { ImageQuality } from "./ImageQuality";

/** Structure, containing overall data about quality checks performed. */
export declare class ImageQualityGroup {
    /** Number of results. */
    readonly count: number;
    /** Overall check result for document page. */
    readonly result: CheckResult;
    /** An array of single check result pointers. */
    readonly imageQualityList: ImageQuality[];
    /** Index of the document page, whence the result is received. */
    readonly pageIndex: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): ImageQuality | null;
}
