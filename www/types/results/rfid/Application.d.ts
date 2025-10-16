import { File } from "./File";
import { RFIDErrorCodes } from '../../rfid/RFIDErrorCodes';

/**
 * Structure is used to describe the contents of a single LDS applica-tion
 * and their analysis within the context of the communication session with
 * electronic document.
 */
export declare class Application {
    /** Application identifier. */
    readonly applicationID?: string;
    /** Algorithm for calculating hash values for files for the proce-dure of PA. */
    readonly dataHashAlgorithm?: string;
    /** List of containers to store information about the read files of the application. */
    readonly files: File[];
    /** Status of the application selection procedure. */
    readonly status: RFIDErrorCodes;
    /** Type of application of electronic document. */
    readonly type: RFIDApplicationType;
    /** Unicode version for application. */
    readonly unicodeVersion?: string;
    /** Application version. */
    readonly version?: string;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Application | null;
}

/** Type of application of electronic document. */
export declare enum RFIDApplicationType {
    /** ePassport. */
    E_PASSPORT = 1,
    E_ID = 2,
    E_SIGN = 3,
    E_DL = 4,
    /** Travel Records. */
    LDS2_TRAVEL_RECORDS = 5,
    /** Visa Records. */
    LDS2_VISA_RECORDS = 6,
    /** Add Biometrics. */
    LDS2_ADD_BIOMETRICS = 7,
    /** eDTC PC. */
    E_DTC_PC = 8
}
