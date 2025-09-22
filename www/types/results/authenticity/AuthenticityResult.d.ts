import { AuthenticityCheck } from "./AuthenticityCheck";
import { CheckResult } from "../status/CheckResult";

export declare class AuthenticityResult {
    /**
     * @deprecated since 7.6, use `ResultsStatus.optical` instead
     */
    readonly status: CheckResult;
    readonly checks: AuthenticityCheck[];

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): AuthenticityResult | null;
}
