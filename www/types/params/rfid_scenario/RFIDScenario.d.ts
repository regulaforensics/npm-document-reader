import { DTCDataGroup } from "./DTCDataGroups";
import { EDLDataGroups } from "./EDLDataGroups";
import { EIDDataGroups } from "./EIDDataGroups";
import { EPassportDataGroups } from "./EPassportDataGroups";
import { AccessControlProcedureType } from "../../results/rfid/AccessControlProcedureType";

/**
 * Params that influence the RFID chip processing.
 */
export declare class RFIDScenario {
    paceStaticBinding?: boolean;
    onlineTA?: boolean;
    writeEid?: boolean;
    universalAccessRights?: boolean;
    authorizedRestrictedIdentification?: boolean;
    auxVerificationCommunityID?: boolean;
    auxVerificationDateOfBirth?: boolean;
    skipAA?: boolean;
    strictProcessing?: boolean;
    pkdDSCertPriority?: boolean;
    pkdUseExternalCSCA?: boolean;
    trustedPKD?: boolean;
    passiveAuth?: boolean;
    useSFI?: boolean;
    readEPassport?: boolean;
    readEID?: boolean;
    readEDL?: boolean;
    authorizedSTSignature?: boolean;
    authorizedSTQSignature?: boolean;
    authorizedWriteDG17?: boolean;
    authorizedWriteDG18?: boolean;
    authorizedWriteDG19?: boolean;
    authorizedWriteDG20?: boolean;
    authorizedWriteDG21?: boolean;
    authorizedVerifyAge?: boolean;
    authorizedVerifyCommunityID?: boolean;
    authorizedPrivilegedTerminal?: boolean;
    authorizedCANAllowed?: boolean;
    authorizedPINManagement?: boolean;
    authorizedInstallCert?: boolean;
    authorizedInstallQCert?: boolean;
    applyAmendments?: boolean;
    autoSettings?: boolean;
    /**
     * If set to `true`, continue RFID chip processing, despite ICAO critical errors.
     */
    proceedReadingAlways?: boolean;
    readDTC?: boolean;
    /**
     * Perform check MRZ according to standard described in
     * BSI TR - 03105: ePassport Conformity Testing(v 1.0 04.04.2008).
     */
    mrzStrictCheck?: boolean;
    /**
     * If enabled, Certificate Revoke List(s) (CRL) will be loaded from remote and verified.
     */
    loadCRLFromRemote?: boolean;
    independentSODStatus?: boolean;
    readingBuffer?: RFIDReadingBufferSize;
    onlineTAToSignDataType?: number;
    defaultReadingBufferSize: number;
    signManagementAction?: SignManagementAction;
    profilerType?: RFIDSDKProfilerType;
    authProcType?: RFIDAuthenticationProcedureType;
    baseSMProcedure?: AccessControlProcedureType;
    pacePasswordType?: RFIDPasswordType;
    terminalType?: RFIDTerminalType;
    password?: string;
    pkdPA?: string;
    pkdEAC?: string;
    mrz?: string;
    eSignPINDefault?: string;
    eSignPINNewValue?: string;
    cardAccess?: string;
    mrzHash?: string;
    documentNumber?: string;
    dateOfBirth?: string;
    dateOfExpiry?: string;
    eDLDataGroups: EDLDataGroups;
    ePassportDataGroups: EPassportDataGroups;
    eIDDataGroups: EIDDataGroups;
    dtcDataGroups: DTCDataGroup;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): RFIDScenario;
}

export declare enum RFIDAuthenticationProcedureType {
    /** Not defined. */
    UNDEFINED = 0,
    /** Standard authentication procedure. */
    STANDARD = 1,
    /** Advanced authentication procedure. */
    ADVANCED = 2,
    /** General authentication procedure. */
    GENERAL = 3,
}

export declare enum RFIDPasswordType {
    /** Unknown type. */
    UNDEFINED = 0,
    /** MRZ. */
    MRZ = 1,
    /** CAN. */
    CAN = 2,
    /** PIN. */
    PIN = 3,
    /** PUK. */
    PUK = 4,
    /** eSign-PIN. */
    PIN_ESIGN = 5,
    /** Scanning Area Identifier (for eDL application). */
    SAI = 6,
    /** MRZHash. */
    MRZ_HASH = 7,
}

export declare enum RFIDSDKProfilerType {
    /** Will be returned if getByValue if a non-existent was passed. */
    UNKNOWN = -1,
    /** Doc 9303, 6th edition, 2006. */
    DOC_9303_EDITION_2006 = 1,
    /** LDS and PKI Maintenance, v2.0, May 21, 2014. */
    DOC_9303_LDS_PKI_MAINTENANCE = 2,
}

export declare enum RFIDTerminalType {
    /** Not defined. */
    UNDEFINED = 0,
    /** Inspection system. */
    INSPECTION_SYSTEM = 1,
    /** Authentication terminal */
    AUTHENTICATION_TERMINAL = 2,
    /** Signature terminal. */
    SIGNATURE_TERMINAL = 3,
    /** Unauthenticated terminal. */
    UNAUTHENTICATED_TERMINAL = 4,
}

export declare enum SignManagementAction {
    /** Not identified. */
    UNDEFINED = 0,
    /** Create PIN. */
    CREATE_PIN = 1,
    /** Change PIN. */
    CHANGE_PIN = 2,
    /** Unblock PIN */
    UNBLOCK_PIN = 3,
    /** Terminate PIN. */
    TERMINATE_PIN = 4,
    /** Generate keys. */
    GENERATE_KEYS = 5,
    /** Terminate keys. */
    TERMINATE_KEYS = 6,
    /** Sign data. */
    SIGN_DATA = 7,
}

export declare enum RFIDReadingBufferSize {
    /** Standard length. */
    STANDARD_LENGTH = 0,
    /** Extended length. */
    EXTENDED_LENGTH = -1,
}
