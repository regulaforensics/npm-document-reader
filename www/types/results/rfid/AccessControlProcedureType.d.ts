import { RFIDErrorCodes } from "../../rfid/RFIDErrorCodes";
import { RFIDAccessControlProcedureType } from "./RFIDAccessControlProcedureType";

/**
* Structure is used to describe the results of a single authentication
* procedure or a procedure of secure data access within the context
* of the communication session with electronic document.
*/
export declare class AccessControlProcedureType {
    /** Index of the active variant of the procedure. */
    readonly activeOptionIdx: number;
    /** List of remarks arisen during the procedure. */
    readonly notifications: number[];
    /** Procedure status. */
    readonly status: RFIDErrorCodes;
    /** Procedure type. */
    readonly type: RFIDAccessControlProcedureType;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): AccessControlProcedureType | null;
}
