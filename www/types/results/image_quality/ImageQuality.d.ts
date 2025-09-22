import { CheckResult } from "../status/CheckResult";
import { Rect } from "../visual_results/Rect";
import { ImageQualityCheckType } from "./ImageQualityCheckType";

/** Structure, containing information about single image quality check. */
export declare class ImageQuality {
    /** Check result. */
    readonly featureType: number;
    /** Check result. */
    readonly result: CheckResult;
    /** Check result type. */
    readonly type: ImageQualityCheckType;
    /** Coordinates of glares. */
    readonly boundRects: Rect[];

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): ImageQuality | null;
}
