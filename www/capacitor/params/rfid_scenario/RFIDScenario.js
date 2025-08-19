import { exec } from '../../internal/bridge';
import { DocumentReader } from '../../index';
import { DTCDataGroup } from "./DTCDataGroup";
import { EDLDataGroups } from "./EDLDataGroups";
import { EIDDataGroups } from "./EIDDataGroups";
import { EPassportDataGroups } from "./EPassportDataGroups";
import { AccessControlProcedureType } from "../../results/rfid/AccessControlProcedureType";

export class RFIDScenario {
    get paceStaticBinding() { return this._paceStaticBinding; }
    set paceStaticBinding(val) {
        this._paceStaticBinding = val;
        this._set({ "paceStaticBinding": val });
    }

    get onlineTA() { return this._onlineTA; }
    set onlineTA(val) {
        this._onlineTA = val;
        this._set({ "onlineTA": val });
    }

    get writeEid() { return this._writeEid; }
    set writeEid(val) {
        this._writeEid = val;
        this._set({ "writeEid": val });
    }

    get universalAccessRights() { return this._universalAccessRights; }
    set universalAccessRights(val) {
        this._universalAccessRights = val;
        this._set({ "universalAccessRights": val });
    }

    get authorizedRestrictedIdentification() { return this._authorizedRestrictedIdentification; }
    set authorizedRestrictedIdentification(val) {
        this._authorizedRestrictedIdentification = val;
        this._set({ "authorizedRestrictedIdentification": val });
    }

    get auxVerificationCommunityID() { return this._auxVerificationCommunityID; }
    set auxVerificationCommunityID(val) {
        this._auxVerificationCommunityID = val;
        this._set({ "auxVerificationCommunityID": val });
    }

    get auxVerificationDateOfBirth() { return this._auxVerificationDateOfBirth; }
    set auxVerificationDateOfBirth(val) {
        this._auxVerificationDateOfBirth = val;
        this._set({ "auxVerificationDateOfBirth": val });
    }

    get skipAA() { return this._skipAA; }
    set skipAA(val) {
        this._skipAA = val;
        this._set({ "skipAA": val });
    }

    get strictProcessing() { return this._strictProcessing; }
    set strictProcessing(val) {
        this._strictProcessing = val;
        this._set({ "strictProcessing": val });
    }

    get pkdDSCertPriority() { return this._pkdDSCertPriority; }
    set pkdDSCertPriority(val) {
        this._pkdDSCertPriority = val;
        this._set({ "pkdDSCertPriority": val });
    }

    get pkdUseExternalCSCA() { return this._pkdUseExternalCSCA; }
    set pkdUseExternalCSCA(val) {
        this._pkdUseExternalCSCA = val;
        this._set({ "pkdUseExternalCSCA": val });
    }

    get trustedPKD() { return this._trustedPKD; }
    set trustedPKD(val) {
        this._trustedPKD = val;
        this._set({ "trustedPKD": val });
    }

    get passiveAuth() { return this._passiveAuth; }
    set passiveAuth(val) {
        this._passiveAuth = val;
        this._set({ "passiveAuth": val });
    }

    get useSFI() { return this._useSFI; }
    set useSFI(val) {
        this._useSFI = val;
        this._set({ "useSFI": val });
    }

    get readEPassport() { return this._readEPassport; }
    set readEPassport(val) {
        this._readEPassport = val;
        this._set({ "readEPassport": val });
    }

    get readEID() { return this._readEID; }
    set readEID(val) {
        this._readEID = val;
        this._set({ "readEID": val });
    }

    get readEDL() { return this._readEDL; }
    set readEDL(val) {
        this._readEDL = val;
        this._set({ "readEDL": val });
    }

    get authorizedSTSignature() { return this._authorizedSTSignature; }
    set authorizedSTSignature(val) {
        this._authorizedSTSignature = val;
        this._set({ "authorizedSTSignature": val });
    }

    get authorizedSTQSignature() { return this._authorizedSTQSignature; }
    set authorizedSTQSignature(val) {
        this._authorizedSTQSignature = val;
        this._set({ "authorizedSTQSignature": val });
    }

    get authorizedWriteDG17() { return this._authorizedWriteDG17; }
    set authorizedWriteDG17(val) {
        this._authorizedWriteDG17 = val;
        this._set({ "authorizedWriteDG17": val });
    }

    get authorizedWriteDG18() { return this._authorizedWriteDG18; }
    set authorizedWriteDG18(val) {
        this._authorizedWriteDG18 = val;
        this._set({ "authorizedWriteDG18": val });
    }

    get authorizedWriteDG19() { return this._authorizedWriteDG19; }
    set authorizedWriteDG19(val) {
        this._authorizedWriteDG19 = val;
        this._set({ "authorizedWriteDG19": val });
    }

    get authorizedWriteDG20() { return this._authorizedWriteDG20; }
    set authorizedWriteDG20(val) {
        this._authorizedWriteDG20 = val;
        this._set({ "authorizedWriteDG20": val });
    }

    get authorizedWriteDG21() { return this._authorizedWriteDG21; }
    set authorizedWriteDG21(val) {
        this._authorizedWriteDG21 = val;
        this._set({ "authorizedWriteDG21": val });
    }

    get authorizedVerifyAge() { return this._authorizedVerifyAge; }
    set authorizedVerifyAge(val) {
        this._authorizedVerifyAge = val;
        this._set({ "authorizedVerifyAge": val });
    }

    get authorizedVerifyCommunityID() { return this._authorizedVerifyCommunityID; }
    set authorizedVerifyCommunityID(val) {
        this._authorizedVerifyCommunityID = val;
        this._set({ "authorizedVerifyCommunityID": val });
    }

    get authorizedPrivilegedTerminal() { return this._authorizedPrivilegedTerminal; }
    set authorizedPrivilegedTerminal(val) {
        this._authorizedPrivilegedTerminal = val;
        this._set({ "authorizedPrivilegedTerminal": val });
    }

    get authorizedCANAllowed() { return this._authorizedCANAllowed; }
    set authorizedCANAllowed(val) {
        this._authorizedCANAllowed = val;
        this._set({ "authorizedCANAllowed": val });
    }

    get authorizedPINManagement() { return this._authorizedPINManagement; }
    set authorizedPINManagement(val) {
        this._authorizedPINManagement = val;
        this._set({ "authorizedPINManagement": val });
    }

    get authorizedInstallCert() { return this._authorizedInstallCert; }
    set authorizedInstallCert(val) {
        this._authorizedInstallCert = val;
        this._set({ "authorizedInstallCert": val });
    }

    get authorizedInstallQCert() { return this._authorizedInstallQCert; }
    set authorizedInstallQCert(val) {
        this._authorizedInstallQCert = val;
        this._set({ "authorizedInstallQCert": val });
    }

    get applyAmendments() { return this._applyAmendments; }
    set applyAmendments(val) {
        this._applyAmendments = val;
        this._set({ "applyAmendments": val });
    }

    get autoSettings() { return this._autoSettings; }
    set autoSettings(val) {
        this._autoSettings = val;
        this._set({ "autoSettings": val });
    }

    get proceedReadingAlways() { return this._proceedReadingAlways; }
    set proceedReadingAlways(val) {
        this._proceedReadingAlways = val;
        this._set({ "proceedReadingAlways": val });
    }

    get readDTC() { return this._readDTC; }
    set readDTC(val) {
        this._readDTC = val;
        this._set({ "readDTC": val });
    }

    get mrzStrictCheck() { return this._mrzStrictCheck; }
    set mrzStrictCheck(val) {
        this._mrzStrictCheck = val;
        this._set({ "mrzStrictCheck": val });
    }

    get loadCRLFromRemote() { return this._loadCRLFromRemote; }
    set loadCRLFromRemote(val) {
        this._loadCRLFromRemote = val;
        this._set({ "loadCRLFromRemote": val });
    }

    get independentSODStatus() { return this._independentSODStatus; }
    set independentSODStatus(val) {
        this._independentSODStatus = val;
        this._set({ "independentSODStatus": val });
    }

    get readingBuffer() { return this._readingBuffer; }
    set readingBuffer(val) {
        this._readingBuffer = val;
        this._set({ "readingBuffer": val });
    }

    get onlineTAToSignDataType() { return this._onlineTAToSignDataType; }
    set onlineTAToSignDataType(val) {
        this._onlineTAToSignDataType = val;
        this._set({ "onlineTAToSignDataType": val });
    }

    get defaultReadingBufferSize() { return this._defaultReadingBufferSize ?? 231; }
    set defaultReadingBufferSize(val) {
        this._defaultReadingBufferSize = val;
        this._set({ "defaultReadingBufferSize": val });
    }

    get signManagementAction() { return this._signManagementAction; }
    set signManagementAction(val) {
        this._signManagementAction = val;
        this._set({ "signManagementAction": val });
    }

    get profilerType() { return this._profilerType; }
    set profilerType(val) {
        this._profilerType = val;
        this._set({ "profilerType": val });
    }

    get authProcType() { return this._authProcType; }
    set authProcType(val) {
        this._authProcType = val;
        this._set({ "authProcType": val });
    }

    get baseSMProcedure() { return this._baseSMProcedure; }
    set baseSMProcedure(val) {
        this._baseSMProcedure = val;
        this._set({ "baseSMProcedure": val });
    }

    get pacePasswordType() { return this._pacePasswordType; }
    set pacePasswordType(val) {
        this._pacePasswordType = val;
        this._set({ "pacePasswordType": val });
    }

    get terminalType() { return this._terminalType; }
    set terminalType(val) {
        this._terminalType = val;
        this._set({ "terminalType": val });
    }

    get password() { return this._password; }
    set password(val) {
        this._password = val;
        this._set({ "password": val });
    }

    get pkdPA() { return this._pkdPA; }
    set pkdPA(val) {
        this._pkdPA = val;
        this._set({ "pkdPA": val });
    }

    get pkdEAC() { return this._pkdEAC; }
    set pkdEAC(val) {
        this._pkdEAC = val;
        this._set({ "pkdEAC": val });
    }

    get mrz() { return this._mrz; }
    set mrz(val) {
        this._mrz = val;
        this._set({ "mrz": val });
    }

    get eSignPINDefault() { return this._eSignPINDefault; }
    set eSignPINDefault(val) {
        this._eSignPINDefault = val;
        this._set({ "eSignPINDefault": val });
    }

    get eSignPINNewValue() { return this._eSignPINNewValue; }
    set eSignPINNewValue(val) {
        this._eSignPINNewValue = val;
        this._set({ "eSignPINNewValue": val });
    }

    get cardAccess() { return this._cardAccess; }
    set cardAccess(val) {
        this._cardAccess = val;
        this._set({ "cardAccess": val });
    }

    get mrzHash() { return this._mrzHash; }
    set mrzHash(val) {
        this._mrzHash = val;
        this._set({ "mrzHash": val });
    }

    get documentNumber() { return this._documentNumber; }
    set documentNumber(val) {
        this._documentNumber = val;
        this._set({ "documentNumber": val });
    }

    get dateOfBirth() { return this._dateOfBirth; }
    set dateOfBirth(val) {
        this._dateOfBirth = val;
        this._set({ "dateOfBirth": val });
    }

    get dateOfExpiry() { return this._dateOfExpiry; }
    set dateOfExpiry(val) {
        this._dateOfExpiry = val;
        this._set({ "dateOfExpiry": val });
    }

    get eDLDataGroups() { return this._eDLDataGroups; }
    set eDLDataGroups(val) { (this._eDLDataGroups = val)._apply(); }

    get ePassportDataGroups() { return this._ePassportDataGroups; }
    set ePassportDataGroups(val) { (this._ePassportDataGroups = val)._apply(); }

    get eIDDataGroups() { return this._eIDDataGroups; }
    set eIDDataGroups(val) { (this._eIDDataGroups = val)._apply(); }

    get dtcDataGroups() { return this._dtcDataGroups; }
    set dtcDataGroups(val) { (this._dtcDataGroups = val)._apply(); }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDScenario();
        result._paceStaticBinding = jsonObject["paceStaticBinding"];
        result._onlineTA = jsonObject["onlineTA"];
        result._writeEid = jsonObject["writeEid"];
        result._universalAccessRights = jsonObject["universalAccessRights"];
        result._authorizedRestrictedIdentification = jsonObject["authorizedRestrictedIdentification"];
        result._auxVerificationCommunityID = jsonObject["auxVerificationCommunityID"];
        result._auxVerificationDateOfBirth = jsonObject["auxVerificationDateOfBirth"];
        result._skipAA = jsonObject["skipAA"];
        result._strictProcessing = jsonObject["strictProcessing"];
        result._pkdDSCertPriority = jsonObject["pkdDSCertPriority"];
        result._pkdUseExternalCSCA = jsonObject["pkdUseExternalCSCA"];
        result._trustedPKD = jsonObject["trustedPKD"];
        result._passiveAuth = jsonObject["passiveAuth"];
        result._useSFI = jsonObject["useSFI"];
        result._readEPassport = jsonObject["readEPassport"];
        result._readEID = jsonObject["readEID"];
        result._readEDL = jsonObject["readEDL"];
        result._authorizedSTSignature = jsonObject["authorizedSTSignature"];
        result._authorizedSTQSignature = jsonObject["authorizedSTQSignature"];
        result._authorizedWriteDG17 = jsonObject["authorizedWriteDG17"];
        result._authorizedWriteDG18 = jsonObject["authorizedWriteDG18"];
        result._authorizedWriteDG19 = jsonObject["authorizedWriteDG19"];
        result._authorizedWriteDG20 = jsonObject["authorizedWriteDG20"];
        result._authorizedWriteDG21 = jsonObject["authorizedWriteDG21"];
        result._authorizedVerifyAge = jsonObject["authorizedVerifyAge"];
        result._authorizedVerifyCommunityID = jsonObject["authorizedVerifyCommunityID"];
        result._authorizedPrivilegedTerminal = jsonObject["authorizedPrivilegedTerminal"];
        result._authorizedCANAllowed = jsonObject["authorizedCANAllowed"];
        result._authorizedPINManagement = jsonObject["authorizedPINManagement"];
        result._authorizedInstallCert = jsonObject["authorizedInstallCert"];
        result._authorizedInstallQCert = jsonObject["authorizedInstallQCert"];
        result._applyAmendments = jsonObject["applyAmendments"];
        result._autoSettings = jsonObject["autoSettings"];
        result._proceedReadingAlways = jsonObject["proceedReadingAlways"];
        result._readDTC = jsonObject["readDTC"];
        result._mrzStrictCheck = jsonObject["mrzStrictCheck"];
        result._loadCRLFromRemote = jsonObject["loadCRLFromRemote"];
        result._independentSODStatus = jsonObject["independentSODStatus"];
        result._readingBuffer = jsonObject["readingBuffer"];
        result._onlineTAToSignDataType = jsonObject["onlineTAToSignDataType"];
        result._defaultReadingBufferSize = jsonObject["defaultReadingBufferSize"];
        result._signManagementAction = jsonObject["signManagementAction"];
        result._profilerType = jsonObject["profilerType"];
        result._authProcType = jsonObject["authProcType"];
        result._baseSMProcedure = jsonObject["baseSMProcedure"];
        result._pacePasswordType = jsonObject["pacePasswordType"];
        result._terminalType = jsonObject["terminalType"];
        result._password = jsonObject["password"];
        result._pkdPA = jsonObject["pkdPA"];
        result._pkdEAC = jsonObject["pkdEAC"];
        result._mrz = jsonObject["mrz"];
        result._eSignPINDefault = jsonObject["eSignPINDefault"];
        result._eSignPINNewValue = jsonObject["eSignPINNewValue"];
        result._cardAccess = jsonObject["cardAccess"];
        result._mrzHash = jsonObject["mrzHash"];
        result._documentNumber = jsonObject["documentNumber"];
        result._dateOfBirth = jsonObject["dateOfBirth"];
        result._dateOfExpiry = jsonObject["dateOfExpiry"];
        result._eDLDataGroups = EDLDataGroups.fromJson(jsonObject["eDLDataGroups"]);
        result._ePassportDataGroups = EPassportDataGroups.fromJson(jsonObject["ePassportDataGroups"]);
        result._eIDDataGroups = EIDDataGroups.fromJson(jsonObject["eIDDataGroups"]);
        result._dtcDataGroups = DTCDataGroup.fromJson(jsonObject["dtcDataGroups"]);
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        if (this === DocumentReader.instance.rfidScenario)
            exec("setRfidScenario", [json]);
    }
}

export const RFIDAuthenticationProcedureType = {
    UNDEFINED: 0,
    STANDARD: 1,
    ADVANCED: 2,
    GENERAL: 3
};

export const RFIDPasswordType = {
    UNDEFINED: 0,
    MRZ: 1,
    CAN: 2,
    PIN: 3,
    PUK: 4,
    PIN_ESIGN: 5,
    SAI: 6,
    MRZ_HASH: 7
};

export const RFIDSDKProfilerType = {
    UNKNOWN: -1,
    DOC_9303_EDITION_2006: 1,
    DOC_9303_LDS_PKI_MAINTENANCE: 2
};

export const RFIDTerminalType = {
    UNDEFINED: 0,
    INSPECTION_SYSTEM: 1,
    AUTHENTICATION_TERMINAL: 2,
    SIGNATURE_TERMINAL: 3,
    UNAUTHENTICATED_TERMINAL: 4
};

export const SignManagementAction = {
    UNDEFINED: 0,
    CREATE_PIN: 1,
    CHANGE_PIN: 2,
    UNBLOCK_PIN: 3,
    TERMINATE_PIN: 4,
    GENERATE_KEYS: 5,
    TERMINATE_KEYS: 6,
    SIGN_DATA: 7
};

export const RFIDReadingBufferSize = {
    STANDARD_LENGTH: 0,
    EXTENDED_LENGTH: -1
};
