import { CheckResult } from "./CheckResult";
import { OpticalStatus } from "./OpticalStatus";
import { RFIDStatus } from "./RFIDStatus";

/** Provision of document verification status. */
export declare class ResultsStatus {
    /** Summary of all results. */
    readonly overallStatus: CheckResult;
    /** Summary of all optical results. The same value as {@link OpticalStatus#overallStatus} */
    readonly optical: CheckResult;
    /** Container for an optical related scanning statuses. */
    readonly detailsOptical: OpticalStatus;
    /** Summary of all RFID results. Same as {@link RFIDStatus#overallStatus}. */
    readonly rfid: CheckResult;
    /** Container for a RFID related scanning statuses. */
    readonly detailsRFID: RFIDStatus;
    /** Comparison status for portrait in the document aganist live or external image. */
    readonly portrait: CheckResult;
    /** Verification status for document data against database. */
    readonly stopList: CheckResult;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): ResultsStatus | null;
}
