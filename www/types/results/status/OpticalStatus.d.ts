import { CheckResult } from "./CheckResult";

/** Container for an optical related scanning statuses. */
export declare class OpticalStatus {
    /** Summary of all optical results. */
    readonly overallStatus: CheckResult;
    /** MRZ verification: values validity, dates, checkdigits verification. */
    readonly mrz: CheckResult;
    /**
     * Text fields valitity: values validity for specific fields, cross-comparison
     * of values from different sources, dates & checkdigits verification.
     */
    readonly text: CheckResult;
    /** Check status if document type was recognized or not. */
    readonly docType: CheckResult;
    /** Authenticity verification status. */
    readonly security: CheckResult;
    /** Input images quality verification status. */
    readonly imageQA: CheckResult;
    /** Document validity period verification status. */
    readonly expiry: CheckResult;
    /** Visible Digital Seal verification status. */
    readonly vds: CheckResult;
    /** Number of scanned document pages. */
    readonly pagesCount: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): OpticalStatus | null;
}
