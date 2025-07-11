import { AccessControlProcedureType } from "./AccessControlProcedureType";
import { Application } from "./Application";
import { CardProperties } from "./CardProperties";
import { DataField } from "./DataField";
import { RFIDDataFileType } from "./RFIDDataFileType";
import { RFIDErrorCodes } from "../../rfid/RFIDErrorCodes";
import { SecurityObject } from "./SecurityObject";

/**
 * Used to describe the results of work with the SDK within the context
 * of the current communication session with electronic document.
 */
export declare class RFIDSessionData {
    /**
     * List of containers to store information about the supported procedures
     * of authentication and secure data access within the context of the session.
     */
    readonly accessControls: AccessControlProcedureType[];
    /**
     * List of containers to store information about the involved ap-plications
     * of electronic document.
     */
    readonly applications: Application[];
    /**
     * List of containers to store information about the detected
     * document security objects.
     */
    readonly securityObjects: SecurityObject[];
    /** Set of electronic document chip characteristics. */
    readonly cardProperties: CardProperties | null;
    /** Total number of bytes received from the RFID-chip during the whole session. */
    readonly totalBytesReceived: number;
    /** Total number of bytes transmitted to the RFID-chip during the whole session. */
    readonly totalBytesSent: number;
    /** Status. */
    readonly status: RFIDErrorCodes;
    /** Sign of support of RFID-chip for extended length commands of reading. */
    readonly extLeSupport: RFIDErrorCodes;
    /** Total time of all operations performed during the session, ms. */
    readonly processTime: number;
    /** List of data fields */
    readonly dataFields: DataField[];
    /** List of data groups. */
    readonly dataGroups: RFIDDataFileType[] | null;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): RFIDSessionData | null;
}
