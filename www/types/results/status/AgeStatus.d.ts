import { CheckResult } from "./CheckResult";

/** Container for an age related scanning statuses. */
export declare class AgeStatus {
    readonly threshold: number | null;
    readonly overThreshold: CheckResult;
    readonly over18: CheckResult;
    readonly over21: CheckResult;
    readonly over25: CheckResult;
    readonly over65: CheckResult;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): AgeStatus | null;
}
