import { ResultType } from "../Results";
import { CheckResult } from '../status/CheckResult';

/** Structure describing single value of the field. */
export declare class TextSource {
    /** The value's origin source. */
    readonly sourceType: ResultType;
    /** The value's origin source string description. */
    readonly source?: string;
    /** Overall validity status of all text fields of this source type. */
    readonly validityStatus: CheckResult;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): TextSource | null;
}
