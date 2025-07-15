import { exec, _setDocumentReaderCompletion, _setRFIDCompletion, _setDocumentReaderPrepareCompletion, _setCustomButtonTappedCompletion, _setVideoEncoderCompletion, _setRFIDProgressCompletion, _setChipDetectedCompletion, _setRetryReadChipCompletion, _setPaCertificateCompletion, _setTaCertificateCompletion, _setTaSignatureCompletion } from './internal/bridge'

import { OnlineProcessingConfig, ImageFormat, OnlineMode } from './config/OnlineProcessingConfig';
import { InitConfig } from './config/InitConfig';
import { RFIDConfig } from './config/RFIDConfig';
import { ScannerConfig } from './config/ScannerConfig';
import { RecognizeConfig, ImageInputData } from './config/RecognizeConfig';
export { OnlineProcessingConfig, ImageFormat, OnlineMode, InitConfig, RFIDConfig, ScannerConfig, RecognizeConfig, ImageInputData };

import { DocReaderVersion } from './info/DocReaderVersion';
import { PrepareProgress } from './info/PrepareProgress';
import { DocReaderException, ErrorCodes } from './info/DocReaderException';
import { DocumentsDatabase } from './info/DocumentsDatabase';
import { License } from './info/License';
import { DocReaderScenario, Scenario, DocReaderOrientation } from './info/DocReaderScenario';
import { RFIDException } from './info/RFIDException';
export { DocReaderVersion, PrepareProgress, DocReaderException, ErrorCodes, DocumentsDatabase, License, DocReaderScenario, Scenario, DocReaderOrientation, RFIDException };

import { LCID } from './results/visual_results/LCID';
import { GraphicFieldType } from './results/visual_results/GraphicFieldType';
import { Value } from './results/visual_results/Value';
import { Rect } from './results/visual_results/Rect';
import { Symbol } from './results/visual_results/Symbol';
import { Comparison } from './results/visual_results/Comparison';
import { TextField } from './results/visual_results/TextField';
import { Lights } from './results/visual_results/Lights';
import { Validity } from './results/visual_results/Validity';
import { FieldType } from './results/visual_results/FieldType';
import { GraphicField } from './results/visual_results/GraphicField';
import { RFIDOrigin } from './results/visual_results/RFIDOrigin';
import { TextResult } from './results/visual_results/TextResult';
import { TextSource } from './results/visual_results/TextSource';
import { GraphicResult } from './results/visual_results/GraphicResult';
export { LCID, GraphicFieldType, Value, Rect, Symbol, Comparison, TextField, Lights, Validity, FieldType, GraphicField, RFIDOrigin, TextResult, TextSource, GraphicResult };

import { DocumentType, DocFormat, DocType as DocumentTypeEnum } from './results/DocumentType';
import { Results, ResultType } from './results/Results';
import { TransactionInfo } from './results/TransactionInfo';
import { Position, Coordinate } from './results/Position';
export { DocumentType, DocFormat, DocumentTypeEnum, Results, ResultType, TransactionInfo, Position, Coordinate };

import { RFIDStatus } from './results/status/RFIDStatus';
import { ResultsStatus } from './results/status/ResultsStatus';
import { CheckResult } from './results/status/CheckResult';
import { OpticalStatus } from './results/status/OpticalStatus';
import { ProcessingFinishedStatus } from './results/Results';
export { RFIDStatus, ResultsStatus, CheckResult, OpticalStatus, ProcessingFinishedStatus };

import { CheckDiagnose } from './results/authenticity/CheckDiagnose';
import { AuthenticityElement } from './results/authenticity/AuthenticityElement';
import { AuthenticityResult } from './results/authenticity/AuthenticityResult';
import { AuthenticityCheck } from './results/authenticity/AuthenticityCheck';
import { SecurityFeatureType } from './results/authenticity/SecurityFeatureType';
import { Authenticity } from './results/authenticity/Authenticity';
export { CheckDiagnose, AuthenticityElement, AuthenticityResult, AuthenticityCheck, SecurityFeatureType, Authenticity };

import { PDF417Info } from './results/barcode/PDF417Info';
import { BarcodeStatus } from './results/barcode/BarcodeStatus';
import { BarcodeType } from './results/barcode/BarcodeType';
import { BarcodeResult } from './results/barcode/BarcodeResult';
import { BarcodeField } from './results/barcode/BarcodeField';
export { PDF417Info, BarcodeStatus, BarcodeType, BarcodeResult, BarcodeField };

import { ImageQuality } from './results/image_quality/ImageQuality';
import { ImageQualityGroup } from './results/image_quality/ImageQualityGroup';
import { ImageQualityCheckType } from './results/image_quality/ImageQualityCheckType';
export { ImageQuality, ImageQualityGroup, ImageQualityCheckType };

import { LDSParsingErrorCodes } from './results/visible_digital_seals/LDSParsingErrorCodes';
import { VDSNCData } from './results/visible_digital_seals/VDSNCData';
import { BytesData } from './results/visible_digital_seals/BytesData';
import { LDSParsingNotificationCodes } from './results/visible_digital_seals/LDSParsingNotificationCodes';
export { LDSParsingErrorCodes, VDSNCData, BytesData, LDSParsingNotificationCodes };

import { SecurityObject } from './results/rfid/SecurityObject';
import { CardProperties } from './results/rfid/CardProperties';
import { DataField } from './results/rfid/DataField';
import { Attribute } from './results/rfid/Attribute';
import { SignerInfo } from './results/rfid/SignerInfo';
import { SecurityObjectCertificates } from './results/rfid/SecurityObjectCertificates';
import { CertificateChain } from './results/rfid/CertificateChain';
import { Authority } from './results/rfid/Authority';
import { File } from './results/rfid/File';
import { RFIDValue } from './results/rfid/RFIDValue';
import { RFIDValidity } from './results/rfid/RFIDValidity';
import { RFIDDataFileType } from './results/rfid/RFIDDataFileType';
import { CertificateData } from './results/rfid/CertificateData';
import { FileData } from './results/rfid/FileData';
import { RFIDCertificateType } from './results/rfid/RFIDCertificateType';
import { RFIDSessionData } from './results/rfid/RFIDSessionData';
import { Application, RFIDApplicationType } from './results/rfid/Application';
import { RFIDAccessControlProcedureType } from './results/rfid/RFIDAccessControlProcedureType';
import { Extension } from './results/rfid/Extension';
import { AccessControlProcedureType } from './results/rfid/AccessControlProcedureType';
export { SecurityObject, CardProperties, DataField, Attribute, SignerInfo, SecurityObjectCertificates, CertificateChain, Authority, File, RFIDValue, RFIDValidity, RFIDDataFileType, CertificateData, FileData, RFIDCertificateType, RFIDSessionData, Application, RFIDApplicationType, RFIDAccessControlProcedureType, Extension, AccessControlProcedureType };

import { LivenessParams } from './params/process_params/LivenessParams';
import { ProcessParams, MeasureSystem, MRZFormat, LogLevel, MrzDetectionModes } from './params/process_params/ProcessParams';
import { GlaresCheckParams } from './params/process_params/GlaresCheckParams';
import { FaceApiParams } from './params/process_params/FaceApiParams';
import { RFIDParams } from './params/process_params/RfidParams';
import { ImageQA } from './params/process_params/ImageQA';
import { AuthenticityParams } from './params/process_params/AuthenticityParams';
import { BackendProcessingConfig } from './params/process_params/BackendProcessingConfig';
import { FaceApiSearchParams } from './params/process_params/FaceApiSearchParams';
export { LivenessParams, ProcessParams, MeasureSystem, MRZFormat, LogLevel, MrzDetectionModes, GlaresCheckParams, FaceApiParams, RFIDParams as RfidParams, ImageQA, AuthenticityParams, BackendProcessingConfig, FaceApiSearchParams };

import { Functionality, CameraPosition, CaptureMode, CameraMode, CaptureSessionPreset, DocReaderFrame, CameraSize } from './params/Functionality';
export { Functionality, CameraPosition, CaptureMode, CameraMode, CaptureSessionPreset, DocReaderFrame, CameraSize };

import { CustomizationFonts } from './params/customization/CustomizationFonts';
import { CustomizationImages } from './params/customization/CustomizationImages';
import { Font, FontStyle } from './params/customization/Font';
import { Customization, Cap, FrameShapeType, ViewContentMode, CustomButtonTag } from './params/customization/Customization';
import { CustomizationColors } from './params/customization/CustomizationColors';
export { CustomizationFonts, CustomizationImages, Font, FontStyle, Customization, Cap, FrameShapeType, ViewContentMode, CustomButtonTag, CustomizationColors };

import { EPassportDataGroups } from './params/rfid_scenario/EPassportDataGroups';
import { EIDDataGroups } from './params/rfid_scenario/EIDDataGroups';
import { DTCDataGroup } from './params/rfid_scenario/DTCDataGroups';
import { RFIDScenario, RFIDAuthenticationProcedureType, RFIDPasswordType, RFIDSDKProfilerType, RFIDTerminalType, SignManagementAction, RFIDReadingBufferSize } from './params/rfid_scenario/RFIDScenario';
import { EDLDataGroups } from './params/rfid_scenario/EDLDataGroups';
export { EPassportDataGroups, EIDDataGroups, DTCDataGroup as DTCDataGroups, RFIDScenario, RFIDAuthenticationProcedureType, RFIDPasswordType, RFIDSDKProfilerType, RFIDTerminalType, SignManagementAction, RFIDReadingBufferSize, EDLDataGroups };

import { PAResourcesIssuer } from './rfid/PAResourcesIssuer';
import { RFIDErrorCodes } from './rfid/RFIDErrorCodes';
import { TccParams } from './rfid/TccParams';
import { RFIDNotification, RFIDNotificationCodes } from './rfid/RFIDNotification';
import { PAAttribute } from './rfid/PAAttribute';
import { TAChallenge } from './rfid/TAChallenge';
import { PKDCertificate, PKDResourceType } from './rfid/PKDCertificate';
export { PAResourcesIssuer, RFIDErrorCodes, TccParams, RFIDNotification, RFIDNotificationCodes, PAAttribute, TAChallenge, PKDCertificate, PKDResourceType };

export class DocumentReader {
    static get instance() { return DocumentReader._instance }
    static _instance = new DocumentReader()

    get availableScenarios() { return this._availableScenarios }
    _availableScenarios = []

    get version() { return this._version }
    _version = null

    get license() { return this._license }
    _license = new License()

    async isRFIDAvailableForUse() {
        return await exec("getIsRFIDAvailableForUse", []);
    }

    async isAuthenticatorRFIDAvailableForUse() {
        return await exec("isAuthenticatorRFIDAvailableForUse", []);
    }

    async isAuthenticatorAvailableForUse() {
        return await exec("isAuthenticatorAvailableForUse", []);
    }

    get rfidSessionStatus() { return this._rfidSessionStatus }
    _rfidSessionStatus = null
    set rfidSessionStatus(val) {
        this._rfidSessionStatus = val;
        this._setRfidSessionStatus(val);
    }

    get tag() { return this._tag }
    _tag = null
    set tag(val) {
        this._tag = val;
        this._setTag(val);
    }

    get tenant() { return this._tenant }
    _tenant = null
    set tenant(val) {
        this._tenant = val;
        this._setTenant(val);
    }

    get env() { return this._env }
    _env = null
    set env(val) {
        this._env = val;
        this._setEnv(val);
    }

    get locale() { return this._locale }
    _locale = null
    set locale(val) {
        this._locale = val;
        this._setLocale(val);
    }

    get localizationDictionary() { return this._localizationDictionary }
    _localizationDictionary = null
    set localizationDictionary(val) {
        var temp = Object.assign({}, val);
        Object.freeze(temp);
        this._localizationDictionary = temp
        this._setLocalizationDictionary(val)
    }

    get functionality() { return this._functionality }
    _functionality = new Functionality()
    set functionality(val) {
        this._functionality = val;
        this._functionality._apply();
    }

    get processParams() { return this._processParams }
    _processParams = new ProcessParams()
    set processParams(val) {
        this._processParams = val;
        this._processParams._apply();
    }

    get customization() { return this._customization }
    _customization = new Customization()
    set customization(val) {
        this._customization = val;
        this._customization._apply();
    }

    get rfidScenario() { return this._rfidScenario }
    _rfidScenario = new RFIDScenario()
    set rfidScenario(val) {
        this._rfidScenario = val;
        this._rfidScenario._apply();
    }

    async isReady() {
        return await exec("getDocumentReaderIsReady", []);
    }

    async status() {
        return await exec("getDocumentReaderStatus", []);
    }

    resetConfiguration() {
        exec("resetConfiguration", []);
        this._functionality = new Functionality();
        this._processParams = new ProcessParams();
        this._customization = new Customization();
        this._rfidScenario = new RFIDScenario();
    }

    set onCustomButtonTapped(completion) {
        _setCustomButtonTappedCompletion(completion);
    }

    set videoEncoderCompletion(completion) {
        _setVideoEncoderCompletion(completion);
    }

    async initialize(config) {
        var response = await exec("initialize", [config])
        var [success, error] = this._successOrErrorFromJson(response)
        if (success) await this._onInit()
        return [success, error]
    }

    async connectBluetoothDevice(deviceName) {
        this.functionality.btDeviceName = deviceName;
        return await exec("connectBluetoothDevice", [deviceName]);
    }

    async deinitializeReader() {
        await exec("deinitializeReader", []);
    }

    async prepareDatabase(databaseID, prepareCompletion) {
        _setDocumentReaderPrepareCompletion(prepareCompletion);
        var response = await exec("prepareDatabase", [databaseID]);
        return this._successOrErrorFromJson(response);
    }

    async runAutoUpdate(databaseID, prepareCompletion) {
        _setDocumentReaderPrepareCompletion(prepareCompletion);
        var response = await exec("runAutoUpdate", [databaseID]);
        return this._successOrErrorFromJson(response);
    }

    async checkDatabaseUpdate(databaseID) {
        var response = await exec("checkDatabaseUpdate", [databaseID]);
        return DocumentsDatabase.fromJson(response ? JSON.parse(response) : null);
    }

    async cancelDBUpdate() {
        return await exec("cancelDBUpdate", []);
    }

    async removeDatabase() {
        return await exec("removeDatabase", []);
    }

    async startNewPage() {
        await exec("startNewPage", []);
    }

    async startNewSession() {
        await exec("startNewSession", []);
    }

    scan(config, completion) {
        _setDocumentReaderCompletion(completion);
        exec("scan", [config]);
    }

    startScanner(config, completion) {
        _setDocumentReaderCompletion(completion);
        exec("startScanner", [config]);
    }

    recognize(config, completion) {
        _setDocumentReaderCompletion(completion);
        exec("recognize", [config]);
    }

    rfid(config) {
        if (config._disableUI) {
            _setRFIDCompletion(config._rfidCompletion);
        } else {
            _setDocumentReaderCompletion(config._completion);
        }

        _setRFIDProgressCompletion(config.onProgress);
        _setChipDetectedCompletion(config.onChipDetected);
        _setRetryReadChipCompletion(config.onRetryReadChip);
        _setPaCertificateCompletion(config.onRequestPACertificates);
        _setTaCertificateCompletion(config.onRequestTACertificates);
        _setTaSignatureCompletion(config.onRequestTASignature);

        exec(config._disableUI ? "readRFID" : "startRFIDReader", [
            config.onRequestPACertificates != null,
            config.onRequestTACertificates != null,
            config.onRequestTASignature != null,
        ]);
    }

    async stopScanner() {
        await exec("stopScanner", []);
    }

    async stopRFIDReader() {
        await exec("stopRFIDReader", []);
    }

    async addPKDCertificates(certificates) {
        await exec("addPKDCertificates", [certificates]);
    }

    async clearPKDCertificates() {
        await exec("clearPKDCertificates", []);
    }

    async setTCCParams(params) {
        var response = await exec("setTCCParams", [params]);
        return this._successOrErrorFromJson(response);
    }

    async finalizePackage() {
        var response = await exec("finalizePackage", []);
        var jsonObject = JSON.parse(response);
        var action = jsonObject["action"];
        var info = TransactionInfo.fromJson(jsonObject["info"]);
        var error = DocReaderException.fromJson(jsonObject["error"]);

        return [action, info, error];
    }

    async endBackendTransaction() {
        await exec("endBackendTransaction", []);
    }

    _successOrErrorFromJson(jsonString) {
        var jsonObject = JSON.parse(jsonString);
        var success = jsonObject["success"];
        var error = DocReaderException.fromJson(jsonObject["error"]);
        return [success, error];
    }

    async _onInit() {
        this._version = await this._getDocReaderVersion();
        this._availableScenarios = await this._getAvailableScenarios();
        this._license = await this._getLicense();
        this._tag = await this._getTag();
        this._tenant = await this._getTenant();
        this._env = await this._getEnv();
        this._locale = await this._getLocale();
        this._rfidSessionStatus = await this._getRfidSessionStatus();
        this._functionality = await this._getFunctionality();
        this._processParams = await this._getProcessParams();
        this._customization = await this._getCustomization();
        this._rfidScenario = await this._getRfidScenario();
    }

    async _getProcessParams() {
        const response = await exec("getProcessParams", []);
        return ProcessParams.fromJson(JSON.parse(response));
    }

    async _getFunctionality() {
        const response = await exec("getFunctionality", []);
        return Functionality.fromJson(JSON.parse(response));
    }

    async _getCustomization() {
        const response = await exec("getCustomization", []);
        return Customization.fromJson(JSON.parse(response));
    }

    async _getRfidScenario() {
        const response = await exec("getRfidScenario", []);
        return RFIDScenario.fromJson(JSON.parse(response));
    }

    async _getLicense() {
        const response = await exec("getLicense", []);
        return License.fromJson(response ? JSON.parse(response) : {});
    }

    async _getAvailableScenarios() {
        const response = await exec("getAvailableScenarios", []);
        const scenarios = [];
        for (const s of JSON.parse(response)) {
            scenarios.push(DocReaderScenario.fromJson(s));
        }
        return scenarios;
    }

    async _getDocReaderVersion() {
        const response = await exec("getDocReaderVersion", []);
        return DocReaderVersion.fromJson(response ? JSON.parse(response) : null);
    }

    async _getRfidSessionStatus() {
        return await exec("getRfidSessionStatus", []);
    }

    _setRfidSessionStatus(status) {
        exec("setRfidSessionStatus", [status]);
    }

    async _getTag() {
        return await exec("getTag", []);
    }

    _setTag(tag) {
        exec("setTag", [tag]);
    }

    async _getTenant() {
        return await exec("getTenant", []);
    }

    _setTenant(tenant) {
        exec("setTenant", [tenant]);
    }

    async _getEnv() {
        return await exec("getEnv", []);
    }

    _setEnv(env) {
        exec("setEnv", [env]);
    }

    async _getLocale() {
        return await exec("getLocale", []);
    }

    _setLocale(locale) {
        exec("setLocale", [locale]);
    }

    _setLocalizationDictionary(dictionary) {
        exec("setLocalizationDictionary", [dictionary]);
    }
}

export const DocReaderAction = {
    COMPLETE: 0,
    PROCESS: 1,
    MORE_PAGES_AVAILABLE: 2,
    CANCEL: 3,
    ERROR: 4,
    PROCESS_WHITE_FLASHLIGHT: 5,
    TIMEOUT: 6,
    PROCESSING_ON_SERVICE: 7,
    PROCESS_WHITE_UV_IMAGES: 102,
    PROCESS_IR_FRAME: 103
};

DocReaderAction.finished = function (value) {
    return value == DocReaderAction.COMPLETE || value == DocReaderAction.TIMEOUT
}
DocReaderAction.interrupted = function (value) {
    return value == DocReaderAction.CANCEL || value == DocReaderAction.ERROR
}
DocReaderAction.stopped = function (value) {
    return DocReaderAction.finished(value) || DocReaderAction.interrupted(value)
}
