import { SecurityFeatureType } from "./SecurityFeatureType";
import { CheckDiagnose } from "./CheckDiagnose";
import { CheckResult } from "../status/CheckResult";

export declare class AuthenticityElement {
    /**
     * Indicates verification result of the field.
     */
    readonly status: CheckResult;
    /**
     * Indicates element type.
     */
    readonly elementType: SecurityFeatureType;
    /**
     * Indicates element diagnose.
     */
    readonly elementDiagnose: CheckDiagnose;
    readonly elementTypeName: string;
    readonly elementDiagnoseName: string;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): AuthenticityElement | null;
}
