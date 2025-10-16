import { CheckResult } from "./CheckResult";

/** Container for a RFID related scanning statuses. */
export declare class RFIDStatus {
    /** Summary of all RFID results. */
    readonly overallStatus: CheckResult;
    /** Passive authentication status. */
    readonly pa: CheckResult;
    /** Chip authentication status. */
    readonly ca: CheckResult;
    /** Acitve authentication status. */
    readonly aa: CheckResult;
    /** Terminal authentication status. */
    readonly ta: CheckResult;
    /** Basics access control status. */
    readonly bac: CheckResult;
    /** Password authenticated connection establishment status. */
    readonly pace: CheckResult;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): RFIDStatus | null;
}
