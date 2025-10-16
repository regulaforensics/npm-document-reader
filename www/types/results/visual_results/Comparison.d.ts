import { CheckResult } from "../status/CheckResult";
import { ResultType } from "../Results";

/** Structure describing single value of the field. */
export declare class Comparison {
    /** The value's origin source. */
    readonly sourceTypeLeft: ResultType;
    /** The value's origin source. */
    readonly sourceTypeRight: ResultType;
    /** The status of field comparisons. */
    readonly status: CheckResult;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Comparison | null;
}
