import { ResultType } from "../Results";
import { CheckResult } from '../status/CheckResult';

/** Structure describing single value of the field. */
export declare class Validity {
    /** The value's origin source. */
    readonly sourceType: ResultType;
    /** Overall validity status of all text fields of this particular field. */
    readonly status: CheckResult;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Validity | null;
}
