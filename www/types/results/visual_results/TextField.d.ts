import { FieldType } from "./FieldType";
import { LCID } from "./LCID";
import { Value } from './Value';
import { CheckResult } from '../status/CheckResult';
import { Comparison } from './Comparison';
import { Validity } from './Validity';

/** Serves for storing information from one text data field. */
export declare class TextField {
    /** Textual field logical type. */
    readonly fieldType: FieldType;
    /** Textual field symbolic name. */
    readonly fieldName: string;
    /**
     * ID of language-culture to differentiate one field of the same type from
     *  another (for example Belarus Passport Page # 31 – Belarusian and Russian
     * fields of the same type).
     */
    readonly lcid: LCID;
    /** LCID symbolic name. */
    readonly lcidName: string;
    /** Value from the field. */
    readonly value?: string;
    readonly getValue?: Value;
    /** An array of values. */
    readonly values: Value[];
    /** Textual field check result. */
    readonly status: CheckResult;
    /** List of all comparison statuses for this field type. */
    readonly comparisonList: Comparison[];
    /** List of all  validity statuses for this field type. */
    readonly validityList: Validity[];
    /** Comparison result of the field. */
    readonly comparisonStatus: CheckResult;
    /** Validity result of the field */
    readonly validityStatus: CheckResult;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): TextField | null;
}
