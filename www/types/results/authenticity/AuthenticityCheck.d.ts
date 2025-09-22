import { Authenticity } from "./Authenticity";
import { AuthenticityElement } from "./AuthenticityElement";
import { CheckResult } from "../status/CheckResult";

export declare class AuthenticityCheck {
    /**
     * Indicates verification type result.
     */
    readonly type: Authenticity;
    /**
     * Indicates verification result.
     */
    readonly status: CheckResult;
    readonly pageIndex: number;
    readonly elements: AuthenticityElement[];
    readonly typeName: string;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): AuthenticityCheck | null;
}
