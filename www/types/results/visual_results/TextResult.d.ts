import { CheckResult } from "../status/CheckResult";
import { TextSource } from './TextSource';
import { TextField } from './TextField';

/** Structure, containing all text data extracted and recognized from the document. */
export declare class TextResult {
    /** Textual fields check result. */
    readonly status: CheckResult;
    /** Comparison status of all text fields. */
    readonly comparisonStatus: CheckResult;
    /** Validity status of all text fields. */
    readonly validityStatus: CheckResult;
    /**
     * List of all available origin source with overall validity
     * status of all text fields of a particular source type.
     */
    readonly availableSourceList: TextSource[];
    /** An array of textual results. */
    readonly fields: TextField[];

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): TextResult | null;
}
