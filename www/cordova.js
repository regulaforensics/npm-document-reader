/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/InitConfig.js":
/*!**********************************!*\
  !*** ./src/config/InitConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitConfig: () => (/* binding */ InitConfig)
/* harmony export */ });
class InitConfig {
    license
    licenseUpdate
    delayedNNLoad
    databasePath
    customDb
    blackList
    useBleDevice

    static withBleDevice() {
        var result = new InitConfig()
        result.useBleDevice = true
        return result
    }

    constructor(license, options) {
        this.license = license
        this.licenseUpdate = options?.licenseUpdate ?? true
        this.delayedNNLoad = options?.delayedNNLoad ?? false
        this.databasePath = options?.databasePath
        this.customDb = options?.customDb
        this.blackList = options?.blackList
        this.useBleDevice = false
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        var result = new InitConfig(jsonObject["license"]);

        result.customDb = jsonObject["customDb"];
        result.delayedNNLoad = jsonObject["delayedNNLoad"];
        result.licenseUpdate = jsonObject["licenseUpdate"];
        result.blackList = jsonObject["blackList"];
        result.databasePath = jsonObject["databasePath"];
        result.useBleDevice = jsonObject["useBleDevice"];

        return result;
    }


    toJson() {
        return {
            "license": this.license,
            "delayedNNLoad": this.delayedNNLoad,
            "licenseUpdate": this.licenseUpdate,
            "blackList": this.blackList,
            "customDb": this.customDb,
            "databasePath": this.databasePath,
            "useBleDevice": this.useBleDevice,
        }
    }
}


/***/ }),

/***/ "./src/config/OnlineProcessingConfig.js":
/*!**********************************************!*\
  !*** ./src/config/OnlineProcessingConfig.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFormat: () => (/* binding */ ImageFormat),
/* harmony export */   OnlineMode: () => (/* binding */ OnlineMode),
/* harmony export */   OnlineProcessingConfig: () => (/* binding */ OnlineProcessingConfig)
/* harmony export */ });
/* harmony import */ var _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../params/process_params/ProcessParams */ "./src/params/process_params/ProcessParams.js");
/* harmony import */ var _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info/DocReaderScenario */ "./src/info/DocReaderScenario.js");



class OnlineProcessingConfig {
    mode
    url
    processParams
    imageFormat
    imageCompressionQuality
    requestHeaders

    constructor(mode) {
        this.mode = mode
        this.processParams = new _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_0__.ProcessParams()
        this.processParams.scenario = _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_1__.Scenario.FULL_PROCESS
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        
        const result = new OnlineProcessingConfig(jsonObject["mode"])
        
        result.url = jsonObject["url"]
        result.imageFormat = jsonObject["imageFormat"]
        result.imageCompressionQuality = jsonObject["imageCompressionQuality"]
        result.processParams = _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_0__.ProcessParams.fromJson(jsonObject["processParams"])
        result.requestHeaders = jsonObject["requestHeaders"]
        
        return result
    }

    toJson() {
        return {
            "mode": this.mode,
            "url": this.url,
            "imageFormat": this.imageFormat,
            "imageCompressionQuality": this.imageCompressionQuality,
            "processParams": this.processParams?.toJson(),
            "requestHeaders": this.requestHeaders,
        }
    }
}

const ImageFormat = {
    PNG: 0,
    JPG: 1
}

const OnlineMode = {
    MANUAL: 0,
    AUTO: 1
}


/***/ }),

/***/ "./src/config/RFIDConfig.js":
/*!**********************************!*\
  !*** ./src/config/RFIDConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDConfig: () => (/* binding */ RFIDConfig)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _results_Results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../results/Results */ "./src/results/Results.js");
/* harmony import */ var _info_RFIDException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info/RFIDException */ "./src/info/RFIDException.js");
/* harmony import */ var _rfid_RFIDNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rfid/RFIDNotification */ "./src/rfid/RFIDNotification.js");
/* harmony import */ var _rfid_PAResourcesIssuer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rfid/PAResourcesIssuer */ "./src/rfid/PAResourcesIssuer.js");
/* harmony import */ var _rfid_PKDCertificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rfid/PKDCertificate */ "./src/rfid/PKDCertificate.js");
/* harmony import */ var _rfid_TAChallenge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rfid/TAChallenge */ "./src/rfid/TAChallenge.js");








class RFIDConfig {
    _completion
    _rfidCompletion
    _disableUI
    onProgress
    onChipDetected
    onRetryReadChip
    onRequestPACertificates
    onRequestTACertificates
    onRequestTASignature

    constructor(completion) {
        this._completion = completion
        this._disableUI = false
    }

    static withoutUI(completion) {
        const result = new RFIDConfig(null)
        result._rfidCompletion = completion
        result._disableUI = true
        return result
    }
}


/***/ }),

/***/ "./src/config/RecognizeConfig.js":
/*!***************************************!*\
  !*** ./src/config/RecognizeConfig.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageInputData: () => (/* binding */ ImageInputData),
/* harmony export */   RecognizeConfig: () => (/* binding */ RecognizeConfig)
/* harmony export */ });
/* harmony import */ var _OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnlineProcessingConfig */ "./src/config/OnlineProcessingConfig.js");
/* harmony import */ var _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info/DocReaderScenario */ "./src/info/DocReaderScenario.js");
/* harmony import */ var _results_visual_results_Lights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results/visual_results/Lights */ "./src/results/visual_results/Lights.js");




class RecognizeConfig {
    scenario
    onlineProcessingConfig
    image
    images
    data
    imageInputData
    dtc
    livePortrait
    extPortrait
    oneShotIdentification

    constructor() {
        this.oneShotIdentification = false
    }

    static withScenario(scenario, options) {
        const result = new RecognizeConfig()
        result.scenario = scenario
        result.image = options?.image
        result.images = options?.images
        result.data = options?.data
        result.imageInputData = options?.imageInputData
        result.dtc = options?.dtc
        result.livePortrait = options?.livePortrait
        result.extPortrait = options?.extPortrait
        result.oneShotIdentification = options?.oneShotIdentification ?? false
        return result
    }

    static withOnlineProcessingConfig(onlineProcessingConfig, options) {
        const result = new RecognizeConfig()
        result.onlineProcessingConfig = onlineProcessingConfig
        result.image = options?.image
        result.images = options?.images
        result.data = options?.data
        result.imageInputData = options?.imageInputData
        result.dtc = options?.dtc
        result.livePortrait = options?.livePortrait
        result.extPortrait = options?.extPortrait
        result.oneShotIdentification = options?.oneShotIdentification ?? false
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new RecognizeConfig()

        result.scenario = jsonObject["scenario"]
        result.onlineProcessingConfig = _OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_0__.OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"])
        result.image = jsonObject["image"]
        if (jsonObject["images"] != null) {
            result.images = []
            for (const item of jsonObject["images"]) {
                if (item != null) {
                    result.images.push(item)
                }
            }
        }
        result.data = jsonObject["data"]
        if (jsonObject["imageInputData"] != null) {
            result.imageInputData = []
            for (const item of jsonObject["imageInputData"]) {
                const imageInputData = ImageInputData.fromJson(item)
                if (imageInputData != null) {
                    result.imageInputData.push(imageInputData)
                }
            }
        }
        result.dtc = jsonObject["dtc"]
        result.livePortrait = jsonObject["livePortrait"]
        result.extPortrait = jsonObject["extPortrait"]
        result.oneShotIdentification = jsonObject["oneShotIdentification"]

        return result
    }

    toJson() {
        return {
            "scenario": this.scenario,
            "onlineProcessingConfig": this.onlineProcessingConfig?.toJson(),
            "image": this.image,
            "images": this.images,
            "data": this.data,
            "imageInputData": this.imageInputData?.map(e => e.toJson()),
            "dtc": this.dtc,
            "livePortrait": this.livePortrait,
            "extPortrait": this.extPortrait,
            "oneShotIdentification": this.oneShotIdentification,
        }
    }
}

class ImageInputData {
    image
    light
    pageIndex

    constructor(image, options) {
        this.image = image
        this.light = options?.light ?? _results_visual_results_Lights__WEBPACK_IMPORTED_MODULE_2__.Lights.WHITE_FULL
        this.pageIndex = options?.pageIndex ?? 0
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageInputData(jsonObject["image"])

        result.pageIndex = jsonObject["pageIndex"]
        result.light = jsonObject["light"]

        return result
    }

    toJson() {
        return {
            "image": this.image,
            "light": this.light,
            "pageIndex": this.pageIndex,
        }
    }
}


/***/ }),

/***/ "./src/config/ScannerConfig.js":
/*!*************************************!*\
  !*** ./src/config/ScannerConfig.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerConfig: () => (/* binding */ ScannerConfig)
/* harmony export */ });
/* harmony import */ var _OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnlineProcessingConfig */ "./src/config/OnlineProcessingConfig.js");


class ScannerConfig {
    scenario
    onlineProcessingConfig
    livePortrait
    extPortrait
    cameraId

    constructor(scenario, onlineProcessingConfig) {
        this.scenario = scenario
        this.onlineProcessingConfig = onlineProcessingConfig
    }

    static withScenario(scenario) {
        const result = new ScannerConfig(scenario, undefined)
        return result
    }

    static withOnlineProcessingConfig(onlineProcessingConfig) {
        const result = new ScannerConfig(undefined, onlineProcessingConfig)
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null

        const result = new ScannerConfig(undefined, undefined)

        result.scenario = jsonObject["scenario"]
        result.onlineProcessingConfig = _OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_0__.OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"])
        result.livePortrait = jsonObject["livePortrait"]
        result.extPortrait = jsonObject["extPortrait"]
        result.cameraId = jsonObject["cameraId"]

        return result
    }

    toJson() {
        return {
            "scenario": this.scenario,
            "onlineProcessingConfig": this.onlineProcessingConfig?.toJson(),
            "livePortrait": this.livePortrait,
            "extPortrait": this.extPortrait,
            "cameraId": this.cameraId,
        }
    }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessControlProcedureType: () => (/* reexport safe */ _results_rfid_AccessControlProcedureType__WEBPACK_IMPORTED_MODULE_73__.AccessControlProcedureType),
/* harmony export */   Application: () => (/* reexport safe */ _results_rfid_Application__WEBPACK_IMPORTED_MODULE_70__.Application),
/* harmony export */   Attribute: () => (/* reexport safe */ _results_rfid_Attribute__WEBPACK_IMPORTED_MODULE_57__.Attribute),
/* harmony export */   Authenticity: () => (/* reexport safe */ _results_authenticity_Authenticity__WEBPACK_IMPORTED_MODULE_41__.Authenticity),
/* harmony export */   AuthenticityCheck: () => (/* reexport safe */ _results_authenticity_AuthenticityCheck__WEBPACK_IMPORTED_MODULE_39__.AuthenticityCheck),
/* harmony export */   AuthenticityElement: () => (/* reexport safe */ _results_authenticity_AuthenticityElement__WEBPACK_IMPORTED_MODULE_37__.AuthenticityElement),
/* harmony export */   AuthenticityParams: () => (/* reexport safe */ _params_process_params_AuthenticityParams__WEBPACK_IMPORTED_MODULE_80__.AuthenticityParams),
/* harmony export */   AuthenticityResult: () => (/* reexport safe */ _results_authenticity_AuthenticityResult__WEBPACK_IMPORTED_MODULE_38__.AuthenticityResult),
/* harmony export */   Authority: () => (/* reexport safe */ _results_rfid_Authority__WEBPACK_IMPORTED_MODULE_61__.Authority),
/* harmony export */   BackendProcessingConfig: () => (/* reexport safe */ _params_process_params_BackendProcessingConfig__WEBPACK_IMPORTED_MODULE_81__.BackendProcessingConfig),
/* harmony export */   BarcodeField: () => (/* reexport safe */ _results_barcode_BarcodeField__WEBPACK_IMPORTED_MODULE_46__.BarcodeField),
/* harmony export */   BarcodeResult: () => (/* reexport safe */ _results_barcode_BarcodeResult__WEBPACK_IMPORTED_MODULE_45__.BarcodeResult),
/* harmony export */   BarcodeStatus: () => (/* reexport safe */ _results_barcode_BarcodeStatus__WEBPACK_IMPORTED_MODULE_43__.BarcodeStatus),
/* harmony export */   BarcodeType: () => (/* reexport safe */ _results_barcode_BarcodeType__WEBPACK_IMPORTED_MODULE_44__.BarcodeType),
/* harmony export */   BytesData: () => (/* reexport safe */ _results_visible_digital_seals_BytesData__WEBPACK_IMPORTED_MODULE_52__.BytesData),
/* harmony export */   CameraMode: () => (/* reexport safe */ _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.CameraMode),
/* harmony export */   CameraPosition: () => (/* reexport safe */ _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.CameraPosition),
/* harmony export */   CameraSize: () => (/* reexport safe */ _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.CameraSize),
/* harmony export */   Cap: () => (/* reexport safe */ _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.Cap),
/* harmony export */   CaptureMode: () => (/* reexport safe */ _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.CaptureMode),
/* harmony export */   CaptureSessionPreset: () => (/* reexport safe */ _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.CaptureSessionPreset),
/* harmony export */   CardProperties: () => (/* reexport safe */ _results_rfid_CardProperties__WEBPACK_IMPORTED_MODULE_55__.CardProperties),
/* harmony export */   CertificateChain: () => (/* reexport safe */ _results_rfid_CertificateChain__WEBPACK_IMPORTED_MODULE_60__.CertificateChain),
/* harmony export */   CertificateData: () => (/* reexport safe */ _results_rfid_CertificateData__WEBPACK_IMPORTED_MODULE_66__.CertificateData),
/* harmony export */   CheckDiagnose: () => (/* reexport safe */ _results_authenticity_CheckDiagnose__WEBPACK_IMPORTED_MODULE_36__.CheckDiagnose),
/* harmony export */   CheckResult: () => (/* reexport safe */ _results_status_CheckResult__WEBPACK_IMPORTED_MODULE_34__.CheckResult),
/* harmony export */   Comparison: () => (/* reexport safe */ _results_visual_results_Comparison__WEBPACK_IMPORTED_MODULE_18__.Comparison),
/* harmony export */   Coordinate: () => (/* reexport safe */ _results_Position__WEBPACK_IMPORTED_MODULE_31__.Coordinate),
/* harmony export */   CustomButtonTag: () => (/* reexport safe */ _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.CustomButtonTag),
/* harmony export */   Customization: () => (/* reexport safe */ _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.Customization),
/* harmony export */   CustomizationColors: () => (/* reexport safe */ _params_customization_CustomizationColors__WEBPACK_IMPORTED_MODULE_88__.CustomizationColors),
/* harmony export */   CustomizationFonts: () => (/* reexport safe */ _params_customization_CustomizationFonts__WEBPACK_IMPORTED_MODULE_84__.CustomizationFonts),
/* harmony export */   CustomizationImages: () => (/* reexport safe */ _params_customization_CustomizationImages__WEBPACK_IMPORTED_MODULE_85__.CustomizationImages),
/* harmony export */   DTCDataGroup: () => (/* reexport safe */ _params_rfid_scenario_DTCDataGroup__WEBPACK_IMPORTED_MODULE_91__.DTCDataGroup),
/* harmony export */   DataField: () => (/* reexport safe */ _results_rfid_DataField__WEBPACK_IMPORTED_MODULE_56__.DataField),
/* harmony export */   DocFormat: () => (/* reexport safe */ _results_DocumentType__WEBPACK_IMPORTED_MODULE_28__.DocFormat),
/* harmony export */   DocReaderAction: () => (/* binding */ DocReaderAction),
/* harmony export */   DocReaderException: () => (/* reexport safe */ _info_DocReaderException__WEBPACK_IMPORTED_MODULE_8__.DocReaderException),
/* harmony export */   DocReaderFrame: () => (/* reexport safe */ _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.DocReaderFrame),
/* harmony export */   DocReaderOrientation: () => (/* reexport safe */ _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_11__.DocReaderOrientation),
/* harmony export */   DocReaderScenario: () => (/* reexport safe */ _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_11__.DocReaderScenario),
/* harmony export */   DocReaderVersion: () => (/* reexport safe */ _info_DocReaderVersion__WEBPACK_IMPORTED_MODULE_6__.DocReaderVersion),
/* harmony export */   DocumentReader: () => (/* binding */ DocumentReader),
/* harmony export */   DocumentType: () => (/* reexport safe */ _results_DocumentType__WEBPACK_IMPORTED_MODULE_28__.DocumentType),
/* harmony export */   DocumentTypeEnum: () => (/* reexport safe */ _results_DocumentType__WEBPACK_IMPORTED_MODULE_28__.DocType),
/* harmony export */   DocumentsDatabase: () => (/* reexport safe */ _info_DocumentsDatabase__WEBPACK_IMPORTED_MODULE_9__.DocumentsDatabase),
/* harmony export */   EDLDataGroups: () => (/* reexport safe */ _params_rfid_scenario_EDLDataGroups__WEBPACK_IMPORTED_MODULE_93__.EDLDataGroups),
/* harmony export */   EIDDataGroups: () => (/* reexport safe */ _params_rfid_scenario_EIDDataGroups__WEBPACK_IMPORTED_MODULE_90__.EIDDataGroups),
/* harmony export */   EPassportDataGroups: () => (/* reexport safe */ _params_rfid_scenario_EPassportDataGroups__WEBPACK_IMPORTED_MODULE_89__.EPassportDataGroups),
/* harmony export */   ErrorCodes: () => (/* reexport safe */ _info_DocReaderException__WEBPACK_IMPORTED_MODULE_8__.ErrorCodes),
/* harmony export */   Extension: () => (/* reexport safe */ _results_rfid_Extension__WEBPACK_IMPORTED_MODULE_72__.Extension),
/* harmony export */   FaceApiParams: () => (/* reexport safe */ _params_process_params_FaceApiParams__WEBPACK_IMPORTED_MODULE_77__.FaceApiParams),
/* harmony export */   FaceApiSearchParams: () => (/* reexport safe */ _params_process_params_FaceApiSearchParams__WEBPACK_IMPORTED_MODULE_82__.FaceApiSearchParams),
/* harmony export */   FieldType: () => (/* reexport safe */ _results_visual_results_FieldType__WEBPACK_IMPORTED_MODULE_22__.FieldType),
/* harmony export */   File: () => (/* reexport safe */ _results_rfid_File__WEBPACK_IMPORTED_MODULE_62__.File),
/* harmony export */   FileData: () => (/* reexport safe */ _results_rfid_FileData__WEBPACK_IMPORTED_MODULE_67__.FileData),
/* harmony export */   Font: () => (/* reexport safe */ _params_customization_Font__WEBPACK_IMPORTED_MODULE_86__.Font),
/* harmony export */   FontStyle: () => (/* reexport safe */ _params_customization_Font__WEBPACK_IMPORTED_MODULE_86__.FontStyle),
/* harmony export */   FrameShapeType: () => (/* reexport safe */ _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.FrameShapeType),
/* harmony export */   Functionality: () => (/* reexport safe */ _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.Functionality),
/* harmony export */   GlaresCheckParams: () => (/* reexport safe */ _params_process_params_GlaresCheckParams__WEBPACK_IMPORTED_MODULE_76__.GlaresCheckParams),
/* harmony export */   GraphicField: () => (/* reexport safe */ _results_visual_results_GraphicField__WEBPACK_IMPORTED_MODULE_23__.GraphicField),
/* harmony export */   GraphicFieldType: () => (/* reexport safe */ _results_visual_results_GraphicFieldType__WEBPACK_IMPORTED_MODULE_14__.GraphicFieldType),
/* harmony export */   GraphicResult: () => (/* reexport safe */ _results_visual_results_GraphicResult__WEBPACK_IMPORTED_MODULE_27__.GraphicResult),
/* harmony export */   ImageFormat: () => (/* reexport safe */ _config_OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_1__.ImageFormat),
/* harmony export */   ImageInputData: () => (/* reexport safe */ _config_RecognizeConfig__WEBPACK_IMPORTED_MODULE_5__.ImageInputData),
/* harmony export */   ImageQA: () => (/* reexport safe */ _params_process_params_ImageQA__WEBPACK_IMPORTED_MODULE_79__.ImageQA),
/* harmony export */   ImageQuality: () => (/* reexport safe */ _results_image_quality_ImageQuality__WEBPACK_IMPORTED_MODULE_47__.ImageQuality),
/* harmony export */   ImageQualityCheckType: () => (/* reexport safe */ _results_image_quality_ImageQualityCheckType__WEBPACK_IMPORTED_MODULE_49__.ImageQualityCheckType),
/* harmony export */   ImageQualityGroup: () => (/* reexport safe */ _results_image_quality_ImageQualityGroup__WEBPACK_IMPORTED_MODULE_48__.ImageQualityGroup),
/* harmony export */   InitConfig: () => (/* reexport safe */ _config_InitConfig__WEBPACK_IMPORTED_MODULE_2__.InitConfig),
/* harmony export */   LCID: () => (/* reexport safe */ _results_visual_results_LCID__WEBPACK_IMPORTED_MODULE_13__.LCID),
/* harmony export */   LDSParsingErrorCodes: () => (/* reexport safe */ _results_visible_digital_seals_LDSParsingErrorCodes__WEBPACK_IMPORTED_MODULE_50__.LDSParsingErrorCodes),
/* harmony export */   LDSParsingNotificationCodes: () => (/* reexport safe */ _results_visible_digital_seals_LDSParsingNotificationCodes__WEBPACK_IMPORTED_MODULE_53__.LDSParsingNotificationCodes),
/* harmony export */   License: () => (/* reexport safe */ _info_License__WEBPACK_IMPORTED_MODULE_10__.License),
/* harmony export */   Lights: () => (/* reexport safe */ _results_visual_results_Lights__WEBPACK_IMPORTED_MODULE_20__.Lights),
/* harmony export */   LivenessParams: () => (/* reexport safe */ _params_process_params_LivenessParams__WEBPACK_IMPORTED_MODULE_74__.LivenessParams),
/* harmony export */   LogLevel: () => (/* reexport safe */ _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.LogLevel),
/* harmony export */   MRZFormat: () => (/* reexport safe */ _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.MRZFormat),
/* harmony export */   MeasureSystem: () => (/* reexport safe */ _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.MeasureSystem),
/* harmony export */   MrzDetectionModes: () => (/* reexport safe */ _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.MrzDetectionModes),
/* harmony export */   OnlineMode: () => (/* reexport safe */ _config_OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_1__.OnlineMode),
/* harmony export */   OnlineProcessingConfig: () => (/* reexport safe */ _config_OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_1__.OnlineProcessingConfig),
/* harmony export */   OpticalStatus: () => (/* reexport safe */ _results_status_OpticalStatus__WEBPACK_IMPORTED_MODULE_35__.OpticalStatus),
/* harmony export */   PAAttribute: () => (/* reexport safe */ _rfid_PAAttribute__WEBPACK_IMPORTED_MODULE_98__.PAAttribute),
/* harmony export */   PAResourcesIssuer: () => (/* reexport safe */ _rfid_PAResourcesIssuer__WEBPACK_IMPORTED_MODULE_94__.PAResourcesIssuer),
/* harmony export */   PDF417Info: () => (/* reexport safe */ _results_barcode_PDF417Info__WEBPACK_IMPORTED_MODULE_42__.PDF417Info),
/* harmony export */   PKDCertificate: () => (/* reexport safe */ _rfid_PKDCertificate__WEBPACK_IMPORTED_MODULE_100__.PKDCertificate),
/* harmony export */   PKDResourceType: () => (/* reexport safe */ _rfid_PKDCertificate__WEBPACK_IMPORTED_MODULE_100__.PKDResourceType),
/* harmony export */   Position: () => (/* reexport safe */ _results_Position__WEBPACK_IMPORTED_MODULE_31__.Position),
/* harmony export */   PrepareProgress: () => (/* reexport safe */ _info_PrepareProgress__WEBPACK_IMPORTED_MODULE_7__.PrepareProgress),
/* harmony export */   ProcessParams: () => (/* reexport safe */ _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.ProcessParams),
/* harmony export */   ProcessingFinishedStatus: () => (/* reexport safe */ _results_Results__WEBPACK_IMPORTED_MODULE_29__.ProcessingFinishedStatus),
/* harmony export */   RFIDAccessControlProcedureType: () => (/* reexport safe */ _results_rfid_RFIDAccessControlProcedureType__WEBPACK_IMPORTED_MODULE_71__.RFIDAccessControlProcedureType),
/* harmony export */   RFIDApplicationType: () => (/* reexport safe */ _results_rfid_Application__WEBPACK_IMPORTED_MODULE_70__.RFIDApplicationType),
/* harmony export */   RFIDAuthenticationProcedureType: () => (/* reexport safe */ _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDAuthenticationProcedureType),
/* harmony export */   RFIDCertificateType: () => (/* reexport safe */ _results_rfid_RFIDCertificateType__WEBPACK_IMPORTED_MODULE_68__.RFIDCertificateType),
/* harmony export */   RFIDConfig: () => (/* reexport safe */ _config_RFIDConfig__WEBPACK_IMPORTED_MODULE_3__.RFIDConfig),
/* harmony export */   RFIDDataFileType: () => (/* reexport safe */ _results_rfid_RFIDDataFileType__WEBPACK_IMPORTED_MODULE_65__.RFIDDataFileType),
/* harmony export */   RFIDErrorCodes: () => (/* reexport safe */ _rfid_RFIDErrorCodes__WEBPACK_IMPORTED_MODULE_95__.RFIDErrorCodes),
/* harmony export */   RFIDException: () => (/* reexport safe */ _info_RFIDException__WEBPACK_IMPORTED_MODULE_12__.RFIDException),
/* harmony export */   RFIDNotification: () => (/* reexport safe */ _rfid_RFIDNotification__WEBPACK_IMPORTED_MODULE_97__.RFIDNotification),
/* harmony export */   RFIDNotificationCodes: () => (/* reexport safe */ _rfid_RFIDNotification__WEBPACK_IMPORTED_MODULE_97__.RFIDNotificationCodes),
/* harmony export */   RFIDOrigin: () => (/* reexport safe */ _results_visual_results_RFIDOrigin__WEBPACK_IMPORTED_MODULE_24__.RFIDOrigin),
/* harmony export */   RFIDParams: () => (/* reexport safe */ _params_process_params_RFIDParams__WEBPACK_IMPORTED_MODULE_78__.RFIDParams),
/* harmony export */   RFIDPasswordType: () => (/* reexport safe */ _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDPasswordType),
/* harmony export */   RFIDReadingBufferSize: () => (/* reexport safe */ _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDReadingBufferSize),
/* harmony export */   RFIDSDKProfilerType: () => (/* reexport safe */ _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDSDKProfilerType),
/* harmony export */   RFIDScenario: () => (/* reexport safe */ _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDScenario),
/* harmony export */   RFIDSessionData: () => (/* reexport safe */ _results_rfid_RFIDSessionData__WEBPACK_IMPORTED_MODULE_69__.RFIDSessionData),
/* harmony export */   RFIDStatus: () => (/* reexport safe */ _results_status_RFIDStatus__WEBPACK_IMPORTED_MODULE_32__.RFIDStatus),
/* harmony export */   RFIDTerminalType: () => (/* reexport safe */ _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDTerminalType),
/* harmony export */   RFIDValidity: () => (/* reexport safe */ _results_rfid_RFIDValidity__WEBPACK_IMPORTED_MODULE_64__.RFIDValidity),
/* harmony export */   RFIDValue: () => (/* reexport safe */ _results_rfid_RFIDValue__WEBPACK_IMPORTED_MODULE_63__.RFIDValue),
/* harmony export */   RecognizeConfig: () => (/* reexport safe */ _config_RecognizeConfig__WEBPACK_IMPORTED_MODULE_5__.RecognizeConfig),
/* harmony export */   Rect: () => (/* reexport safe */ _results_visual_results_Rect__WEBPACK_IMPORTED_MODULE_16__.Rect),
/* harmony export */   ResultType: () => (/* reexport safe */ _results_Results__WEBPACK_IMPORTED_MODULE_29__.ResultType),
/* harmony export */   Results: () => (/* reexport safe */ _results_Results__WEBPACK_IMPORTED_MODULE_29__.Results),
/* harmony export */   ResultsStatus: () => (/* reexport safe */ _results_status_ResultsStatus__WEBPACK_IMPORTED_MODULE_33__.ResultsStatus),
/* harmony export */   ScannerConfig: () => (/* reexport safe */ _config_ScannerConfig__WEBPACK_IMPORTED_MODULE_4__.ScannerConfig),
/* harmony export */   Scenario: () => (/* reexport safe */ _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_11__.Scenario),
/* harmony export */   SecurityFeatureType: () => (/* reexport safe */ _results_authenticity_SecurityFeatureType__WEBPACK_IMPORTED_MODULE_40__.SecurityFeatureType),
/* harmony export */   SecurityObject: () => (/* reexport safe */ _results_rfid_SecurityObject__WEBPACK_IMPORTED_MODULE_54__.SecurityObject),
/* harmony export */   SecurityObjectCertificates: () => (/* reexport safe */ _results_rfid_SecurityObjectCertificates__WEBPACK_IMPORTED_MODULE_59__.SecurityObjectCertificates),
/* harmony export */   SignManagementAction: () => (/* reexport safe */ _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.SignManagementAction),
/* harmony export */   SignerInfo: () => (/* reexport safe */ _results_rfid_SignerInfo__WEBPACK_IMPORTED_MODULE_58__.SignerInfo),
/* harmony export */   Symbol: () => (/* reexport safe */ _results_visual_results_Symbol__WEBPACK_IMPORTED_MODULE_17__.Symbol),
/* harmony export */   TAChallenge: () => (/* reexport safe */ _rfid_TAChallenge__WEBPACK_IMPORTED_MODULE_99__.TAChallenge),
/* harmony export */   TccParams: () => (/* reexport safe */ _rfid_TccParams__WEBPACK_IMPORTED_MODULE_96__.TccParams),
/* harmony export */   TextField: () => (/* reexport safe */ _results_visual_results_TextField__WEBPACK_IMPORTED_MODULE_19__.TextField),
/* harmony export */   TextResult: () => (/* reexport safe */ _results_visual_results_TextResult__WEBPACK_IMPORTED_MODULE_25__.TextResult),
/* harmony export */   TextSource: () => (/* reexport safe */ _results_visual_results_TextSource__WEBPACK_IMPORTED_MODULE_26__.TextSource),
/* harmony export */   TransactionInfo: () => (/* reexport safe */ _results_TransactionInfo__WEBPACK_IMPORTED_MODULE_30__.TransactionInfo),
/* harmony export */   VDSNCData: () => (/* reexport safe */ _results_visible_digital_seals_VDSNCData__WEBPACK_IMPORTED_MODULE_51__.VDSNCData),
/* harmony export */   Validity: () => (/* reexport safe */ _results_visual_results_Validity__WEBPACK_IMPORTED_MODULE_21__.Validity),
/* harmony export */   Value: () => (/* reexport safe */ _results_visual_results_Value__WEBPACK_IMPORTED_MODULE_15__.Value),
/* harmony export */   ViewContentMode: () => (/* reexport safe */ _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.ViewContentMode)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _config_OnlineProcessingConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/OnlineProcessingConfig */ "./src/config/OnlineProcessingConfig.js");
/* harmony import */ var _config_InitConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/InitConfig */ "./src/config/InitConfig.js");
/* harmony import */ var _config_RFIDConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/RFIDConfig */ "./src/config/RFIDConfig.js");
/* harmony import */ var _config_ScannerConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/ScannerConfig */ "./src/config/ScannerConfig.js");
/* harmony import */ var _config_RecognizeConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/RecognizeConfig */ "./src/config/RecognizeConfig.js");
/* harmony import */ var _info_DocReaderVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/DocReaderVersion */ "./src/info/DocReaderVersion.js");
/* harmony import */ var _info_PrepareProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info/PrepareProgress */ "./src/info/PrepareProgress.js");
/* harmony import */ var _info_DocReaderException__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info/DocReaderException */ "./src/info/DocReaderException.js");
/* harmony import */ var _info_DocumentsDatabase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info/DocumentsDatabase */ "./src/info/DocumentsDatabase.js");
/* harmony import */ var _info_License__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info/License */ "./src/info/License.js");
/* harmony import */ var _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/DocReaderScenario */ "./src/info/DocReaderScenario.js");
/* harmony import */ var _info_RFIDException__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info/RFIDException */ "./src/info/RFIDException.js");
/* harmony import */ var _results_visual_results_LCID__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./results/visual_results/LCID */ "./src/results/visual_results/LCID.js");
/* harmony import */ var _results_visual_results_GraphicFieldType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./results/visual_results/GraphicFieldType */ "./src/results/visual_results/GraphicFieldType.js");
/* harmony import */ var _results_visual_results_Value__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./results/visual_results/Value */ "./src/results/visual_results/Value.js");
/* harmony import */ var _results_visual_results_Rect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./results/visual_results/Rect */ "./src/results/visual_results/Rect.js");
/* harmony import */ var _results_visual_results_Symbol__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./results/visual_results/Symbol */ "./src/results/visual_results/Symbol.js");
/* harmony import */ var _results_visual_results_Comparison__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./results/visual_results/Comparison */ "./src/results/visual_results/Comparison.js");
/* harmony import */ var _results_visual_results_TextField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./results/visual_results/TextField */ "./src/results/visual_results/TextField.js");
/* harmony import */ var _results_visual_results_Lights__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./results/visual_results/Lights */ "./src/results/visual_results/Lights.js");
/* harmony import */ var _results_visual_results_Validity__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./results/visual_results/Validity */ "./src/results/visual_results/Validity.js");
/* harmony import */ var _results_visual_results_FieldType__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./results/visual_results/FieldType */ "./src/results/visual_results/FieldType.js");
/* harmony import */ var _results_visual_results_GraphicField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./results/visual_results/GraphicField */ "./src/results/visual_results/GraphicField.js");
/* harmony import */ var _results_visual_results_RFIDOrigin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./results/visual_results/RFIDOrigin */ "./src/results/visual_results/RFIDOrigin.js");
/* harmony import */ var _results_visual_results_TextResult__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./results/visual_results/TextResult */ "./src/results/visual_results/TextResult.js");
/* harmony import */ var _results_visual_results_TextSource__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./results/visual_results/TextSource */ "./src/results/visual_results/TextSource.js");
/* harmony import */ var _results_visual_results_GraphicResult__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./results/visual_results/GraphicResult */ "./src/results/visual_results/GraphicResult.js");
/* harmony import */ var _results_DocumentType__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./results/DocumentType */ "./src/results/DocumentType.js");
/* harmony import */ var _results_Results__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./results/Results */ "./src/results/Results.js");
/* harmony import */ var _results_TransactionInfo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./results/TransactionInfo */ "./src/results/TransactionInfo.js");
/* harmony import */ var _results_Position__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./results/Position */ "./src/results/Position.js");
/* harmony import */ var _results_status_RFIDStatus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./results/status/RFIDStatus */ "./src/results/status/RFIDStatus.js");
/* harmony import */ var _results_status_ResultsStatus__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./results/status/ResultsStatus */ "./src/results/status/ResultsStatus.js");
/* harmony import */ var _results_status_CheckResult__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./results/status/CheckResult */ "./src/results/status/CheckResult.js");
/* harmony import */ var _results_status_OpticalStatus__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./results/status/OpticalStatus */ "./src/results/status/OpticalStatus.js");
/* harmony import */ var _results_authenticity_CheckDiagnose__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./results/authenticity/CheckDiagnose */ "./src/results/authenticity/CheckDiagnose.js");
/* harmony import */ var _results_authenticity_AuthenticityElement__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./results/authenticity/AuthenticityElement */ "./src/results/authenticity/AuthenticityElement.js");
/* harmony import */ var _results_authenticity_AuthenticityResult__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./results/authenticity/AuthenticityResult */ "./src/results/authenticity/AuthenticityResult.js");
/* harmony import */ var _results_authenticity_AuthenticityCheck__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./results/authenticity/AuthenticityCheck */ "./src/results/authenticity/AuthenticityCheck.js");
/* harmony import */ var _results_authenticity_SecurityFeatureType__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./results/authenticity/SecurityFeatureType */ "./src/results/authenticity/SecurityFeatureType.js");
/* harmony import */ var _results_authenticity_Authenticity__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./results/authenticity/Authenticity */ "./src/results/authenticity/Authenticity.js");
/* harmony import */ var _results_barcode_PDF417Info__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./results/barcode/PDF417Info */ "./src/results/barcode/PDF417Info.js");
/* harmony import */ var _results_barcode_BarcodeStatus__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./results/barcode/BarcodeStatus */ "./src/results/barcode/BarcodeStatus.js");
/* harmony import */ var _results_barcode_BarcodeType__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./results/barcode/BarcodeType */ "./src/results/barcode/BarcodeType.js");
/* harmony import */ var _results_barcode_BarcodeResult__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./results/barcode/BarcodeResult */ "./src/results/barcode/BarcodeResult.js");
/* harmony import */ var _results_barcode_BarcodeField__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./results/barcode/BarcodeField */ "./src/results/barcode/BarcodeField.js");
/* harmony import */ var _results_image_quality_ImageQuality__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./results/image_quality/ImageQuality */ "./src/results/image_quality/ImageQuality.js");
/* harmony import */ var _results_image_quality_ImageQualityGroup__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./results/image_quality/ImageQualityGroup */ "./src/results/image_quality/ImageQualityGroup.js");
/* harmony import */ var _results_image_quality_ImageQualityCheckType__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./results/image_quality/ImageQualityCheckType */ "./src/results/image_quality/ImageQualityCheckType.js");
/* harmony import */ var _results_visible_digital_seals_LDSParsingErrorCodes__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./results/visible_digital_seals/LDSParsingErrorCodes */ "./src/results/visible_digital_seals/LDSParsingErrorCodes.js");
/* harmony import */ var _results_visible_digital_seals_VDSNCData__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./results/visible_digital_seals/VDSNCData */ "./src/results/visible_digital_seals/VDSNCData.js");
/* harmony import */ var _results_visible_digital_seals_BytesData__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./results/visible_digital_seals/BytesData */ "./src/results/visible_digital_seals/BytesData.js");
/* harmony import */ var _results_visible_digital_seals_LDSParsingNotificationCodes__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./results/visible_digital_seals/LDSParsingNotificationCodes */ "./src/results/visible_digital_seals/LDSParsingNotificationCodes.js");
/* harmony import */ var _results_rfid_SecurityObject__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./results/rfid/SecurityObject */ "./src/results/rfid/SecurityObject.js");
/* harmony import */ var _results_rfid_CardProperties__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./results/rfid/CardProperties */ "./src/results/rfid/CardProperties.js");
/* harmony import */ var _results_rfid_DataField__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./results/rfid/DataField */ "./src/results/rfid/DataField.js");
/* harmony import */ var _results_rfid_Attribute__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./results/rfid/Attribute */ "./src/results/rfid/Attribute.js");
/* harmony import */ var _results_rfid_SignerInfo__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./results/rfid/SignerInfo */ "./src/results/rfid/SignerInfo.js");
/* harmony import */ var _results_rfid_SecurityObjectCertificates__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./results/rfid/SecurityObjectCertificates */ "./src/results/rfid/SecurityObjectCertificates.js");
/* harmony import */ var _results_rfid_CertificateChain__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./results/rfid/CertificateChain */ "./src/results/rfid/CertificateChain.js");
/* harmony import */ var _results_rfid_Authority__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./results/rfid/Authority */ "./src/results/rfid/Authority.js");
/* harmony import */ var _results_rfid_File__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./results/rfid/File */ "./src/results/rfid/File.js");
/* harmony import */ var _results_rfid_RFIDValue__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./results/rfid/RFIDValue */ "./src/results/rfid/RFIDValue.js");
/* harmony import */ var _results_rfid_RFIDValidity__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./results/rfid/RFIDValidity */ "./src/results/rfid/RFIDValidity.js");
/* harmony import */ var _results_rfid_RFIDDataFileType__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./results/rfid/RFIDDataFileType */ "./src/results/rfid/RFIDDataFileType.js");
/* harmony import */ var _results_rfid_CertificateData__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./results/rfid/CertificateData */ "./src/results/rfid/CertificateData.js");
/* harmony import */ var _results_rfid_FileData__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./results/rfid/FileData */ "./src/results/rfid/FileData.js");
/* harmony import */ var _results_rfid_RFIDCertificateType__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./results/rfid/RFIDCertificateType */ "./src/results/rfid/RFIDCertificateType.js");
/* harmony import */ var _results_rfid_RFIDSessionData__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./results/rfid/RFIDSessionData */ "./src/results/rfid/RFIDSessionData.js");
/* harmony import */ var _results_rfid_Application__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./results/rfid/Application */ "./src/results/rfid/Application.js");
/* harmony import */ var _results_rfid_RFIDAccessControlProcedureType__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./results/rfid/RFIDAccessControlProcedureType */ "./src/results/rfid/RFIDAccessControlProcedureType.js");
/* harmony import */ var _results_rfid_Extension__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./results/rfid/Extension */ "./src/results/rfid/Extension.js");
/* harmony import */ var _results_rfid_AccessControlProcedureType__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./results/rfid/AccessControlProcedureType */ "./src/results/rfid/AccessControlProcedureType.js");
/* harmony import */ var _params_process_params_LivenessParams__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./params/process_params/LivenessParams */ "./src/params/process_params/LivenessParams.js");
/* harmony import */ var _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./params/process_params/ProcessParams */ "./src/params/process_params/ProcessParams.js");
/* harmony import */ var _params_process_params_GlaresCheckParams__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./params/process_params/GlaresCheckParams */ "./src/params/process_params/GlaresCheckParams.js");
/* harmony import */ var _params_process_params_FaceApiParams__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./params/process_params/FaceApiParams */ "./src/params/process_params/FaceApiParams.js");
/* harmony import */ var _params_process_params_RFIDParams__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./params/process_params/RFIDParams */ "./src/params/process_params/RFIDParams.js");
/* harmony import */ var _params_process_params_ImageQA__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./params/process_params/ImageQA */ "./src/params/process_params/ImageQA.js");
/* harmony import */ var _params_process_params_AuthenticityParams__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./params/process_params/AuthenticityParams */ "./src/params/process_params/AuthenticityParams.js");
/* harmony import */ var _params_process_params_BackendProcessingConfig__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./params/process_params/BackendProcessingConfig */ "./src/params/process_params/BackendProcessingConfig.js");
/* harmony import */ var _params_process_params_FaceApiSearchParams__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./params/process_params/FaceApiSearchParams */ "./src/params/process_params/FaceApiSearchParams.js");
/* harmony import */ var _params_Functionality__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./params/Functionality */ "./src/params/Functionality.js");
/* harmony import */ var _params_customization_CustomizationFonts__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./params/customization/CustomizationFonts */ "./src/params/customization/CustomizationFonts.js");
/* harmony import */ var _params_customization_CustomizationImages__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./params/customization/CustomizationImages */ "./src/params/customization/CustomizationImages.js");
/* harmony import */ var _params_customization_Font__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./params/customization/Font */ "./src/params/customization/Font.js");
/* harmony import */ var _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./params/customization/Customization */ "./src/params/customization/Customization.js");
/* harmony import */ var _params_customization_CustomizationColors__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./params/customization/CustomizationColors */ "./src/params/customization/CustomizationColors.js");
/* harmony import */ var _params_rfid_scenario_EPassportDataGroups__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./params/rfid_scenario/EPassportDataGroups */ "./src/params/rfid_scenario/EPassportDataGroups.js");
/* harmony import */ var _params_rfid_scenario_EIDDataGroups__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./params/rfid_scenario/EIDDataGroups */ "./src/params/rfid_scenario/EIDDataGroups.js");
/* harmony import */ var _params_rfid_scenario_DTCDataGroup__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./params/rfid_scenario/DTCDataGroup */ "./src/params/rfid_scenario/DTCDataGroup.js");
/* harmony import */ var _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./params/rfid_scenario/RFIDScenario */ "./src/params/rfid_scenario/RFIDScenario.js");
/* harmony import */ var _params_rfid_scenario_EDLDataGroups__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./params/rfid_scenario/EDLDataGroups */ "./src/params/rfid_scenario/EDLDataGroups.js");
/* harmony import */ var _rfid_PAResourcesIssuer__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./rfid/PAResourcesIssuer */ "./src/rfid/PAResourcesIssuer.js");
/* harmony import */ var _rfid_RFIDErrorCodes__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./rfid/RFIDErrorCodes */ "./src/rfid/RFIDErrorCodes.js");
/* harmony import */ var _rfid_TccParams__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./rfid/TccParams */ "./src/rfid/TccParams.js");
/* harmony import */ var _rfid_RFIDNotification__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./rfid/RFIDNotification */ "./src/rfid/RFIDNotification.js");
/* harmony import */ var _rfid_PAAttribute__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./rfid/PAAttribute */ "./src/rfid/PAAttribute.js");
/* harmony import */ var _rfid_TAChallenge__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./rfid/TAChallenge */ "./src/rfid/TAChallenge.js");
/* harmony import */ var _rfid_PKDCertificate__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./rfid/PKDCertificate */ "./src/rfid/PKDCertificate.js");





































































































































class DocumentReader {
    static get instance() { return DocumentReader._instance }
    static _instance = new DocumentReader()

    get availableScenarios() { return this._availableScenarios }
    _availableScenarios = []

    get version() { return this._version }
    _version = null

    get license() { return this._license }
    _license = new _info_License__WEBPACK_IMPORTED_MODULE_10__.License()

    async isRFIDAvailableForUse() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getIsRFIDAvailableForUse", []);
    }

    async isAuthenticatorRFIDAvailableForUse() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("isAuthenticatorRFIDAvailableForUse", []);
    }

    async isAuthenticatorAvailableForUse() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("isAuthenticatorAvailableForUse", []);
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
    _functionality = new _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.Functionality()
    set functionality(val) {
        this._functionality = val;
        this._functionality._apply();
    }

    get processParams() { return this._processParams }
    _processParams = new _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.ProcessParams()
    set processParams(val) {
        this._processParams = val;
        this._processParams._apply();
    }

    get customization() { return this._customization }
    _customization = new _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.Customization()
    set customization(val) {
        this._customization = val;
        this._customization._apply();
    }

    get rfidScenario() { return this._rfidScenario }
    _rfidScenario = new _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDScenario()
    set rfidScenario(val) {
        this._rfidScenario = val;
        this._rfidScenario._apply();
    }

    async isReady() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getDocumentReaderIsReady", []);
    }

    async status() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getDocumentReaderStatus", []);
    }

    resetConfiguration() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("resetConfiguration", []);
        this._functionality = new _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.Functionality();
        this._processParams = new _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.ProcessParams();
        this._customization = new _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.Customization();
        this._rfidScenario = new _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDScenario();
    }

    set onCustomButtonTapped(completion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setCustomButtonTappedCompletion)(completion);
    }

    set videoEncoderCompletion(completion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setVideoEncoderCompletion)(completion);
    }

    async initialize(config) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("initialize", [config])
        var [success, error] = this._successOrErrorFromJson(response)
        if (success) await this._onInit()
        return [success, error]
    }

    async connectBluetoothDevice(deviceName) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("connectBluetoothDevice", [deviceName]);
    }

    deinitializeReader() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("deinitializeReader", []);
    }

    async prepareDatabase(databaseID, prepareCompletion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setDocumentReaderPrepareCompletion)(prepareCompletion);
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("prepareDatabase", [databaseID]);
        return this._successOrErrorFromJson(response);
    }

    async runAutoUpdate(databaseID, prepareCompletion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setDocumentReaderPrepareCompletion)(prepareCompletion);
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("runAutoUpdate", [databaseID]);
        return this._successOrErrorFromJson(response);
    }

    async checkDatabaseUpdate(databaseID) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("checkDatabaseUpdate", [databaseID]);
        return _info_DocumentsDatabase__WEBPACK_IMPORTED_MODULE_9__.DocumentsDatabase.fromJson(response ? JSON.parse(response) : null);
    }

    async cancelDBUpdate() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("cancelDBUpdate", []);
    }

    async removeDatabase() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("removeDatabase", []);
    }

    startNewPage() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("startNewPage", []);
    }

    startNewSession() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("startNewSession", []);
    }

    scan(config, completion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setDocumentReaderCompletion)(completion);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("scan", [config]);
    }

    startScanner(config, completion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setDocumentReaderCompletion)(completion);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("startScanner", [config]);
    }

    recognize(config, completion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setDocumentReaderCompletion)(completion);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("recognize", [config]);
    }

    rfid(config) {
        if (config._disableUI) {
            (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setRFIDCompletion)(config._rfidCompletion);
        } else {
            (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setDocumentReaderCompletion)(config._completion);
        }

        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setRFIDProgressCompletion)(config.onProgress);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setChipDetectedCompletion)(config.onChipDetected);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setRetryReadChipCompletion)(config.onRetryReadChip);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setPaCertificateCompletion)(config.onRequestPACertificates);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setTaCertificateCompletion)(config.onRequestTACertificates);
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setTaSignatureCompletion)(config.onRequestTASignature);

        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)(config._disableUI ? "readRFID" : "startRFIDReader", [
            config.onRequestPACertificates != null,
            config.onRequestTACertificates != null,
            config.onRequestTASignature != null,
        ]);
    }

    stopScanner() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("stopScanner", []);
    }

    stopRFIDReader() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("stopRFIDReader", []);
    }

    addPKDCertificates(certificates) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("addPKDCertificates", [certificates]);
    }

    clearPKDCertificates() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("clearPKDCertificates", []);
    }

    async setTCCParams(params) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setTCCParams", [params]);
        return this._successOrErrorFromJson(response);
    }

    async finalizePackage() {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("finalizePackage", []);
        var jsonObject = JSON.parse(response);
        var action = jsonObject["action"];
        var info = _results_TransactionInfo__WEBPACK_IMPORTED_MODULE_30__.TransactionInfo.fromJson(jsonObject["info"]);
        var error = _info_DocReaderException__WEBPACK_IMPORTED_MODULE_8__.DocReaderException.fromJson(jsonObject["error"]);

        return [action, info, error];
    }

    endBackendTransaction() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("endBackendTransaction", []);
    }

    _successOrErrorFromJson(jsonString) {
        var jsonObject = JSON.parse(jsonString);
        var success = jsonObject["success"];
        var error = _info_DocReaderException__WEBPACK_IMPORTED_MODULE_8__.DocReaderException.fromJson(jsonObject["error"]);
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
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getProcessParams", []);
        return _params_process_params_ProcessParams__WEBPACK_IMPORTED_MODULE_75__.ProcessParams.fromJson(JSON.parse(response));
    }

    async _getFunctionality() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getFunctionality", []);
        return _params_Functionality__WEBPACK_IMPORTED_MODULE_83__.Functionality.fromJson(JSON.parse(response));
    }

    async _getCustomization() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getCustomization", []);
        return _params_customization_Customization__WEBPACK_IMPORTED_MODULE_87__.Customization.fromJson(JSON.parse(response));
    }

    async _getRfidScenario() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getRfidScenario", []);
        return _params_rfid_scenario_RFIDScenario__WEBPACK_IMPORTED_MODULE_92__.RFIDScenario.fromJson(JSON.parse(response));
    }

    async _getLicense() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getLicense", []);
        return _info_License__WEBPACK_IMPORTED_MODULE_10__.License.fromJson(response ? JSON.parse(response) : {});
    }

    async _getAvailableScenarios() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getAvailableScenarios", []);
        const scenarios = [];
        for (const s of JSON.parse(response)) {
            scenarios.push(_info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_11__.DocReaderScenario.fromJson(s));
        }
        return scenarios;
    }

    async _getDocReaderVersion() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getDocReaderVersion", []);
        return _info_DocReaderVersion__WEBPACK_IMPORTED_MODULE_6__.DocReaderVersion.fromJson(response ? JSON.parse(response) : null);
    }

    async _getRfidSessionStatus() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getRfidSessionStatus", []);
    }

    _setRfidSessionStatus(status) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setRfidSessionStatus", [status]);
    }

    async _getTag() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTag", []);
    }

    _setTag(tag) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setTag", [tag]);
    }

    async _getTenant() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTenant", []);
    }

    _setTenant(tenant) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setTenant", [tenant]);
    }

    async _getEnv() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getEnv", []);
    }

    _setEnv(env) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setEnv", [env]);
    }

    async _getLocale() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getLocale", []);
    }

    _setLocale(locale) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setLocale", [locale]);
    }

    _setLocalizationDictionary(dictionary) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setLocalizationDictionary", [dictionary]);
    }
}

const DocReaderAction = {
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


/***/ }),

/***/ "./src/info/DocReaderException.js":
/*!****************************************!*\
  !*** ./src/info/DocReaderException.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocReaderException: () => (/* binding */ DocReaderException),
/* harmony export */   ErrorCodes: () => (/* binding */ ErrorCodes)
/* harmony export */ });
class DocReaderException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocReaderException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }

    toJson() {
        return {
            "code": this.code,
            "message": this.message,
        }
    }
}

const ErrorCodes = {
    INITIALIZATION_CORE_ABSENT: 0,
    INITIALIZATION_FAILED: 1,
    INCORRECT_SCENARIO: 2,
    NO_RESULT: 3,
    REMOVE_DATABASE: 4,
    FETCHING_DATABASE: 5,
    DB_ID_NOT_FOUND: 6,
    DB_DESCRIPTION_NOT_FOUND: 7,
    SAVE_DB: 8,
    DOWNLOAD_DB_INCORRECT_CHECKSUM: 9,
    DB_DOWNLOAD: 10,
    DB_CREATION: 11,
    RFID_ERROR: 12,
    LICENSE_ABSENT_OR_CORRUPTED: 13,
    LICENSE_INVALID_DATE: 14,
    LICENSE_INVALID_VERSION: 15,
    LICENSE_INVALID_DEVICE_ID: 16,
    LICENSE_INVALID_SYSTEM_OR_APP_ID: 17,
    LICENSE_NO_CAPABILITIES: 18,
    LICENSE_NO_AUTHENTICITY: 19,
    RECORD_PROCESS_INVALID_OUTPUT_URL: 20,
    LICENSE_ONLINE_ERROR: 21,
    LICENSE_NO_DATABASE: 22,
    LICENSE_DATABASE_INCORRECT: 23,
    INVALID_TCC_PARAMS: 24,
    RFID_IN_PROGRESS: 25,
    START_BACKEND_PROCESSING: 26,
    ADD_DATA_TO_PACKAGE: 27,
    FINALIZE_FAILED: 28,
    CAMERA_NO_PERMISSION: 29,
    CAMERA_NOT_AVAILABLE: 30,
    CANNOT_USE_CAMERA_IN_SCENARIO: 40,
    BACKEND_ONLINE_PROCESSING: 303,
    WRONG_INPUT: 400,
    STATE_EXCEPTION: 500,
    BLE_EXCEPTION: 600,
    FEATURE_BLUETOOTH_LE_NOT_SUPPORTED: 601,
    APP_BACKGROUND: 700,
    ONLINE_PROCESSING_WRONG_INPUT: 800,
    NATIVE_JAVA_EXCEPTION: 1000
}


/***/ }),

/***/ "./src/info/DocReaderScenario.js":
/*!***************************************!*\
  !*** ./src/info/DocReaderScenario.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocReaderOrientation: () => (/* binding */ DocReaderOrientation),
/* harmony export */   DocReaderScenario: () => (/* binding */ DocReaderScenario),
/* harmony export */   Scenario: () => (/* binding */ Scenario)
/* harmony export */ });
class DocReaderScenario {
    name
    caption
    description
    frameOrientation
    uvTorch
    faceExt
    multiPageOff
    seriesProcessMode
    frameKWHLandscape
    frameKWHPortrait
    frameKWHDoublePageSpreadLandscape
    frameKWHDoublePageSpreadPortrait
    manualCrop

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocReaderScenario()

        result.uvTorch = jsonObject["uvTorch"]
        result.frameOrientation = jsonObject["frameOrientation"]
        result.faceExt = jsonObject["faceExt"]
        result.multiPageOff = jsonObject["multiPageOff"]
        result.seriesProcessMode = jsonObject["seriesProcessMode"]
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"]
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"]
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"]
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"]
        result.name = jsonObject["name"]
        result.caption = jsonObject["caption"]
        result.description = jsonObject["description"]
        result.manualCrop = jsonObject["manualCrop"]

        return result
    }

    toJson() {
        return {
            "uvTorch": this.uvTorch,
            "frameOrientation": this.frameOrientation,
            "faceExt": this.faceExt,
            "multiPageOff": this.multiPageOff,
            "seriesProcessMode": this.seriesProcessMode,
            "frameKWHLandscape": this.frameKWHLandscape,
            "frameKWHPortrait": this.frameKWHPortrait,
            "frameKWHDoublePageSpreadPortrait": this.frameKWHDoublePageSpreadPortrait,
            "frameKWHDoublePageSpreadLandscape": this.frameKWHDoublePageSpreadLandscape,
            "name": this.name,
            "caption": this.caption,
            "description": this.description,
            "manualCrop": this.manualCrop,
        }
    }
}

const Scenario = {
    MRZ: "Mrz",
    BARCODE: "Barcode",
    LOCATE: "Locate",
    OCR: "Ocr",
    DOCTYPE: "DocType",
    MRZ_OR_BARCODE: "MrzOrBarcode",
    MRZ_OR_LOCATE: "MrzOrLocate",
    MRZ_AND_LOCATE: "MrzAndLocate",
    BARCODE_AND_LOCATE: "BarcodeAndLocate",
    MRZ_OR_OCR: "MrzOrOcr",
    MRZ_OR_BARCODE_OR_OCR: "MrzOrBarcodeOrOcr",
    LOCATE_VISUAL_AND_MRZ_OR_OCR: "LocateVisual_And_MrzOrOcr",
    FULL_PROCESS: "FullProcess",
    FULL_AUTH: "FullAuth",
    ID3RUS: "Id3Rus",
    RUS_STAMP: "RusStamp",
    OCR_FREE: "OcrFree",
    CREDIT_CARD: "CreditCard",
    CAPTURE: "Capture",
    DTC: "DTC",
    RFID: "RFID"
}

const DocReaderOrientation = {
    ALL: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
    LANDSCAPE_LEFT: 3,
    LANDSCAPE_RIGHT: 4
}


/***/ }),

/***/ "./src/info/DocReaderVersion.js":
/*!**************************************!*\
  !*** ./src/info/DocReaderVersion.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocReaderVersion: () => (/* binding */ DocReaderVersion)
/* harmony export */ });
/* harmony import */ var _DocumentsDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentsDatabase */ "./src/info/DocumentsDatabase.js");


class DocReaderVersion {
    api
    core
    coreMode
    database

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocReaderVersion()

        result.api = jsonObject["api"]
        result.core = jsonObject["core"]
        result.coreMode = jsonObject["coreMode"]
        result.database = _DocumentsDatabase__WEBPACK_IMPORTED_MODULE_0__.DocumentsDatabase.fromJson(jsonObject["database"])

        return result
    }

    toJson() {
        return {
            "api": this.api,
            "core": this.core,
            "coreMode": this.coreMode,
            "database": this.database?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/info/DocumentsDatabase.js":
/*!***************************************!*\
  !*** ./src/info/DocumentsDatabase.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsDatabase: () => (/* binding */ DocumentsDatabase)
/* harmony export */ });
class DocumentsDatabase {
    databaseID
    version
    date
    databaseDescription
    countriesNumber
    documentsNumber
    size

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentsDatabase()

        result.databaseID = jsonObject["databaseID"]
        result.version = jsonObject["version"]
        result.date = jsonObject["date"]
        result.databaseDescription = jsonObject["databaseDescription"]
        result.countriesNumber = jsonObject["countriesNumber"]
        result.documentsNumber = jsonObject["documentsNumber"]
        result.size = jsonObject["size"]

        return result
    }

    toJson() {
        return {
            "databaseID": this.databaseID,
            "version": this.version,
            "date": this.date,
            "databaseDescription": this.databaseDescription,
            "countriesNumber": this.countriesNumber,
            "documentsNumber": this.documentsNumber,
            "size": this.size,
        }
    }
}


/***/ }),

/***/ "./src/info/License.js":
/*!*****************************!*\
  !*** ./src/info/License.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   License: () => (/* binding */ License)
/* harmony export */ });
/**
 * Class contains properties to get the information about the license.
 */
class License {
    expiryDate
    countryFilter
    isRfidAvailable

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new License()

        result.expiryDate = jsonObject["expiryDate"]
        result.countryFilter = jsonObject["countryFilter"]
        result.isRfidAvailable = jsonObject["isRfidAvailable"] ?? false

        return result
    }

    toJson() {
        return {
            "expiryDate": this.expiryDate,
            "countryFilter": this.countryFilter,
            "isRfidAvailable": this.isRfidAvailable,
        }
    }
}


/***/ }),

/***/ "./src/info/PrepareProgress.js":
/*!*************************************!*\
  !*** ./src/info/PrepareProgress.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrepareProgress: () => (/* binding */ PrepareProgress)
/* harmony export */ });
/**
 * Class contains info about database preparation progress.
 */
class PrepareProgress {
    downloadedBytes
    totalBytes
    progress

    constructor(downloadedBytes, totalBytes, progress) {
        this.downloadedBytes = downloadedBytes
        this.totalBytes = totalBytes
        this.progress = progress
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new PrepareProgress(
            jsonObject["downloadedBytes"],
            jsonObject["totalBytes"],
            jsonObject["progress"]
        )
    }

    toJson() {
        return {
            "downloadedBytes": this.downloadedBytes,
            "totalBytes": this.totalBytes,
            "progress": this.progress,
        }
    }
}


/***/ }),

/***/ "./src/info/RFIDException.js":
/*!***********************************!*\
  !*** ./src/info/RFIDException.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDException: () => (/* binding */ RFIDException)
/* harmony export */ });
/* harmony import */ var _rfid_RFIDErrorCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rfid/RFIDErrorCodes */ "./src/rfid/RFIDErrorCodes.js");


class RFIDException {
    code
    message

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new RFIDException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }

    toJson() {
        return {
            "code": this.code,
            "message": this.message,
        }
    }
}


/***/ }),

/***/ "./src/internal/bridge.js":
/*!********************************!*\
  !*** ./src/internal/bridge.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _setChipDetectedCompletion: () => (/* binding */ _setChipDetectedCompletion),
/* harmony export */   _setCustomButtonTappedCompletion: () => (/* binding */ _setCustomButtonTappedCompletion),
/* harmony export */   _setDocumentReaderCompletion: () => (/* binding */ _setDocumentReaderCompletion),
/* harmony export */   _setDocumentReaderPrepareCompletion: () => (/* binding */ _setDocumentReaderPrepareCompletion),
/* harmony export */   _setPaCertificateCompletion: () => (/* binding */ _setPaCertificateCompletion),
/* harmony export */   _setRFIDCompletion: () => (/* binding */ _setRFIDCompletion),
/* harmony export */   _setRFIDProgressCompletion: () => (/* binding */ _setRFIDProgressCompletion),
/* harmony export */   _setRetryReadChipCompletion: () => (/* binding */ _setRetryReadChipCompletion),
/* harmony export */   _setTaCertificateCompletion: () => (/* binding */ _setTaCertificateCompletion),
/* harmony export */   _setTaSignatureCompletion: () => (/* binding */ _setTaSignatureCompletion),
/* harmony export */   _setVideoEncoderCompletion: () => (/* binding */ _setVideoEncoderCompletion),
/* harmony export */   exec: () => (/* binding */ exec)
/* harmony export */ });
/* harmony import */ var _cordova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cordova */ "./src/internal/cordova.js");
/* harmony import */ var _results_Results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../results/Results */ "./src/results/Results.js");
/* harmony import */ var _info_DocReaderException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info/DocReaderException */ "./src/info/DocReaderException.js");
/* harmony import */ var _info_RFIDException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info/RFIDException */ "./src/info/RFIDException.js");
/* harmony import */ var _info_PrepareProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../info/PrepareProgress */ "./src/info/PrepareProgress.js");
/* harmony import */ var _rfid_RFIDNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rfid/RFIDNotification */ "./src/rfid/RFIDNotification.js");
/* harmony import */ var _rfid_PAResourcesIssuer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rfid/PAResourcesIssuer */ "./src/rfid/PAResourcesIssuer.js");
/* harmony import */ var _rfid_TAChallenge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rfid/TAChallenge */ "./src/rfid/TAChallenge.js");










const { RNDocumentReader } = _cordova__WEBPACK_IMPORTED_MODULE_0__.NativeModules
var eventManager = new _cordova__WEBPACK_IMPORTED_MODULE_0__.NativeEventEmitter(RNDocumentReader)

async function exec(name, params) {
    return RNDocumentReader.exec(name, params)
}

function _setEvent(id, completion, fromJson) {
    eventManager.removeAllListeners(id)
    if (completion == null) return
    if (fromJson == null) eventManager.addListener(id, completion)
    else eventManager.addListener(id, data => {
        data = fromJson(data)
        if (data !== null && typeof data[Symbol.iterator] === 'function') completion(...data)
        else completion(data)
    })
}

function _setDocumentReaderCompletion(completion) {
    _setEvent("completion", completion, json => {
        var jsonObject = JSON.parse(json)
        var action = jsonObject["action"];
        var results = _results_Results__WEBPACK_IMPORTED_MODULE_1__.Results.fromJson(jsonObject["results"]);
        var error = _info_DocReaderException__WEBPACK_IMPORTED_MODULE_2__.DocReaderException.fromJson(jsonObject["error"]);
        return [action, results, error]
    })
}

function _setRFIDCompletion(completion) {
    _setEvent("completion", completion, json => {
        var jsonObject = JSON.parse(json)
        var action = jsonObject["action"];
        var results = _results_Results__WEBPACK_IMPORTED_MODULE_1__.Results.fromJson(jsonObject["results"]);
        var error = _info_RFIDException__WEBPACK_IMPORTED_MODULE_3__.RFIDException.fromJson(jsonObject["error"]);
        return [action, results, error]
    })
}

function _setDocumentReaderPrepareCompletion(completion) {
    _setEvent("database_progress", completion, json => _info_PrepareProgress__WEBPACK_IMPORTED_MODULE_4__.PrepareProgress.fromJson(JSON.parse(json)))
}

function _setCustomButtonTappedCompletion(completion) {
    _setEvent("onCustomButtonTappedEvent", completion)
}

function _setVideoEncoderCompletion(completion) {
    _setEvent("video_encoder_completion", completion)
}

function _setRFIDProgressCompletion(completion) {
    _setEvent("rfidOnProgressCompletion", completion, json => _rfid_RFIDNotification__WEBPACK_IMPORTED_MODULE_5__.RFIDNotification.fromJson(JSON.parse(json)))
}

function _setChipDetectedCompletion(completion) {
    _setEvent("rfidOnChipDetectedEvent", completion)
}

function _setRetryReadChipCompletion(completion) {
    _setEvent("rfidOnRetryReadChipEvent", completion, json => _info_RFIDException__WEBPACK_IMPORTED_MODULE_3__.RFIDException.fromJson(JSON.parse(json)))
}

function _setPaCertificateCompletion(completion) {
    _setEvent("pa_certificate_completion", completion, json => {
        var jsonObject = JSON.parse(json)
        var serialNumber = jsonObject["serialNumber"]
        var issuer = _rfid_PAResourcesIssuer__WEBPACK_IMPORTED_MODULE_6__.PAResourcesIssuer.fromJson(jsonObject["issuer"])
        return [serialNumber, issuer, async certificates => {
            await exec("providePACertificates", [certificates])
        }]
    })
}

function _setTaCertificateCompletion(completion) {
    _setEvent("ta_certificate_completion", completion, data => {
        return [data, async certificates => {
            await exec("provideTACertificates", [certificates])
        }]
    })
}

function _setTaSignatureCompletion(completion) {
    _setEvent("ta_signature_completion", completion, json => {
        return [_rfid_TAChallenge__WEBPACK_IMPORTED_MODULE_7__.TAChallenge.fromJson(json.decode(msg)), async signature => {
            await exec("provideTASignature", [signature])
        }]
    })
}


/***/ }),

/***/ "./src/internal/cordova.js":
/*!*********************************!*\
  !*** ./src/internal/cordova.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NativeEventEmitter: () => (/* binding */ NativeEventEmitter),
/* harmony export */   NativeModules: () => (/* binding */ NativeModules)
/* harmony export */ });
var _exec = (completion, params) => cordova.exec(completion, null, "DocumentReader", "exec", params)

const NativeModules = {
    RNDocumentReader: {
        exec: async (name, params) => new Promise((resolve, _) => _exec(data => resolve(data), [name, ...params]))
    }
}

class NativeEventEmitter {
    addListener(id, completion) {
        _exec(completion, ["setEvent", id])
    }

    removeAllListeners(id) {
        _exec(null, ["setEvent", id])
    }
}

/***/ }),

/***/ "./src/params/Functionality.js":
/*!*************************************!*\
  !*** ./src/params/Functionality.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraMode: () => (/* binding */ CameraMode),
/* harmony export */   CameraPosition: () => (/* binding */ CameraPosition),
/* harmony export */   CameraSize: () => (/* binding */ CameraSize),
/* harmony export */   CaptureMode: () => (/* binding */ CaptureMode),
/* harmony export */   CaptureSessionPreset: () => (/* binding */ CaptureSessionPreset),
/* harmony export */   DocReaderFrame: () => (/* binding */ DocReaderFrame),
/* harmony export */   Functionality: () => (/* binding */ Functionality)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _info_DocReaderScenario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info/DocReaderScenario */ "./src/info/DocReaderScenario.js");




class Functionality {
    get pictureOnBoundsReady() { return this._pictureOnBoundsReady; }
    set pictureOnBoundsReady(val) {
        this._pictureOnBoundsReady = val;
        this._set({ "pictureOnBoundsReady": val });
    }

    get showTorchButton() { return this._showTorchButton; }
    set showTorchButton(val) {
        this._showTorchButton = val;
        this._set({ "showTorchButton": val });
    }

    get showCloseButton() { return this._showCloseButton; }
    set showCloseButton(val) {
        this._showCloseButton = val;
        this._set({ "showCloseButton": val });
    }

    get videoCaptureMotionControl() { return this._videoCaptureMotionControl; }
    set videoCaptureMotionControl(val) {
        this._videoCaptureMotionControl = val;
        this._set({ "videoCaptureMotionControl": val });
    }

    get showCaptureButton() { return this._showCaptureButton; }
    set showCaptureButton(val) {
        this._showCaptureButton = val;
        this._set({ "showCaptureButton": val });
    }

    get showChangeFrameButton() { return this._showChangeFrameButton; }
    set showChangeFrameButton(val) {
        this._showChangeFrameButton = val;
        this._set({ "showChangeFrameButton": val });
    }

    get showSkipNextPageButton() { return this._showSkipNextPageButton; }
    set showSkipNextPageButton(val) {
        this._showSkipNextPageButton = val;
        this._set({ "showSkipNextPageButton": val });
    }

    get useAuthenticator() { return this._useAuthenticator; }
    set useAuthenticator(val) {
        this._useAuthenticator = val;
        this._set({ "useAuthenticator": val });
    }

    get skipFocusingFrames() { return this._skipFocusingFrames; }
    set skipFocusingFrames(val) {
        this._skipFocusingFrames = val;
        this._set({ "skipFocusingFrames": val });
    }

    get showCameraSwitchButton() { return this._showCameraSwitchButton; }
    set showCameraSwitchButton(val) {
        this._showCameraSwitchButton = val;
        this._set({ "showCameraSwitchButton": val });
    }

    get displayMetadata() { return this._displayMetadata; }
    set displayMetadata(val) {
        this._displayMetadata = val;
        this._set({ "displayMetadata": val });
    }

    get isZoomEnabled() { return this._isZoomEnabled; }
    set isZoomEnabled(val) {
        this._isZoomEnabled = val;
        this._set({ "isZoomEnabled": val });
    }

    get isCameraTorchCheckDisabled() { return this._isCameraTorchCheckDisabled; }
    set isCameraTorchCheckDisabled(val) {
        this._isCameraTorchCheckDisabled = val;
        this._set({ "isCameraTorchCheckDisabled": val });
    }

    get recordScanningProcess() { return this._recordScanningProcess; }
    set recordScanningProcess(val) {
        this._recordScanningProcess = val;
        this._set({ "recordScanningProcess": val });
    }

    get manualMultipageMode() { return this._manualMultipageMode; }
    set manualMultipageMode(val) {
        this._manualMultipageMode = val;
        this._set({ "manualMultipageMode": val });
    }

    get singleResult() { return this._singleResult; }
    set singleResult(val) {
        this._singleResult = val;
        this._set({ "singleResult": val });
    }

    get torchTurnedOn() { return this._torchTurnedOn; }
    set torchTurnedOn(val) {
        this._torchTurnedOn = val;
        this._set({ "torchTurnedOn": val });
    }

    get showCaptureButtonDelayFromDetect() { return this._showCaptureButtonDelayFromDetect; }
    set showCaptureButtonDelayFromDetect(val) {
        this._showCaptureButtonDelayFromDetect = val;
        this._set({ "showCaptureButtonDelayFromDetect": val });
    }

    get showCaptureButtonDelayFromStart() { return this._showCaptureButtonDelayFromStart; }
    set showCaptureButtonDelayFromStart(val) {
        this._showCaptureButtonDelayFromStart = val;
        this._set({ "showCaptureButtonDelayFromStart": val });
    }

    get rfidTimeout() { return this._rfidTimeout; }
    set rfidTimeout(val) {
        this._rfidTimeout = val;
        this._set({ "rfidTimeout": val });
    }

    get forcePagesCount() { return this._forcePagesCount; }
    set forcePagesCount(val) {
        this._forcePagesCount = val;
        this._set({ "forcePagesCount": val });
    }

    get orientation() { return this._orientation; }
    set orientation(val) {
        this._orientation = val;
        this._set({ "orientation": val });
    }

    get captureMode() { return this._captureMode; }
    set captureMode(val) {
        this._captureMode = val;
        this._set({ "captureMode": val });
    }

    get cameraMode() { return this._cameraMode; }
    set cameraMode(val) {
        this._cameraMode = val;
        this._set({ "cameraMode": val });
    }

    get cameraPositionIOS() { return this._cameraPositionIOS; }
    set cameraPositionIOS(val) {
        this._cameraPositionIOS = val;
        this._set({ "cameraPositionIOS": val });
    }

    get cameraFrame() { return this._cameraFrame; }
    set cameraFrame(val) {
        this._cameraFrame = val;
        this._set({ "cameraFrame": val });
    }

    get btDeviceName() { return this._btDeviceName; }
    set btDeviceName(val) {
        this._btDeviceName = val;
        this._set({ "btDeviceName": val });
    }

    get zoomFactor() { return this._zoomFactor; }
    set zoomFactor(val) {
        this._zoomFactor = val;
        this._set({ "zoomFactor": val });
    }

    get exposure() { return this._exposure; }
    set exposure(val) {
        this._exposure = val;
        this._set({ "exposure": val });
    }

    get videoRecordingSizeDownscaleFactor() { return this._videoRecordingSizeDownscaleFactor; }
    set videoRecordingSizeDownscaleFactor(val) {
        this._videoRecordingSizeDownscaleFactor = val;
        this._set({ "videoRecordingSizeDownscaleFactor": val });
    }

    get excludedCamera2Models() { return this._excludedCamera2Models; }
    set excludedCamera2Models(val) {
        this._excludedCamera2Models = val;
        this._set({ "excludedCamera2Models": val });
    }

    get cameraResolutionAndroid() { return this._cameraResolutionAndroid; }
    set cameraResolutionAndroid(val) {
        this._cameraResolutionAndroid = val;
        this._set({ "cameraSize": val });
    }

    get cameraResolutionIOS() { return this._cameraResolutionIOS; }
    set cameraResolutionIOS(val) {
        this._cameraResolutionIOS = val;
        this._set({ "videoSessionPreset": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new Functionality();
        result._pictureOnBoundsReady = jsonObject["pictureOnBoundsReady"];
        result._showTorchButton = jsonObject["showTorchButton"];
        result._showCloseButton = jsonObject["showCloseButton"];
        result._videoCaptureMotionControl = jsonObject["videoCaptureMotionControl"];
        result._showCaptureButton = jsonObject["showCaptureButton"];
        result._showChangeFrameButton = jsonObject["showChangeFrameButton"];
        result._showSkipNextPageButton = jsonObject["showSkipNextPageButton"];
        result._useAuthenticator = jsonObject["useAuthenticator"];
        result._skipFocusingFrames = jsonObject["skipFocusingFrames"];
        result._showCameraSwitchButton = jsonObject["showCameraSwitchButton"];
        result._displayMetadata = jsonObject["displayMetadata"];
        result._isZoomEnabled = jsonObject["isZoomEnabled"];
        result._isCameraTorchCheckDisabled = jsonObject["isCameraTorchCheckDisabled"];
        result._recordScanningProcess = jsonObject["recordScanningProcess"];
        result._manualMultipageMode = jsonObject["manualMultipageMode"];
        result._singleResult = jsonObject["singleResult"];
        result._torchTurnedOn = jsonObject["torchTurnedOn"];
        result._showCaptureButtonDelayFromDetect = jsonObject["showCaptureButtonDelayFromDetect"];
        result._showCaptureButtonDelayFromStart = jsonObject["showCaptureButtonDelayFromStart"];
        result._rfidTimeout = jsonObject["rfidTimeout"];
        result._forcePagesCount = jsonObject["forcePagesCount"];
        result._orientation = jsonObject["orientation"];
        result._captureMode = jsonObject["captureMode"];
        result._cameraMode = jsonObject["cameraMode"];
        result._cameraPositionIOS = jsonObject["cameraPositionIOS"];
        result._cameraFrame = jsonObject["cameraFrame"];
        result._btDeviceName = jsonObject["btDeviceName"];
        result._zoomFactor = jsonObject["zoomFactor"];
        result._exposure = jsonObject["exposure"];
        result._videoRecordingSizeDownscaleFactor = jsonObject["videoRecordingSizeDownscaleFactor"];
        result._excludedCamera2Models = jsonObject["excludedCamera2Models"];
        result._cameraResolutionAndroid = CameraSize.fromJson(jsonObject["cameraSize"]);
        result._cameraResolutionIOS = jsonObject["videoSessionPreset"];

        return result;
    }

    toJson() {
        return {
            "pictureOnBoundsReady": this.pictureOnBoundsReady,
            "showTorchButton": this.showTorchButton,
            "showCloseButton": this.showCloseButton,
            "videoCaptureMotionControl": this.videoCaptureMotionControl,
            "showCaptureButton": this.showCaptureButton,
            "showChangeFrameButton": this.showChangeFrameButton,
            "showSkipNextPageButton": this.showSkipNextPageButton,
            "useAuthenticator": this.useAuthenticator,
            "skipFocusingFrames": this.skipFocusingFrames,
            "showCameraSwitchButton": this.showCameraSwitchButton,
            "displayMetadata": this.displayMetadata,
            "isZoomEnabled": this.isZoomEnabled,
            "isCameraTorchCheckDisabled": this.isCameraTorchCheckDisabled,
            "recordScanningProcess": this.recordScanningProcess,
            "manualMultipageMode": this.manualMultipageMode,
            "singleResult": this.singleResult,
            "torchTurnedOn": this.torchTurnedOn,
            "showCaptureButtonDelayFromDetect": this.showCaptureButtonDelayFromDetect,
            "showCaptureButtonDelayFromStart": this.showCaptureButtonDelayFromStart,
            "rfidTimeout": this.rfidTimeout,
            "forcePagesCount": this.forcePagesCount,
            "orientation": this.orientation,
            "captureMode": this.captureMode,
            "cameraMode": this.cameraMode,
            "cameraPositionIOS": this.cameraPositionIOS,
            "cameraFrame": this.cameraFrame,
            "btDeviceName": this.btDeviceName,
            "zoomFactor": this.zoomFactor,
            "exposure": this.exposure,
            "videoRecordingSizeDownscaleFactor": this.videoRecordingSizeDownscaleFactor,
            "excludedCamera2Models": this.excludedCamera2Models,
            "cameraSize": this.cameraResolutionAndroid?.toJson(),
            "videoSessionPreset": this.cameraResolutionIOS,
        }
    }

    _apply() { this._set(this); }
    _set(json) {
        if (this === _index__WEBPACK_IMPORTED_MODULE_1__.DocumentReader.instance.functionality)
            (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setFunctionality", [json]);
    }
}

const CameraPosition = {
    UNKNOWN: -1,
    UNSPECIFIED: 0,
    BACK: 1,
    FRONT: 2,
};

const CaptureMode = {
    UNKNOWN: -1,
    AUTO: 0,
    CAPTURE_VIDEO: 1,
    CAPTURE_FRAME: 2,
};

const CameraMode = {
    UNKNOWN: -1,
    AUTO: 0,
    CAMERA1: 1,
    CAMERA2: 2,
};

const CaptureSessionPreset = {
    UNKNOWN: -1,
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    PHOTO: 3,
    INPUT_PRIORITY: 4,
    PRESET_1280x720: 6,
    PRESET_1920x1080: 7,
    PRESET_3840x2160: 8,
    FRAME_960x540: 9,
    FRAME_1280x720: 10,
    PRESET_640x480: 12,
    PRESET_352x288: 13,
};

const DocReaderFrame = {
    UNKNOWN: "",
    SCENARIO_DEFAULT: "id1",
    MAX: "max",
    NONE: "none",
    DOCUMENT: "document",
};

class CameraSize {
    width
    height

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        return new CameraSize(jsonObject["width"], jsonObject["height"]);
    }

    toJson() {
        return {
            "width": this.width,
            "height": this.height,
        }
    }
}


/***/ }),

/***/ "./src/params/customization/Customization.js":
/*!***************************************************!*\
  !*** ./src/params/customization/Customization.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cap: () => (/* binding */ Cap),
/* harmony export */   CustomButtonTag: () => (/* binding */ CustomButtonTag),
/* harmony export */   Customization: () => (/* binding */ Customization),
/* harmony export */   FrameShapeType: () => (/* binding */ FrameShapeType),
/* harmony export */   ViewContentMode: () => (/* binding */ ViewContentMode)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _CustomizationColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomizationColors */ "./src/params/customization/CustomizationColors.js");
/* harmony import */ var _CustomizationFonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomizationFonts */ "./src/params/customization/CustomizationFonts.js");
/* harmony import */ var _CustomizationImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomizationImages */ "./src/params/customization/CustomizationImages.js");
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Font */ "./src/params/customization/Font.js");







class Customization {
    get showStatusMessages() { return this._showStatusMessages; }
    set showStatusMessages(val) {
        this._showStatusMessages = val;
        this._set({ "showStatusMessages": val });
    }

    get showResultStatusMessages() { return this._showResultStatusMessages; }
    set showResultStatusMessages(val) {
        this._showResultStatusMessages = val;
        this._set({ "showResultStatusMessages": val });
    }

    get showHelpAnimation() { return this._showHelpAnimation; }
    set showHelpAnimation(val) {
        this._showHelpAnimation = val;
        this._set({ "showHelpAnimation": val });
    }

    get showNextPageAnimation() { return this._showNextPageAnimation; }
    set showNextPageAnimation(val) {
        this._showNextPageAnimation = val;
        this._set({ "showNextPageAnimation": val });
    }

    get showBackgroundMask() { return this._showBackgroundMask; }
    set showBackgroundMask(val) {
        this._showBackgroundMask = val;
        this._set({ "showBackgroundMask": val });
    }

    get cameraFrameBorderWidth() { return this._cameraFrameBorderWidth; }
    set cameraFrameBorderWidth(val) {
        this._cameraFrameBorderWidth = val;
        this._set({ "cameraFrameBorderWidth": val });
    }

    get cameraFrameLineLength() { return this._cameraFrameLineLength; }
    set cameraFrameLineLength(val) {
        this._cameraFrameLineLength = val;
        this._set({ "cameraFrameLineLength": val });
    }

    get cameraFrameOffsetWidth() { return this._cameraFrameOffsetWidth; }
    set cameraFrameOffsetWidth(val) {
        this._cameraFrameOffsetWidth = val;
        this._set({ "cameraFrameOffsetWidth": val });
    }

    get cameraFrameShapeType() { return this._cameraFrameShapeType; }
    set cameraFrameShapeType(val) {
        this._cameraFrameShapeType = val;
        this._set({ "cameraFrameShapeType": val });
    }

    get status() { return this._status; }
    set status(val) {
        this._status = val;
        this._set({ "status": val });
    }

    get resultStatus() { return this._resultStatus; }
    set resultStatus(val) {
        this._resultStatus = val;
        this._set({ "resultStatus": val });
    }

    get multipageButtonText() { return this._multipageButtonText; }
    set multipageButtonText(val) {
        this._multipageButtonText = val;
        this._set({ "multipageButtonText": val });
    }

    get cameraFrameDefaultColor() { return this._cameraFrameDefaultColor; }
    set cameraFrameDefaultColor(val) {
        this._cameraFrameDefaultColor = val;
        this._set({ "cameraFrameDefaultColor": val });
    }

    get cameraFrameActiveColor() { return this._cameraFrameActiveColor; }
    set cameraFrameActiveColor(val) {
        this._cameraFrameActiveColor = val;
        this._set({ "cameraFrameActiveColor": val });
    }

    get statusTextColor() { return this._statusTextColor; }
    set statusTextColor(val) {
        this._statusTextColor = val;
        this._set({ "statusTextColor": val });
    }

    get resultStatusTextColor() { return this._resultStatusTextColor; }
    set resultStatusTextColor(val) {
        this._resultStatusTextColor = val;
        this._set({ "resultStatusTextColor": val });
    }

    get resultStatusBackgroundColor() { return this._resultStatusBackgroundColor; }
    set resultStatusBackgroundColor(val) {
        this._resultStatusBackgroundColor = val;
        this._set({ "resultStatusBackgroundColor": val });
    }

    get multipageButtonBackgroundColor() { return this._multipageButtonBackgroundColor; }
    set multipageButtonBackgroundColor(val) {
        this._multipageButtonBackgroundColor = val;
        this._set({ "multipageButtonBackgroundColor": val });
    }

    get tintColor() { return this._tintColor; }
    set tintColor(val) {
        this._tintColor = val;
        this._set({ "tintColor": val });
    }

    get activityIndicatorColor() { return this._activityIndicatorColor; }
    set activityIndicatorColor(val) {
        this._activityIndicatorColor = val;
        this._set({ "activityIndicatorColor": val });
    }

    get statusBackgroundColor() { return this._statusBackgroundColor; }
    set statusBackgroundColor(val) {
        this._statusBackgroundColor = val;
        this._set({ "statusBackgroundColor": val });
    }

    get cameraPreviewBackgroundColor() { return this._cameraPreviewBackgroundColor; }
    set cameraPreviewBackgroundColor(val) {
        this._cameraPreviewBackgroundColor = val;
        this._set({ "cameraPreviewBackgroundColor": val });
    }

    get backgroundMaskColor() { return this._backgroundMaskColor; }
    set backgroundMaskColor(val) {
        this._backgroundMaskColor = val;
        this._set({ "backgroundMaskColor": val });
    }

    get multipageButtonTextColor() { return this._multipageButtonTextColor; }
    set multipageButtonTextColor(val) {
        this._multipageButtonTextColor = val;
        this._set({ "multipageButtonTextColor": val });
    }

    get statusPositionMultiplier() { return this._statusPositionMultiplier; }
    set statusPositionMultiplier(val) {
        this._statusPositionMultiplier = val;
        this._set({ "statusPositionMultiplier": val });
    }

    get resultStatusPositionMultiplier() { return this._resultStatusPositionMultiplier; }
    set resultStatusPositionMultiplier(val) {
        this._resultStatusPositionMultiplier = val;
        this._set({ "resultStatusPositionMultiplier": val });
    }

    get toolbarSize() { return this._toolbarSize; }
    set toolbarSize(val) {
        this._toolbarSize = val;
        this._set({ "toolbarSize": val });
    }

    get backgroundMaskAlpha() { return this._backgroundMaskAlpha; }
    set backgroundMaskAlpha(val) {
        this._backgroundMaskAlpha = val;
        this._set({ "backgroundMaskAlpha": val });
    }

    get customStatusPositionMultiplier() { return this._customStatusPositionMultiplier; }
    set customStatusPositionMultiplier(val) {
        this._customStatusPositionMultiplier = val;
        this._set({ "customStatusPositionMultiplier": val });
    }

    get cameraFrameVerticalPositionMultiplier() { return this._cameraFrameVerticalPositionMultiplier; }
    set cameraFrameVerticalPositionMultiplier(val) {
        this._cameraFrameVerticalPositionMultiplier = val;
        this._set({ "cameraFrameVerticalPositionMultiplier": val });
    }

    get cameraFrameLandscapeAspectRatio() { return this._cameraFrameLandscapeAspectRatio; }
    set cameraFrameLandscapeAspectRatio(val) {
        this._cameraFrameLandscapeAspectRatio = val;
        this._set({ "cameraFrameLandscapeAspectRatio": val });
    }

    get cameraFramePortraitAspectRatio() { return this._cameraFramePortraitAspectRatio; }
    set cameraFramePortraitAspectRatio(val) {
        this._cameraFramePortraitAspectRatio = val;
        this._set({ "cameraFramePortraitAspectRatio": val });
    }

    get cameraFrameCornerRadius() { return this._cameraFrameCornerRadius; }
    set cameraFrameCornerRadius(val) {
        this._cameraFrameCornerRadius = val;
        this._set({ "cameraFrameCornerRadius": val });
    }

    get livenessAnimationPositionMultiplier() { return this._livenessAnimationPositionMultiplier; }
    set livenessAnimationPositionMultiplier(val) {
        this._livenessAnimationPositionMultiplier = val;
        this._set({ "livenessAnimationPositionMultiplier": val });
    }

    get nextPageAnimationStartDelay() { return this._nextPageAnimationStartDelay; }
    set nextPageAnimationStartDelay(val) {
        this._nextPageAnimationStartDelay = val;
        this._set({ "nextPageAnimationStartDelay": val });
    }

    get nextPageAnimationEndDelay() { return this._nextPageAnimationEndDelay; }
    set nextPageAnimationEndDelay(val) {
        this._nextPageAnimationEndDelay = val;
        this._set({ "nextPageAnimationEndDelay": val });
    }

    get activityIndicatorPortraitPositionMultiplier() { return this._activityIndicatorPortraitPositionMultiplier; }
    set activityIndicatorPortraitPositionMultiplier(val) {
        this._activityIndicatorPortraitPositionMultiplier = val;
        this._set({ "activityIndicatorPortraitPositionMultiplier": val });
    }

    get activityIndicatorLandscapePositionMultiplier() { return this._activityIndicatorLandscapePositionMultiplier; }
    set activityIndicatorLandscapePositionMultiplier(val) {
        this._activityIndicatorLandscapePositionMultiplier = val;
        this._set({ "activityIndicatorLandscapePositionMultiplier": val });
    }

    get cameraPreviewVerticalPositionMultiplier() { return this._cameraPreviewVerticalPositionMultiplier; }
    set cameraPreviewVerticalPositionMultiplier(val) {
        this._cameraPreviewVerticalPositionMultiplier = val;
        this._set({ "cameraPreviewVerticalPositionMultiplier": val });
    }

    get multipageAnimationFrontImage() { return this._multipageAnimationFrontImage; }
    set multipageAnimationFrontImage(val) {
        this._multipageAnimationFrontImage = val;
        this._set({ "multipageAnimationFrontImage": val });
    }

    get multipageAnimationBackImage() { return this._multipageAnimationBackImage; }
    set multipageAnimationBackImage(val) {
        this._multipageAnimationBackImage = val;
        this._set({ "multipageAnimationBackImage": val });
    }

    get borderBackgroundImage() { return this._borderBackgroundImage; }
    set borderBackgroundImage(val) {
        this._borderBackgroundImage = val;
        this._set({ "borderBackgroundImage": val });
    }

    get helpAnimationImage() { return this._helpAnimationImage; }
    set helpAnimationImage(val) {
        this._helpAnimationImage = val;
        this._set({ "helpAnimationImage": val });
    }

    get closeButtonImage() { return this._closeButtonImage; }
    set closeButtonImage(val) {
        this._closeButtonImage = val;
        this._set({ "closeButtonImage": val });
    }

    get captureButtonImage() { return this._captureButtonImage; }
    set captureButtonImage(val) {
        this._captureButtonImage = val;
        this._set({ "captureButtonImage": val });
    }

    get cameraSwitchButtonImage() { return this._cameraSwitchButtonImage; }
    set cameraSwitchButtonImage(val) {
        this._cameraSwitchButtonImage = val;
        this._set({ "cameraSwitchButtonImage": val });
    }

    get torchButtonOnImage() { return this._torchButtonOnImage; }
    set torchButtonOnImage(val) {
        this._torchButtonOnImage = val;
        this._set({ "torchButtonOnImage": val });
    }

    get torchButtonOffImage() { return this._torchButtonOffImage; }
    set torchButtonOffImage(val) {
        this._torchButtonOffImage = val;
        this._set({ "torchButtonOffImage": val });
    }

    get changeFrameButtonExpandImage() { return this._changeFrameButtonExpandImage; }
    set changeFrameButtonExpandImage(val) {
        this._changeFrameButtonExpandImage = val;
        this._set({ "changeFrameButtonExpandImage": val });
    }

    get changeFrameButtonCollapseImage() { return this._changeFrameButtonCollapseImage; }
    set changeFrameButtonCollapseImage(val) {
        this._changeFrameButtonCollapseImage = val;
        this._set({ "changeFrameButtonCollapseImage": val });
    }

    get livenessAnimationImage() { return this._livenessAnimationImage; }
    set livenessAnimationImage(val) {
        this._livenessAnimationImage = val;
        this._set({ "livenessAnimationImage": val });
    }

    get multipageButtonImage() { return this._multipageButtonImage; }
    set multipageButtonImage(val) {
        this._multipageButtonImage = val;
        this._set({ "multipageButtonImage": val });
    }

    get statusTextFont() { return this._statusTextFont; }
    set statusTextFont(val) {
        this._statusTextFont = val;
        this._set({ "statusTextFont": val });
    }

    get resultStatusTextFont() { return this._resultStatusTextFont; }
    set resultStatusTextFont(val) {
        this._resultStatusTextFont = val;
        this._set({ "resultStatusTextFont": val });
    }

    get multipageButtonTextFont() { return this._multipageButtonTextFont; }
    set multipageButtonTextFont(val) {
        this._multipageButtonTextFont = val;
        this._set({ "multipageButtonTextFont": val });
    }

    get customLabelStatus() { return this._customLabelStatus; }
    set customLabelStatus(val) {
        this._customLabelStatus = val;
        this._set({ "customLabelStatus": val });
    }

    get cameraFrameLineCap() { return this._cameraFrameLineCap; }
    set cameraFrameLineCap(val) {
        this._cameraFrameLineCap = val;
        this._set({ "cameraFrameLineCap": val });
    }

    get uiCustomizationLayer() { return this._uiCustomizationLayer; }
    set uiCustomizationLayer(val) {
        this._uiCustomizationLayer = val;
        this._set({ "uiCustomizationLayer": val });
    }

    get helpAnimationImageTransformsIOS() { return this._helpAnimationImageTransformsIOS; }
    set helpAnimationImageTransformsIOS(val) {
        this._helpAnimationImageTransformsIOS = val;
        this._set({ "helpAnimationImageContentMode": val });
    }

    get multipageAnimationFrontImageTransformsIOS() { return this._multipageAnimationFrontImageTransformsIOS; }
    set multipageAnimationFrontImageTransformsIOS(val) {
        this._multipageAnimationFrontImageTransformsIOS = val;
        this._set({ "multipageAnimationFrontImageContentMode": val });
    }

    get multipageAnimationBackImageTransformsIOS() { return this._multipageAnimationBackImageTransformsIOS; }
    set multipageAnimationBackImageTransformsIOS(val) {
        this._multipageAnimationBackImageTransformsIOS = val;
        this._set({ "multipageAnimationBackImageContentMode": val });
    }

    get livenessAnimationImageTransformsIOS() { return this._livenessAnimationImageTransformsIOS; }
    set livenessAnimationImageTransformsIOS(val) {
        this._livenessAnimationImageTransformsIOS = val;
        this._set({ "livenessAnimationImageContentMode": val });
    }

    get borderBackgroundImageTransformsIOS() { return this._borderBackgroundImageTransformsIOS; }
    set borderBackgroundImageTransformsIOS(val) {
        this._borderBackgroundImageTransformsIOS = val;
        this._set({ "borderBackgroundImageContentMode": val });
    }

    get helpAnimationImageTransformsAndroid() { return this._helpAnimationImageTransformsAndroid; }
    set helpAnimationImageTransformsAndroid(val) {
        this._helpAnimationImageTransformsAndroid = val;
        this._set({ "helpAnimationImageMatrix": val });
    }

    get multipageAnimationFrontImageTransformsAndroid() { return this._multipageAnimationFrontImageTransformsAndroid; }
    set multipageAnimationFrontImageTransformsAndroid(val) {
        this._multipageAnimationFrontImageTransformsAndroid = val;
        this._set({ "multipageAnimationFrontImageMatrix": val });
    }

    get multipageAnimationBackImageTransformsAndroid() { return this._multipageAnimationBackImageTransformsAndroid; }
    set multipageAnimationBackImageTransformsAndroid(val) {
        this._multipageAnimationBackImageTransformsAndroid = val;
        this._set({ "multipageAnimationBackImageMatrix": val });
    }

    get livenessAnimationImageTransformsAndroid() { return this._livenessAnimationImageTransformsAndroid; }
    set livenessAnimationImageTransformsAndroid(val) {
        this._livenessAnimationImageTransformsAndroid = val;
        this._set({ "livenessAnimationImageMatrix": val });
    }

    get borderBackgroundImageTransformsAndroid() { return this._borderBackgroundImageTransformsAndroid; }
    set borderBackgroundImageTransformsAndroid(val) {
        this._borderBackgroundImageTransformsAndroid = val;
        this._set({ "borderBackgroundImageMatrix": val });
    }

    get colors() { return this._colors; }
    set colors(val) {
        this._colors = val;
        val._apply(this);
    }

    get fonts() { return this._fonts; }
    set fonts(val) {
        this._fonts = val;
        val._apply(this);
    }

    get images() { return this._images; }
    set images(val) {
        this._images = val;
        val._apply(this);
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new Customization();

        result._showStatusMessages = jsonObject["showStatusMessages"];
        result._showResultStatusMessages = jsonObject["showResultStatusMessages"];
        result._showHelpAnimation = jsonObject["showHelpAnimation"];
        result._showNextPageAnimation = jsonObject["showNextPageAnimation"];
        result._showBackgroundMask = jsonObject["showBackgroundMask"];
        result._cameraFrameBorderWidth = jsonObject["cameraFrameBorderWidth"];
        result._cameraFrameLineLength = jsonObject["cameraFrameLineLength"];
        result._cameraFrameShapeType = jsonObject["cameraFrameShapeType"];
        result._cameraFrameOffsetWidth = jsonObject["cameraFrameOffsetWidth"];
        result._status = jsonObject["status"];
        result._resultStatus = jsonObject["resultStatus"];
        result._multipageButtonText = jsonObject["multipageButtonText"];
        result._cameraFrameDefaultColor = jsonObject["cameraFrameDefaultColor"];
        result._cameraFrameActiveColor = jsonObject["cameraFrameActiveColor"];
        result._statusTextColor = jsonObject["statusTextColor"];
        result._resultStatusTextColor = jsonObject["resultStatusTextColor"];
        result._resultStatusBackgroundColor = jsonObject["resultStatusBackgroundColor"];
        result._multipageButtonBackgroundColor = jsonObject["multipageButtonBackgroundColor"];
        result._tintColor = jsonObject["tintColor"];
        result._activityIndicatorColor = jsonObject["activityIndicatorColor"];
        result._statusBackgroundColor = jsonObject["statusBackgroundColor"];
        result._cameraPreviewBackgroundColor = jsonObject["cameraPreviewBackgroundColor"];
        result._backgroundMaskColor = jsonObject["backgroundMaskColor"];
        result._multipageButtonTextColor = jsonObject["multipageButtonTextColor"];
        result._statusPositionMultiplier = jsonObject["statusPositionMultiplier"];
        result._resultStatusPositionMultiplier = jsonObject["resultStatusPositionMultiplier"];
        result._toolbarSize = jsonObject["toolbarSize"];
        result._backgroundMaskAlpha = jsonObject["backgroundMaskAlpha"];
        result._customStatusPositionMultiplier = jsonObject["customStatusPositionMultiplier"];
        result._cameraFrameVerticalPositionMultiplier = jsonObject["cameraFrameVerticalPositionMultiplier"];
        result._cameraFrameLandscapeAspectRatio = jsonObject["cameraFrameLandscapeAspectRatio"];
        result._cameraFrameCornerRadius = jsonObject["cameraFrameCornerRadius"];
        result._cameraFramePortraitAspectRatio = jsonObject["cameraFramePortraitAspectRatio"];
        result._livenessAnimationPositionMultiplier = jsonObject["livenessAnimationPositionMultiplier"];
        result._nextPageAnimationStartDelay = jsonObject["nextPageAnimationStartDelay"];
        result._nextPageAnimationEndDelay = jsonObject["nextPageAnimationEndDelay"];
        result._activityIndicatorPortraitPositionMultiplier = jsonObject["activityIndicatorPortraitPositionMultiplier"];
        result._activityIndicatorLandscapePositionMultiplier = jsonObject["activityIndicatorLandscapePositionMultiplier"];
        result._cameraPreviewVerticalPositionMultiplier = jsonObject["cameraPreviewVerticalPositionMultiplier"];
        result._multipageAnimationFrontImage = jsonObject["multipageAnimationFrontImage"];
        result._multipageAnimationBackImage = jsonObject["multipageAnimationBackImage"];
        result._borderBackgroundImage = jsonObject["borderBackgroundImage"];
        result._helpAnimationImage = jsonObject["helpAnimationImage"];
        result._closeButtonImage = jsonObject["closeButtonImage"];
        result._captureButtonImage = jsonObject["captureButtonImage"];
        result._cameraSwitchButtonImage = jsonObject["cameraSwitchButtonImage"];
        result._torchButtonOnImage = jsonObject["torchButtonOnImage"];
        result._torchButtonOffImage = jsonObject["torchButtonOffImage"];
        result._changeFrameButtonExpandImage = jsonObject["changeFrameButtonExpandImage"];
        result._changeFrameButtonCollapseImage = jsonObject["changeFrameButtonCollapseImage"];
        result._livenessAnimationImage = jsonObject["livenessAnimationImage"];
        result._multipageButtonImage = jsonObject["multipageButtonImage"];
        result._customLabelStatus = jsonObject["customLabelStatus"];
        result._cameraFrameLineCap = jsonObject["cameraFrameLineCap"];
        result._uiCustomizationLayer = jsonObject["uiCustomizationLayer"];
        result._statusTextFont = _Font__WEBPACK_IMPORTED_MODULE_5__.Font.fromJson(jsonObject["statusTextFont"]);
        result._resultStatusTextFont = _Font__WEBPACK_IMPORTED_MODULE_5__.Font.fromJson(jsonObject["resultStatusTextFont"]);
        result._multipageButtonTextFont = _Font__WEBPACK_IMPORTED_MODULE_5__.Font.fromJson(jsonObject["multipageButtonTextFont"]);
        result._helpAnimationImageTransformsIOS = jsonObject["helpAnimationImageContentMode"];
        result._multipageAnimationFrontImageTransformsIOS = jsonObject["multipageAnimationFrontImageContentMode"];
        result._multipageAnimationBackImageTransformsIOS = jsonObject["multipageAnimationBackImageContentMode"];
        result._livenessAnimationImageTransformsIOS = jsonObject["livenessAnimationImageContentMode"];
        result._borderBackgroundImageTransformsIOS = jsonObject["borderBackgroundImageContentMode"];
        result._helpAnimationImageTransformsAndroid = jsonObject["helpAnimationImageMatrix"];
        result._multipageAnimationFrontImageTransformsAndroid = jsonObject["multipageAnimationFrontImageMatrix"];
        result._multipageAnimationBackImageTransformsAndroid = jsonObject["multipageAnimationBackImageMatrix"];
        result._livenessAnimationImageTransformsAndroid = jsonObject["livenessAnimationImageMatrix"];
        result._borderBackgroundImageTransformsAndroid = jsonObject["borderBackgroundImageMatrix"];

        result._colors = _CustomizationColors__WEBPACK_IMPORTED_MODULE_2__.CustomizationColors.fromJson(jsonObject["colors"]);
        result._fonts = _CustomizationFonts__WEBPACK_IMPORTED_MODULE_3__.CustomizationFonts.fromJson(jsonObject["fonts"]);
        result._images = _CustomizationImages__WEBPACK_IMPORTED_MODULE_4__.CustomizationImages.fromJson(jsonObject["images"]);

        return result;
    }

    toJson() {
        return {
            "showStatusMessages": this.showStatusMessages,
            "showResultStatusMessages": this.showResultStatusMessages,
            "showHelpAnimation": this.showHelpAnimation,
            "showNextPageAnimation": this.showNextPageAnimation,
            "showBackgroundMask": this.showBackgroundMask,
            "cameraFrameBorderWidth": this.cameraFrameBorderWidth,
            "cameraFrameLineLength": this.cameraFrameLineLength,
            "cameraFrameShapeType": this.cameraFrameShapeType,
            "cameraFrameOffsetWidth": this.cameraFrameOffsetWidth,
            "status": this.status,
            "resultStatus": this.resultStatus,
            "multipageButtonText": this.multipageButtonText,
            "cameraFrameDefaultColor": this.cameraFrameDefaultColor,
            "cameraFrameActiveColor": this.cameraFrameActiveColor,
            "statusTextColor": this.statusTextColor,
            "resultStatusTextColor": this.resultStatusTextColor,
            "resultStatusBackgroundColor": this.resultStatusBackgroundColor,
            "multipageButtonBackgroundColor": this.multipageButtonBackgroundColor,
            "tintColor": this.tintColor,
            "activityIndicatorColor": this.activityIndicatorColor,
            "statusBackgroundColor": this.statusBackgroundColor,
            "cameraPreviewBackgroundColor": this.cameraPreviewBackgroundColor,
            "backgroundMaskColor": this.backgroundMaskColor,
            "multipageButtonTextColor": this.multipageButtonTextColor,
            "statusPositionMultiplier": this.statusPositionMultiplier,
            "resultStatusPositionMultiplier": this.resultStatusPositionMultiplier,
            "toolbarSize": this.toolbarSize,
            "backgroundMaskAlpha": this.backgroundMaskAlpha,
            "customStatusPositionMultiplier": this.customStatusPositionMultiplier,
            "cameraFrameVerticalPositionMultiplier": this.cameraFrameVerticalPositionMultiplier,
            "cameraFrameLandscapeAspectRatio": this.cameraFrameLandscapeAspectRatio,
            "cameraFramePortraitAspectRatio": this.cameraFramePortraitAspectRatio,
            "cameraFrameCornerRadius": this.cameraFrameCornerRadius,
            "livenessAnimationPositionMultiplier": this.livenessAnimationPositionMultiplier,
            "nextPageAnimationStartDelay": this.nextPageAnimationStartDelay,
            "nextPageAnimationEndDelay": this.nextPageAnimationEndDelay,
            "activityIndicatorPortraitPositionMultiplier": this.activityIndicatorPortraitPositionMultiplier,
            "activityIndicatorLandscapePositionMultiplier": this.activityIndicatorLandscapePositionMultiplier,
            "cameraPreviewVerticalPositionMultiplier": this.cameraPreviewVerticalPositionMultiplier,
            "multipageAnimationFrontImage": this.multipageAnimationFrontImage,
            "multipageAnimationBackImage": this.multipageAnimationBackImage,
            "borderBackgroundImage": this.borderBackgroundImage,
            "helpAnimationImage": this.helpAnimationImage,
            "closeButtonImage": this.closeButtonImage,
            "captureButtonImage": this.captureButtonImage,
            "cameraSwitchButtonImage": this.cameraSwitchButtonImage,
            "torchButtonOnImage": this.torchButtonOnImage,
            "torchButtonOffImage": this.torchButtonOffImage,
            "changeFrameButtonExpandImage": this.changeFrameButtonExpandImage,
            "changeFrameButtonCollapseImage": this.changeFrameButtonCollapseImage,
            "livenessAnimationImage": this.livenessAnimationImage,
            "multipageButtonImage": this.multipageButtonImage,
            "customLabelStatus": this.customLabelStatus,
            "cameraFrameLineCap": this.cameraFrameLineCap,
            "uiCustomizationLayer": this.uiCustomizationLayer,
            "statusTextFont": this.statusTextFont?.toJson(),
            "resultStatusTextFont": this.resultStatusTextFont?.toJson(),
            "multipageButtonTextFont": this.multipageButtonTextFont?.toJson(),
            "helpAnimationImageContentMode": this.helpAnimationImageTransformsIOS,
            "multipageAnimationFrontImageContentMode": this.multipageAnimationFrontImageTransformsIOS,
            "multipageAnimationBackImageContentMode": this.multipageAnimationBackImageTransformsIOS,
            "livenessAnimationImageContentMode": this.livenessAnimationImageTransformsIOS,
            "borderBackgroundImageContentMode": this.borderBackgroundImageTransformsIOS,
            "helpAnimationImageMatrix": this.helpAnimationImageTransformsAndroid,
            "multipageAnimationFrontImageMatrix": this.multipageAnimationFrontImageTransformsAndroid,
            "multipageAnimationBackImageMatrix": this.multipageAnimationBackImageTransformsAndroid,
            "livenessAnimationImageMatrix": this.livenessAnimationImageTransformsAndroid,
            "borderBackgroundImageMatrix": this.borderBackgroundImageTransformsAndroid,
            "colors": this.colors?.toJson(),
            "fonts": this.fonts?.toJson(),
            "images": this.images?.toJson(),
        }
    }

    _apply() { this._set(this); }
    _set(json) {
        if (this === _index__WEBPACK_IMPORTED_MODULE_1__.DocumentReader.instance.customization)
            (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setCustomization", [json]);
    }
}

const Cap = {
    BUTT: 0,
    ROUND: 1,
    SQUARE: 2
};

const FrameShapeType = {
    LINE: 0,
    CORNER: 1
};

const ViewContentMode = {
    SCALE_TO_FILL: 0,
    SCALE_ASPECT_FIT: 1,
    SCALE_ASPECT_FILL: 2,
    REDRAW: 3,
    CENTER: 4,
    TOP: 5,
    BOTTOM: 6,
    LEFT: 7,
    RIGHT: 8,
    TOP_LEFT: 9,
    TOP_RIGHT: 10,
    BOTTOM_LEFT: 11,
    BOTTOM_RIGHT: 12
};

const CustomButtonTag = {
    CLOSE: 1001,
    TORCH: 1002,
    CAPTURE: 1003,
    CHANGE_FRAME: 1004,
    SKIP: 1005,
    CAMERA_SWITCH: 1006
};


/***/ }),

/***/ "./src/params/customization/CustomizationColors.js":
/*!*********************************************************!*\
  !*** ./src/params/customization/CustomizationColors.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationColors: () => (/* binding */ CustomizationColors)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");


class CustomizationColors {
    get rfidProcessingScreenBackground() { return this._rfidProcessingScreenBackground; }
    set rfidProcessingScreenBackground(val) {
        this._rfidProcessingScreenBackground = val;
        this._set({ "rfidProcessingScreenBackground": val });
    }

    get rfidProcessingScreenHintLabelText() { return this._rfidProcessingScreenHintLabelText; }
    set rfidProcessingScreenHintLabelText(val) {
        this._rfidProcessingScreenHintLabelText = val;
        this._set({ "rfidProcessingScreenHintLabelText": val });
    }

    get rfidProcessingScreenHintLabelBackground() { return this._rfidProcessingScreenHintLabelBackground; }
    set rfidProcessingScreenHintLabelBackground(val) {
        this._rfidProcessingScreenHintLabelBackground = val;
        this._set({ "rfidProcessingScreenHintLabelBackground": val });
    }

    get rfidProcessingScreenProgressLabelText() { return this._rfidProcessingScreenProgressLabelText; }
    set rfidProcessingScreenProgressLabelText(val) {
        this._rfidProcessingScreenProgressLabelText = val;
        this._set({ "rfidProcessingScreenProgressLabelText": val });
    }

    get rfidProcessingScreenProgressBar() { return this._rfidProcessingScreenProgressBar; }
    set rfidProcessingScreenProgressBar(val) {
        this._rfidProcessingScreenProgressBar = val;
        this._set({ "rfidProcessingScreenProgressBar": val });
    }

    get rfidProcessingScreenProgressBarBackground() { return this._rfidProcessingScreenProgressBarBackground; }
    set rfidProcessingScreenProgressBarBackground(val) {
        this._rfidProcessingScreenProgressBarBackground = val;
        this._set({ "rfidProcessingScreenProgressBarBackground": val });
    }

    get rfidProcessingScreenResultLabelText() { return this._rfidProcessingScreenResultLabelText; }
    set rfidProcessingScreenResultLabelText(val) {
        this._rfidProcessingScreenResultLabelText = val;
        this._set({ "rfidProcessingScreenResultLabelText": val });
    }

    get rfidProcessingScreenLoadingBar() { return this._rfidProcessingScreenLoadingBar; }
    set rfidProcessingScreenLoadingBar(val) {
        this._rfidProcessingScreenLoadingBar = val;
        this._set({ "rfidProcessingScreenLoadingBar": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new CustomizationColors();
        result._rfidProcessingScreenBackground = jsonObject["rfidProcessingScreenBackground"];
        result._rfidProcessingScreenHintLabelText = jsonObject["rfidProcessingScreenHintLabelText"];
        result._rfidProcessingScreenHintLabelBackground = jsonObject["rfidProcessingScreenHintLabelBackground"];
        result._rfidProcessingScreenProgressLabelText = jsonObject["rfidProcessingScreenProgressLabelText"];
        result._rfidProcessingScreenProgressBar = jsonObject["rfidProcessingScreenProgressBar"];
        result._rfidProcessingScreenProgressBarBackground = jsonObject["rfidProcessingScreenProgressBarBackground"];
        result._rfidProcessingScreenResultLabelText = jsonObject["rfidProcessingScreenResultLabelText"];
        result._rfidProcessingScreenLoadingBar = jsonObject["rfidProcessingScreenLoadingBar"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "colors": json };
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.customization;
        if (this === parent.colors) parent._set(parentJson);
    }

    toJson() {
        return {
            "rfidProcessingScreenBackground": this.rfidProcessingScreenBackground,
            "rfidProcessingScreenHintLabelText": this.rfidProcessingScreenHintLabelText,
            "rfidProcessingScreenHintLabelBackground": this.rfidProcessingScreenHintLabelBackground,
            "rfidProcessingScreenProgressLabelText": this.rfidProcessingScreenProgressLabelText,
            "rfidProcessingScreenProgressBar": this.rfidProcessingScreenProgressBar,
            "rfidProcessingScreenProgressBarBackground": this.rfidProcessingScreenProgressBarBackground,
            "rfidProcessingScreenResultLabelText": this.rfidProcessingScreenResultLabelText,
            "rfidProcessingScreenLoadingBar": this.rfidProcessingScreenLoadingBar,
        }
    }
}


/***/ }),

/***/ "./src/params/customization/CustomizationFonts.js":
/*!********************************************************!*\
  !*** ./src/params/customization/CustomizationFonts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationFonts: () => (/* binding */ CustomizationFonts)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Font */ "./src/params/customization/Font.js");



class CustomizationFonts {
    get rfidProcessingScreenHintLabel() { return this._rfidProcessingScreenHintLabel; }
    set rfidProcessingScreenHintLabel(val) {
        this._rfidProcessingScreenHintLabel = val;
        this._set({ "rfidProcessingScreenHintLabel": val });
    }

    get rfidProcessingScreenProgressLabel() { return this._rfidProcessingScreenProgressLabel; }
    set rfidProcessingScreenProgressLabel(val) {
        this._rfidProcessingScreenProgressLabel = val;
        this._set({ "rfidProcessingScreenProgressLabel": val });
    }

    get rfidProcessingScreenResultLabel() { return this._rfidProcessingScreenResultLabel; }
    set rfidProcessingScreenResultLabel(val) {
        this._rfidProcessingScreenResultLabel = val;
        this._set({ "rfidProcessingScreenResultLabel": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CustomizationFonts();
        result._rfidProcessingScreenHintLabel = _Font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["rfidProcessingScreenHintLabel"]);
        result._rfidProcessingScreenProgressLabel = _Font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["rfidProcessingScreenProgressLabel"]);
        result._rfidProcessingScreenResultLabel = _Font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["rfidProcessingScreenResultLabel"]);
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "fonts": json };
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.customization;
        if (this === parent.fonts) parent._set(parentJson);
    }

    toJson() {
        return {
            "rfidProcessingScreenHintLabel": this.rfidProcessingScreenHintLabel?.toJson(),
            "rfidProcessingScreenProgressLabel": this.rfidProcessingScreenProgressLabel?.toJson(),
            "rfidProcessingScreenResultLabel": this.rfidProcessingScreenResultLabel?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/params/customization/CustomizationImages.js":
/*!*********************************************************!*\
  !*** ./src/params/customization/CustomizationImages.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationImages: () => (/* binding */ CustomizationImages)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");


class CustomizationImages {
    get rfidProcessingScreenFailureImage() { return this._rfidProcessingScreenFailureImage; }
    set rfidProcessingScreenFailureImage(val) {
        this._rfidProcessingScreenFailureImage = val;
        this._set({ "rfidProcessingScreenFailureImage": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CustomizationImages();
        result._rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "images": json };
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.customization;
        if (this === parent.images) parent._set(parentJson);
    }

    toJson() {
        return {
            "rfidProcessingScreenFailureImage": this.rfidProcessingScreenFailureImage,
        }
    }
}


/***/ }),

/***/ "./src/params/customization/Font.js":
/*!******************************************!*\
  !*** ./src/params/customization/Font.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Font: () => (/* binding */ Font),
/* harmony export */   FontStyle: () => (/* binding */ FontStyle)
/* harmony export */ });
class Font {
    name
    size
    style

    constructor(name, options) {
        this.name = name;
        this.size = options?.size;
        this.style = options?.style;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new Font(jsonObject["name"]);
        result.size = jsonObject["size"];
        result.style = jsonObject["style"];

        return result;
    }

    toJson() {
        return {
            "name": this.name,
            "size": this.size,
            "style": this.style,
        }
    }
}

const FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3
};


/***/ }),

/***/ "./src/params/process_params/AuthenticityParams.js":
/*!*********************************************************!*\
  !*** ./src/params/process_params/AuthenticityParams.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticityParams: () => (/* binding */ AuthenticityParams)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _LivenessParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LivenessParams */ "./src/params/process_params/LivenessParams.js");



class AuthenticityParams {
    get useLivenessCheck() { return this._useLivenessCheck; }
    set useLivenessCheck(val) {
        this._useLivenessCheck = val;
        this._set({ "useLivenessCheck": val });
    }

    get livenessParams() { return this._livenessParams; }
    set livenessParams(val) { (this._livenessParams = val)._apply(); }

    get checkUVLuminiscence() { return this._checkUVLuminiscence; }
    set checkUVLuminiscence(val) {
        this._checkUVLuminiscence = val;
        this._set({ "checkUVLuminiscence": val });
    }

    get checkIRB900() { return this._checkIRB900; }
    set checkIRB900(val) {
        this._checkIRB900 = val;
        this._set({ "checkIRB900": val });
    }

    get checkImagePatterns() { return this._checkImagePatterns; }
    set checkImagePatterns(val) {
        this._checkImagePatterns = val;
        this._set({ "checkImagePatterns": val });
    }

    get checkFibers() { return this._checkFibers; }
    set checkFibers(val) {
        this._checkFibers = val;
        this._set({ "checkFibers": val });
    }

    get checkExtMRZ() { return this._checkExtMRZ; }
    set checkExtMRZ(val) {
        this._checkExtMRZ = val;
        this._set({ "checkExtMRZ": val });
    }

    get checkExtOCR() { return this._checkExtOCR; }
    set checkExtOCR(val) {
        this._checkExtOCR = val;
        this._set({ "checkExtOCR": val });
    }

    get checkAxial() { return this._checkAxial; }
    set checkAxial(val) {
        this._checkAxial = val;
        this._set({ "checkAxial": val });
    }

    get checkBarcodeFormat() { return this._checkBarcodeFormat; }
    set checkBarcodeFormat(val) {
        this._checkBarcodeFormat = val;
        this._set({ "checkBarcodeFormat": val });
    }

    get checkIRVisibility() { return this._checkIRVisibility; }
    set checkIRVisibility(val) {
        this._checkIRVisibility = val;
        this._set({ "checkIRVisibility": val });
    }

    get checkIPI() { return this._checkIPI; }
    set checkIPI(val) {
        this._checkIPI = val;
        this._set({ "checkIPI": val });
    }

    get checkPhotoEmbedding() { return this._checkPhotoEmbedding; }
    set checkPhotoEmbedding(val) {
        this._checkPhotoEmbedding = val;
        this._set({ "checkPhotoEmbedding": val });
    }

    get checkPhotoComparison() { return this._checkPhotoComparison; }
    set checkPhotoComparison(val) {
        this._checkPhotoComparison = val;
        this._set({ "checkPhotoComparison": val });
    }

    get checkLetterScreen() { return this._checkLetterScreen; }
    set checkLetterScreen(val) {
        this._checkLetterScreen = val;
        this._set({ "checkLetterScreen": val });
    }

    get checkSecurityText() { return this._checkSecurityText; }
    set checkSecurityText(val) {
        this._checkSecurityText = val;
        this._set({ "checkSecurityText": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return new AuthenticityParams();

        const result = new AuthenticityParams();

        result._useLivenessCheck = jsonObject["useLivenessCheck"];
        result._livenessParams = _LivenessParams__WEBPACK_IMPORTED_MODULE_1__.LivenessParams.fromJson(jsonObject["livenessParams"]);
        result._checkUVLuminiscence = jsonObject["checkUVLuminiscence"];
        result._checkIRB900 = jsonObject["checkIRB900"];
        result._checkImagePatterns = jsonObject["checkImagePatterns"];
        result._checkFibers = jsonObject["checkFibers"];
        result._checkExtMRZ = jsonObject["checkExtMRZ"];
        result._checkExtOCR = jsonObject["checkExtOCR"];
        result._checkAxial = jsonObject["checkAxial"];
        result._checkBarcodeFormat = jsonObject["checkBarcodeFormat"];
        result._checkIRVisibility = jsonObject["checkIRVisibility"];
        result._checkIPI = jsonObject["checkIPI"];
        result._checkPhotoEmbedding = jsonObject["checkPhotoEmbedding"];
        result._checkPhotoComparison = jsonObject["checkPhotoComparison"];
        result._checkLetterScreen = jsonObject["checkLetterScreen"];
        result._checkSecurityText = jsonObject["checkSecurityText"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "authenticityParams": json };
        const parent = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.processParams;
        if (this === parent.authenticityParams) parent._set(parentJson);
    }

    toJson() {
        return {
            "useLivenessCheck": this.useLivenessCheck,
            "livenessParams": this.livenessParams?.toJson(),
            "checkUVLuminiscence": this.checkUVLuminiscence,
            "checkIRB900": this.checkIRB900,
            "checkImagePatterns": this.checkImagePatterns,
            "checkFibers": this.checkFibers,
            "checkExtMRZ": this.checkExtMRZ,
            "checkExtOCR": this.checkExtOCR,
            "checkAxial": this.checkAxial,
            "checkBarcodeFormat": this.checkBarcodeFormat,
            "checkIRVisibility": this.checkIRVisibility,
            "checkIPI": this.checkIPI,
            "checkPhotoEmbedding": this.checkPhotoEmbedding,
            "checkPhotoComparison": this.checkPhotoComparison,
            "checkLetterScreen": this.checkLetterScreen,
            "checkSecurityText": this.checkSecurityText,
        }
    }
}


/***/ }),

/***/ "./src/params/process_params/BackendProcessingConfig.js":
/*!**************************************************************!*\
  !*** ./src/params/process_params/BackendProcessingConfig.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackendProcessingConfig: () => (/* binding */ BackendProcessingConfig)
/* harmony export */ });
class BackendProcessingConfig {
    url
    httpHeaders
    rfidServerSideChipVerification
    timeoutConnection

    constructor(url, options) {
        this.url = url;
        this.rfidServerSideChipVerification = options?.rfidServerSideChipVerification;
        this.httpHeaders = options?.httpHeaders;
        this.timeoutConnection = options?.timeoutConnection;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BackendProcessingConfig(jsonObject["url"]);
        
        result.rfidServerSideChipVerification = jsonObject["rfidServerSideChipVerification"];
        result.httpHeaders = jsonObject["httpHeaders"];
        result.timeoutConnection = jsonObject["timeoutConnection"];
        
        return result;
    }

    toJson() {
        return {
            "url": this.url,
            "rfidServerSideChipVerification": this.rfidServerSideChipVerification,
            "httpHeaders": this.httpHeaders,
            "timeoutConnection": this.timeoutConnection,
        }
    }
}


/***/ }),

/***/ "./src/params/process_params/FaceApiParams.js":
/*!****************************************************!*\
  !*** ./src/params/process_params/FaceApiParams.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceApiParams: () => (/* binding */ FaceApiParams)
/* harmony export */ });
/* harmony import */ var _FaceApiSearchParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaceApiSearchParams */ "./src/params/process_params/FaceApiSearchParams.js");


class FaceApiParams {
    url
    mode
    threshold
    searchParams
    serviceTimeout
    proxy
    proxyPassword
    proxyType

    constructor(options) {
        this.url = options?.url ?? "https://faceapi.regulaforensics.com";
        this.mode = options?.mode ?? "match";
        this.threshold = options?.threshold ?? 75;
        this.searchParams = options?.searchParams;
        this.serviceTimeout = options?.serviceTimeout ?? 3000;
        this.proxy = options?.proxy;
        this.proxyPassword = options?.proxyPassword;
        this.proxyType = options?.proxyType;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new FaceApiParams({
            url: jsonObject["url"],
            mode: jsonObject["mode"],
            threshold: jsonObject["threshold"],
            searchParams: _FaceApiSearchParams__WEBPACK_IMPORTED_MODULE_0__.FaceApiSearchParams.fromJson(jsonObject["searchParams"]),
            serviceTimeout: jsonObject["serviceTimeout"],
            proxy: jsonObject["proxy"],
            proxyPassword: jsonObject["proxyPassword"],
            proxyType: jsonObject["proxyType"]
        });
    }

    toJson() {
        return {
            "url": this.url,
            "mode": this.mode,
            "threshold": this.threshold,
            "searchParams": this.searchParams?.toJson(),
            "serviceTimeout": this.serviceTimeout,
            "proxy": this.proxy,
            "proxyPassword": this.proxyPassword,
            "proxyType": this.proxyType,
        }
    }
}


/***/ }),

/***/ "./src/params/process_params/FaceApiSearchParams.js":
/*!**********************************************************!*\
  !*** ./src/params/process_params/FaceApiSearchParams.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceApiSearchParams: () => (/* binding */ FaceApiSearchParams)
/* harmony export */ });
class FaceApiSearchParams {
    limit
    threshold
    groupIds

    constructor(options) {
        this.limit = options?.limit ?? 100;
        this.threshold = options?.threshold ?? 1;
        this.groupIds = options?.groupIds;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new FaceApiSearchParams({
            limit: jsonObject["limit"],
            threshold: jsonObject["threshold"],
            groupIds: jsonObject["groupIds"]
        });
    }

    toJson() {
        return {
            "limit": this.limit,
            "threshold": this.threshold,
            "groupIds": this.groupIds,
        }
    }
}


/***/ }),

/***/ "./src/params/process_params/GlaresCheckParams.js":
/*!********************************************************!*\
  !*** ./src/params/process_params/GlaresCheckParams.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlaresCheckParams: () => (/* binding */ GlaresCheckParams)
/* harmony export */ });
class GlaresCheckParams {
    imgMarginPart
    maxGlaringPart

    constructor(options) {
        this.imgMarginPart = options?.imgMarginPart;
        this.maxGlaringPart = options?.maxGlaringPart;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new GlaresCheckParams({
            imgMarginPart: jsonObject["imgMarginPart"],
            maxGlaringPart: jsonObject["maxGlaringPart"]
        });
    }

    toJson() {
        return {
            "imgMarginPart": this.imgMarginPart,
            "maxGlaringPart": this.maxGlaringPart,
        }
    }
}


/***/ }),

/***/ "./src/params/process_params/ImageQA.js":
/*!**********************************************!*\
  !*** ./src/params/process_params/ImageQA.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQA: () => (/* binding */ ImageQA)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _GlaresCheckParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlaresCheckParams */ "./src/params/process_params/GlaresCheckParams.js");
/* harmony import */ var _results_image_quality_ImageQualityCheckType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../results/image_quality/ImageQualityCheckType */ "./src/results/image_quality/ImageQualityCheckType.js");




class ImageQA {
    get dpiThreshold() { return this._dpiThreshold; }
    set dpiThreshold(val) {
        this._dpiThreshold = val;
        this._set({ "dpiThreshold": val });
    }

    get angleThreshold() { return this._angleThreshold; }
    set angleThreshold(val) {
        this._angleThreshold = val;
        this._set({ "angleThreshold": val });
    }

    get focusCheck() { return this._focusCheck; }
    set focusCheck(val) {
        this._focusCheck = val;
        this._set({ "focusCheck": val });
    }

    get glaresCheck() { return this._glaresCheck; }
    set glaresCheck(val) {
        this._glaresCheck = val;
        this._set({ "glaresCheck": val });
    }

    get glaresCheckParams() { return this._glaresCheckParams; }
    set glaresCheckParams(val) {
        this._glaresCheckParams = val;
        this._set({ "glaresCheckParams": val });
    }

    get colornessCheck() { return this._colornessCheck; }
    set colornessCheck(val) {
        this._colornessCheck = val;
        this._set({ "colornessCheck": val });
    }

    get screenCapture() { return this._screenCapture; }
    set screenCapture(val) {
        this._screenCapture = val;
        this._set({ "screenCapture": val });
    }

    get expectedPass() { return this._expectedPass; }
    set expectedPass(val) {
        this._expectedPass = val;
        this._set({ "expectedPass": val });
    }

    get documentPositionIndent() { return this._documentPositionIndent; }
    set documentPositionIndent(val) {
        this._documentPositionIndent = val;
        this._set({ "documentPositionIndent": val });
    }

    get brightnessThreshold() { return this._brightnessThreshold; }
    set brightnessThreshold(val) {
        this._brightnessThreshold = val;
        this._set({ "brightnessThreshold": val });
    }

    get occlusionCheck() { return this._occlusionCheck; }
    set occlusionCheck(val) {
        this._occlusionCheck = val;
        this._set({ "occlusionCheck": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ImageQA();
        result._dpiThreshold = jsonObject["dpiThreshold"];
        result._angleThreshold = jsonObject["angleThreshold"];
        result._focusCheck = jsonObject["focusCheck"];
        result._glaresCheck = jsonObject["glaresCheck"];
        result._colornessCheck = jsonObject["colornessCheck"];
        result._screenCapture = jsonObject["screenCapture"];
        result._expectedPass = jsonObject["expectedPass"];
        result._glaresCheckParams = _GlaresCheckParams__WEBPACK_IMPORTED_MODULE_1__.GlaresCheckParams.fromJson(jsonObject["glaresCheckParams"]);
        result._documentPositionIndent = jsonObject["documentPositionIndent"];
        result._brightnessThreshold = jsonObject["brightnessThreshold"];
        result._occlusionCheck = jsonObject["occlusionCheck"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "imageQA": json };
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.processParams;
        if (this === parent.imageQA) parent._set(parentJson);
    }

    toJson() {
        return {
            "dpiThreshold": this.dpiThreshold,
            "angleThreshold": this.angleThreshold,
            "documentPositionIndent": this.documentPositionIndent,
            "focusCheck": this.focusCheck,
            "glaresCheck": this.glaresCheck,
            "colornessCheck": this.colornessCheck,
            "screenCapture": this.screenCapture,
            "expectedPass": this.expectedPass,
            "glaresCheckParams": this.glaresCheckParams?.toJson(),
            "brightnessThreshold": this.brightnessThreshold,
            "occlusionCheck": this.occlusionCheck,
        }
    }
}


/***/ }),

/***/ "./src/params/process_params/LivenessParams.js":
/*!*****************************************************!*\
  !*** ./src/params/process_params/LivenessParams.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LivenessParams: () => (/* binding */ LivenessParams)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");


class LivenessParams {
    get checkOVI() { return this._checkOVI; }
    set checkOVI(val) {
        this._checkOVI = val;
        this._set({ "checkOVI": val });
    }

    get checkMLI() { return this._checkMLI; }
    set checkMLI(val) {
        this._checkMLI = val;
        this._set({ "checkMLI": val });
    }

    get checkHolo() { return this._checkHolo; }
    set checkHolo(val) {
        this._checkHolo = val;
        this._set({ "checkHolo": val });
    }

    get checkED() { return this._checkED; }
    set checkED(val) {
        this._checkED = val;
        this._set({ "checkED": val });
    }

    get checkBlackAndWhiteCopy() { return this._checkBlackAndWhiteCopy; }
    set checkBlackAndWhiteCopy(val) {
        this._checkBlackAndWhiteCopy = val;
        this._set({ "checkBlackAndWhiteCopy": val });
    }

    get checkDynaprint() { return this._checkDynaprint; }
    set checkDynaprint(val) {
        this._checkDynaprint = val;
        this._set({ "checkDynaprint": val });
    }

    get checkGeometry() { return this._checkGeometry; }
    set checkGeometry(val) {
        this._checkGeometry = val;
        this._set({ "checkGeometry": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return new LivenessParams();
        
        const result = new LivenessParams();
        result._checkOVI = jsonObject["checkOVI"];
        result._checkMLI = jsonObject["checkMLI"];
        result._checkHolo = jsonObject["checkHolo"];
        result._checkED = jsonObject["checkED"];
        result._checkBlackAndWhiteCopy = jsonObject["checkBlackAndWhiteCopy"];
        result._checkDynaprint = jsonObject["checkDynaprint"];
        result._checkGeometry = jsonObject["checkGeometry"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "livenessParams": json };
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.processParams.authenticityParams;
        if (this === parent.livenessParams) parent._set(parentJson);
    }

    toJson() {
        return {
            "checkOVI": this.checkOVI,
            "checkMLI": this.checkMLI,
            "checkHolo": this.checkHolo,
            "checkED": this.checkED,
            "checkBlackAndWhiteCopy": this.checkBlackAndWhiteCopy,
            "checkDynaprint": this.checkDynaprint,
            "checkGeometry": this.checkGeometry,
        }
    }
}


/***/ }),

/***/ "./src/params/process_params/ProcessParams.js":
/*!****************************************************!*\
  !*** ./src/params/process_params/ProcessParams.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   MRZFormat: () => (/* binding */ MRZFormat),
/* harmony export */   MeasureSystem: () => (/* binding */ MeasureSystem),
/* harmony export */   MrzDetectionModes: () => (/* binding */ MrzDetectionModes),
/* harmony export */   ProcessParams: () => (/* binding */ ProcessParams)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _ImageQA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageQA */ "./src/params/process_params/ImageQA.js");
/* harmony import */ var _RFIDParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RFIDParams */ "./src/params/process_params/RFIDParams.js");
/* harmony import */ var _FaceApiParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FaceApiParams */ "./src/params/process_params/FaceApiParams.js");
/* harmony import */ var _BackendProcessingConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BackendProcessingConfig */ "./src/params/process_params/BackendProcessingConfig.js");
/* harmony import */ var _AuthenticityParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AuthenticityParams */ "./src/params/process_params/AuthenticityParams.js");








class ProcessParams {
    get multipageProcessing() { return this._multipageProcessing; }
    set multipageProcessing(val) {
        this._multipageProcessing = val;
        this._set({ "multipageProcessing": val });
    }

    get logs() { return this._logs; }
    set logs(val) {
        this._logs = val;
        this._set({ "logs": val });
    }

    get debugSaveImages() { return this._debugSaveImages; }
    set debugSaveImages(val) {
        this._debugSaveImages = val;
        this._set({ "debugSaveImages": val });
    }

    get debugSaveLogs() { return this._debugSaveLogs; }
    set debugSaveLogs(val) {
        this._debugSaveLogs = val;
        this._set({ "debugSaveLogs": val });
    }

    get returnUncroppedImage() { return this._returnUncroppedImage; }
    set returnUncroppedImage(val) {
        this._returnUncroppedImage = val;
        this._set({ "returnUncroppedImage": val });
    }

    get uvTorchEnabled() { return this._uvTorchEnabled; }
    set uvTorchEnabled(val) {
        this._uvTorchEnabled = val;
        this._set({ "uvTorchEnabled": val });
    }

    get debugSaveCroppedImages() { return this._debugSaveCroppedImages; }
    set debugSaveCroppedImages(val) {
        this._debugSaveCroppedImages = val;
        this._set({ "debugSaveCroppedImages": val });
    }

    get disableFocusingCheck() { return this._disableFocusingCheck; }
    set disableFocusingCheck(val) {
        this._disableFocusingCheck = val;
        this._set({ "disableFocusingCheck": val });
    }

    get debugSaveRFIDSession() { return this._debugSaveRFIDSession; }
    set debugSaveRFIDSession(val) {
        this._debugSaveRFIDSession = val;
        this._set({ "debugSaveRFIDSession": val });
    }

    get doublePageSpread() { return this._doublePageSpread; }
    set doublePageSpread(val) {
        this._doublePageSpread = val;
        this._set({ "doublePageSpread": val });
    }

    get manualCrop() { return this._manualCrop; }
    set manualCrop(val) {
        this._manualCrop = val;
        this._set({ "manualCrop": val });
    }

    get integralImage() { return this._integralImage; }
    set integralImage(val) {
        this._integralImage = val;
        this._set({ "integralImage": val });
    }

    get returnCroppedBarcode() { return this._returnCroppedBarcode; }
    set returnCroppedBarcode(val) {
        this._returnCroppedBarcode = val;
        this._set({ "returnCroppedBarcode": val });
    }

    get checkRequiredTextFields() { return this._checkRequiredTextFields; }
    set checkRequiredTextFields(val) {
        this._checkRequiredTextFields = val;
        this._set({ "checkRequiredTextFields": val });
    }

    get depersonalizeLog() { return this._depersonalizeLog; }
    set depersonalizeLog(val) {
        this._depersonalizeLog = val;
        this._set({ "depersonalizeLog": val });
    }

    get generateDoublePageSpreadImage() { return this._generateDoublePageSpreadImage; }
    set generateDoublePageSpreadImage(val) {
        this._generateDoublePageSpreadImage = val;
        this._set({ "generateDoublePageSpreadImage": val });
    }

    get alreadyCropped() { return this._alreadyCropped; }
    set alreadyCropped(val) {
        this._alreadyCropped = val;
        this._set({ "alreadyCropped": val });
    }

    get matchTextFieldMask() { return this._matchTextFieldMask; }
    set matchTextFieldMask(val) {
        this._matchTextFieldMask = val;
        this._set({ "matchTextFieldMask": val });
    }

    get updateOCRValidityByGlare() { return this._updateOCRValidityByGlare; }
    set updateOCRValidityByGlare(val) {
        this._updateOCRValidityByGlare = val;
        this._set({ "updateOCRValidityByGlare": val });
    }

    get noGraphics() { return this._noGraphics; }
    set noGraphics(val) {
        this._noGraphics = val;
        this._set({ "noGraphics": val });
    }

    get multiDocOnImage() { return this._multiDocOnImage; }
    set multiDocOnImage(val) {
        this._multiDocOnImage = val;
        this._set({ "multiDocOnImage": val });
    }

    get forceReadMrzBeforeLocate() { return this._forceReadMrzBeforeLocate; }
    set forceReadMrzBeforeLocate(val) {
        this._forceReadMrzBeforeLocate = val;
        this._set({ "forceReadMrzBeforeLocate": val });
    }

    get parseBarcodes() { return this._parseBarcodes; }
    set parseBarcodes(val) {
        this._parseBarcodes = val;
        this._set({ "parseBarcodes": val });
    }

    get shouldReturnPackageForReprocess() { return this._shouldReturnPackageForReprocess; }
    set shouldReturnPackageForReprocess(val) {
        this._shouldReturnPackageForReprocess = val;
        this._set({ "shouldReturnPackageForReprocess": val });
    }

    get disablePerforationOCR() { return this._disablePerforationOCR; }
    set disablePerforationOCR(val) {
        this._disablePerforationOCR = val;
        this._set({ "disablePerforationOCR": val });
    }

    get respectImageQuality() { return this._respectImageQuality; }
    set respectImageQuality(val) {
        this._respectImageQuality = val;
        this._set({ "respectImageQuality": val });
    }

    get strictImageQuality() { return this._strictImageQuality; }
    set strictImageQuality(val) {
        this._strictImageQuality = val;
        this._set({ "strictImageQuality": val });
    }

    get splitNames() { return this._splitNames; }
    set splitNames(val) {
        this._splitNames = val;
        this._set({ "splitNames": val });
    }

    get useFaceApi() { return this._useFaceApi; }
    set useFaceApi(val) {
        this._useFaceApi = val;
        this._set({ "useFaceApi": val });
    }

    get useAuthenticityCheck() { return this._useAuthenticityCheck; }
    set useAuthenticityCheck(val) {
        this._useAuthenticityCheck = val;
        this._set({ "useAuthenticityCheck": val });
    }

    get checkHologram() { return this._checkHologram; }
    set checkHologram(val) {
        this._checkHologram = val;
        this._set({ "checkHologram": val });
    }

    get generateNumericCodes() { return this._generateNumericCodes; }
    set generateNumericCodes(val) {
        this._generateNumericCodes = val;
        this._set({ "generateNumericCodes": val });
    }

    get strictBarcodeDigitalSignatureCheck() { return this._strictBarcodeDigitalSignatureCheck; }
    set strictBarcodeDigitalSignatureCheck(val) {
        this._strictBarcodeDigitalSignatureCheck = val;
        this._set({ "strictBarcodeDigitalSignatureCheck": val });
    }

    get selectLongestNames() { return this._selectLongestNames; }
    set selectLongestNames(val) {
        this._selectLongestNames = val;
        this._set({ "selectLongestNames": val });
    }

    get generateDTCVC() { return this._generateDTCVC; }
    set generateDTCVC(val) {
        this._generateDTCVC = val;
        this._set({ "generateDTCVC": val });
    }

    get strictDLCategoryExpiry() { return this._strictDLCategoryExpiry; }
    set strictDLCategoryExpiry(val) {
        this._strictDLCategoryExpiry = val;
        this._set({ "strictDLCategoryExpiry": val });
    }

    get generateAlpha2Codes() { return this._generateAlpha2Codes; }
    set generateAlpha2Codes(val) {
        this._generateAlpha2Codes = val;
        this._set({ "generateAlpha2Codes": val });
    }

    get disableAuthResolutionFilter() { return this._disableAuthResolutionFilter; }
    set disableAuthResolutionFilter(val) {
        this._disableAuthResolutionFilter = val;
        this._set({ "disableAuthResolutionFilter": val });
    }

    get strictSecurityChecks() { return this._strictSecurityChecks; }
    set strictSecurityChecks(val) {
        this._strictSecurityChecks = val;
        this._set({ "strictSecurityChecks": val });
    }

    get barcodeParserType() { return this._barcodeParserType; }
    set barcodeParserType(val) {
        this._barcodeParserType = val;
        this._set({ "barcodeParserType": val });
    }

    get perspectiveAngle() { return this._perspectiveAngle; }
    set perspectiveAngle(val) {
        this._perspectiveAngle = val;
        this._set({ "perspectiveAngle": val });
    }

    get minDPI() { return this._minDPI; }
    set minDPI(val) {
        this._minDPI = val;
        this._set({ "minDPI": val });
    }

    get imageDpiOutMax() { return this._imageDpiOutMax; }
    set imageDpiOutMax(val) {
        this._imageDpiOutMax = val;
        this._set({ "imageDpiOutMax": val });
    }

    get forceDocFormat() { return this._forceDocFormat; }
    set forceDocFormat(val) {
        this._forceDocFormat = val;
        this._set({ "forceDocFormat": val });
    }

    get shiftExpiryDate() { return this._shiftExpiryDate; }
    set shiftExpiryDate(val) {
        this._shiftExpiryDate = val;
        this._set({ "shiftExpiryDate": val });
    }

    get minimalHolderAge() { return this._minimalHolderAge; }
    set minimalHolderAge(val) {
        this._minimalHolderAge = val;
        this._set({ "minimalHolderAge": val });
    }

    get imageOutputMaxHeight() { return this._imageOutputMaxHeight; }
    set imageOutputMaxHeight(val) {
        this._imageOutputMaxHeight = val;
        this._set({ "imageOutputMaxHeight": val });
    }

    get imageOutputMaxWidth() { return this._imageOutputMaxWidth; }
    set imageOutputMaxWidth(val) {
        this._imageOutputMaxWidth = val;
        this._set({ "imageOutputMaxWidth": val });
    }

    get processAuth() { return this._processAuth; }
    set processAuth(val) {
        this._processAuth = val;
        this._set({ "processAuth": val });
    }

    get convertCase() { return this._convertCase; }
    set convertCase(val) {
        this._convertCase = val;
        this._set({ "convertCase": val });
    }

    get logLevel() { return this._logLevel; }
    set logLevel(val) {
        this._logLevel = val;
        this._set({ "logLevel": val });
    }

    get mrzDetectMode() { return this._mrzDetectMode; }
    set mrzDetectMode(val) {
        this._mrzDetectMode = val;
        this._set({ "mrzDetectMode": val });
    }

    get measureSystem() { return this._measureSystem; }
    set measureSystem(val) {
        this._measureSystem = val;
        this._set({ "measureSystem": val });
    }

    get forceDocID() { return this._forceDocID; }
    set forceDocID(val) {
        this._forceDocID = val;
        this._set({ "forceDocID": val });
    }

    get pdfPagesLimit() { return this._pdfPagesLimit; }
    set pdfPagesLimit(val) {
        this._pdfPagesLimit = val;
        this._set({ "pdfPagesLimit": val });
    }

    get dateFormat() { return this._dateFormat; }
    set dateFormat(val) {
        this._dateFormat = val;
        this._set({ "dateFormat": val });
    }

    get scenario() { return this._scenario; }
    set scenario(val) {
        this._scenario = val;
        this._set({ "scenario": val });
    }

    get captureButtonScenario() { return this._captureButtonScenario; }
    set captureButtonScenario(val) {
        this._captureButtonScenario = val;
        this._set({ "captureButtonScenario": val });
    }

    get timeout() { return this._timeout; }
    set timeout(val) {
        this._timeout = val;
        this._set({ "timeout": val });
    }

    get timeoutFromFirstDetect() { return this._timeoutFromFirstDetect; }
    set timeoutFromFirstDetect(val) {
        this._timeoutFromFirstDetect = val;
        this._set({ "timeoutFromFirstDetect": val });
    }

    get timeoutFromFirstDocType() { return this._timeoutFromFirstDocType; }
    set timeoutFromFirstDocType(val) {
        this._timeoutFromFirstDocType = val;
        this._set({ "timeoutFromFirstDocType": val });
    }

    get documentAreaMin() { return this._documentAreaMin; }
    set documentAreaMin(val) {
        this._documentAreaMin = val;
        this._set({ "documentAreaMin": val });
    }

    get timeoutLiveness() { return this._timeoutLiveness; }
    set timeoutLiveness(val) {
        this._timeoutLiveness = val;
        this._set({ "timeoutLiveness": val });
    }

    get documentIDList() { return this._documentIDList; }
    set documentIDList(val) {
        this._documentIDList = val;
        this._set({ "documentIDList": val });
    }

    get barcodeTypes() { return this._barcodeTypes; }
    set barcodeTypes(val) {
        this._barcodeTypes = val;
        this._set({ "barcodeTypes": val });
    }

    get fieldTypesFilter() { return this._fieldTypesFilter; }
    set fieldTypesFilter(val) {
        this._fieldTypesFilter = val;
        this._set({ "fieldTypesFilter": val });
    }

    get resultTypeOutput() { return this._resultTypeOutput; }
    set resultTypeOutput(val) {
        this._resultTypeOutput = val;
        this._set({ "resultTypeOutput": val });
    }

    get mrzFormatsFilter() { return this._mrzFormatsFilter; }
    set mrzFormatsFilter(val) {
        this._mrzFormatsFilter = val;
        this._set({ "mrzFormatsFilter": val });
    }

    get documentGroupFilter() { return this._documentGroupFilter; }
    set documentGroupFilter(val) {
        this._documentGroupFilter = val;
        this._set({ "documentGroupFilter": val });
    }

    get lcidIgnoreFilter() { return this._lcidIgnoreFilter; }
    set lcidIgnoreFilter(val) {
        this._lcidIgnoreFilter = val;
        this._set({ "lcidIgnoreFilter": val });
    }

    get lcidFilter() { return this._lcidFilter; }
    set lcidFilter(val) {
        this._lcidFilter = val;
        this._set({ "lcidFilter": val });
    }

    get imageQA() { return this._imageQA; }
    set imageQA(val) { (this._imageQA = val)._apply(); }

    get rfidParams() { return this._rfidParams; }
    set rfidParams(val) {
        this._rfidParams = val;
        this._set({ "rfidParams": val });
    }

    get faceApiParams() { return this._faceApiParams; }
    set faceApiParams(val) {
        this._faceApiParams = val;
        this._set({ "faceApiParams": val });
    }

    get backendProcessingConfig() { return this._backendProcessingConfig; }
    set backendProcessingConfig(val) {
        this._backendProcessingConfig = val;
        this._set({ "backendProcessingConfig": val });
    }

    get authenticityParams() { return this._authenticityParams; }
    set authenticityParams(val) { (this._authenticityParams = val)._apply(); }

    get customParams() { return this._customParams; }
    set customParams(val) {
        this._customParams = val;
        this._set({ "customParams": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return new ProcessParams();
        const result = new ProcessParams();

        result._multipageProcessing = jsonObject["multipageProcessing"];
        result._logs = jsonObject["logs"];
        result._debugSaveImages = jsonObject["debugSaveImages"];
        result._debugSaveLogs = jsonObject["debugSaveLogs"];
        result._returnUncroppedImage = jsonObject["returnUncroppedImage"];
        result._uvTorchEnabled = jsonObject["uvTorchEnabled"];
        result._debugSaveCroppedImages = jsonObject["debugSaveCroppedImages"];
        result._disableFocusingCheck = jsonObject["disableFocusingCheck"];
        result._debugSaveRFIDSession = jsonObject["debugSaveRFIDSession"];
        result._doublePageSpread = jsonObject["doublePageSpread"];
        result._manualCrop = jsonObject["manualCrop"];
        result._integralImage = jsonObject["integralImage"];
        result._returnCroppedBarcode = jsonObject["returnCroppedBarcode"];
        result._checkRequiredTextFields = jsonObject["checkRequiredTextFields"];
        result._depersonalizeLog = jsonObject["depersonalizeLog"];
        result._generateDoublePageSpreadImage = jsonObject["generateDoublePageSpreadImage"];
        result._alreadyCropped = jsonObject["alreadyCropped"];
        result._matchTextFieldMask = jsonObject["matchTextFieldMask"];
        result._updateOCRValidityByGlare = jsonObject["updateOCRValidityByGlare"];
        result._noGraphics = jsonObject["noGraphics"];
        result._multiDocOnImage = jsonObject["multiDocOnImage"];
        result._forceReadMrzBeforeLocate = jsonObject["forceReadMrzBeforeLocate"];
        result._parseBarcodes = jsonObject["parseBarcodes"];
        result._shouldReturnPackageForReprocess = jsonObject["shouldReturnPackageForReprocess"];
        result._disablePerforationOCR = jsonObject["disablePerforationOCR"];
        result._respectImageQuality = jsonObject["respectImageQuality"];
        result._strictImageQuality = jsonObject["strictImageQuality"];
        result._splitNames = jsonObject["splitNames"];
        result._useFaceApi = jsonObject["useFaceApi"];
        result._useAuthenticityCheck = jsonObject["useAuthenticityCheck"];
        result._checkHologram = jsonObject["checkHologram"];
        result._generateNumericCodes = jsonObject["generateNumericCodes"];
        result._strictBarcodeDigitalSignatureCheck = jsonObject["strictBarcodeDigitalSignatureCheck"];
        result._selectLongestNames = jsonObject["selectLongestNames"];
        result._generateDTCVC = jsonObject["generateDTCVC"];
        result._strictDLCategoryExpiry = jsonObject["strictDLCategoryExpiry"];
        result._generateAlpha2Codes = jsonObject["generateAlpha2Codes"];
        result._disableAuthResolutionFilter = jsonObject["disableAuthResolutionFilter"];
        result._strictSecurityChecks = jsonObject["strictSecurityChecks"];
        result._barcodeParserType = jsonObject["barcodeParserType"];
        result._perspectiveAngle = jsonObject["perspectiveAngle"];
        result._minDPI = jsonObject["minDPI"];
        result._imageDpiOutMax = jsonObject["imageDpiOutMax"];
        result._forceDocFormat = jsonObject["forceDocFormat"];
        result._shiftExpiryDate = jsonObject["shiftExpiryDate"];
        result._minimalHolderAge = jsonObject["minimalHolderAge"];
        result._imageOutputMaxHeight = jsonObject["imageOutputMaxHeight"];
        result._imageOutputMaxWidth = jsonObject["imageOutputMaxWidth"];
        result._processAuth = jsonObject["processAuth"];
        result._convertCase = jsonObject["convertCase"];
        result._logLevel = jsonObject["logLevel"];
        result._mrzDetectMode = jsonObject["mrzDetectMode"];
        result._measureSystem = jsonObject["measureSystem"];
        result._forceDocID = jsonObject["forceDocID"];
        result._pdfPagesLimit = jsonObject["pdfPagesLimit"];
        result._dateFormat = jsonObject["dateFormat"];
        result._scenario = jsonObject["scenario"];
        result._captureButtonScenario = jsonObject["captureButtonScenario"];
        result._timeout = jsonObject["timeout"];
        result._timeoutFromFirstDetect = jsonObject["timeoutFromFirstDetect"];
        result._timeoutFromFirstDocType = jsonObject["timeoutFromFirstDocType"];
        result._documentAreaMin = jsonObject["documentAreaMin"];
        result._timeoutLiveness = jsonObject["timeoutLiveness"];
        result._documentIDList = jsonObject["documentIDList"];
        result._barcodeTypes = jsonObject["barcodeTypes"];
        result._fieldTypesFilter = jsonObject["fieldTypesFilter"];
        result._resultTypeOutput = jsonObject["resultTypeOutput"];
        result._mrzFormatsFilter = jsonObject["mrzFormatsFilter"];
        result._documentGroupFilter = jsonObject["documentGroupFilter"];
        result._lcidIgnoreFilter = jsonObject["lcidIgnoreFilter"];
        result._lcidFilter = jsonObject["lcidFilter"];
        result._imageQA = _ImageQA__WEBPACK_IMPORTED_MODULE_2__.ImageQA.fromJson(jsonObject["imageQA"]);
        result._rfidParams = _RFIDParams__WEBPACK_IMPORTED_MODULE_3__.RFIDParams.fromJson(jsonObject["rfidParams"]);
        result._faceApiParams = _FaceApiParams__WEBPACK_IMPORTED_MODULE_4__.FaceApiParams.fromJson(jsonObject["faceApiParams"]);
        result._backendProcessingConfig = _BackendProcessingConfig__WEBPACK_IMPORTED_MODULE_5__.BackendProcessingConfig.fromJson(jsonObject["backendProcessingConfig"]);
        result._authenticityParams = _AuthenticityParams__WEBPACK_IMPORTED_MODULE_6__.AuthenticityParams.fromJson(jsonObject["authenticityParams"]);
        result._customParams = jsonObject["customParams"];

        return result;
    }

    toJson() {
        return {
            "multipageProcessing": this.multipageProcessing,
            "debugSaveImages": this.debugSaveImages,
            "debugSaveLogs": this.debugSaveLogs,
            "returnUncroppedImage": this.returnUncroppedImage,
            "uvTorchEnabled": this.uvTorchEnabled,
            "debugSaveCroppedImages": this.debugSaveCroppedImages,
            "disableFocusingCheck": this.disableFocusingCheck,
            "debugSaveRFIDSession": this.debugSaveRFIDSession,
            "doublePageSpread": this.doublePageSpread,
            "manualCrop": this.manualCrop,
            "integralImage": this.integralImage,
            "returnCroppedBarcode": this.returnCroppedBarcode,
            "checkRequiredTextFields": this.checkRequiredTextFields,
            "depersonalizeLog": this.depersonalizeLog,
            "generateDoublePageSpreadImage": this.generateDoublePageSpreadImage,
            "alreadyCropped": this.alreadyCropped,
            "matchTextFieldMask": this.matchTextFieldMask,
            "updateOCRValidityByGlare": this.updateOCRValidityByGlare,
            "noGraphics": this.noGraphics,
            "multiDocOnImage": this.multiDocOnImage,
            "forceReadMrzBeforeLocate": this.forceReadMrzBeforeLocate,
            "parseBarcodes": this.parseBarcodes,
            "shouldReturnPackageForReprocess": this.shouldReturnPackageForReprocess,
            "disablePerforationOCR": this.disablePerforationOCR,
            "respectImageQuality": this.respectImageQuality,
            "strictImageQuality": this.strictImageQuality,
            "splitNames": this.splitNames,
            "useFaceApi": this.useFaceApi,
            "useAuthenticityCheck": this.useAuthenticityCheck,
            "checkHologram": this.checkHologram,
            "generateNumericCodes": this.generateNumericCodes,
            "strictBarcodeDigitalSignatureCheck": this.strictBarcodeDigitalSignatureCheck,
            "selectLongestNames": this.selectLongestNames,
            "generateDTCVC": this.generateDTCVC,
            "strictDLCategoryExpiry": this.strictDLCategoryExpiry,
            "generateAlpha2Codes": this.generateAlpha2Codes,
            "disableAuthResolutionFilter": this.disableAuthResolutionFilter,
            "strictSecurityChecks": this.strictSecurityChecks,
            "measureSystem": this.measureSystem,
            "barcodeParserType": this.barcodeParserType,
            "perspectiveAngle": this.perspectiveAngle,
            "minDPI": this.minDPI,
            "imageDpiOutMax": this.imageDpiOutMax,
            "forceDocID": this.forceDocID,
            "pdfPagesLimit": this.pdfPagesLimit,
            "forceDocFormat": this.forceDocFormat,
            "shiftExpiryDate": this.shiftExpiryDate,
            "minimalHolderAge": this.minimalHolderAge,
            "imageOutputMaxHeight": this.imageOutputMaxHeight,
            "imageOutputMaxWidth": this.imageOutputMaxWidth,
            "processAuth": this.processAuth,
            "convertCase": this.convertCase,
            "logLevel": this.logLevel,
            "mrzDetectMode": this.mrzDetectMode,
            "dateFormat": this.dateFormat,
            "scenario": this.scenario,
            "captureButtonScenario": this.captureButtonScenario,
            "timeout": this.timeout,
            "timeoutFromFirstDetect": this.timeoutFromFirstDetect,
            "timeoutFromFirstDocType": this.timeoutFromFirstDocType,
            "documentAreaMin": this.documentAreaMin,
            "timeoutLiveness": this.timeoutLiveness,
            "documentIDList": this.documentIDList,
            "barcodeTypes": this.barcodeTypes,
            "fieldTypesFilter": this.fieldTypesFilter,
            "resultTypeOutput": this.resultTypeOutput,
            "mrzFormatsFilter": this.mrzFormatsFilter,
            "documentGroupFilter": this.documentGroupFilter,
            "lcidIgnoreFilter": this.lcidIgnoreFilter,
            "lcidFilter": this.lcidFilter,
            "imageQA": this.imageQA?.toJson(),
            "rfidParams": this.rfidParams?.toJson(),
            "faceApiParams": this.faceApiParams?.toJson(),
            "backendProcessingConfig": this.backendProcessingConfig?.toJson(),
            "authenticityParams": this.authenticityParams?.toJson(),
            "customParams": this.customParams,
        }
    }

    _apply() { this._set(this); }
    _set(json) {
        if (this === _index__WEBPACK_IMPORTED_MODULE_1__.DocumentReader.instance.processParams)
            (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setProcessParams", [json]);
    }
}

const MeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1
};

const MRZFormat = {
    FORMAT_1X30: "1x30",
    FORMAT_3X30: "3x30",
    FORMAT_2X36: "2x36",
    FORMAT_2X44: "2x44",
    FORMAT_1X6: "1x6",
    FORMAT_2X30: "2x30"
};

const LogLevel = {
    FatalError: "FatalError",
    Error: "Error",
    Warning: "Warning",
    Info: "Info",
    Debug: "Debug"
};

const MrzDetectionModes = {
    DEFAULT: 0,
    RESIZE_BINARIZE_WINDOW: 1,
    BLUR_BEFORE_BINARIZATION: 2
};


/***/ }),

/***/ "./src/params/process_params/RFIDParams.js":
/*!*************************************************!*\
  !*** ./src/params/process_params/RFIDParams.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDParams: () => (/* binding */ RFIDParams)
/* harmony export */ });
class RFIDParams {
    paIgnoreNotificationCodes

    constructor(options) {
        this.paIgnoreNotificationCodes = options?.paIgnoreNotificationCodes;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new RFIDParams({
            paIgnoreNotificationCodes: jsonObject["paIgnoreNotificationCodes"]
        });
    }

    toJson() {
        return {
            "paIgnoreNotificationCodes": this.paIgnoreNotificationCodes,
        }
    }
}


/***/ }),

/***/ "./src/params/rfid_scenario/DTCDataGroup.js":
/*!**************************************************!*\
  !*** ./src/params/rfid_scenario/DTCDataGroup.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DTCDataGroup: () => (/* binding */ DTCDataGroup)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");


class DTCDataGroup {
    get dg17() { return this._dg17; }
    set dg17(val) {
        this._dg17 = val;
        this._set({ "DG17": val });
    }

    get dg18() { return this._dg18; }
    set dg18(val) {
        this._dg18 = val;
        this._set({ "DG18": val });
    }

    get dg22() { return this._dg22; }
    set dg22(val) {
        this._dg22 = val;
        this._set({ "DG22": val });
    }

    get dg23() { return this._dg23; }
    set dg23(val) {
        this._dg23 = val;
        this._set({ "DG23": val });
    }

    get dg24() { return this._dg24; }
    set dg24(val) {
        this._dg24 = val;
        this._set({ "DG24": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        var result = new DTCDataGroup();
        result._dg17 = jsonObject["DG17"];
        result._dg18 = jsonObject["DG18"];
        result._dg22 = jsonObject["DG22"];
        result._dg23 = jsonObject["DG23"];
        result._dg24 = jsonObject["DG24"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        var rfidScenarioJson = { "dtcDataGroups": json };
        var rfidScenario = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.rfidScenario;
        if (this === rfidScenario.dtcDataGroups) rfidScenario._set(rfidScenarioJson);
    }

    toJson() {
        return {
            "DG17": this.dg17,
            "DG18": this.dg18,
            "DG22": this.dg22,
            "DG23": this.dg23,
            "DG24": this.dg24,
        }
    }
}


/***/ }),

/***/ "./src/params/rfid_scenario/EDLDataGroups.js":
/*!***************************************************!*\
  !*** ./src/params/rfid_scenario/EDLDataGroups.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EDLDataGroups: () => (/* binding */ EDLDataGroups)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");


class EDLDataGroups {
    get dg1() { return this._dg1; }
    set dg1(val) {
        this._dg1 = val;
        this._set({ "DG1": val });
    }

    get dg2() { return this._dg2; }
    set dg2(val) {
        this._dg2 = val;
        this._set({ "DG2": val });
    }

    get dg3() { return this._dg3; }
    set dg3(val) {
        this._dg3 = val;
        this._set({ "DG3": val });
    }

    get dg4() { return this._dg4; }
    set dg4(val) {
        this._dg4 = val;
        this._set({ "DG4": val });
    }

    get dg5() { return this._dg5; }
    set dg5(val) {
        this._dg5 = val;
        this._set({ "DG5": val });
    }

    get dg6() { return this._dg6; }
    set dg6(val) {
        this._dg6 = val;
        this._set({ "DG6": val });
    }

    get dg7() { return this._dg7; }
    set dg7(val) {
        this._dg7 = val;
        this._set({ "DG7": val });
    }

    get dg8() { return this._dg8; }
    set dg8(val) {
        this._dg8 = val;
        this._set({ "DG8": val });
    }

    get dg9() { return this._dg9; }
    set dg9(val) {
        this._dg9 = val;
        this._set({ "DG9": val });
    }

    get dg10() { return this._dg10; }
    set dg10(val) {
        this._dg10 = val;
        this._set({ "DG10": val });
    }

    get dg11() { return this._dg11; }
    set dg11(val) {
        this._dg11 = val;
        this._set({ "DG11": val });
    }

    get dg12() { return this._dg12; }
    set dg12(val) {
        this._dg12 = val;
        this._set({ "DG12": val });
    }

    get dg13() { return this._dg13; }
    set dg13(val) {
        this._dg13 = val;
        this._set({ "DG13": val });
    }

    get dg14() { return this._dg14; }
    set dg14(val) {
        this._dg14 = val;
        this._set({ "DG14": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        var result = new EDLDataGroups();
        result._dg1 = jsonObject["DG1"];
        result._dg2 = jsonObject["DG2"];
        result._dg3 = jsonObject["DG3"];
        result._dg4 = jsonObject["DG4"];
        result._dg5 = jsonObject["DG5"];
        result._dg6 = jsonObject["DG6"];
        result._dg7 = jsonObject["DG7"];
        result._dg8 = jsonObject["DG8"];
        result._dg9 = jsonObject["DG9"];
        result._dg10 = jsonObject["DG10"];
        result._dg11 = jsonObject["DG11"];
        result._dg12 = jsonObject["DG12"];
        result._dg13 = jsonObject["DG13"];
        result._dg14 = jsonObject["DG14"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        var rfidScenarioJson = { "eDLDataGroups": json };
        var rfidScenario = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.rfidScenario;
        if (this === rfidScenario.eDLDataGroups) rfidScenario._set(rfidScenarioJson);
    }

    toJson() {
        return {
            "DG1": this.dg1,
            "DG2": this.dg2,
            "DG3": this.dg3,
            "DG4": this.dg4,
            "DG5": this.dg5,
            "DG6": this.dg6,
            "DG7": this.dg7,
            "DG8": this.dg8,
            "DG9": this.dg9,
            "DG10": this.dg10,
            "DG11": this.dg11,
            "DG12": this.dg12,
            "DG13": this.dg13,
            "DG14": this.dg14,
        }
    }
}


/***/ }),

/***/ "./src/params/rfid_scenario/EIDDataGroups.js":
/*!***************************************************!*\
  !*** ./src/params/rfid_scenario/EIDDataGroups.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EIDDataGroups: () => (/* binding */ EIDDataGroups)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");


class EIDDataGroups {
    get dg1() { return this._dg1; }
    set dg1(val) {
        this._dg1 = val;
        this._set({ "DG1": val });
    }

    get dg2() { return this._dg2; }
    set dg2(val) {
        this._dg2 = val;
        this._set({ "DG2": val });
    }

    get dg3() { return this._dg3; }
    set dg3(val) {
        this._dg3 = val;
        this._set({ "DG3": val });
    }

    get dg4() { return this._dg4; }
    set dg4(val) {
        this._dg4 = val;
        this._set({ "DG4": val });
    }

    get dg5() { return this._dg5; }
    set dg5(val) {
        this._dg5 = val;
        this._set({ "DG5": val });
    }

    get dg6() { return this._dg6; }
    set dg6(val) {
        this._dg6 = val;
        this._set({ "DG6": val });
    }

    get dg7() { return this._dg7; }
    set dg7(val) {
        this._dg7 = val;
        this._set({ "DG7": val });
    }

    get dg8() { return this._dg8; }
    set dg8(val) {
        this._dg8 = val;
        this._set({ "DG8": val });
    }

    get dg9() { return this._dg9; }
    set dg9(val) {
        this._dg9 = val;
        this._set({ "DG9": val });
    }

    get dg10() { return this._dg10; }
    set dg10(val) {
        this._dg10 = val;
        this._set({ "DG10": val });
    }

    get dg11() { return this._dg11; }
    set dg11(val) {
        this._dg11 = val;
        this._set({ "DG11": val });
    }

    get dg12() { return this._dg12; }
    set dg12(val) {
        this._dg12 = val;
        this._set({ "DG12": val });
    }

    get dg13() { return this._dg13; }
    set dg13(val) {
        this._dg13 = val;
        this._set({ "DG13": val });
    }

    get dg14() { return this._dg14; }
    set dg14(val) {
        this._dg14 = val;
        this._set({ "DG14": val });
    }

    get dg15() { return this._dg15; }
    set dg15(val) {
        this._dg15 = val;
        this._set({ "DG15": val });
    }

    get dg16() { return this._dg16; }
    set dg16(val) {
        this._dg16 = val;
        this._set({ "DG16": val });
    }

    get dg17() { return this._dg17; }
    set dg17(val) {
        this._dg17 = val;
        this._set({ "DG17": val });
    }

    get dg18() { return this._dg18; }
    set dg18(val) {
        this._dg18 = val;
        this._set({ "DG18": val });
    }

    get dg19() { return this._dg19; }
    set dg19(val) {
        this._dg19 = val;
        this._set({ "DG19": val });
    }

    get dg20() { return this._dg20; }
    set dg20(val) {
        this._dg20 = val;
        this._set({ "DG20": val });
    }

    get dg21() { return this._dg21; }
    set dg21(val) {
        this._dg21 = val;
        this._set({ "DG21": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        var result = new EIDDataGroups();
        result._dg1 = jsonObject["DG1"];
        result._dg2 = jsonObject["DG2"];
        result._dg3 = jsonObject["DG3"];
        result._dg4 = jsonObject["DG4"];
        result._dg5 = jsonObject["DG5"];
        result._dg6 = jsonObject["DG6"];
        result._dg7 = jsonObject["DG7"];
        result._dg8 = jsonObject["DG8"];
        result._dg9 = jsonObject["DG9"];
        result._dg10 = jsonObject["DG10"];
        result._dg11 = jsonObject["DG11"];
        result._dg12 = jsonObject["DG12"];
        result._dg13 = jsonObject["DG13"];
        result._dg14 = jsonObject["DG14"];
        result._dg15 = jsonObject["DG15"];
        result._dg16 = jsonObject["DG16"];
        result._dg17 = jsonObject["DG17"];
        result._dg18 = jsonObject["DG18"];
        result._dg19 = jsonObject["DG19"];
        result._dg20 = jsonObject["DG20"];
        result._dg21 = jsonObject["DG21"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        var rfidScenarioJson = { "eIDDataGroups": json };
        var rfidScenario = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.rfidScenario;
        if (this === rfidScenario.eIDDataGroups) rfidScenario._set(rfidScenarioJson);
    }

    toJson() {
        return {
            "DG1": this.dg1,
            "DG2": this.dg2,
            "DG3": this.dg3,
            "DG4": this.dg4,
            "DG5": this.dg5,
            "DG6": this.dg6,
            "DG7": this.dg7,
            "DG8": this.dg8,
            "DG9": this.dg9,
            "DG10": this.dg10,
            "DG11": this.dg11,
            "DG12": this.dg12,
            "DG13": this.dg13,
            "DG14": this.dg14,
            "DG15": this.dg15,
            "DG16": this.dg16,
            "DG17": this.dg17,
            "DG18": this.dg18,
            "DG19": this.dg19,
            "DG20": this.dg20,
            "DG21": this.dg21,
        }
    }
}


/***/ }),

/***/ "./src/params/rfid_scenario/EPassportDataGroups.js":
/*!*********************************************************!*\
  !*** ./src/params/rfid_scenario/EPassportDataGroups.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPassportDataGroups: () => (/* binding */ EPassportDataGroups)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");


class EPassportDataGroups {
    get dg1() { return this._dg1; }
    set dg1(val) {
        this._dg1 = val;
        this._set({ "DG1": val });
    }

    get dg2() { return this._dg2; }
    set dg2(val) {
        this._dg2 = val;
        this._set({ "DG2": val });
    }

    get dg3() { return this._dg3; }
    set dg3(val) {
        this._dg3 = val;
        this._set({ "DG3": val });
    }

    get dg4() { return this._dg4; }
    set dg4(val) {
        this._dg4 = val;
        this._set({ "DG4": val });
    }

    get dg5() { return this._dg5; }
    set dg5(val) {
        this._dg5 = val;
        this._set({ "DG5": val });
    }

    get dg6() { return this._dg6; }
    set dg6(val) {
        this._dg6 = val;
        this._set({ "DG6": val });
    }

    get dg7() { return this._dg7; }
    set dg7(val) {
        this._dg7 = val;
        this._set({ "DG7": val });
    }

    get dg8() { return this._dg8; }
    set dg8(val) {
        this._dg8 = val;
        this._set({ "DG8": val });
    }

    get dg9() { return this._dg9; }
    set dg9(val) {
        this._dg9 = val;
        this._set({ "DG9": val });
    }

    get dg10() { return this._dg10; }
    set dg10(val) {
        this._dg10 = val;
        this._set({ "DG10": val });
    }

    get dg11() { return this._dg11; }
    set dg11(val) {
        this._dg11 = val;
        this._set({ "DG11": val });
    }

    get dg12() { return this._dg12; }
    set dg12(val) {
        this._dg12 = val;
        this._set({ "DG12": val });
    }

    get dg13() { return this._dg13; }
    set dg13(val) {
        this._dg13 = val;
        this._set({ "DG13": val });
    }

    get dg14() { return this._dg14; }
    set dg14(val) {
        this._dg14 = val;
        this._set({ "DG14": val });
    }

    get dg15() { return this._dg15; }
    set dg15(val) {
        this._dg15 = val;
        this._set({ "DG15": val });
    }

    get dg16() { return this._dg16; }
    set dg16(val) {
        this._dg16 = val;
        this._set({ "DG16": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        var result = new EPassportDataGroups();
        result._dg1 = jsonObject["DG1"];
        result._dg2 = jsonObject["DG2"];
        result._dg3 = jsonObject["DG3"];
        result._dg4 = jsonObject["DG4"];
        result._dg5 = jsonObject["DG5"];
        result._dg6 = jsonObject["DG6"];
        result._dg7 = jsonObject["DG7"];
        result._dg8 = jsonObject["DG8"];
        result._dg9 = jsonObject["DG9"];
        result._dg10 = jsonObject["DG10"];
        result._dg11 = jsonObject["DG11"];
        result._dg12 = jsonObject["DG12"];
        result._dg13 = jsonObject["DG13"];
        result._dg14 = jsonObject["DG14"];
        result._dg15 = jsonObject["DG15"];
        result._dg16 = jsonObject["DG16"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        var rfidScenarioJson = { "ePassportDataGroups": json };
        var rfidScenario = _index__WEBPACK_IMPORTED_MODULE_0__.DocumentReader.instance.rfidScenario;
        if (this === rfidScenario.ePassportDataGroups) rfidScenario._set(rfidScenarioJson);
    }

    toJson() {
        return {
            "DG1": this.dg1,
            "DG2": this.dg2,
            "DG3": this.dg3,
            "DG4": this.dg4,
            "DG5": this.dg5,
            "DG6": this.dg6,
            "DG7": this.dg7,
            "DG8": this.dg8,
            "DG9": this.dg9,
            "DG10": this.dg10,
            "DG11": this.dg11,
            "DG12": this.dg12,
            "DG13": this.dg13,
            "DG14": this.dg14,
            "DG15": this.dg15,
            "DG16": this.dg16,
        }
    }
}


/***/ }),

/***/ "./src/params/rfid_scenario/RFIDScenario.js":
/*!**************************************************!*\
  !*** ./src/params/rfid_scenario/RFIDScenario.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDAuthenticationProcedureType: () => (/* binding */ RFIDAuthenticationProcedureType),
/* harmony export */   RFIDPasswordType: () => (/* binding */ RFIDPasswordType),
/* harmony export */   RFIDReadingBufferSize: () => (/* binding */ RFIDReadingBufferSize),
/* harmony export */   RFIDSDKProfilerType: () => (/* binding */ RFIDSDKProfilerType),
/* harmony export */   RFIDScenario: () => (/* binding */ RFIDScenario),
/* harmony export */   RFIDTerminalType: () => (/* binding */ RFIDTerminalType),
/* harmony export */   SignManagementAction: () => (/* binding */ SignManagementAction)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _DTCDataGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DTCDataGroup */ "./src/params/rfid_scenario/DTCDataGroup.js");
/* harmony import */ var _EDLDataGroups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EDLDataGroups */ "./src/params/rfid_scenario/EDLDataGroups.js");
/* harmony import */ var _EIDDataGroups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EIDDataGroups */ "./src/params/rfid_scenario/EIDDataGroups.js");
/* harmony import */ var _EPassportDataGroups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EPassportDataGroups */ "./src/params/rfid_scenario/EPassportDataGroups.js");
/* harmony import */ var _results_rfid_AccessControlProcedureType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../results/rfid/AccessControlProcedureType */ "./src/results/rfid/AccessControlProcedureType.js");








class RFIDScenario {
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
        result._eDLDataGroups = _EDLDataGroups__WEBPACK_IMPORTED_MODULE_3__.EDLDataGroups.fromJson(jsonObject["eDLDataGroups"]);
        result._ePassportDataGroups = _EPassportDataGroups__WEBPACK_IMPORTED_MODULE_5__.EPassportDataGroups.fromJson(jsonObject["ePassportDataGroups"]);
        result._eIDDataGroups = _EIDDataGroups__WEBPACK_IMPORTED_MODULE_4__.EIDDataGroups.fromJson(jsonObject["eIDDataGroups"]);
        result._dtcDataGroups = _DTCDataGroup__WEBPACK_IMPORTED_MODULE_2__.DTCDataGroup.fromJson(jsonObject["dtcDataGroups"]);
        
        return result;
    }

    toJson() {
        return {
            "paceStaticBinding": this.paceStaticBinding,
            "onlineTA": this.onlineTA,
            "writeEid": this.writeEid,
            "universalAccessRights": this.universalAccessRights,
            "authorizedRestrictedIdentification": this.authorizedRestrictedIdentification,
            "auxVerificationCommunityID": this.auxVerificationCommunityID,
            "auxVerificationDateOfBirth": this.auxVerificationDateOfBirth,
            "skipAA": this.skipAA,
            "strictProcessing": this.strictProcessing,
            "pkdDSCertPriority": this.pkdDSCertPriority,
            "pkdUseExternalCSCA": this.pkdUseExternalCSCA,
            "trustedPKD": this.trustedPKD,
            "passiveAuth": this.passiveAuth,
            "useSFI": this.useSFI,
            "readEPassport": this.readEPassport,
            "readEID": this.readEID,
            "readEDL": this.readEDL,
            "authorizedSTSignature": this.authorizedSTSignature,
            "authorizedSTQSignature": this.authorizedSTQSignature,
            "authorizedWriteDG17": this.authorizedWriteDG17,
            "authorizedWriteDG18": this.authorizedWriteDG18,
            "authorizedWriteDG19": this.authorizedWriteDG19,
            "authorizedWriteDG20": this.authorizedWriteDG20,
            "authorizedWriteDG21": this.authorizedWriteDG21,
            "authorizedVerifyAge": this.authorizedVerifyAge,
            "authorizedVerifyCommunityID": this.authorizedVerifyCommunityID,
            "authorizedPrivilegedTerminal": this.authorizedPrivilegedTerminal,
            "authorizedCANAllowed": this.authorizedCANAllowed,
            "authorizedPINManagement": this.authorizedPINManagement,
            "authorizedInstallCert": this.authorizedInstallCert,
            "authorizedInstallQCert": this.authorizedInstallQCert,
            "applyAmendments": this.applyAmendments,
            "autoSettings": this.autoSettings,
            "proceedReadingAlways": this.proceedReadingAlways,
            "readDTC": this.readDTC,
            "mrzStrictCheck": this.mrzStrictCheck,
            "loadCRLFromRemote": this.loadCRLFromRemote,
            "independentSODStatus": this.independentSODStatus,
            "readingBuffer": this.readingBuffer,
            "onlineTAToSignDataType": this.onlineTAToSignDataType,
            "defaultReadingBufferSize": this.defaultReadingBufferSize,
            "signManagementAction": this.signManagementAction,
            "profilerType": this.profilerType,
            "authProcType": this.authProcType,
            "baseSMProcedure": this.baseSMProcedure,
            "pacePasswordType": this.pacePasswordType,
            "terminalType": this.terminalType,
            "password": this.password,
            "pkdPA": this.pkdPA,
            "pkdEAC": this.pkdEAC,
            "mrz": this.mrz,
            "eSignPINDefault": this.eSignPINDefault,
            "eSignPINNewValue": this.eSignPINNewValue,
            "cardAccess": this.cardAccess,
            "mrzHash": this.mrzHash,
            "documentNumber": this.documentNumber,
            "dateOfBirth": this.dateOfBirth,
            "dateOfExpiry": this.dateOfExpiry,
            "eDLDataGroups": this.eDLDataGroups?.toJson(),
            "ePassportDataGroups": this.ePassportDataGroups?.toJson(),
            "eIDDataGroups": this.eIDDataGroups?.toJson(),
            "dtcDataGroups": this.dtcDataGroups?.toJson(),
        }
    }

    _apply() { this._set(this); }
    _set(json) {
        if (this === _index__WEBPACK_IMPORTED_MODULE_1__.DocumentReader.instance.rfidScenario)
            (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setRfidScenario", [json]);
    }
}

const RFIDAuthenticationProcedureType = {
    UNDEFINED: 0,
    STANDARD: 1,
    ADVANCED: 2,
    GENERAL: 3
};

const RFIDPasswordType = {
    UNDEFINED: 0,
    MRZ: 1,
    CAN: 2,
    PIN: 3,
    PUK: 4,
    PIN_ESIGN: 5,
    SAI: 6,
    MRZ_HASH: 7
};

const RFIDSDKProfilerType = {
    UNKNOWN: -1,
    DOC_9303_EDITION_2006: 1,
    DOC_9303_LDS_PKI_MAINTENANCE: 2
};

const RFIDTerminalType = {
    UNDEFINED: 0,
    INSPECTION_SYSTEM: 1,
    AUTHENTICATION_TERMINAL: 2,
    SIGNATURE_TERMINAL: 3,
    UNAUTHENTICATED_TERMINAL: 4
};

const SignManagementAction = {
    UNDEFINED: 0,
    CREATE_PIN: 1,
    CHANGE_PIN: 2,
    UNBLOCK_PIN: 3,
    TERMINATE_PIN: 4,
    GENERATE_KEYS: 5,
    TERMINATE_KEYS: 6,
    SIGN_DATA: 7
};

const RFIDReadingBufferSize = {
    STANDARD_LENGTH: 0,
    EXTENDED_LENGTH: -1
};


/***/ }),

/***/ "./src/results/DocumentType.js":
/*!*************************************!*\
  !*** ./src/results/DocumentType.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocFormat: () => (/* binding */ DocFormat),
/* harmony export */   DocType: () => (/* binding */ DocType),
/* harmony export */   DocumentType: () => (/* binding */ DocumentType)
/* harmony export */ });
class DocumentType {
    name;
    id;
    iCAOCode;
    fDSID;
    type;
    format;
    mrz;
    isDeprecated;
    description;
    year;
    countryName;
    pageIndex;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new DocumentType();

        result.name = jsonObject["name"];
        result.id = jsonObject["documentID"];
        result.iCAOCode = jsonObject["ICAOCode"];
        result.fDSID = jsonObject["FDSID"];
        result.type = jsonObject["dType"];
        result.format = jsonObject["dFormat"];
        result.mrz = jsonObject["dMRZ"];
        result.isDeprecated = jsonObject["isDeprecated"];
        result.description = jsonObject["dDescription"];
        result.year = jsonObject["dYear"];
        result.countryName = jsonObject["dCountryName"];
        result.pageIndex = jsonObject["pageIndex"];

        return result;
    }

    toJson() {
        return {
            name: this.name,
            documentID: this.id,
            ICAOCode: this.iCAOCode,
            FDSID: this.fDSID,
            dType: this.type,
            dFormat: this.format,
            dMRZ: this.mrz,
            isDeprecated: this.isDeprecated,
            dDescription: this.description,
            dYear: this.year,
            dCountryName: this.countryName,
            pageIndex: this.pageIndex,
        }
    }
}

const DocFormat = {
    ID1: 0,
    ID2: 1,
    ID3: 2,
    NON: 3,
    A4: 4,
    ID3_x2: 5,
    ID2_TURKEY: 6,
    ID1_90: 10,
    ID1_180: 11,
    ID1_270: 12,
    ID2_180: 13,
    ID3_180: 14,
    CUSTOM: 1000,
    PHOTO: 1001,
    FLEXIBLE: 1002
};

const DocType = {
    NotDefined: 0,
    Passport: 11,
    IdentityCard: 12,
    DiplomaticPassport: 13,
    ServicePassport: 14,
    SeamanIdentityDocument: 15,
    IdentityCardForResidence: 16,
    TravelDocument: 17,
    Other: 99,
    VisaID2: 29,
    VisaID3: 30,
    NationalIdentityCard: 20,
    SocialIdentityCard: 21,
    AliensIdentityCard: 22,
    PrivilegedIdentityCard: 23,
    ResidencePermitIdentityCard: 24,
    OriginCard: 25,
    EmergencyPassport: 26,
    AliensPassport: 27,
    AlternativeIdentityCard: 28,
    AuthorizationCard: 32,
    BeginnerPermit: 33,
    BorderCrossingCard: 34,
    ChauffeurLicense: 35,
    ChauffeurLicenseUnder18: 36,
    ChauffeurLicenseUnder21: 37,
    CommercialDrivingLicense: 38,
    CommercialDrivingLicenseInstructionalPermit: 39,
    CommercialDrivingLicenseUnder18: 40,
    CommercialDrivingLicenseUnder21: 41,
    CommercialInstructionPermit: 42,
    CommercialNewPermit: 43,
    ConcealedCarryLicense: 44,
    ConcealedFirearmPermit: 45,
    ConditionalDrivingLicense: 46,
    DepartmentOfVeteransAffairsIdentityCard: 47,
    DiplomaticDrivingLicense: 48,
    DrivingLicense: 49,
    DrivingLicenseInstructionalPermit: 50,
    DrivingLicenseInstructionalPermitUnder18: 51,
    DrivingLicenseInstructionalPermitUnder21: 52,
    DrivingLicenseLearnersPermit: 53,
    DrivingLicenseLearnersPermitUnder18: 54,
    DrivingLicenseLearnersPermitUnder21: 55,
    DrivingLicenseNovice: 56,
    DrivingLicenseNoviceUnder18: 57,
    DrivingLicenseNoviceUnder21: 58,
    DrivingLicenseRegisteredOffender: 59,
    DrivingLicenseRestrictedUnder18: 60,
    DrivingLicenseRestrictedUnder21: 61,
    DrivingLicenseTemporaryVisitor: 62,
    DrivingLicenseTemporaryVisitorUnder18: 63,
    DrivingLicenseTemporaryVisitorUnder21: 64,
    DrivingLicenseUnder18: 65,
    DrivingLicenseUnder21: 66,
    EmploymentDrivingPermit: 67,
    EnhancedChauffeurLicense: 68,
    EnhancedChauffeurLicenseUnder18: 69,
    EnhancedChauffeurLicenseUnder21: 70,
    EnhancedCommercialDrivingLicense: 71,
    EnhancedDrivingLicense: 72,
    EnhancedDrivingLicenseUnder18: 73,
    EnhancedDrivingLicenseUnder21: 74,
    EnhancedIdentityCard: 75,
    EnhancedIdentityCardUnder18: 76,
    EnhancedIdentityCardUnder21: 77,
    EnhancedOperatorsLicense: 78,
    FirearmsPermit: 79,
    FullProvisionalLicense: 80,
    FullProvisionalLicenseUnder18: 81,
    FullProvisionalLicenseUnder21: 82,
    GenevaConventionsIdentityCard: 83,
    GraduatedDrivingLicenseUnder18: 84,
    GraduatedDrivingLicenseUnder21: 85,
    GraduatedInstructionPermitUnder18: 86,
    GraduatedInstructionPermitUnder21: 87,
    GraduatedLicenseUnder18: 88,
    GraduatedLicenseUnder21: 89,
    HandgunCarryPermit: 90,
    IdentityAndPrivilegeCard: 91,
    IdentityCardMobilityImpaired: 92,
    IdentityCardRegisteredOffender: 93,
    IdentityCaremporaryVisitor: 94,
    IdentityCaremporaryVisitorUnder18: 95,
    IdentityCaremporaryVisitorUnder21: 96,
    IdentityCardUnder18: 97,
    IdentityCardUnder21: 98,
    IgnitionInterlockPermit: 100,
    ImmigrantVisa: 101,
    InstructionPermit: 102,
    InstructionPermitUnder18: 103,
    InstructionPermitUnder21: 104,
    InterimDrivingLicense: 105,
    InterimIdentityCard: 106,
    IntermediateDrivingLicense: 107,
    IntermediateDrivingLicenseUnder18: 108,
    IntermediateDrivingLicenseUnder21: 109,
    JuniorDrivingLicense: 110,
    LearnerInstructionalPermit: 111,
    LearnerLicense: 112,
    LearnerLicenseUnder18: 113,
    LearnerLicenseUnder21: 114,
    LearnerPermit: 115,
    LearnerPermitUnder18: 116,
    LearnerPermitUnder21: 117,
    LimitedLicense: 118,
    LimitedPermit: 119,
    LimiteermDrivingLicense: 120,
    LimiteermIdentityCard: 121,
    LiquorIdentityCard: 122,
    NewPermit: 123,
    NewPermitUnder18: 124,
    NewPermitUnder21: 125,
    NonUsCitizenDrivingLicense: 126,
    OccupationalDrivingLicense: 127,
    OneidaTribeOfIndiansIdentityCard: 128,
    OperatorLicense: 129,
    OperatorLicenseUnder18: 130,
    OperatorLicenseUnder21: 131,
    PermanentDrivingLicense: 132,
    PermitToReEnter: 133,
    ProbationaryAutoLicense: 134,
    ProbationaryDrivingLicenseUnder18: 135,
    ProbationaryDrivingLicenseUnder21: 136,
    ProbationaryVehicleSalespersonLicense: 137,
    ProvisionalDrivingLicense: 138,
    ProvisionalDrivingLicenseUnder18: 139,
    ProvisionalDrivingLicenseUnder21: 140,
    ProvisionalLicense: 141,
    ProvisionalLicenseUnder18: 142,
    ProvisionalLicenseUnder21: 143,
    PublicPassengerChauffeurLicense: 144,
    RacingAndGamingComissionCard: 145,
    RefugeeTravelDocument: 146,
    RenewalPermit: 147,
    RestrictedCommercialDrivingLicense: 148,
    RestrictedDrivingLicense: 149,
    RestrictedPermit: 150,
    SeasonalPermit: 151,
    SeasonalResidentIdentityCard: 152,
    SeniorCitizenIdentityCard: 153,
    SexOffender: 154,
    SocialSecurityCard: 155,
    TemporaryDrivingLicense: 156,
    TemporaryDrivingLicenseUnder18: 157,
    TemporaryDrivingLicenseUnder21: 158,
    TemporaryIdentityCard: 159,
    TemporaryInstructionPermitIdentityCard: 160,
    TemporaryInstructionPermitIdentityCardUnder18: 161,
    TemporaryInstructionPermitIdentityCardUnder21: 162,
    TemporaryVisitorDrivingLicense: 163,
    TemporaryVisitorDrivingLicenseUnder18: 164,
    TemporaryVisitorDrivingLicenseUnder21: 165,
    UniformedServicesIdentityCard: 166,
    VehicleSalespersonLicense: 167,
    WorkerIdentificationCredential: 168,
    CommercialDrivingLicenseNovice: 169,
    CommercialDrivingLicenseNoviceUnder18: 170,
    CommercialDrivingLicenseNoviceUnder21: 171,
    PassportCard: 172,
    PermanentResidentCard: 173,
    PersonalIdentificationVerification: 174,
    TemporaryOperatorLicense: 175,
    DrivingLicenseUnder19: 176,
    IdentityCardUnder19: 177,
    Visa: 178,
    TemporaryPassport: 179,
    VotingCard: 180,
    HealthCard: 181,
    CertificateOfCitizenship: 182,
    AddressCard: 183,
    AirportImmigrationCard: 184,
    AlienRegistrationCard: 185,
    APEHCard: 186,
    CouponToDrivingLicense: 187,
    CrewMemberCertificate: 188,
    DocumentForReturn: 189,
    ECard: 190,
    EmploymentCard: 191,
    HKSARImmigrationForm: 192,
    ImmigrantCard: 193,
    LabourCard: 194,
    LaissezPasser: 195,
    LawyerIdentityCertificate: 196,
    LicenseCard: 197,
    PassportStateless: 198,
    PassportChild: 199,
    PassportConsular: 200,
    PassportDiplomaticService: 201,
    PassportOfficial: 202,
    PassportProvisional: 203,
    PassportSpecial: 204,
    PermissionToTheLocalBorderTraffic: 205,
    RegistrationCertificate: 206,
    SEDESOLCard: 207,
    SocialCard: 208,
    TBCard: 209,
    VehiclePassport: 210,
    WDocument: 211,
    DiplomaticIdentityCard: 212,
    ConsularIdentityCard: 213,
    IncomeTaxCard: 214,
    ResidencePermit: 215,
    DocumentOfIdentity: 216,
    BorderCrossingPermit: 217,
    PassportLimitedValidity: 218,
    SIMCard: 219,
    TaxCard: 220,
    CompanyCard: 221,
    DomesticPassport: 222,
    IdentityCertificate: 223,
    ResidentIdCard: 224,
    ArmedForcesIdentityCard: 225,
    ProfessionalCard: 226,
    RegistrationStamp: 227,
    DriverCard: 228,
    DriverTrainingCertificate: 229,
    QualificationDrivingLicense: 230,
    MembershipCard: 231,
    PublicVehicleDriverAuthorityCard: 232,
    MarineLicense: 233,
    TemporaryLearnerDrivingLicense: 234,
    TemporaryCommercialDrivingLicense: 235,
    InterimInstructionalPermit: 236,
    CertificateOfCompetency: 237,
    CertificateOfProficiency: 238,
    TradeLicense: 239,
    PassportPage: 240,
    Invoice: 241,
    PassengerLocatorForm: 242
};


/***/ }),

/***/ "./src/results/Position.js":
/*!*********************************!*\
  !*** ./src/results/Position.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Coordinate: () => (/* binding */ Coordinate),
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
/* harmony import */ var _DocumentType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentType.js */ "./src/results/DocumentType.js");
/* harmony import */ var _status_CheckResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status/CheckResult.js */ "./src/results/status/CheckResult.js");



class Position {
    docFormat;
    width;
    height;
    angle;
    dpi;
    inverse;
    perspectiveTr;
    objArea;
    objIntAngleDev;
    resultStatus;
    center;
    leftTop;
    leftBottom;
    rightTop;
    rightBottom;
    pageIndex;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Position();

        result.docFormat = jsonObject["docFormat"];
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        result.angle = jsonObject["angle"];
        result.dpi = jsonObject["dpi"];
        result.inverse = jsonObject["inverse"];
        result.perspectiveTr = jsonObject["perspectiveTr"];
        result.objArea = jsonObject["objArea"];
        result.objIntAngleDev = jsonObject["objIntAngleDev"];
        result.resultStatus = jsonObject["resultStatus"];
        result.pageIndex = jsonObject["pageIndex"];
        result.center = Coordinate.fromJson(jsonObject["center"]);
        result.leftTop = Coordinate.fromJson(jsonObject["leftTop"]);
        result.leftBottom = Coordinate.fromJson(jsonObject["leftBottom"]);
        result.rightTop = Coordinate.fromJson(jsonObject["rightTop"]);
        result.rightBottom = Coordinate.fromJson(jsonObject["rightBottom"]);

        return result;
    }

    toJson() {
        return {
            "docFormat": this.docFormat,
            "resultStatus": this.resultStatus,
            "width": this.width,
            "height": this.height,
            "angle": this.angle,
            "dpi": this.dpi,
            "inverse": this.inverse,
            "perspectiveTr": this.perspectiveTr,
            "objArea": this.objArea,
            "objIntAngleDev": this.objIntAngleDev,
            "pageIndex": this.pageIndex,
            "center": this.center?.toJson(),
            "leftTop": this.leftTop?.toJson(),
            "leftBottom": this.leftBottom?.toJson(),
            "rightTop": this.rightTop?.toJson(),
            "rightBottom": this.rightBottom?.toJson(),
        }
    }
}

class Coordinate {
    x;
    y;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Coordinate();

        result.x = jsonObject["x"];
        result.y = jsonObject["y"];

        return result;
    }

    toJson() {
        return {
            "x": this.x,
            "y": this.y,
        }
    }
}


/***/ }),

/***/ "./src/results/Results.js":
/*!********************************!*\
  !*** ./src/results/Results.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessingFinishedStatus: () => (/* binding */ ProcessingFinishedStatus),
/* harmony export */   ResultType: () => (/* binding */ ResultType),
/* harmony export */   Results: () => (/* binding */ Results)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _authenticity_AuthenticityResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticity/AuthenticityResult */ "./src/results/authenticity/AuthenticityResult.js");
/* harmony import */ var _barcode_BarcodeResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barcode/BarcodeResult */ "./src/results/barcode/BarcodeResult.js");
/* harmony import */ var _image_quality_ImageQualityGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image_quality/ImageQualityGroup */ "./src/results/image_quality/ImageQualityGroup.js");
/* harmony import */ var _rfid_RFIDSessionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rfid/RFIDSessionData */ "./src/results/rfid/RFIDSessionData.js");
/* harmony import */ var _status_ResultsStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/ResultsStatus */ "./src/results/status/ResultsStatus.js");
/* harmony import */ var _visual_results_FieldType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visual_results/FieldType */ "./src/results/visual_results/FieldType.js");
/* harmony import */ var _visual_results_GraphicFieldType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual_results/GraphicFieldType */ "./src/results/visual_results/GraphicFieldType.js");
/* harmony import */ var _visual_results_LCID__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visual_results/LCID */ "./src/results/visual_results/LCID.js");
/* harmony import */ var _visual_results_Lights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visual_results/Lights */ "./src/results/visual_results/Lights.js");
/* harmony import */ var _visual_results_GraphicField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visual_results/GraphicField */ "./src/results/visual_results/GraphicField.js");
/* harmony import */ var _visual_results_GraphicResult__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visual_results/GraphicResult */ "./src/results/visual_results/GraphicResult.js");
/* harmony import */ var _visual_results_TextResult__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./visual_results/TextResult */ "./src/results/visual_results/TextResult.js");
/* harmony import */ var _visual_results_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./visual_results/TextField */ "./src/results/visual_results/TextField.js");
/* harmony import */ var _visible_digital_seals_VDSNCData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visible_digital_seals/VDSNCData */ "./src/results/visible_digital_seals/VDSNCData.js");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Position */ "./src/results/Position.js");
/* harmony import */ var _DocumentType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DocumentType */ "./src/results/DocumentType.js");
/* harmony import */ var _TransactionInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TransactionInfo */ "./src/results/TransactionInfo.js");



















class Results {
    documentType
    textResult
    graphicResult
    documentPosition
    barcodePosition
    mrzPosition
    imageQuality
    status
    authenticityResult
    rfidSessionData
    chipPage
    barcodeResult
    vdsncData
    dtcData
    processingFinishedStatus
    morePagesAvailable
    elapsedTime
    elapsedTimeRFID
    rawResult
    transactionInfo

    async textFieldValueByType(fieldType) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldValueByType", [
            this.rawResult,
            fieldType,
        ]);
    }

    async textFieldValueByTypeLcid(fieldType, lcid) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldValueByTypeLcid", [
            this.rawResult,
            fieldType,
            lcid,
        ]);
    }

    async textFieldValueByTypeSource(fieldType, source) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldValueByTypeSource", [
            this.rawResult,
            fieldType,
            source,
        ]);
    }

    async textFieldValueByTypeLcidSource(fieldType, lcid, source) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldValueByTypeLcidSource", [
            this.rawResult,
            fieldType,
            lcid,
            source,
        ]);
    }

    async textFieldValueByTypeSourceOriginal(fieldType, source, original) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldValueByTypeSourceOriginal", [
            this.rawResult,
            fieldType,
            source,
            original,
        ]);
    }

    async textFieldValueByTypeLcidSourceOriginal(fieldType, lcid, source, original) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldValueByTypeLcidSourceOriginal", [
            this.rawResult,
            fieldType,
            lcid,
            source,
            original,
        ]);
    }

    async textFieldByType(fieldType) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldByType", [
            this.rawResult,
            fieldType,
        ]);
        if (result == null) return null;
        return _visual_results_TextField__WEBPACK_IMPORTED_MODULE_13__.TextField.fromJson(JSON.parse(result));
    }

    async textFieldByTypeLcid(fieldType, lcid) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("textFieldByTypeLcid", [
            this.rawResult,
            fieldType,
            lcid,
        ]);
        if (result == null) return null;
        return _visual_results_TextField__WEBPACK_IMPORTED_MODULE_13__.TextField.fromJson(JSON.parse(result));
    }

    async graphicFieldByTypeSource(fieldType, source) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("graphicFieldByTypeSource", [
            this.rawResult,
            fieldType,
            source,
        ]);
        if (result == null) return null;
        return _visual_results_GraphicField__WEBPACK_IMPORTED_MODULE_10__.GraphicField.fromJson(JSON.parse(result));
    }

    async graphicFieldByTypeSourcePageIndex(fieldType, source, pageIndex) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("graphicFieldByTypeSourcePageIndex", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
        ]);
        if (result == null) return null;
        return _visual_results_GraphicField__WEBPACK_IMPORTED_MODULE_10__.GraphicField.fromJson(JSON.parse(result));
    }

    async graphicFieldByTypeSourcePageIndexLight(fieldType, source, pageIndex, light) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("graphicFieldByTypeSourcePageIndexLight", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
            light,
        ]);
        if (result == null) return null;
        return _visual_results_GraphicField__WEBPACK_IMPORTED_MODULE_10__.GraphicField.fromJson(JSON.parse(result));
    }

    async graphicFieldImageByType(fieldType) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("graphicFieldImageByType", [
            this.rawResult,
            fieldType,
        ]);
        return result;
    }

    async graphicFieldImageByTypeSource(fieldType, source) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("graphicFieldImageByTypeSource", [
            this.rawResult,
            fieldType,
            source,
        ]);
        return result;
    }

    async graphicFieldImageByTypeSourcePageIndex(fieldType, source, pageIndex) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("graphicFieldImageByTypeSourcePageIndex", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
        ]);
        return result;
    }

    async graphicFieldImageByTypeSourcePageIndexLight(fieldType, source, pageIndex, light) {
        const result = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("graphicFieldImageByTypeSourcePageIndexLight", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
            light,
        ]);
        return result;
    }

    async containers(resultType) {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("containers", [this.rawResult, resultType]);
    }

    async encryptedContainers() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("encryptedContainers", [this.rawResult]);
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Results();
        result.chipPage = jsonObject["chipPage"];
        result.processingFinishedStatus = jsonObject["processingFinishedStatus"];
        result.elapsedTime = jsonObject["elapsedTime"];
        result.elapsedTimeRFID = jsonObject["elapsedTimeRFID"];
        result.morePagesAvailable = jsonObject["morePagesAvailable"];
        result.graphicResult = _visual_results_GraphicResult__WEBPACK_IMPORTED_MODULE_11__.GraphicResult.fromJson(jsonObject["graphicResult"]);
        result.textResult = _visual_results_TextResult__WEBPACK_IMPORTED_MODULE_12__.TextResult.fromJson(jsonObject["textResult"]);
        result.rawResult = jsonObject["rawResult"];
        result.rfidSessionData = _rfid_RFIDSessionData__WEBPACK_IMPORTED_MODULE_4__.RFIDSessionData.fromJson(jsonObject["rfidSessionData"]);
        result.authenticityResult = _authenticity_AuthenticityResult__WEBPACK_IMPORTED_MODULE_1__.AuthenticityResult.fromJson(jsonObject["authenticityResult"]);
        result.barcodeResult = _barcode_BarcodeResult__WEBPACK_IMPORTED_MODULE_2__.BarcodeResult.fromJson(jsonObject["barcodeResult"]);
        result.status = _status_ResultsStatus__WEBPACK_IMPORTED_MODULE_5__.ResultsStatus.fromJson(jsonObject["status"]);
        result.vdsncData = _visible_digital_seals_VDSNCData__WEBPACK_IMPORTED_MODULE_14__.VDSNCData.fromJson(jsonObject["vdsncData"]);
        result.dtcData = jsonObject["dtcData"];
        result.transactionInfo = _TransactionInfo__WEBPACK_IMPORTED_MODULE_17__.TransactionInfo.fromJson(jsonObject["transactionInfo"]);

        if (jsonObject["documentPosition"] != null) {
            result.documentPosition = [];
            for (const item of jsonObject["documentPosition"]) {
                const position = _Position__WEBPACK_IMPORTED_MODULE_15__.Position.fromJson(item);
                if (position != null) {
                    result.documentPosition.push(position);
                }
            }
        }

        if (jsonObject["barcodePosition"] != null) {
            result.barcodePosition = [];
            for (const item of jsonObject["barcodePosition"]) {
                const position = _Position__WEBPACK_IMPORTED_MODULE_15__.Position.fromJson(item);
                if (position != null) {
                    result.barcodePosition.push(position);
                }
            }
        }

        if (jsonObject["mrzPosition"] != null) {
            result.mrzPosition = [];
            for (const item of jsonObject["mrzPosition"]) {
                const position = _Position__WEBPACK_IMPORTED_MODULE_15__.Position.fromJson(item);
                if (position != null) {
                    result.mrzPosition.push(position);
                }
            }
        }

        if (jsonObject["imageQuality"] != null) {
            result.imageQuality = [];
            for (const item of jsonObject["imageQuality"]) {
                const imageQualityGroup = _image_quality_ImageQualityGroup__WEBPACK_IMPORTED_MODULE_3__.ImageQualityGroup.fromJson(item);
                if (imageQualityGroup != null) {
                    result.imageQuality.push(imageQualityGroup);
                }
            }
        }

        if (jsonObject["documentType"] != null) {
            result.documentType = [];
            for (const item of jsonObject["documentType"]) {
                const documentType = _DocumentType__WEBPACK_IMPORTED_MODULE_16__.DocumentType.fromJson(item);
                if (documentType != null) {
                    result.documentType.push(documentType);
                }
            }
        }

        return result;
    }

    toJson() {
        return {
            "documentType": this.documentType?.map(e => e.toJson()),
            "documentPosition": this.documentPosition?.map(e => e.toJson()),
            "barcodePosition": this.barcodePosition?.map(e => e.toJson()),
            "mrzPosition": this.mrzPosition?.map(e => e.toJson()),
            "imageQuality": this.imageQuality?.map(e => e.toJson()),
            "textResult": this.textResult?.toJson(),
            "graphicResult": this.graphicResult?.toJson(),
            "status": this.status?.toJson(),
            "authenticityResult": this.authenticityResult?.toJson(),
            "rfidSessionData": this.rfidSessionData?.toJson(),
            "barcodeResult": this.barcodeResult?.toJson(),
            "vdsncData": this.vdsncData?.toJson(),
            "dtcData": this.dtcData,
            "chipPage": this.chipPage,
            "processingFinishedStatus": this.processingFinishedStatus,
            "morePagesAvailable": this.morePagesAvailable,
            "elapsedTime": this.elapsedTime,
            "elapsedTimeRFID": this.elapsedTimeRFID,
            "rawResult": this.rawResult,
            "transactionInfo": this.transactionInfo?.toJson(),
        }
    }
}

const ProcessingFinishedStatus = {
    NOT_READY: 0,
    READY: 1,
    TIMEOUT: 2
};

const ResultType = {
    NONE: -1,
    EMPTY: 0,
    RAW_IMAGE: 1,
    FILE_IMAGE: 2,
    MRZ_OCR_EXTENDED: 3,
    BARCODES: 5,
    GRAPHICS: 6,
    MRZ_TEST_QUALITY: 7,
    DOCUMENT_TYPES_CANDIDATES: 8,
    CHOSEN_DOCUMENT_TYPE_CANDIDATE: 9,
    DOCUMENTS_INFO_LIST: 10,
    OCR_LEXICAL_ANALYZE: 15,
    RAW_UNCROPPED_IMAGE: 16,
    VISUAL_OCR_EXTENDED: 17,
    BAR_CODES_TEXT_DATA: 18,
    BAR_CODES_IMAGE_DATA: 19,
    AUTHENTICITY: 20,
    EXPERT_ANALYZE: 21,
    OCR_LEXICAL_ANALYZE_EX: 22,
    EOS_IMAGE: 23,
    BAYER_IMAGE: 24,
    MAGNETIC_STRIPE: 25,
    MAGNETIC_STRIPE_TEXT_DATA: 26,
    FIELD_FILE_IMAGE: 27,
    DATABASE_CHECK: 28,
    FINGERPRINT_TEMPLATE_ISO: 29,
    INPUT_IMAGE_QUALITY: 30,
    LIVE_PORTRAIT: 32,
    STATUS: 33,
    PORTRAIT_COMPARISON: 34,
    EXT_PORTRAIT: 35,
    TEXT: 36,
    IMAGES: 37,
    INTERNAL_RFID_SESSION: 48,
    INTERNAL_ENCRYPTED_RCL: 49,
    INTERNAL_LICENSE: 50,
    MRZ_POSITION: 61,
    BARCODE_POSITION: 62,
    DOCUMENT_POSITION: 85,
    CUSTOM: 100,
    RFID_RAW_DATA: 101,
    RFID_TEXT_DATA: 102,
    RFID_IMAGE_DATA: 103,
    RFID_BINARY_DATA: 104,
    RFID_ORIGINAL_GRAPHICS: 105,
    RFID_DTC_VC: 109
};


/***/ }),

/***/ "./src/results/TransactionInfo.js":
/*!****************************************!*\
  !*** ./src/results/TransactionInfo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionInfo: () => (/* binding */ TransactionInfo)
/* harmony export */ });
class TransactionInfo {
    transactionId
    tag
    sessionLogFolder

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new TransactionInfo()

        result.transactionId = jsonObject["transactionId"]
        result.tag = jsonObject["tag"]
        result.sessionLogFolder = jsonObject["sessionLogFolder"]

        return result
    }

    toJson() {
        return {
            "transactionId": this.transactionId,
            "tag": this.tag,
            "sessionLogFolder": this.sessionLogFolder,
        }
    }
}


/***/ }),

/***/ "./src/results/authenticity/Authenticity.js":
/*!**************************************************!*\
  !*** ./src/results/authenticity/Authenticity.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Authenticity: () => (/* binding */ Authenticity)
/* harmony export */ });
const Authenticity = {
    NONE: 0,
    UV_LUMINESCENCE: 1,
    IR_B900: 2,
    IMAGE_PATTERN: 4,
    AXIAL_PROTECTION: 8,
    UV_FIBERS: 16,
    IR_VISIBILITY: 32,
    OCR_SECURITY_TEXT: 64,
    IPI: 128,
    PHOTO_EMBED_TYPE: 512,
    OVI: 1024,
    HOLOGRAMS: 4096,
    PHOTO_AREA: 8192,
    PORTRAIT_COMPARISON: 32768,
    BARCODE_FORMAT_CHECK: 65536,
    KINEGRAM: 131072,
    HOLOGRAMS_DETECTION: 524288,
    LIVENESS: 2097152,
    OCR: 4194304,
    MRZ: 8388608,
    STATUS_ONLY: 2147483648
}


/***/ }),

/***/ "./src/results/authenticity/AuthenticityCheck.js":
/*!*******************************************************!*\
  !*** ./src/results/authenticity/AuthenticityCheck.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticityCheck: () => (/* binding */ AuthenticityCheck)
/* harmony export */ });
/* harmony import */ var _Authenticity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authenticity */ "./src/results/authenticity/Authenticity.js");
/* harmony import */ var _AuthenticityElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthenticityElement */ "./src/results/authenticity/AuthenticityElement.js");
/* harmony import */ var _status_CheckResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status/CheckResult */ "./src/results/status/CheckResult.js");




class AuthenticityCheck {
    type
    status
    pageIndex
    elements
    typeName

    constructor() {
        this.elements = []
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new AuthenticityCheck()

        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.typeName = jsonObject["typeName"]
        result.pageIndex = jsonObject["pageIndex"]
        for (const item of jsonObject["elements"]) {
            const element = _AuthenticityElement__WEBPACK_IMPORTED_MODULE_1__.AuthenticityElement.fromJson(item)
            if (element != null) {
                result.elements.push(element)
            }
        }

        return result
    }

    toJson() {
        return {
            "type": this.type,
            "status": this.status,
            "pageIndex": this.pageIndex,
            "typeName": this.typeName,
            "elements": this.elements?.map(e => e.toJson()),
        }
    }
}


/***/ }),

/***/ "./src/results/authenticity/AuthenticityElement.js":
/*!*********************************************************!*\
  !*** ./src/results/authenticity/AuthenticityElement.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticityElement: () => (/* binding */ AuthenticityElement)
/* harmony export */ });
/* harmony import */ var _SecurityFeatureType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityFeatureType */ "./src/results/authenticity/SecurityFeatureType.js");
/* harmony import */ var _CheckDiagnose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckDiagnose */ "./src/results/authenticity/CheckDiagnose.js");
/* harmony import */ var _status_CheckResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status/CheckResult */ "./src/results/status/CheckResult.js");




class AuthenticityElement {
    status
    elementType
    elementDiagnose
    elementTypeName
    elementDiagnoseName

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new AuthenticityElement()

        result.status = jsonObject["status"]
        result.elementType = jsonObject["elementType"]
        result.elementDiagnose = jsonObject["elementDiagnose"]
        result.elementTypeName = jsonObject["elementTypeName"]
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"]

        return result
    }

    toJson() {
        return {
            "status": this.status,
            "elementType": this.elementType,
            "elementDiagnose": this.elementDiagnose,
            "elementTypeName": this.elementTypeName,
            "elementDiagnoseName": this.elementDiagnoseName,
        }
    }
}


/***/ }),

/***/ "./src/results/authenticity/AuthenticityResult.js":
/*!********************************************************!*\
  !*** ./src/results/authenticity/AuthenticityResult.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticityResult: () => (/* binding */ AuthenticityResult)
/* harmony export */ });
/* harmony import */ var _AuthenticityCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthenticityCheck */ "./src/results/authenticity/AuthenticityCheck.js");
/* harmony import */ var _status_CheckResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../status/CheckResult */ "./src/results/status/CheckResult.js");



class AuthenticityResult {
    status
    checks

    constructor() {
        this.checks = []
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new AuthenticityResult()

        result.status = jsonObject["status"]
        for (const item of jsonObject["checks"]) {
            const check = _AuthenticityCheck__WEBPACK_IMPORTED_MODULE_0__.AuthenticityCheck.fromJson(item)
            if (check != null) {
                result.checks.push(check)
            }
        }

        return result
    }

    toJson() {
        return {
            "status": this.status,
            "checks": this.checks?.map(e => e.toJson()),
        }
    }
}


/***/ }),

/***/ "./src/results/authenticity/CheckDiagnose.js":
/*!***************************************************!*\
  !*** ./src/results/authenticity/CheckDiagnose.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckDiagnose: () => (/* binding */ CheckDiagnose)
/* harmony export */ });
const CheckDiagnose = {
    PASS: 1,
    INVALID_INPUT_DATA: 2,
    INTERNAL_ERROR: 3,
    EXCEPTION_IN_MODULE: 4,
    UNCERTAIN_VERIFICATION: 5,
    NECESSARY_IMAGE_NOT_FOUND: 7,
    PHOTO_SIDES_NOT_FOUND: 8,
    INVALID_CHECKSUM: 10,
    SYNTAX_ERROR: 11,
    LOGIC_ERROR: 12,
    SOURCES_COMPARISON_ERROR: 13,
    FIELDS_COMPARISON_LOGIC_ERROR: 14,
    INVALID_FIELD_FORMAT: 15,
    TRUE_LUMINISCENCE_ERROR: 20,
    FALSE_LUMINISCENCE_ERROR: 21,
    FIXED_PATTERN_ERROR: 22,
    LOW_CONTRAST_IN_IR_LIGHT: 23,
    INCORRECT_BACKGROUND_LIGHT: 24,
    BACKGROUND_COMPARISON_ERROR: 25,
    INCORRECT_TEXT_COLOR: 26,
    PHOTO_FALSE_LUMINISCENCE: 27,
    TOO_MUCH_SHIFT: 28,
    CONTACT_CHIP_TYPE_MISMATCH: 29,
    FIBERS_NOT_FOUND: 30,
    TOO_MANY_OBJECTS: 31,
    SPECKS_IN_UV: 33,
    TOO_LOW_RESOLUTION: 34,
    INVISIBLE_ELEMENT_PRESENT: 40,
    VISIBLE_ELEMENT_ABSENT: 41,
    ELEMENT_SHOULD_BE_COLORED: 42,
    ELEMENT_SHOULD_BE_GRAYSCALE: 43,
    PHOTO_WHITE_IR_DONT_MATCH: 44,
    UV_DULL_PAPER_MRZ: 50,
    FALSE_LUMINISCENCE_IN_MRZ: 51,
    UV_DULL_PAPER_PHOTO: 52,
    UV_DULL_PAPER_BLANK: 53,
    UV_DULL_PAPER_ERROR: 54,
    FALSE_LUMINISCENCE_IN_BLANK: 55,
    BAD_AREA_IN_AXIAL: 60,
    FALSE_IPI_PARAMETERS: 65,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA: 81,
    FIELD_POS_CORRECTOR_PHOTO_REPLACED: 82,
    FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR: 83,
    FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR: 84,
    FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR: 85,
    CHD_FIELD_POS_CORRECTOR_INCORRECT_HEAD_POSITION: 86,
    OVI_IR_INVISIBLE: 90,
    OVI_INSUFFICIENT_AREA: 91,
    OVI_COLOR_INVARIABLE: 92,
    OVI_BAD_COLOR_FRONT: 93,
    OVI_BAD_COLOR_SIDE: 94,
    OVI_WIDE_COLOR_SPREAD: 95,
    OVI_BAD_COLOR_PERCENT: 96,
    HOLOGRAM_ELEMENT_ABSENT: 100,
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT: 101,
    HOLOGRAM_ELEMENT_PRESENT: 102,
    HOLOGRAM_FRAMES_IS_ABSENT: 103,
    HOLOGRAM_HOLO_FIELD_IS_ABSENT: 104,
    PHOTO_PATTERN_INTERRUPTED: 110,
    PHOTO_PATTERN_SHIFTED: 111,
    PHOTO_PATTERN_DIFFERENT_COLORS: 112,
    PHOTO_PATTERN_IR_VISIBLE: 113,
    PHOTO_PATTERN_NOT_INTERSECT: 114,
    PHOTO_SIZE_IS_WRONG: 115,
    PHOTO_PATTERN_INVALID_COLOR: 116,
    PHOTO_PATTERN_SHIFTED_VERT: 117,
    PHOTO_PATTERN_PATTERN_NOT_FOUND: 118,
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS: 119,
    PHOTO_IS_NOT_RECTANGLE: 120,
    PHOTO_CORNERS_IS_WRONG: 121,
    DOCUMENT_IS_CANCELLING: 122,
    TEXT_COLOR_SHOULD_BE_BLUE: 130,
    TEXT_COLOR_SHOULD_BE_GREEN: 131,
    TEXT_COLOR_SHOULD_BE_RED: 132,
    TEXT_SHOULD_BE_BLACK: 133,
    SECURITY_TEXT_IS_ABSENT: 134,
    BARCODE_WAS_READ_WITH_ERRORS: 140,
    BARCODE_DATA_FORMAT_ERROR: 141,
    BARCODE_SIZE_PARAMS_ERROR: 142,
    NOT_ALL_BARCODES_READ: 143,
    GLARES_IN_BARCODE_AREA: 144,
    CHD_NO_CERTIFICATE_FOR_DIGITAL_SIGNATURE_CHECK: 145,
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER: 150,
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY: 151,
    PORTRAIT_COMPARISON_SERVICE_ERROR: 152,
    PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: 155,
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: 156,
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: 160,
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: 161,
    FINGERPRINTS_COMPARISON_MISMATCH: 170,
    HOLO_PHOTO_FACE_NOT_DETECTED: 180,
    HOLO_PHOTO_FACE_COMPARISON_FAILED: 181,
    HOLO_PHOTO_FACE_GLARE_IN_CENTER_ABSENT: 182,
    HOLO_ELEMENT_SHAPE_ERROR: 183,
    ALGORITHM_STEPS_ERROR: 184,
    HOLO_AREAS_NOT_LOADED: 185,
    FINISHED_BY_TIMEOUT: 186,
    HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME: 187,
    LIVENESS_DEPTH_CHECK_FAILED: 190,
    MRZ_QUALITY_WRONG_SYMBOL_POSITION: 200,
    MRZ_QUALITY_WRONG_BACKGROUND: 201,
    MRZ_QUALITY_WRONG_MRZ_WIDTH: 202,
    MRZ_QUALITY_WRONG_MRZ_HEIGHT: 203,
    MRZ_QUALITY_WRONG_LINE_POSITION: 204,
    MRZ_QUALITY_WRONG_FONT_TYPE: 205,
    OCR_QUALITY_TEXT_POSITION: 220,
    OCR_QUALITY_INVALID_FONT: 221,
    OCR_QUALITY_INVALID_BACKGROUND: 222,
    LAS_INK_INVALID_LINES_FREQUENCY: 230,
    DOC_LIVENESS_DOCUMENT_NOT_LIVE: 238,
    CHD_DOC_LIVENESS_BLACK_AND_WHITE_COPY_DETECTED: 239,
    DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED: 240,
    DOC_LIVENESS_INVALID_BARCODE_BACKGROUND: 241,
    ICAO_IDB_BASE_32_ERROR: 243,
    ICAO_IDB_ZIPPED_ERROR: 244,
    ICAO_IDB_MESSAGE_ZONE_EMPTY: 245,
    ICAO_IDB_SIGNATURE_MUST_BE_PRESENT: 246,
    ICAO_IDB_SIGNATURE_MUST_NOT_BE_PRESENT: 247,
    ICAO_IDB_CERTIFICATE_MUST_NOT_BE_PRESENT: 248,
    INCORRECT_OBJECT_COLOR: 250
}


/***/ }),

/***/ "./src/results/authenticity/SecurityFeatureType.js":
/*!*********************************************************!*\
  !*** ./src/results/authenticity/SecurityFeatureType.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityFeatureType: () => (/* binding */ SecurityFeatureType)
/* harmony export */ });
const SecurityFeatureType = {
    NONE: -1,
    BLANK: 0,
    FILL: 1,
    PHOTO: 2,
    MRZ: 3,
    FALSE_LUMINESCENCE: 4,
    HOLO_SIMPLE: 5,
    HOLO_VERIFY_STATIC: 6,
    HOLO_VERIFY_MULTI_STATIC: 7,
    HOLO_VERIFY_DINAMIC: 8,
    PATTERN_NOT_INTERRUPTED: 9,
    PATTERN_NOT_SHIFTED: 10,
    PATTERN_SAME_COLORS: 11,
    PATTERN_IR_INVISIBLE: 12,
    PHOTO_SIZE_CHECK: 13,
    PORTRAIT_COMPARISON_VS_GHOST: 14,
    PORTRAIT_COMPARISON_VS_RFID: 15,
    PORTRAIT_COMPARISON_VS_VISUAL: 16,
    BARCODE: 17,
    PATTERN_DIFFERENT_LINES_THICKNESS: 18,
    PORTRAIT_COMPARISON_VS_CAMERA: 19,
    PORTRAIT_COMPARISON_RFID_VS_CAMERA: 20,
    GHOST_PHOTO: 21,
    CLEAR_GHOST_PHOTO: 22,
    INVISIBLE_OBJECT: 23,
    LOW_CONTRAST_OBJECT: 24,
    PHOTO_COLOR: 25,
    PHOTO_SHAPE: 26,
    PHOTO_CORNERS: 27,
    DOCUMENT_CANCELLING_DETECTOR: 28,
    OCR: 28,
    PORTRAIT_COMPARISON_EXTVS_VISUAL: 29,
    PORTRAIT_COMPARISON_EXTVS_RFID: 30,
    PORTRAIT_COMPARISON_EXTVS_LIVE: 31,
    LIVENESS_DEPTH: 32,
    MICROTEXT: 33,
    FLUORESCENT_OBJECT: 34,
    LANDMARKS_CHECK: 35,
    FACE_PRESENCE: 36,
    FACE_ABSENCE: 38,
    LIVENESS_SCREEN_CAPTURE: 39,
    LIVENESS_ELECTRONIC_DEVICE: 40,
    LIVENESS_OVI: 41,
    BARCODE_SIZE_CHECK: 42,
    LAS_INK: 43,
    LIVENESS_MLI: 44,
    LIVENESS_BARCODE_BACKGROUND: 45,
    PORTRAIT_COMPARISON_VS_BARCODE: 46,
    PORTRAIT_COMPARISON_RFID_VS_BARCODE: 47,
    PORTRAIT_COMPARISON_EXT_VS_BARCODE: 48,
    PORTRAIT_COMPARISON_BARCODE_VS_CAMERA: 49,
    CHECK_DIGITAL_SIGNATURE: 50,
    CONTACT_CHIP_CLASSIFICATION: 51,
    HEAD_POSITION_CHECK: 52,
    LIVENESS_BLACK_AND_WHITE_COPY_CHECK: 53,
    LIVENESS_DYNAPRINT: 54,
    LIVENESS_GEOMETRY_CHECK: 55
}


/***/ }),

/***/ "./src/results/barcode/BarcodeField.js":
/*!*********************************************!*\
  !*** ./src/results/barcode/BarcodeField.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeField: () => (/* binding */ BarcodeField)
/* harmony export */ });
/* harmony import */ var _BarcodeStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeStatus */ "./src/results/barcode/BarcodeStatus.js");
/* harmony import */ var _BarcodeType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarcodeType */ "./src/results/barcode/BarcodeType.js");
/* harmony import */ var _PDF417Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PDF417Info */ "./src/results/barcode/PDF417Info.js");




class BarcodeField {
    barcodeType
    status
    pdf417Info
    data
    pageIndex

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BarcodeField();
        result.barcodeType = jsonObject["barcodeType"];
        result.status = jsonObject["status"];
        result.pageIndex = jsonObject["pageIndex"];
        result.pdf417Info = _PDF417Info__WEBPACK_IMPORTED_MODULE_2__.PDF417Info.fromJson(jsonObject["pdf417Info"]);
        result.data = jsonObject["data"];
        
        return result;
    }

    toJson() {
        return {
            "barcodeType": this.barcodeType,
            "status": this.status,
            "pdf417Info": this.pdf417Info?.toJson(),
            "data": this.data,
            "pageIndex": this.pageIndex,
        }
    }
}


/***/ }),

/***/ "./src/results/barcode/BarcodeResult.js":
/*!**********************************************!*\
  !*** ./src/results/barcode/BarcodeResult.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeResult: () => (/* binding */ BarcodeResult)
/* harmony export */ });
/* harmony import */ var _BarcodeField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarcodeField */ "./src/results/barcode/BarcodeField.js");


class BarcodeResult {
    constructor() {
        this.fields = [];
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BarcodeResult();
        
        if (jsonObject["fields"] != null) {
            for (const item of jsonObject["fields"]) {
                const field = _BarcodeField__WEBPACK_IMPORTED_MODULE_0__.BarcodeField.fromJson(item);
                if (field != null) {
                    result.fields.push(field);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "fields": this.fields?.map(e => e.toJson()),
        }
    }
}


/***/ }),

/***/ "./src/results/barcode/BarcodeStatus.js":
/*!**********************************************!*\
  !*** ./src/results/barcode/BarcodeStatus.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeStatus: () => (/* binding */ BarcodeStatus)
/* harmony export */ });
const BarcodeStatus = {
    NO_ERR: 0,
    INVALID_RESULT: 140,
    NULL_PTR_ERR: -6001,
    BAD_ARG_ERR: -6002,
    SIZE_ERR: -6003,
    RANGE_ERR: -6004,
    INTERNAL_ERR: -6005,
    TRY_EXCEPT_ERR: -6006,
    BAR_CODE_NOT_FOUND: -6008,
    BAR_CODE_DECODE_ERR: -6010,
    NO_USER_DLL_FOUND: -6019,
    NO_IPP_DLL_FOUND: -6020,
    IPP_EXEC_ERR: -6024,
    IPP_TRY_EXCEPT_ERR: -6025,
    BARCODE_ERROR_INPUT_PARAM: -11001,
    BARCODE_ERROR_FINIT: -11006,
    BARCODE_ERROR_NOT_LOAD_IP_DECODED_LL: -11012,
    BARCODE_ERROR_INNER_PROBLEM: -11100,
    BARCODE_ERROR_DECODE_1D_BAD_DECODE: -11200,
    BARCODE_ERROR_FIND_ROW_OR_COLUMN: -11201,
    BARCODE_ERROR_FIND_3X8_2D_X: -11202,
    BARCODE_ERROR_FIND_3X8_2D_Y: -11203,
    BARCODE_ERROR_2D_UGOL_MAX: -11204,
    BARCODE_ERROR_INDEFINITELY_DECODED: -11210,
    BARCODE_ERROR_DLL_NOT_INIT: -11300,
    BARCODE_ERROR_IP_DECODE_DLL_Try_Except: -11400,
    IPDECODE_ERROR_LARGEERRORS: -4503,
    IPDECODE_ERROR_FAULTCOLUMNS: -4504,
    IPDECODE_ERROR_FAULTROWS: -4505,
    IPDECODE_ERROR_INCORRECT_ERROR_LEVEL: -4511,
    IPDECODE_ERROR_LOADING_DEV_TABLE: -4512
}


/***/ }),

/***/ "./src/results/barcode/BarcodeType.js":
/*!********************************************!*\
  !*** ./src/results/barcode/BarcodeType.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeType: () => (/* binding */ BarcodeType)
/* harmony export */ });
const BarcodeType = {
    BCT_CODE128: 1,
    CODE39: 2,
    EAN8: 3,
    ITF: 4,
    PDF417: 5,
    STF: 6,
    MTF: 7,
    IATA: 8,
    CODABAR: 9,
    UPCA: 10,
    CODE93: 11,
    UPCE: 12,
    EAN13: 13,
    QRCODE: 14,
    AZTEC: 15,
    DATAMATRIX: 16,
    ALL_1D: 17,
    CODE11: 18,
    JABCODE: 19
}


/***/ }),

/***/ "./src/results/barcode/PDF417Info.js":
/*!*******************************************!*\
  !*** ./src/results/barcode/PDF417Info.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PDF417Info: () => (/* binding */ PDF417Info)
/* harmony export */ });
class PDF417Info {
    errorLevel
    columns
    rows

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new PDF417Info();
        result.errorLevel = jsonObject["errorLevel"];
        result.columns = jsonObject["columns"];
        result.rows = jsonObject["rows"];
        
        return result;
    }

    toJson() {
        return {
            "errorLevel": this.errorLevel,
            "columns": this.columns,
            "rows": this.rows,
        }
    }
}


/***/ }),

/***/ "./src/results/image_quality/ImageQuality.js":
/*!***************************************************!*\
  !*** ./src/results/image_quality/ImageQuality.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQuality: () => (/* binding */ ImageQuality)
/* harmony export */ });
/* harmony import */ var _status_CheckResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/CheckResult */ "./src/results/status/CheckResult.js");
/* harmony import */ var _visual_results_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visual_results/Rect */ "./src/results/visual_results/Rect.js");
/* harmony import */ var _ImageQualityCheckType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageQualityCheckType */ "./src/results/image_quality/ImageQualityCheckType.js");




class ImageQuality {
    featureType
    result
    type
    boundRects

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ImageQuality();
        result.featureType = jsonObject["featureType"];
        result.result = jsonObject["result"];
        result.type = jsonObject["type"];
        
        if (jsonObject["boundRects"] != null) {
            result.boundRects = [];
            for (const item of jsonObject["boundRects"]) {
                const rect = _visual_results_Rect__WEBPACK_IMPORTED_MODULE_1__.Rect.fromJson(item);
                if (rect != null) {
                    result.boundRects.push(rect);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "featureType": this.featureType,
            "result": this.result,
            "type": this.type,
            "boundRects": this.boundRects?.map(e => e.toJson()),
        }
    }
}


/***/ }),

/***/ "./src/results/image_quality/ImageQualityCheckType.js":
/*!************************************************************!*\
  !*** ./src/results/image_quality/ImageQualityCheckType.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQualityCheckType: () => (/* binding */ ImageQualityCheckType)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");


const ImageQualityCheckType = {
    IMAGE_GLARES: 0,
    IMAGE_FOCUS: 1,
    IMAGE_RESOLUTION: 2,
    IMAGE_COLORNESS: 3,
    PERSPECTIVE: 4,
    BOUNDS: 5,
    SCREEN_CAPTURE: 6,
    PORTRAIT: 7,
    HANDWRITTEN: 8,
    BRIGHTNESS: 9,
    OCCLUSION: 10
}

ImageQualityCheckType.getTranslation = async function (value) {
    return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTranslation", ["ImageQualityCheckType", value]);
}


/***/ }),

/***/ "./src/results/image_quality/ImageQualityGroup.js":
/*!********************************************************!*\
  !*** ./src/results/image_quality/ImageQualityGroup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQualityGroup: () => (/* binding */ ImageQualityGroup)
/* harmony export */ });
/* harmony import */ var _status_CheckResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/CheckResult */ "./src/results/status/CheckResult.js");
/* harmony import */ var _ImageQuality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageQuality */ "./src/results/image_quality/ImageQuality.js");



class ImageQualityGroup {
    count
    result
    imageQualityList
    pageIndex

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ImageQualityGroup();
        result.count = jsonObject["count"];
        result.result = jsonObject["result"];
        result.pageIndex = jsonObject["pageIndex"];
        
        if (jsonObject["imageQualityList"] != null) {
            result.imageQualityList = [];
            for (const item of jsonObject["imageQualityList"]) {
                const imageQuality = _ImageQuality__WEBPACK_IMPORTED_MODULE_1__.ImageQuality.fromJson(item);
                if (imageQuality != null) {
                    result.imageQualityList.push(imageQuality);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "count": this.count,
            "result": this.result,
            "pageIndex": this.pageIndex,
            "imageQualityList": this.imageQualityList?.map(e => e.toJson()),
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/AccessControlProcedureType.js":
/*!********************************************************!*\
  !*** ./src/results/rfid/AccessControlProcedureType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessControlProcedureType: () => (/* binding */ AccessControlProcedureType)
/* harmony export */ });
/* harmony import */ var _rfid_RFIDErrorCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rfid/RFIDErrorCodes */ "./src/rfid/RFIDErrorCodes.js");
/* harmony import */ var _RFIDAccessControlProcedureType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RFIDAccessControlProcedureType */ "./src/results/rfid/RFIDAccessControlProcedureType.js");



class AccessControlProcedureType {
    activeOptionIdx
    notifications
    status
    type

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new AccessControlProcedureType();
        result.activeOptionIdx = jsonObject["activeOptionIdx"];
        result.status = jsonObject["status"];
        result.type = jsonObject["type"];
        result.notifications = jsonObject["notifications"];
        
        return result;
    }

    toJson() {
        return {
            "activeOptionIdx": this.activeOptionIdx,
            "notifications": this.notifications,
            "status": this.status,
            "type": this.type,
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/Application.js":
/*!*****************************************!*\
  !*** ./src/results/rfid/Application.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Application: () => (/* binding */ Application),
/* harmony export */   RFIDApplicationType: () => (/* binding */ RFIDApplicationType)
/* harmony export */ });
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File */ "./src/results/rfid/File.js");
/* harmony import */ var _rfid_RFIDErrorCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rfid/RFIDErrorCodes */ "./src/rfid/RFIDErrorCodes.js");



class Application {
    applicationID
    dataHashAlgorithm
    files
    status
    type
    unicodeVersion
    version

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Application();
        result.applicationID = jsonObject["applicationID"];
        result.dataHashAlgorithm = jsonObject["dataHashAlgorithm"];
        result.status = jsonObject["status"];
        result.type = jsonObject["type"];
        result.unicodeVersion = jsonObject["unicodeVersion"];
        result.version = jsonObject["version"];
        
        if (jsonObject["files"] != null) {
            result.files = [];
            for (const item of jsonObject["files"]) {
                const file = _File__WEBPACK_IMPORTED_MODULE_0__.File.fromJson(item);
                if (file != null) {
                    result.files.push(file);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "applicationID": this.applicationID,
            "dataHashAlgorithm": this.dataHashAlgorithm,
            "files": this.files?.map(e => e.toJson()),
            "status": this.status,
            "type": this.type,
            "unicodeVersion": this.unicodeVersion,
            "version": this.version,
        }
    }
}

const RFIDApplicationType = {
    E_PASSPORT: 1,
    E_ID: 2,
    E_SIGN: 3,
    E_DL: 4,
    LDS2_TRAVEL_RECORDS: 5,
    LDS2_VISA_RECORDS: 6,
    LDS2_ADD_BIOMETRICS: 7,
    E_DTC_PC: 8
}


/***/ }),

/***/ "./src/results/rfid/Attribute.js":
/*!***************************************!*\
  !*** ./src/results/rfid/Attribute.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attribute: () => (/* binding */ Attribute)
/* harmony export */ });
/* harmony import */ var _RFIDValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RFIDValue */ "./src/results/rfid/RFIDValue.js");


class Attribute {
    type
    value

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Attribute();
        result.type = jsonObject["type"];
        result.value = _RFIDValue__WEBPACK_IMPORTED_MODULE_0__.RFIDValue.fromJson(jsonObject["value"]);
        
        return result;
    }

    toJson() {
        return {
            "type": this.type,
            "value": this.value?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/Authority.js":
/*!***************************************!*\
  !*** ./src/results/rfid/Authority.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Authority: () => (/* binding */ Authority)
/* harmony export */ });
/* harmony import */ var _Attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attribute */ "./src/results/rfid/Attribute.js");
/* harmony import */ var _RFIDValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RFIDValue */ "./src/results/rfid/RFIDValue.js");



class Authority {
    attributes
    data
    friendlyName

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Authority();
        result.data = jsonObject["data"];
        result.friendlyName = _RFIDValue__WEBPACK_IMPORTED_MODULE_1__.RFIDValue.fromJson(jsonObject["friendlyName"]);
        
        if (jsonObject["attributes"] != null) {
            result.attributes = [];
            for (const item of jsonObject["attributes"]) {
                const attribute = _Attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute.fromJson(item);
                if (attribute != null) {
                    result.attributes.push(attribute);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "attributes": this.attributes?.map(e => e.toJson()),
            "data": this.data,
            "friendlyName": this.friendlyName?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/CardProperties.js":
/*!********************************************!*\
  !*** ./src/results/rfid/CardProperties.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardProperties: () => (/* binding */ CardProperties)
/* harmony export */ });
class CardProperties {
    aTQA
    aTQB
    aTR
    baudrate1
    baudrate2
    bitRateR
    bitRateS
    chipTypeA
    mifareMemory
    rfidType
    sAK
    support4
    supportMifare
    uID

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CardProperties();
        result.aTQA = jsonObject["aTQA"];
        result.aTQB = jsonObject["aTQB"];
        result.aTR = jsonObject["aTR"];
        result.baudrate1 = jsonObject["baudrate1"];
        result.baudrate2 = jsonObject["baudrate2"];
        result.bitRateR = jsonObject["bitRateR"];
        result.bitRateS = jsonObject["bitRateS"];
        result.chipTypeA = jsonObject["chipTypeA"];
        result.mifareMemory = jsonObject["mifareMemory"];
        result.rfidType = jsonObject["rfidType"];
        result.sAK = jsonObject["sAK"];
        result.support4 = jsonObject["support4"];
        result.supportMifare = jsonObject["supportMifare"];
        result.uID = jsonObject["uID"];
        
        return result;
    }

    toJson() {
        return {
            "aTQA": this.aTQA,
            "bitRateR": this.bitRateR,
            "bitRateS": this.bitRateS,
            "chipTypeA": this.chipTypeA,
            "mifareMemory": this.mifareMemory,
            "rfidType": this.rfidType,
            "sAK": this.sAK,
            "support4": this.support4,
            "supportMifare": this.supportMifare,
            "aTQB": this.aTQB,
            "aTR": this.aTR,
            "baudrate1": this.baudrate1,
            "baudrate2": this.baudrate2,
            "uID": this.uID,
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/CertificateChain.js":
/*!**********************************************!*\
  !*** ./src/results/rfid/CertificateChain.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateChain: () => (/* binding */ CertificateChain)
/* harmony export */ });
/* harmony import */ var _Authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authority */ "./src/results/rfid/Authority.js");
/* harmony import */ var _Extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Extension */ "./src/results/rfid/Extension.js");
/* harmony import */ var _RFIDCertificateType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RFIDCertificateType */ "./src/results/rfid/RFIDCertificateType.js");
/* harmony import */ var _RFIDValidity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RFIDValidity */ "./src/results/rfid/RFIDValidity.js");
/* harmony import */ var _RFIDValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RFIDValue */ "./src/results/rfid/RFIDValue.js");






class CertificateChain {
    type
    extensions
    fileName
    issuer
    notifications
    origin
    paStatus
    serialNumber
    signatureAlgorithm
    subject
    subjectPKAlgorithm
    validity
    version

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CertificateChain();
        result.type = jsonObject["type"];
        result.origin = jsonObject["origin"];
        result.paStatus = jsonObject["paStatus"];
        result.version = jsonObject["version"];
        result.serialNumber = jsonObject["serialNumber"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.subjectPKAlgorithm = jsonObject["subjectPKAlgorithm"];
        result.fileName = _RFIDValue__WEBPACK_IMPORTED_MODULE_4__.RFIDValue.fromJson(jsonObject["fileName"]);
        result.issuer = _Authority__WEBPACK_IMPORTED_MODULE_0__.Authority.fromJson(jsonObject["issuer"]);
        result.subject = _Authority__WEBPACK_IMPORTED_MODULE_0__.Authority.fromJson(jsonObject["subject"]);
        result.validity = _RFIDValidity__WEBPACK_IMPORTED_MODULE_3__.RFIDValidity.fromJson(jsonObject["validity"]);
        result.notifications = jsonObject["notifications"];
        
        if (jsonObject["extensions"] != null) {
            result.extensions = [];
            for (const item of jsonObject["extensions"]) {
                const extension = _Extension__WEBPACK_IMPORTED_MODULE_1__.Extension.fromJson(item);
                if (extension != null) {
                    result.extensions.push(extension);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "type": this.type,
            "extensions": this.extensions?.map(e => e.toJson()),
            "fileName": this.fileName?.toJson(),
            "issuer": this.issuer?.toJson(),
            "notifications": this.notifications,
            "origin": this.origin,
            "paStatus": this.paStatus,
            "serialNumber": this.serialNumber,
            "signatureAlgorithm": this.signatureAlgorithm,
            "subject": this.subject?.toJson(),
            "subjectPKAlgorithm": this.subjectPKAlgorithm,
            "validity": this.validity?.toJson(),
            "version": this.version,
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/CertificateData.js":
/*!*********************************************!*\
  !*** ./src/results/rfid/CertificateData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateData: () => (/* binding */ CertificateData)
/* harmony export */ });
class CertificateData {
    data
    length

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CertificateData();
        result.data = jsonObject["data"];
        result.length = jsonObject["length"];
        
        return result;
    }

    toJson() {
        return {
            "data": this.data,
            "length": this.length,
        }
    }
} 

/***/ }),

/***/ "./src/results/rfid/DataField.js":
/*!***************************************!*\
  !*** ./src/results/rfid/DataField.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataField: () => (/* binding */ DataField)
/* harmony export */ });
/* harmony import */ var _RFIDDataFileType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RFIDDataFileType */ "./src/results/rfid/RFIDDataFileType.js");


class DataField {
    data
    fieldType

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new DataField();
        result.data = jsonObject["data"] ?? "";
        result.fieldType = jsonObject["fieldType"] ?? _RFIDDataFileType__WEBPACK_IMPORTED_MODULE_0__.RFIDDataFileType.UNSPECIFIED;
        
        return result;
    }
    
    toJson() {
        return {
            "data": this.data,
            "fieldType": this.fieldType,
        }
    }
} 

/***/ }),

/***/ "./src/results/rfid/Extension.js":
/*!***************************************!*\
  !*** ./src/results/rfid/Extension.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Extension: () => (/* binding */ Extension)
/* harmony export */ });
class Extension {
    data
    type

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Extension();
        result.data = jsonObject["data"];
        result.type = jsonObject["type"];
        
        return result;
    }

    toJson() {
        return {
            "data": this.data,
            "type": this.type,
        }
    }
} 

/***/ }),

/***/ "./src/results/rfid/File.js":
/*!**********************************!*\
  !*** ./src/results/rfid/File.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _FileData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileData */ "./src/results/rfid/FileData.js");
/* harmony import */ var _RFIDDataFileType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RFIDDataFileType */ "./src/results/rfid/RFIDDataFileType.js");
/* harmony import */ var _rfid_RFIDErrorCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rfid/RFIDErrorCodes */ "./src/rfid/RFIDErrorCodes.js");
/* harmony import */ var _SecurityObjectCertificates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecurityObjectCertificates */ "./src/results/rfid/SecurityObjectCertificates.js");





class File {
    fileData
    fileID
    notifications
    pAStatus
    readingStatus
    readingTime
    type
    typeName
    docFieldsText
    docFieldsGraphics
    docFieldsOriginals
    certificates

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new File();
        result.readingTime = jsonObject["readingTime"];
        result.type = jsonObject["type"];
        result.typeName = jsonObject["typeName"];
        result.pAStatus = jsonObject["pAStatus"];
        result.readingStatus = jsonObject["readingStatus"];
        result.fileID = jsonObject["fileID"];
        result.fileData = _FileData__WEBPACK_IMPORTED_MODULE_0__.FileData.fromJson(jsonObject["fileData"]);
        result.certificates = _SecurityObjectCertificates__WEBPACK_IMPORTED_MODULE_3__.SecurityObjectCertificates.fromJson(jsonObject["certificates"]);
        result.notifications = jsonObject["notifications"];
        result.docFieldsText = jsonObject["docFieldsText"];
        result.docFieldsGraphics = jsonObject["docFieldsGraphics"];
        result.docFieldsOriginals = jsonObject["docFieldsOriginals"];
        
        return result;
    }

    toJson() {
        return {
            "fileData": this.fileData?.toJson(),
            "fileID": this.fileID,
            "notifications": this.notifications,
            "pAStatus": this.pAStatus,
            "readingStatus": this.readingStatus,
            "readingTime": this.readingTime,
            "type": this.type,
            "typeName": this.typeName,
            "docFieldsText": this.docFieldsText,
            "docFieldsGraphics": this.docFieldsGraphics,
            "docFieldsOriginals": this.docFieldsOriginals,
            "certificates": this.certificates?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/FileData.js":
/*!**************************************!*\
  !*** ./src/results/rfid/FileData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileData: () => (/* binding */ FileData)
/* harmony export */ });
class FileData {
    data
    length
    type
    status

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new FileData();
        result.data = jsonObject["data"];
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        
        return result;
    }

    toJson() {
        return {
            "data": this.data,
            "length": this.length,
            "type": this.type,
            "status": this.status,
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/RFIDAccessControlProcedureType.js":
/*!************************************************************!*\
  !*** ./src/results/rfid/RFIDAccessControlProcedureType.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDAccessControlProcedureType: () => (/* binding */ RFIDAccessControlProcedureType)
/* harmony export */ });
const RFIDAccessControlProcedureType = {
  UNDEFINED: 0,
  BAC: 1,
  PACE: 2,
  CA: 3,
  TA: 4,
  AA: 5,
  RI: 6,
  CARD_INFO: 10
};


/***/ }),

/***/ "./src/results/rfid/RFIDCertificateType.js":
/*!*************************************************!*\
  !*** ./src/results/rfid/RFIDCertificateType.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDCertificateType: () => (/* binding */ RFIDCertificateType)
/* harmony export */ });
const RFIDCertificateType = {
  UNDEFINED: 0,
  CSCA: 1,
  CSCA_LINK: 2,
  DS: 3,
  MLS: 4,
  DEV_LS: 5,
  DEF_LS: 6,
  BLS: 7,
  LDS2: 8,
  BCS: 9,
  BCSNC: 10
};


/***/ }),

/***/ "./src/results/rfid/RFIDDataFileType.js":
/*!**********************************************!*\
  !*** ./src/results/rfid/RFIDDataFileType.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDDataFileType: () => (/* binding */ RFIDDataFileType)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");


const RFIDDataFileType = {
  UNSPECIFIED: 0,
  PASSPORT_DG1: 1,
  PASSPORT_DG2: 2,
  PASSPORT_DG3: 3,
  PASSPORT_DG4: 4,
  PASSPORT_DG5: 5,
  PASSPORT_DG6: 6,
  PASSPORT_DG7: 7,
  PASSPORT_DG8: 8,
  PASSPORT_DG9: 9,
  PASSPORT_DG10: 10,
  PASSPORT_DG11: 11,
  PASSPORT_DG12: 12,
  PASSPORT_DG13: 13,
  PASSPORT_DG14: 14,
  PASSPORT_DG15: 15,
  PASSPORT_DG16: 16,
  PASSPORT_DG17: 17,
  PASSPORT_DG18: 18,
  PASSPORT_DG19: 19,
  PASSPORT_DG20: 20,
  PASSPORT_SOD: 21,
  PASSPORT_CVCA: 22,
  PASSPORT_COM: 23,
  DTC_DG17: 57,
  DTC_DG18: 58,
  DTC_DG22: 62,
  DTC_DG23: 63,
  DTC_DG24: 64,
  ID_DG1: 101,
  ID_DG2: 102,
  ID_DG3: 103,
  ID_DG4: 104,
  ID_DG5: 105,
  ID_DG6: 106,
  ID_DG7: 107,
  ID_DG8: 108,
  ID_DG9: 109,
  ID_DG10: 110,
  ID_DG11: 111,
  ID_DG12: 112,
  ID_DG13: 113,
  ID_DG14: 114,
  ID_DG15: 115,
  ID_DG16: 116,
  ID_DG17: 117,
  ID_DG18: 118,
  ID_DG19: 119,
  ID_DG20: 120,
  ID_DG21: 121,
  DL_COM: 150,
  DL_DG1: 151,
  DL_DG2: 152,
  DL_DG3: 153,
  DL_DG4: 154,
  DL_DG5: 155,
  DL_DG6: 156,
  DL_DG7: 157,
  DL_DG8: 158,
  DL_DG9: 159,
  DL_DG10: 160,
  DL_DG11: 161,
  DL_DG12: 162,
  DL_DG13: 163,
  DL_DG14: 164,
  DL_SOD: 165,
  DL_CE: 166,
  DL_CVCA: 167,
  PACE_CARDACCESS: 200,
  PACE_CARDSECURITY: 201,
  PACE_CHIPSECURITY: 202,
  MIFARE_DATA: 300,
  MIFARE_VALIDITY: 301,
  AUTHENTICITYV2: 302,
  ATR: 400,
  ESIGN_PK: 500,
  ESIGN_SIGNEDDATA: 501,
  CERTIFICATE: 600,
  MASTERLIST: 601,
  DEFECTLIST: 602,
  DEVIATIONLIST: 603,
  APP_DIRECTORY: 700,
  SESSION: 701,
  LOGDATA: 702,
  CHIP_PROPERTIES: 703,
  SAM_DATA: 800,
  SAM_DATA_MAX: 832,
  VDS: 900,
  VDSNC: 901,
  USERDEFINED: 1000
};

RFIDDataFileType.getTranslation = async function (value) {
  return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTranslation", ["RFIDDataFileType", value]);
}


/***/ }),

/***/ "./src/results/rfid/RFIDSessionData.js":
/*!*********************************************!*\
  !*** ./src/results/rfid/RFIDSessionData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDSessionData: () => (/* binding */ RFIDSessionData)
/* harmony export */ });
/* harmony import */ var _AccessControlProcedureType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessControlProcedureType */ "./src/results/rfid/AccessControlProcedureType.js");
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application */ "./src/results/rfid/Application.js");
/* harmony import */ var _SecurityObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecurityObject */ "./src/results/rfid/SecurityObject.js");
/* harmony import */ var _CardProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardProperties */ "./src/results/rfid/CardProperties.js");
/* harmony import */ var _rfid_RFIDErrorCodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rfid/RFIDErrorCodes */ "./src/rfid/RFIDErrorCodes.js");
/* harmony import */ var _DataField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataField */ "./src/results/rfid/DataField.js");
/* harmony import */ var _RFIDDataFileType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RFIDDataFileType */ "./src/results/rfid/RFIDDataFileType.js");








class RFIDSessionData {
    accessControls
    applications
    securityObjects
    cardProperties
    totalBytesReceived
    totalBytesSent
    status
    extLeSupport
    processTime
    dataFields
    dataGroups

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDSessionData();
        result.totalBytesReceived = jsonObject["totalBytesReceived"];
        result.totalBytesSent = jsonObject["totalBytesSent"];
        result.status = jsonObject["status"];
        result.extLeSupport = jsonObject["extLeSupport"];
        result.processTime = jsonObject["processTime"];
        result.cardProperties = _CardProperties__WEBPACK_IMPORTED_MODULE_3__.CardProperties.fromJson(jsonObject["cardProperties"]);
        result.dataGroups = jsonObject["dataGroups"];

        if (jsonObject["accessControls"]) {
            result.accessControls = [];
            for (const item of jsonObject["accessControls"]) {
                const accessControl = _AccessControlProcedureType__WEBPACK_IMPORTED_MODULE_0__.AccessControlProcedureType.fromJson(item);
                if (accessControl) {
                    result.accessControls.push(accessControl);
                }
            }
        }

        if (jsonObject["applications"]) {
            result.applications = [];
            for (const item of jsonObject["applications"]) {
                const application = _Application__WEBPACK_IMPORTED_MODULE_1__.Application.fromJson(item);
                if (application) {
                    result.applications.push(application);
                }
            }
        }

        if (jsonObject["securityObjects"]) {
            result.securityObjects = [];
            for (const item of jsonObject["securityObjects"]) {
                const securityObject = _SecurityObject__WEBPACK_IMPORTED_MODULE_2__.SecurityObject.fromJson(item);
                if (securityObject) {
                    result.securityObjects.push(securityObject);
                }
            }
        }

        if (jsonObject["dataFields"]) {
            result.dataFields = [];
            for (const item of jsonObject["dataFields"]) {
                const dataField = _DataField__WEBPACK_IMPORTED_MODULE_5__.DataField.fromJson(item);
                if (dataField) {
                    result.dataFields.push(dataField);
                }
            }
        }

        return result;
    }

    toJson() {
        return {
            "cardProperties": this.cardProperties?.toJson(),
            "totalBytesReceived": this.totalBytesReceived,
            "totalBytesSent": this.totalBytesSent,
            "status": this.status,
            "extLeSupport": this.extLeSupport,
            "processTime": this.processTime,
            "accessControls": this.accessControls?.map(e => e.toJson()),
            "applications": this.applications?.map(e => e.toJson()),
            "securityObjects": this.securityObjects?.map(e => e.toJson()),
            "dataFields": this.dataFields?.map(e => e.toJson()),
            "dataGroups": this.dataGroups,
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/RFIDValidity.js":
/*!******************************************!*\
  !*** ./src/results/rfid/RFIDValidity.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDValidity: () => (/* binding */ RFIDValidity)
/* harmony export */ });
/* harmony import */ var _RFIDValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RFIDValue */ "./src/results/rfid/RFIDValue.js");


class RFIDValidity {
    notAfter
    notBefore

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDValidity();
        result.notAfter = _RFIDValue__WEBPACK_IMPORTED_MODULE_0__.RFIDValue.fromJson(jsonObject["notAfter"]);
        result.notBefore = _RFIDValue__WEBPACK_IMPORTED_MODULE_0__.RFIDValue.fromJson(jsonObject["notBefore"]);

        return result;
    }

    toJson() {
        return {
            "notAfter": this.notAfter?.toJson(),
            "notBefore": this.notBefore?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/RFIDValue.js":
/*!***************************************!*\
  !*** ./src/results/rfid/RFIDValue.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDValue: () => (/* binding */ RFIDValue)
/* harmony export */ });
class RFIDValue {
    data
    length
    status
    type
    format

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDValue();
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.data = jsonObject["data"];
        result.format = jsonObject["format"];
        
        return result;
    }

    toJson() {
        return {
            "data": this.data,
            "length": this.length,
            "status": this.status,
            "type": this.type,
            "format": this.format,
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/SecurityObject.js":
/*!********************************************!*\
  !*** ./src/results/rfid/SecurityObject.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityObject: () => (/* binding */ SecurityObject)
/* harmony export */ });
/* harmony import */ var _SignerInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignerInfo */ "./src/results/rfid/SignerInfo.js");


class SecurityObject {
    fileReference
    objectType
    version
    signerInfos
    notifications

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new SecurityObject();
        result.fileReference = jsonObject["fileReference"];
        result.version = jsonObject["version"];
        result.objectType = jsonObject["objectType"];
        result.notifications = jsonObject["notifications"];

        if (jsonObject["signerInfos"]) {
            result.signerInfos = [];
            for (const item of jsonObject["signerInfos"]) {
                const signerInfo = _SignerInfo__WEBPACK_IMPORTED_MODULE_0__.SignerInfo.fromJson(item);
                if (signerInfo) {
                    result.signerInfos.push(signerInfo);
                }
            }
        }

        return result;
    }

    toJson() {
        return {
            "fileReference": this.fileReference,
            "objectType": this.objectType,
            "version": this.version,
            "signerInfos": this.signerInfos?.map(e => e.toJson()),
            "notifications": this.notifications,
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/SecurityObjectCertificates.js":
/*!********************************************************!*\
  !*** ./src/results/rfid/SecurityObjectCertificates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityObjectCertificates: () => (/* binding */ SecurityObjectCertificates)
/* harmony export */ });
/* harmony import */ var _CertificateData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CertificateData */ "./src/results/rfid/CertificateData.js");


class SecurityObjectCertificates {
    securityObject

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new SecurityObjectCertificates();
        result.securityObject = _CertificateData__WEBPACK_IMPORTED_MODULE_0__.CertificateData.fromJson(jsonObject["securityObject"]);
        
        return result;
    }

    toJson() {
        return {
            "securityObject": this.securityObject?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/results/rfid/SignerInfo.js":
/*!****************************************!*\
  !*** ./src/results/rfid/SignerInfo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignerInfo: () => (/* binding */ SignerInfo)
/* harmony export */ });
/* harmony import */ var _Authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authority */ "./src/results/rfid/Authority.js");
/* harmony import */ var _RFIDValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RFIDValue */ "./src/results/rfid/RFIDValue.js");
/* harmony import */ var _Extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Extension */ "./src/results/rfid/Extension.js");
/* harmony import */ var _CertificateChain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CertificateChain */ "./src/results/rfid/CertificateChain.js");





class SignerInfo {
    dataToHash
    digestAlgorithm
    paStatus
    signatureAlgorithm
    version
    issuer
    serialNumber
    signature
    signedAttributes
    subjectKeyIdentifier
    certificateChain
    notifications

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new SignerInfo();
        result.dataToHash = jsonObject["dataToHash"];
        result.digestAlgorithm = jsonObject["digestAlgorithm"];
        result.paStatus = jsonObject["paStatus"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.version = jsonObject["version"];
        result.issuer = _Authority__WEBPACK_IMPORTED_MODULE_0__.Authority.fromJson(jsonObject["issuer"]);
        result.serialNumber = _RFIDValue__WEBPACK_IMPORTED_MODULE_1__.RFIDValue.fromJson(jsonObject["serialNumber"]);
        result.signature = _RFIDValue__WEBPACK_IMPORTED_MODULE_1__.RFIDValue.fromJson(jsonObject["signature"]);
        result.subjectKeyIdentifier = _RFIDValue__WEBPACK_IMPORTED_MODULE_1__.RFIDValue.fromJson(jsonObject["subjectKeyIdentifier"]);
        result.notifications = jsonObject["notifications"];
        
        if (jsonObject["signedAttributes"] != null) {
            result.signedAttributes = [];
            for (const item of jsonObject["signedAttributes"]) {
                const extension = _Extension__WEBPACK_IMPORTED_MODULE_2__.Extension.fromJson(item);
                if (extension != null) {
                    result.signedAttributes.push(extension);
                }
            }
        }
        
        if (jsonObject["certificateChain"] != null) {
            result.certificateChain = [];
            for (const item of jsonObject["certificateChain"]) {
                const certificateChainItem = _CertificateChain__WEBPACK_IMPORTED_MODULE_3__.CertificateChain.fromJson(item);
                if (certificateChainItem != null) {
                    result.certificateChain.push(certificateChainItem);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "dataToHash": this.dataToHash,
            "digestAlgorithm": this.digestAlgorithm,
            "version": this.version,
            "paStatus": this.paStatus,
            "signatureAlgorithm": this.signatureAlgorithm,
            "issuer": this.issuer?.toJson(),
            "serialNumber": this.serialNumber?.toJson(),
            "signature": this.signature?.toJson(),
            "subjectKeyIdentifier": this.subjectKeyIdentifier?.toJson(),
            "signedAttributes": this.signedAttributes?.map(e => e.toJson()),
            "certificateChain": this.certificateChain?.map(e => e.toJson()),
            "notifications": this.notifications,
        }
    }
}


/***/ }),

/***/ "./src/results/status/CheckResult.js":
/*!*******************************************!*\
  !*** ./src/results/status/CheckResult.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckResult: () => (/* binding */ CheckResult)
/* harmony export */ });
const CheckResult = {
    ERROR: 0,
    OK: 1,
    WAS_NOT_DONE: 2
};


/***/ }),

/***/ "./src/results/status/OpticalStatus.js":
/*!*********************************************!*\
  !*** ./src/results/status/OpticalStatus.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpticalStatus: () => (/* binding */ OpticalStatus)
/* harmony export */ });
/* harmony import */ var _CheckResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckResult */ "./src/results/status/CheckResult.js");


class OpticalStatus {
    overallStatus
    mrz
    text
    docType
    security
    imageQA
    expiry
    vds
    pagesCount

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new OpticalStatus();
        result.overallStatus = jsonObject["overallStatus"];
        result.mrz = jsonObject["mrz"];
        result.text = jsonObject["text"];
        result.docType = jsonObject["docType"];
        result.security = jsonObject["security"];
        result.imageQA = jsonObject["imageQA"];
        result.expiry = jsonObject["expiry"];
        result.vds = jsonObject["vds"];
        result.pagesCount = jsonObject["pagesCount"];
        
        return result;
    }

    toJson() {
        return {
            "overallStatus": this.overallStatus,
            "mrz": this.mrz,
            "text": this.text,
            "docType": this.docType,
            "security": this.security,
            "imageQA": this.imageQA,
            "expiry": this.expiry,
            "vds": this.vds,
            "pagesCount": this.pagesCount,
        }
    }
}


/***/ }),

/***/ "./src/results/status/RFIDStatus.js":
/*!******************************************!*\
  !*** ./src/results/status/RFIDStatus.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDStatus: () => (/* binding */ RFIDStatus)
/* harmony export */ });
/* harmony import */ var _CheckResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckResult */ "./src/results/status/CheckResult.js");


class RFIDStatus {
    overallStatus
    pa
    ca
    aa
    ta
    bac
    pace

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDStatus();
        result.pa = jsonObject["pa"];
        result.ca = jsonObject["ca"];
        result.aa = jsonObject["aa"];
        result.ta = jsonObject["ta"];
        result.bac = jsonObject["bac"];
        result.pace = jsonObject["pace"];
        result.overallStatus = jsonObject["overallStatus"];
        
        return result;
    }

    toJson() {
        return {
            "overallStatus": this.overallStatus,
            "pa": this.pa,
            "ca": this.ca,
            "aa": this.aa,
            "ta": this.ta,
            "bac": this.bac,
            "pace": this.pace,
        }
    }
}


/***/ }),

/***/ "./src/results/status/ResultsStatus.js":
/*!*********************************************!*\
  !*** ./src/results/status/ResultsStatus.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultsStatus: () => (/* binding */ ResultsStatus)
/* harmony export */ });
/* harmony import */ var _CheckResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckResult */ "./src/results/status/CheckResult.js");
/* harmony import */ var _OpticalStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpticalStatus */ "./src/results/status/OpticalStatus.js");
/* harmony import */ var _RFIDStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RFIDStatus */ "./src/results/status/RFIDStatus.js");




class ResultsStatus {
    overallStatus
    optical
    detailsOptical
    rfid
    detailsRFID
    portrait
    stopList

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ResultsStatus();
        result.overallStatus = jsonObject["overallStatus"];
        result.optical = jsonObject["optical"];
        result.detailsOptical = _OpticalStatus__WEBPACK_IMPORTED_MODULE_1__.OpticalStatus.fromJson(jsonObject["detailsOptical"]);
        result.rfid = jsonObject["rfid"];
        result.detailsRFID = _RFIDStatus__WEBPACK_IMPORTED_MODULE_2__.RFIDStatus.fromJson(jsonObject["detailsRFID"]);
        result.portrait = jsonObject["portrait"];
        result.stopList = jsonObject["stopList"];
        
        return result;
    }

    toJson() {
        return {
            "overallStatus": this.overallStatus,
            "optical": this.optical,
            "rfid": this.rfid,
            "portrait": this.portrait,
            "stopList": this.stopList,
            "detailsOptical": this.detailsOptical?.toJson(),
            "detailsRFID": this.detailsRFID?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/results/visible_digital_seals/BytesData.js":
/*!********************************************************!*\
  !*** ./src/results/visible_digital_seals/BytesData.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BytesData: () => (/* binding */ BytesData)
/* harmony export */ });
class BytesData {
    data
    length
    status
    type

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BytesData();
        result.data = jsonObject["data"];
        result.length = jsonObject["length"];
        result.status = jsonObject["status"];
        result.type = jsonObject["type"];
        
        return result;
    }

    toJson() {
        return {
            "data": this.data,
            "length": this.length,
            "status": this.status,
            "type": this.type,
        }
    }
}


/***/ }),

/***/ "./src/results/visible_digital_seals/LDSParsingErrorCodes.js":
/*!*******************************************************************!*\
  !*** ./src/results/visible_digital_seals/LDSParsingErrorCodes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LDSParsingErrorCodes: () => (/* binding */ LDSParsingErrorCodes)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");


const LDSParsingErrorCodes = {
    OK: 0x00000001,
    ASN_INCORRECT_DATA: 0x80000001,
    ASN_NOT_ENOUGH_DATA: 0x80000002,
    ASN_CONTENTS_UNEXPECTED_DATA: 0x80000003,
    ASN_SIGNED_DATA_INCORRECT_DATA: 0x80000008,
    ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA: 0x80000009,
    ASN_SIGNED_DATA_VERSION_INCORRECT_DATA: 0x8000000A,
    ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA: 0x80000011,
    ASN_LDS_OBJECT_INCORRECT_DATA: 0x80000013,
    ASN_LDS_OBJECT_VERSION_INCORRECT_DATA: 0x80000014,
    ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA: 0x80000015,
    ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA: 0x80000016,
    ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA: 0x80000012,
    ASN_CERTIFICATE_INCORRECT_DATA: 0x80000017,
    ASN_CERTIFICATE_VERSION_INCORRECT_DATA: 0x80000018,
    ASN_CERTIFICATE_SN_INCORRECT_DATA: 0x80000019,
    ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA: 0x8000001A,
    ASN_CERTIFICATE_ISSUER_INCORRECT_DATA: 0x8000001B,
    ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA: 0x8000001C,
    ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA: 0x8000001D,
    ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA: 0x8000001E,
    ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: 0x8000001F,
    ASN_SIGNER_INFO_INCORRECT_DATA: 0x80000020,
    ASN_SIGNER_INFO_VERSION_INCORRECT_DATA: 0x80000021,
    ASN_SIGNER_INFO_SID_INCORRECT_DATA: 0x80000022,
    ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA: 0x80000023,
    ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA: 0x80000024,
    ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA: 0x80000025,
    ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA: 0x80000026,
    ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA: 0x80000027,
    ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000030,
    ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY: 0x80000031,
    ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000032,
    ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x80000033,
    ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR: 0x80000034,
    ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED: 0x80000036,
    AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE: 0x80000035,
    AUTH_ERROR: 0x80000050,
    AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x80000051,
    AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: 0x80000052,
    AUTH_MESSED_ALGORITHMS: 0x80000053,
    AUTH_PUBLIC_KEY_DATA_INVALID: 0x80000054,
    AUTH_ALGORITHM_PARAMETERS_DATA_INVALID: 0x80000055,
    AUTH_SIGNATURE_DATA_INVALID: 0x80000056,
    AUTH_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000057,
    AUTH_SIGNATURE_DATA_INCORRECT: 0x80000058,
    AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED: 0x80000059,
    AUTH_SIGNATURE_CHECK_FAILED: 0x8000005A,
    DG_WRONG_TAH: 0x80000070,
    DG_CONTENTS_UNEXPECTED_DATA: 0x80000071,
    BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE: 0x81000011,
    PACE_INFO_NOT_AVAILABLE: 0x81000020,
    PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE: 0x81000021,
    PACE_KEY_AGREEMENT_CANT_INITIALIZE: 0x81000022,
    PACE_EPHEMERAL_KEYS_CANT_CREATE: 0x81000023,
    PACE_MAPPING_CANT_DECODE_NONCE: 0x81000024,
    PACE_SHARED_SECRET_CANT_CREATE: 0x81000025,
    PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT: 0x81000026,
    PACE_EPHEMERAL_KEYS_INCORRECT: 0x81000027,
    PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT: 0x81000028,
    PACE_MAPPING_CANT_PERFORM: 0x81000029,
    PACE_NON_MATCHING_AUTH_TOKENS: 0x8100002A,
    PACE_CAM_DATA_INCORRECT: 0x8100002B,
    PACE_CAM_DATA_CANT_VERIFY: 0x8100002C,
    PACE_CAM_DATA_NON_MATCHING: 0x8100002D,
    PACE_IM_SCHEME_INCORRECT: 0x8100002E,
    PACE_IM_RANDOM_MAPPING_FAILED: 0x8100002F,
    CA_CANT_FIND_PUBLIC_KEY: 0x81000030,
    CA_CANT_FIND_INFO: 0x81000031,
    CA_INCORRECT_VERSION: 0x81000032,
    CA_CANT_FIND_DOMAIN_PARAMETERS: 0x81000033,
    CA_KEY_AGREEMENT_CANT_INITIALIZE: 0x81000034,
    CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000035,
    CA_EPHEMERAL_KEYS_CANT_CREATE: 0x81000036,
    CA_SHARED_SECRET_CANT_CREATE: 0x81000037,
    CA_NON_MATCHING_AUTH_TOKENS: 0x81000038,
    TA_INCORRECT_VERSION: 0x81000040,
    TA_CANT_BUILD_CERTIFICATE_CHAIN: 0x81000041,
    TA_CANT_FIND_IS_PRIVATE_KEY: 0x81000042,
    TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000043,
    TA_SIGNATURE_BUILDING_ERROR: 0x81000044,
    TA_INVALID_KEY_ALGORITHM_PARAMETERS: 0x81000045,
    AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000050,
    AA_PUBLIC_KEY_INCORRECT_DATA: 0x81000051,
    AA_PUBLIC_KEY_INCORRECT_PARAMETERS: 0x81000052,
    AA_PUBLIC_KEY_UNDEFINED_PARAMETERS: 0x81000053,
    AA_SIGNATURE_INCORRECT_DATA: 0x81000054,
    AA_UNSUPPORTED_RECOVERY_SCHEME: 0x81000055,
    AA_INCORRECT_TRAILER: 0x81000056,
    AA_UNSUPPORTED_DIGEST_ALGORITHM: 0x81000057,
    RI_SECTOR_KEY_CANT_FIND: 0x81000070,
    RI_SECTOR_KEY_INCORRECT_DATA: 0x81000071,
    RI_SECTOR_KEY_INCOMPLETE_DATA: 0x81000072,
    CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK: 0x81000060,
    CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED: 0x81000062,
    CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE: 0x81000063,
    CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED: 0x8100006,
    CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS: 0x81000065,
    CV_CERTIFICATE_INCORRECT_DATA: 0x81000160,
    CV_CERTIFICATE_CPI_INCORRECT_DATA: 0x81000161,
    CV_CERTIFICATE_CAR_INCORRECT_DATA: 0x81000162,
    CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA: 0x81000163,
    CV_CERTIFICATE_CHR_INCORRECT_DATA: 0x81000164,
    CV_CERTIFICATE_CHAT_INCORRECT_DATA: 0x81000165,
    CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA: 0x81000166,
    CV_CERTIFICATE_VALID_TO_INCORRECT_DATA: 0x81000167,
    CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: 0x81000168,
    CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA: 0x81000169,
    CV_CERTIFICATE_PRIVATE_KEY_MISSING: 0x8100016A,
    VDS_UNSUPPORTED_VERSION: 0x81000200,
    VDS_ISSUING_COUNTRY_SIZE: 0x81000201,
    VDS_ISSUING_COUNTRY_INCORRECT_DATA: 0x81000202,
    VDS_SIGNER_CERTIFICATE_SIZE: 0x81000203,
    VDS_SIGNER_CERTIFICATE_DATA: 0x81000204,
    VDS_SIGNATURE_INCORRECT_DATA: 0x81000205,
    VDS_NC_INCORRECT_DATA: 0x81000300,
    VDS_NC_MISSING_OR_INCORRECT_DATA: 0x81000301,
    VDS_NC_MISSING_OR_INCORRECT_HEADER: 0x81000302,
    VDS_NC_MISSING_OR_INCORRECT_TYPE: 0x81000303,
    VDS_NC_MISSING_OR_INCORRECT_VERSION: 0x81000304,
    VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY: 0x81000305,
    VDS_NC_MISSING_OR_INCORRECT_MESSAGE: 0x81000306,
    VDS_NC_MISSING_OR_INCORRECT_SIGNATURE: 0x81000307,
    VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM: 0x81000308,
    VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE: 0x81000309,
    VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE: 0x8100030A
};

LDSParsingErrorCodes.getTranslation = async function (value) {
    return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTranslation", ["LDSParsingErrorCodes", value]);
}


/***/ }),

/***/ "./src/results/visible_digital_seals/LDSParsingNotificationCodes.js":
/*!**************************************************************************!*\
  !*** ./src/results/visible_digital_seals/LDSParsingNotificationCodes.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LDSParsingNotificationCodes: () => (/* binding */ LDSParsingNotificationCodes)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");


const LDSParsingNotificationCodes = {
    ASN_CERTIFICATE_INCORRECT_VERSION: 0x90000001,
    ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM: 0x90000002,
    ASN_CERTIFICATE_INCORRECT_TIME_CODING: 0x90000003,
    ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME: 0x90000004,
    ASN_CERTIFICATE_EMPTY_ISSUER: 0x90000005,
    ASN_CERTIFICATE_EMPTY_SUBJECT: 0x90000006,
    ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION: 0x90000008,
    ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE: 0x9000000E,
    ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE: 0x9000000F,
    ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS: 0x90000010,
    ASN_CERTIFICATE_DUPLICATING_EXTENSIONS: 0x90000017,
    ICAO_CERTIFICATE_VERSION_MISSED: 0x90000200,
    ICAO_CERTIFICATE_VERSION_INCORRECT: 0x90000201,
    ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED: 0x90000202,
    ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED: 0x90000203,
    ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT: 0x90000204,
    ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED: 0x90000205,
    ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED: 0x90000206,
    ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT: 0x90000207,
    ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA: 0x90000208,
    ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x90000209,
    ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: 0x9000020A,
    ICAO_CERTIFICATE_MISSED_EXTENSIONS: 0x9000020B,
    ICAO_CERTIFICATE_VALIDITY: 0x9000020C,
    ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA: 0x9000020D,
    ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED: 0x9000020E,
    ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL: 0x9000020F,
    ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA: 0x90000210,
    ICAO_CERTIFICATE_EXT_BASIC_C_MISSED: 0x90000211,
    ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1: 0x90000212,
    ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2: 0x90000213,
    ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL: 0x90000214,
    ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA: 0x90000215,
    ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED: 0x90000216,
    ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT: 0x90000217,
    ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL: 0x90000218,
    ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE: 0x90000219,
    ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA: 0x9000021A,
    ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED: 0x9000021B,
    ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA: 0x9000021C,
    ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED: 0x9000021D,
    ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED: 0x9000021E,
    ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA: 0x9000021F,
    ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED: 0x90000220,
    ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA: 0x90000221,
    ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY: 0x90000222,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED: 0x90000223,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA: 0x90000224,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY: 0x90000225,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT: 0x90000226,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL: 0x90000228,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY: 0x90000229,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT: 0x9000022A,
    ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT: 0x9000022B,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED: 0x9000022C,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA: 0x9000022D,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY: 0x9000022E,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT: 0x9000022F,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL: 0x90000231,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY: 0x90000232,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT: 0x90000233,
    ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT: 0x90000234,
    ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED: 0x90000235,
    ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA: 0x90000236,
    ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION: 0x90000237,
    ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES: 0x90000238,
    ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY: 0x90000239,
    ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA: 0x9000023A,
    ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY: 0x9000023B,
    ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED: 0x9000023C,
    ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED: 0x9000023D,
    ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA: 0x9000023E,
    ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY: 0x9000023F,
    ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED: 0x90000240,
    ICAO_CERTIFICATE_SN_NON_COMPLIANT: 0x90000241,
    ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT: 0x90000242,
    ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT: 0x90000243,
    ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT: 0x90000244,
    ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT: 0x90000245,
    ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING: 0x90000246,
    ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING: 0x90000247,
    ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA: 0x90000248,
    ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT: 0x90000249,
    ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL: 0x9000024A,
    ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT: 0x9000024B,
    ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL: 0x9000024C,
    ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL: 0x9000024D,
    ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT: 0x9000024E,
    ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT: 0x9000024F,
    ICAO_COM_LDS_VERSION_INCORRECT: 0x90000020,
    ICAO_COM_LDS_VERSION_MISSING: 0x90000021,
    ICAO_COM_UNICODE_VERSION_INCORRECT: 0x90000022,
    ICAO_COM_UNICODE_VERSION_MISSING: 0x90000023,
    ICAO_COM_DGPM_INCORRECT: 0x90000024,
    ICAO_COM_DGPM_MISSING: 0x90000025,
    ICAO_COM_DGPM_UNEXPECTED: 0x90000026,
    ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED: 0x90000030,
    ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED: 0x90000031,
    ICAO_APPLICATION_LDS_VERSION_INCONSISTENT: 0x90000032,
    ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT: 0x90000033,
    ASN_SIGNED_DATA_OID_INCORRECT: 0x90000100,
    ASN_SIGNED_DATA_VERSION_INCORRECT: 0x900001A0,
    ASN_SIGNED_DATA_CONTENT_OID_INCORRECT: 0x900001A1,
    ICAO_SIGNED_DATA_VERSION_INCORRECT: 0x90000101,
    ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY: 0x90000102,
    ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED: 0x90000103,
    ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES: 0x90000109,
    ICAO_SIGNED_DATA_CERTIFICATES_MISSED: 0x900001B0,
    ICAO_SIGNED_DATA_CERTIFICATES_EMPTY: 0x900001B1,
    ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE: 0x900001B2,
    ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID: 0x90000104,
    ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT: 0x90000105,
    ICAO_LDS_OBJECT_DG_HASH_MISSING: 0x90000106,
    ICAO_LDS_OBJECT_DG_HASH_EXTRA: 0x90000107,
    ICAO_LDS_OBJECT_VERSION_INCORRECT: 0x90000108,
    ICAO_MASTER_LIST_VERSION_INCORRECT: 0x900001C0,
    ICAO_DEVIATION_LIST_VERSION_INCORRECT: 0x900001C8,
    BSI_DEFECT_LIST_VERSION_INCORRECT: 0x900001D0,
    BSI_BLACK_LIST_VERSION_INCORRECT: 0x900001D8,
    ASN_SIGNER_INFO_VERSION_INCORRECT: 0x9000010A,
    ASN_SIGNER_INFO_SID_INCORRECT_CHOICE: 0x9000010B,
    ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED: 0x9000010C,
    ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING: 0x9000010D,
    ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA: 0x9000010E,
    ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value: 0x9000010F,
    ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING: 0x90000110,
    ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA: 0x90000111,
    ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE: 0x90000112,
    ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING: 0x9000011B,
    ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA: 0x9000011C,
    ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE: 0x9000011D,
    ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING: 0x9000011E,
    ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA: 0x9000011F,
    AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY: 0x90000115,
    AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: 0x90000116,
    AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: 0x90000117,
    AUTH_SIGNER_INFO_CERTIFICATE_REVOKED: 0x90000118,
    AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: 0x90000119,
    UNSUPPORTED_IMAGE_FORMAT: 0x9000011A,
    MRZ_DOCUMENT_TYPE_UNKNOWN: 0x00022008,
    MRZ_ISSUING_STATE_SYNTAX_ERROR: 0x00022009,
    MRZ_NAME_IS_VOID: 0x0002200A,
    MRZ_NUMBER_INCORRECT_CHECKSUM: 0x0002200D,
    MRZ_NATIONALITY_SYNTAX_ERROR: 0x0002200E,
    MRZ_DOB_SYNTAX_ERROR: 0x0002200F,
    MRZ_DOB_ERROR: 0x00022010,
    MRZ_DOB_INCORRECT_CHECKSUM: 0x00022011,
    MRZ_SEX_INCORRECT: 0x00022012,
    MRZ_DOE_SYNTAX_ERROR: 0x00022013,
    MRZ_DOE_ERROR: 0x00022014,
    MRZ_DOE_INCORRECT_CHECKSUM: 0x00022015,
    MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM: 0x00022016,
    MRZ_INCORRECT_CHECKSUM: 0x00022017,
    MRZ_INCORRECT: 0x00022018,
    BIOMETRICS_FORMAT_OWNER_MISSING: 0x90010000,
    BIOMETRICS_FORMAT_OWNER_INCORRECT: 0x90020000,
    BIOMETRICS_FORMAT_TYPE_MISSING: 0x90030000,
    BIOMETRICS_FORMAT_TYPE_INCORRECT: 0x90040000,
    BIOMETRICS_TYPE_INCORRECT: 0x90050000,
    BIOMETRICS_SUB_TYPE_MISSING: 0x90060000,
    BIOMETRICS_SUB_TYPE_INCORRECT: 0x90070000,
    BIOMETRICS_BDB_IMAGE_MISSING: 0x90080000,
    BIOMETRICS_BDB_FORMAT_ID_INCORRECT: 0x90090000,
    BIOMETRICS_BDB_VERSION_INCORRECT: 0x900A0000,
    BIOMETRICS_BDB_DATA_LENGTH_INCORRECT: 0x900B0000,
    BIOMETRICS_BDB_DATA_GENDER: 0x90100000,
    BIOMETRICS_BDB_DATA_EYE_COLOR: 0x90110000,
    BIOMETRICS_BDB_DATA_HAIR_COLOR: 0x90120000,
    BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW: 0x90130000,
    BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH: 0x90140000,
    BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL: 0x90150000,
    BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW: 0x90160000,
    BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH: 0x90170000,
    BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL: 0x90180000,
    BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE: 0x90190000,
    BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE: 0x901A0000,
    SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS: 0x91000000,
    SI_PACE_INFO_DEPRECATED_VERSION: 0x91000001,
    SI_PACE_DOMAIN_PARAMS_USING_STD_REF: 0x91000002,
    SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x91000003,
    SI_CA_INFO_INCORRECT_VERSION: 0x91000004,
    SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x91000005,
    SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x91000006,
    SI_TA_INFO_INCORRECT_VERSION: 0x91000007,
    SI_TA_INFO_FILE_ID_FOR_VERSION2: 0x91000008,
    SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM: 0x91000009,
    SI_RI_INFO_INCORRECT_VERSION: 0x9100000A,
    SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x9100000B,
    SI_AA_INFO_INCORRECT_VERSION: 0x9100000C,
    SI_AA_INFO_UNSUPPORTED_ALGORITHM: 0x9100000D,
    SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE: 0x9100000E,
    SI_STORAGE_PACE_INFO_NOT_AVAILABLE: 0x91000100,
    SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS: 0x91000101,
    SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS: 0x91000102,
    SI_STORAGE_CA_INFO_NOT_AVAILABLE: 0x91000103,
    SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION: 0x91000104,
    SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE: 0x91000105,
    SI_STORAGE_CA_ANONYMOUS_INFOS: 0x91000106,
    SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS: 0x91000107,
    SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY: 0x91000108,
    SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY: 0x91000109,
    SI_STORAGE_TA_INFO_NOT_AVAILABLE: 0x9100010A,
    SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES: 0x9100010B,
    SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES: 0x9100010C,
    SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES: 0x9100010D,
    SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE: 0x9100010E,
    SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES: 0x9100010F,
    SI_STORAGE_PACE_INFOS_NON_CONSISTANT: 0x91000110,
    CV_CERTIFICATE_PROFILE_INCORRECT_VERSION: 0x91000201,
    CV_CERTIFICATE_VALIDITY: 0x91000202,
    CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS: 0x91000203,
    CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION: 0x91000204,
    TA_PACE_STATIC_BINDING_USED: 0x91000300,
    AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY: 0x92000115,
    AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: 0x92000116,
    AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: 0x92000117,
    AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED: 0x92000118,
    AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: 0x92000119,
    NTF_LDS_ICAO_CERTIFICATE_CHAIN_COUNTRY_NON_MATCHING: 0x90000250,
    NTF_LDS_ICAO_CERTIFICATE_VISUAL_MRZ_COUNTRY_NON_MATCHING: 0x90000251,
    NTF_LDS_MRZ_COUNTRYCODE_VISUALMRZ_NON_MATCHING: 0x00022019,
    NTF_LDS_ICAO_CERTIFICATE_MRZ_COUNTRY_NON_MATCHING: 0x90000252,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_UPPER_CASE: 0x90000253,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_UPPER_CASE: 0x90000254
};

LDSParsingNotificationCodes.getTranslation = async function (value) {
    return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTranslation", ["LDSParsingNotificationCodes", value]);
}


/***/ }),

/***/ "./src/results/visible_digital_seals/VDSNCData.js":
/*!********************************************************!*\
  !*** ./src/results/visible_digital_seals/VDSNCData.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VDSNCData: () => (/* binding */ VDSNCData)
/* harmony export */ });
/* harmony import */ var _rfid_CertificateChain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rfid/CertificateChain */ "./src/results/rfid/CertificateChain.js");
/* harmony import */ var _BytesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BytesData */ "./src/results/visible_digital_seals/BytesData.js");



class VDSNCData {
    type
    version
    issuingCountry
    message
    signatureAlgorithm
    signature
    certificate
    certificateChain
    notifications

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new VDSNCData();
        result.type = jsonObject["type"];
        result.version = jsonObject["version"];
        result.issuingCountry = jsonObject["issuingCountry"];
        result.message = jsonObject["message"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.signature = _BytesData__WEBPACK_IMPORTED_MODULE_1__.BytesData.fromJson(jsonObject["signature"]);
        result.certificate = _BytesData__WEBPACK_IMPORTED_MODULE_1__.BytesData.fromJson(jsonObject["certificate"]);
        result.notifications = jsonObject["notifications"];
        
        if (jsonObject["certificateChain"] != null) {
            result.certificateChain = [];
            for (const item of jsonObject["certificateChain"]) {
                const certificateChain = _rfid_CertificateChain__WEBPACK_IMPORTED_MODULE_0__.CertificateChain.fromJson(item);
                if (certificateChain != null) {
                    result.certificateChain.push(certificateChain);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "type": this.type,
            "version": this.version,
            "issuingCountry": this.issuingCountry,
            "message": this.message,
            "signatureAlgorithm": this.signatureAlgorithm,
            "signature": this.signature?.toJson(),
            "certificate": this.certificate?.toJson(),
            "certificateChain": this.certificateChain?.map(e => e.toJson()),
            "notifications": this.notifications,
        }
    }
}


/***/ }),

/***/ "./src/results/visual_results/Comparison.js":
/*!**************************************************!*\
  !*** ./src/results/visual_results/Comparison.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comparison: () => (/* binding */ Comparison)
/* harmony export */ });
/* harmony import */ var _status_CheckResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/CheckResult.js */ "./src/results/status/CheckResult.js");
/* harmony import */ var _Results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Results.js */ "./src/results/Results.js");



class Comparison {
    sourceTypeLeft;
    sourceTypeRight;
    status;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Comparison();
        
        result.sourceTypeLeft = jsonObject["sourceTypeLeft"];
        result.sourceTypeRight = jsonObject["sourceTypeRight"];
        result.status = jsonObject["status"];
        
        return result;
    }

    toJson() {
        return {
            "sourceTypeLeft": this.sourceTypeLeft,
            "sourceTypeRight": this.sourceTypeRight,
            "status": this.status,
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/FieldType.js":
/*!*************************************************!*\
  !*** ./src/results/visual_results/FieldType.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldType: () => (/* binding */ FieldType)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");


const FieldType = {
  DOCUMENT_CLASS_CODE: 0,
  ISSUING_STATE_CODE: 1,
  DOCUMENT_NUMBER: 2,
  DATE_OF_EXPIRY: 3,
  DATE_OF_ISSUE: 4,
  DATE_OF_BIRTH: 5,
  PLACE_OF_BIRTH: 6,
  PERSONAL_NUMBER: 7,
  SURNAME: 8,
  GIVEN_NAMES: 9,
  MOTHERS_NAME: 10,
  NATIONALITY: 11,
  SEX: 12,
  HEIGHT: 13,
  WEIGHT: 14,
  EYES_COLOR: 15,
  HAIR_COLOR: 16,
  ADDRESS: 17,
  DONOR: 18,
  SOCIAL_SECURITY_NUMBER: 19,
  DL_CLASS: 20,
  DL_ENDORSED: 21,
  DL_RESTRICTION_CODE: 22,
  DL_UNDER_21_DATE: 23,
  AUTHORITY: 24,
  SURNAME_AND_GIVEN_NAMES: 25,
  NATIONALITY_CODE: 26,
  PASSPORT_NUMBER: 27,
  INVITATION_NUMBER: 28,
  VISA_ID: 29,
  VISA_CLASS: 30,
  VISA_SUB_CLASS: 31,
  MRZ_STRING_1: 32,
  MRZ_STRING_2: 33,
  MRZ_STRING_3: 34,
  MRZ_TYPE: 35,
  OPTIONAL_DATA: 36,
  DOCUMENT_CLASS_NAME: 37,
  ISSUING_STATE_NAME: 38,
  PLACE_OF_ISSUE: 39,
  DOCUMENT_NUMBER_CHECKSUM: 40,
  DATE_OF_BIRTH_CHECKSUM: 41,
  DATE_OF_EXPIRY_CHECKSUM: 42,
  PERSONAL_NUMBER_CHECKSUM: 43,
  FINAL_CHECKSUM: 44,
  PASSPORT_NUMBER_CHECKSUM: 45,
  INVITATION_NUMBER_CHECKSUM: 46,
  VISA_ID_CHECKSUM: 47,
  SURNAME_AND_GIVEN_NAMES_CHECKSUM: 48,
  VISA_VALID_UNTIL_CHECKSUM: 49,
  OTHER: 50,
  MRZ_STRINGS: 51,
  NAME_SUFFIX: 52,
  NAME_PREFIX: 53,
  DATE_OF_ISSUE_CHECKSUM: 54,
  DATE_OF_ISSUE_CHECK_DIGIT: 55,
  DOCUMENT_SERIES: 56,
  REG_CERT_REG_NUMBER: 57,
  REG_CERT_CAR_MODEL: 58,
  REG_CERT_CAR_COLOR: 59,
  REG_CERT_BODY_NUMBER: 60,
  REG_CERT_CAR_TYPE: 61,
  REG_CERT_MAX_WEIGHT: 62,
  REG_CERT_WEIGHT: 63,
  ADDRESS_AREA: 64,
  ADDRESS_STATE: 65,
  ADDRESS_BUILDING: 66,
  ADDRESS_HOUSE: 67,
  ADDRESS_FLAT: 68,
  PLACE_OF_REGISTRATION: 69,
  DATE_OF_REGISTRATION: 70,
  RESIDENT_FROM: 71,
  RESIDENT_UNTIL: 72,
  AUTHORITY_CODE: 73,
  PLACE_OF_BIRTH_AREA: 74,
  PLACE_OF_BIRTH_STATE_CODE: 75,
  ADDRESS_STREET: 76,
  ADDRESS_CITY: 77,
  ADDRESS_JURISDICTION_CODE: 78,
  ADDRESS_POSTAL_CODE: 79,
  DOCUMENT_NUMBER_CHECK_DIGIT: 80,
  DATE_OF_BIRTH_CHECK_DIGIT: 81,
  DATE_OF_EXPIRY_CHECK_DIGIT: 82,
  PERSONAL_NUMBER_CHECK_DIGIT: 83,
  FINAL_CHECK_DIGIT: 84,
  PASSPORT_NUMBER_CHECK_DIGIT: 85,
  INVITATION_NUMBER_CHECK_DIGIT: 86,
  VISA_ID_CHECK_DIGIT: 87,
  SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT: 88,
  VISA_VALID_UNTIL_CHECK_DIGIT: 89,
  PERMIT_DL_CLASS: 90,
  PERMIT_DATE_OF_EXPIRY: 91,
  PERMIT_IDENTIFIER: 92,
  PERMIT_DATE_OF_ISSUE: 93,
  PERMIT_RESTRICTION_CODE: 94,
  PERMIT_ENDORSED: 95,
  ISSUE_TIMESTAMP: 96,
  NUMBER_OF_DUPLICATES: 97,
  MEDICAL_INDICATOR_CODES: 98,
  NON_RESIDENT_INDICATOR: 99,
  VISA_TYPE: 100,
  VISA_VALID_FROM: 101,
  VISA_VALID_UNTIL: 102,
  DURATION_OF_STAY: 103,
  NUMBER_OF_ENTRIES: 104,
  DAY: 105,
  MONTH: 106,
  YEAR: 107,
  UNIQUE_CUSTOMER_IDENTIFIER: 108,
  COMMERCIAL_VEHICLE_CODES: 109,
  AKA_DATE_OF_BIRTH: 110,
  AKA_SOCIAL_SECURITY_NUMBER: 111,
  AKA_SURNAME: 112,
  AKA_GIVEN_NAMES: 113,
  AKA_NAME_SUFFIX: 114,
  AKA_NAME_PREFIX: 115,
  MAILING_ADDRESS_STREET: 116,
  MAILING_ADDRESS_CITY: 117,
  MAILING_ADDRESS_JURISDICTION_CODE: 118,
  MAILING_ADDRESS_POSTAL_CODE: 119,
  AUDIT_INFORMATION: 120,
  INVENTORY_NUMBER: 121,
  RACE_ETHNICITY: 122,
  JURISDICTION_VEHICLE_CLASS: 123,
  JURISDICTION_ENDORSEMENT_CODE: 124,
  JURISDICTION_RESTRICTION_CODE: 125,
  FAMILY_NAME: 126,
  GIVEN_NAMES_RUS: 127,
  VISA_ID_RUS: 128,
  FATHERS_NAME: 129,
  FATHERS_NAME_RUS: 130,
  SURNAME_AND_GIVEN_NAMES_RUS: 131,
  PLACE_OF_BIRTH_RUS: 132,
  AUTHORITY_RUS: 133,
  ISSUING_STATE_CODE_NUMERIC: 134,
  NATIONALITY_CODE_NUMERIC: 135,
  ENGINE_POWER: 136,
  ENGINE_VOLUME: 137,
  CHASSIS_NUMBER: 138,
  ENGINE_NUMBER: 139,
  ENGINE_MODEL: 140,
  VEHICLE_CATEGORY: 141,
  IDENTITY_CARD_NUMBER: 142,
  CONTROL_NO: 143,
  PARRENTS_GIVEN_NAMES: 144,
  SECOND_SURNAME: 145,
  MIDDLE_NAME: 146,
  REG_CERT_VIN: 147,
  REG_CERT_VIN_CHECK_DIGIT: 148,
  REG_CERT_VIN_CHECKSUM: 149,
  LINE_1_CHECK_DIGIT: 150,
  LINE_2_CHECK_DIGIT: 151,
  LINE_3_CHECK_DIGIT: 152,
  LINE_1_CHECKSUM: 153,
  LINE_2_CHECKSUM: 154,
  LINE_3_CHECKSUM: 155,
  REG_CERT_REG_NUMBER_CHECK_DIGIT: 156,
  REG_CERT_REG_NUMBER_CHECKSUM: 157,
  REG_CERT_VEHICLE_ITS_CODE: 158,
  CARD_ACCESS_NUMBER: 159,
  MARITAL_STATUS: 160,
  COMPANY_NAME: 161,
  SPECIAL_NOTES: 162,
  SURNAME_OF_SPOSE: 163,
  TRACKING_NUMBER: 164,
  BOOKLET_NUMBER: 165,
  CHILDREN: 166,
  COPY: 167,
  SERIAL_NUMBER: 168,
  DOSSIER_NUMBER: 169,
  AKA_SURNAME_AND_GIVEN_NAMES: 170,
  TERRITORIAL_VALIDITY: 171,
  MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS: 172,
  DL_CDL_RESTRICTION_CODE: 173,
  DL_UNDER_18_DATE: 174,
  DL_RECORD_CREATED: 175,
  DL_DUPLICATE_DATE: 176,
  DL_ISS_TYPE: 177,
  MILITARY_BOOK_NUMBER: 178,
  DESTINATION: 179,
  BLOOD_GROUP: 180,
  SEQUENCE_NUMBER: 181,
  REG_CERT_BODY_TYPE: 182,
  REG_CERT_CAR_MARK: 183,
  TRANSACTION_NUMBER: 184,
  AGE: 185,
  FOLIO_NUMBER: 186,
  VOTER_KEY: 187,
  ADDRESS_MUNICIPALITY: 188,
  ADDRESS_LOCATION: 189,
  SECTION: 190,
  OCR_NUMBER: 191,
  FEDERAL_ELECTIONS: 192,
  REFERENCE_NUMBER: 193,
  OPTIONAL_DATA_CHECKSUM: 194,
  OPTIONAL_DATA_CHECK_DIGIT: 195,
  VISA_NUMBER: 196,
  VISA_NUMBER_CHECKSUM: 197,
  VISA_NUMBER_CHECK_DIGIT: 198,
  VOTER: 199,
  PREVIOUS_TYPE: 200,
  FIELD_FROM_MRZ: 220,
  CURRENT_DATE: 221,
  STATUS_DATE_OF_EXPIRY: 251,
  BANKNOTE_NUMBER: 252,
  CSC_CODE: 253,
  ARTISTIC_NAME: 254,
  ACADEMIC_TITLE: 255,
  ADDRESS_COUNTRY: 256,
  ADDRESS_ZIPCODE: 257,
  E_ID_RESIDENCE_PERMIT_1: 258,
  E_ID_RESIDENCE_PERMIT_2: 259,
  E_ID_PLACE_OF_BIRTH_STREET: 260,
  E_ID_PLACE_OF_BIRTH_CITY: 261,
  E_ID_PLACE_OF_BIRTH_STATE: 262,
  E_ID_PLACE_OF_BIRTH_COUNTRY: 263,
  E_ID_PLACE_OF_BIRTH_ZIPCODE: 264,
  CDL_CLASS: 265,
  DL_UNDER_19_DATE: 266,
  WEIGHT_POUNDS: 267,
  LIMITED_DURATION_DOCUMENT_INDICATOR: 268,
  ENDORSEMENT_EXPIRATION_DATE: 269,
  REVISION_DATE: 270,
  COMPLIANCE_TYPE: 271,
  FAMILY_NAME_TRUNCATION: 272,
  FIRST_NAME_TRUNCATION: 273,
  MIDDLE_NAME_TRUNCATION: 274,
  EXAM_DATE: 275,
  ORGANIZATION: 276,
  DEPARTMENT: 277,
  PAY_GRADE: 278,
  RANK: 279,
  BENEFITS_NUMBER: 280,
  SPONSOR_SERVICE: 281,
  SPONSOR_STATUS: 282,
  SPONSOR: 283,
  RELATIONSHIP: 284,
  USCIS: 285,
  CATEGORY: 286,
  CONDITIONS: 287,
  IDENTIFIER: 288,
  CONFIGURATION: 289,
  DISCRETIONARY_DATA: 290,
  LINE_1_OPTIONAL_DATA: 291,
  LINE_2_OPTIONAL_DATA: 292,
  LINE_3_OPTIONAL_DATA: 293,
  EQV_CODE: 294,
  ALT_CODE: 295,
  BINARY_CODE: 296,
  PSEUDO_CODE: 297,
  FEE: 298,
  STAMP_NUMBER: 299,
  SBH_SECURITYOPTIONS: 300,
  SBH_INTEGRITYOPTIONS: 301,
  DATE_OF_CREATION: 302,
  VALIDITY_PERIOD: 303,
  PATRON_HEADER_VERSION: 304,
  BDB_TYPE: 305,
  BIOMETRIC_TYPE: 306,
  BIOMETRIC_SUBTYPE: 307,
  BIOMETRIC_PRODUCTID: 308,
  BIOMETRIC_FORMAT_OWNER: 309,
  BIOMETRIC_FORMAT_TYPE: 310,
  PHONE: 311,
  PROFESSION: 312,
  TITLE: 313,
  PERSONAL_SUMMARY: 314,
  OTHER_VALID_ID: 315,
  CUSTODY_INFO: 316,
  OTHER_NAME: 317,
  OBSERVATIONS: 318,
  TAX: 319,
  DATE_OF_PERSONALIZATION: 320,
  PERSONALIZATION_SN: 321,
  OTHERPERSON_NAME: 322,
  PERSONTONOTIFY_DATE_OF_RECORD: 323,
  PERSONTONOTIFY_NAME: 324,
  PERSONTONOTIFY_PHONE: 325,
  PERSONTONOTIFY_ADDRESS: 326,
  DS_CERTIFICATE_ISSUER: 327,
  DS_CERTIFICATE_SUBJECT: 328,
  DS_CERTIFICATE_VALIDFROM: 329,
  DS_CERTIFICATE_VALIDTO: 330,
  VRC_DATAOBJECT_ENTRY: 331,
  TYPE_APPROVAL_NUMBER: 332,
  ADMINISTRATIVE_NUMBER: 333,
  DOCUMENT_DISCRIMINATOR: 334,
  DATA_DISCRIMINATOR: 335,
  ISO_ISSUER_ID_NUMBER: 336,
  DTC_VERSION: 337,
  DTC_ID: 338,
  DTC_DATE_OF_EXPIRY: 339,
  GNIB_NUMBER: 340,
  DEPT_NUMBER: 341,
  TELEX_CODE: 342,
  ALLERGIES: 343,
  SP_CODE: 344,
  COURT_CODE: 345,
  CTY: 346,
  SPONSOR_SSN: 347,
  DO_D_NUMBER: 348,
  MC_NOVICE_DATE: 349,
  DUF_NUMBER: 350,
  AGY: 351,
  PNR_CODE: 352,
  FROM_AIRPORT_CODE: 353,
  TO_AIRPORT_CODE: 354,
  FLIGHT_NUMBER: 355,
  DATE_OF_FLIGHT: 356,
  SEAT_NUMBER: 357,
  DATE_OF_ISSUE_BOARDING_PASS: 358,
  CCW_UNTIL: 359,
  REFERENCE_NUMBER_CHECKSUM: 360,
  REFERENCE_NUMBER_CHECK_DIGIT: 361,
  ROOM_NUMBER: 362,
  RELIGION: 363,
  REMAINDER_TERM: 364,
  ELECTRONIC_TICKET_INDICATOR: 365,
  COMPARTMENT_CODE: 366,
  CHECK_IN_SEQUENCE_NUMBER: 367,
  AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER: 368,
  AIRLINE_NUMERIC_CODE: 369,
  TICKET_NUMBER: 370,
  FREQUENT_FLYER_AIRLINE_DESIGNATOR: 371,
  FREQUENT_FLYER_NUMBER: 372,
  FREE_BAGGAGE_ALLOWANCE: 373,
  PDF_417_CODEC: 374,
  IDENTITY_CARD_NUMBER_CHECKSUM: 375,
  IDENTITY_CARD_NUMBER_CHECK_DIGIT: 376,
  VETERAN: 377,
  DL_CLASS_CODE_A_1_FROM: 378,
  DL_CLASS_CODE_A_1_TO: 379,
  DL_CLASS_CODE_A_1_NOTES: 380,
  DL_CLASS_CODE_A_FROM: 381,
  DL_CLASS_CODE_A_TO: 382,
  DL_CLASS_CODE_A_NOTES: 383,
  DL_CLASS_CODE_B_FROM: 384,
  DL_CLASS_CODE_B_TO: 385,
  DL_CLASS_CODE_B_NOTES: 386,
  DL_CLASS_CODE_C_1_FROM: 387,
  DL_CLASS_CODE_C_1_TO: 388,
  DL_CLASS_CODE_C_1_NOTES: 389,
  DL_CLASS_CODE_C_FROM: 390,
  DL_CLASS_CODE_C_TO: 391,
  DL_CLASS_CODE_C_NOTES: 392,
  DL_CLASS_CODE_D_1_FROM: 393,
  DL_CLASS_CODE_D_1_TO: 394,
  DL_CLASS_CODE_D_1_NOTES: 395,
  DL_CLASS_CODE_D_FROM: 396,
  DL_CLASS_CODE_D_TO: 397,
  DL_CLASS_CODE_D_NOTES: 398,
  DL_CLASS_CODE_BE_FROM: 399,
  DL_CLASS_CODE_BE_TO: 400,
  DL_CLASS_CODE_BE_NOTES: 401,
  DL_CLASS_CODE_C_1_E_FROM: 402,
  DL_CLASS_CODE_C_1_E_TO: 403,
  DL_CLASS_CODE_C_1_E_NOTES: 404,
  DL_CLASS_CODE_CE_FROM: 405,
  DL_CLASS_CODE_CE_TO: 406,
  DL_CLASS_CODE_CE_NOTES: 407,
  DL_CLASS_CODE_D_1_E_FROM: 408,
  DL_CLASS_CODE_D_1_E_TO: 409,
  DL_CLASS_CODE_D_1_E_NOTES: 410,
  DL_CLASS_CODE_DE_FROM: 411,
  DL_CLASS_CODE_DE_TO: 412,
  DL_CLASS_CODE_DE_NOTES: 413,
  DL_CLASS_CODE_M_FROM: 414,
  DL_CLASS_CODE_M_TO: 415,
  DL_CLASS_CODE_M_NOTES: 416,
  DL_CLASS_CODE_L_FROM: 417,
  DL_CLASS_CODE_L_TO: 418,
  DL_CLASS_CODE_L_NOTES: 419,
  DL_CLASS_CODE_T_FROM: 420,
  DL_CLASS_CODE_T_TO: 421,
  DL_CLASS_CODE_T_NOTES: 422,
  DL_CLASS_CODE_AM_FROM: 423,
  DL_CLASS_CODE_AM_TO: 424,
  DL_CLASS_CODE_AM_NOTES: 425,
  DL_CLASS_CODE_A_2_FROM: 426,
  DL_CLASS_CODE_A_2_TO: 427,
  DL_CLASS_CODE_A_2_NOTES: 428,
  DL_CLASS_CODE_B_1_FROM: 429,
  DL_CLASS_CODE_B_1_TO: 430,
  DL_CLASS_CODE_B_1_NOTES: 431,
  SURNAME_AT_BIRTH: 432,
  CIVIL_STATUS: 433,
  NUMBER_OF_SEATS: 434,
  NUMBER_OF_STANDING_PLACES: 435,
  MAX_SPEED: 436,
  FUEL_TYPE: 437,
  EC_ENVIRONMENTAL_TYPE: 438,
  POWER_WEIGHT_RATIO: 439,
  MAX_MASS_OF_TRAILER_BRAKED: 440,
  MAX_MASS_OF_TRAILER_UNBRAKED: 441,
  TRANSMISSION_TYPE: 442,
  TRAILER_HITCH: 443,
  ACCOMPANIED_BY: 444,
  POLICE_DISTRICT: 445,
  FIRST_ISSUE_DATE: 446,
  PAYLOAD_CAPACITY: 447,
  NUMBER_OF_AXELS: 448,
  PERMISSIBLE_AXLE_LOAD: 449,
  PRECINCT: 450,
  INVITED_BY: 451,
  PURPOSE_OF_ENTRY: 452,
  SKIN_COLOR: 453,
  COMPLEXION: 454,
  AIRPORT_FROM: 455,
  AIRPORT_TO: 456,
  AIRLINE_NAME: 457,
  AIRLINE_NAME_FREQUENT_FLYER: 458,
  LICENSE_NUMBER: 459,
  IN_TANKS: 460,
  EXEPT_IN_TANKS: 461,
  FAST_TRACK: 462,
  OWNER: 463,
  MRZ_STRINGS_ICAO_RFID: 464,
  NUMBER_OF_CARD_ISSUANCE: 465,
  NUMBER_OF_CARD_ISSUANCE_CHECKSUM: 466,
  NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT: 467,
  CENTURY_DATE_OF_BIRTH: 468,
  DL_CLASSCODE_A3_FROM: 469,
  DL_CLASSCODE_A3_TO: 470,
  DL_CLASSCODE_A3_NOTES: 471,
  DL_CLASSCODE_C2_FROM: 472,
  DL_CLASSCODE_C2_TO: 473,
  DL_CLASSCODE_C2_NOTES: 474,
  DL_CLASSCODE_B2_FROM: 475,
  DL_CLASSCODE_B2_TO: 476,
  DL_CLASSCODE_B2_NOTES: 477,
  DL_CLASSCODE_D2_FROM: 478,
  DL_CLASSCODE_D2_TO: 479,
  DL_CLASSCODE_D2_NOTES: 480,
  DL_CLASSCODE_B2E_FROM: 481,
  DL_CLASSCODE_B2E_TO: 482,
  DL_CLASSCODE_B2E_NOTES: 483,
  DL_CLASSCODE_G_FROM: 484,
  DL_CLASSCODE_G_TO: 485,
  DL_CLASSCODE_G_NOTES: 486,
  DL_CLASSCODE_J_FROM: 487,
  DL_CLASSCODE_J_TO: 488,
  DL_CLASSCODE_J_NOTES: 489,
  DL_CLASSCODE_LK_FROM: 490,
  DL_CLASSCODE_LK_TO: 491,
  DLC_LASSCODE_LC_NOTES: 492,
  BANKCARDNUMBER: 493,
  BANKCARDVALIDTHRU: 494,
  TAX_NUMBER: 495,
  HEALTH_NUMBER: 496,
  GRANDFATHERNAME: 497,
  SELECTEE_INDICATOR: 498,
  MOTHER_SURNAME: 499,
  MOTHER_GIVENNAME: 500,
  FATHER_SURNAME: 501,
  FATHER_GIVENNAME: 502,
  MOTHER_DATEOFBIRTH: 503,
  FATHER_DATEOFBIRTH: 504,
  MOTHER_PERSONALNUMBER: 505,
  FATHER_PERSONALNUMBER: 506,
  MOTHER_PLACEOFBIRTH: 507,
  FATHER_PLACEOFBIRTH: 508,
  MOTHER_COUNTRYOFBIRTH: 509,
  FATHER_COUNTRYOFBIRTH: 510,
  DATE_FIRST_RENEWAL: 511,
  DATE_SECOND_RENEWAL: 512,
  PLACE_OF_EXAMINATION: 513,
  APPLICATION_NUMBER: 514,
  VOUCHER_NUMBER: 515,
  AUTHORIZATION_NUMBER: 516,
  FACULTY: 517,
  FORM_OF_EDUCATION: 518,
  DNI_NUMBER: 519,
  RETIREMENT_NUMBER: 520,
  PROFESSIONAL_ID_NUMBER: 521,
  AGE_AT_ISSUE: 522,
  YEARS_SINCE_ISSUE: 523,
  DLCLASSCODE_BTP_FROM: 524,
  DLCLASSCODE_BTP_NOTES: 525,
  DLCLASSCODE_BTP_TO: 526,
  DLCLASSCODE_C3_FROM: 527,
  DLCLASSCODE_C3_NOTES: 528,
  DLCLASSCODE_C3_TO: 529,
  DLCLASSCODE_E_FROM: 530,
  DLCLASSCODE_E_NOTES: 531,
  DLCLASSCODE_E_TO: 532,
  DLCLASSCODE_F_FROM: 533,
  DLCLASSCODE_F_NOTES: 534,
  DLCLASSCODE_F_TO: 535,
  DLCLASSCODE_FA_FROM: 536,
  DLCLASSCODE_FA_NOTES: 537,
  DLCLASSCODE_FA_TO: 538,
  DLCLASSCODE_FA1_FROM: 539,
  DLCLASSCODE_FA1_NOTES: 540,
  DLCLASSCODE_FA1_TO: 541,
  DLCLASSCODE_FB_FROM: 542,
  DLCLASSCODE_FB_NOTES: 543,
  DLCLASSCODE_FB_TO: 544,
  DLCLASSCODE_G1_FROM: 545,
  DLCLASSCODE_G1_NOTES: 546,
  DLCLASSCODE_G1_TO: 547,
  DLCLASSCODE_H_FROM: 548,
  DLCLASSCODE_H_NOTES: 549,
  DLCLASSCODE_H_TO: 550,
  DLCLASSCODE_I_FROM: 551,
  DLCLASSCODE_I_NOTES: 552,
  DLCLASSCODE_I_TO: 553,
  DLCLASSCODE_K_FROM: 554,
  DLCLASSCODE_K_NOTES: 555,
  DLCLASSCODE_K_TO: 556,
  DLCLASSCODE_LK_FROM: 557,
  DLCLASSCODE_LK_NOTES: 558,
  DLCLASSCODE_LK_TO: 559,
  DLCLASSCODE_N_FROM: 560,
  DLCLASSCODE_N_NOTES: 561,
  DLCLASSCODE_N_TO: 562,
  DLCLASSCODE_S_FROM: 563,
  DLCLASSCODE_S_NOTES: 564,
  DLCLASSCODE_S_TO: 565,
  DLCLASSCODE_TB_FROM: 566,
  DLCLASSCODE_TB_NOTES: 567,
  DLCLASSCODE_TB_TO: 568,
  DLCLASSCODE_TM_FROM: 569,
  DLCLASSCODE_TM_NOTES: 570,
  DLCLASSCODE_TM_TO: 571,
  DLCLASSCODE_TR_FROM: 572,
  DLCLASSCODE_TR_NOTES: 573,
  DLCLASSCODE_TR_TO: 574,
  DLCLASSCODE_TV_FROM: 575,
  DLCLASSCODE_TV_NOTES: 576,
  DLCLASSCODE_TV_TO: 577,
  DLCLASSCODE_V_FROM: 578,
  DLCLASSCODE_V_NOTES: 579,
  DLCLASSCODE_V_TO: 580,
  DLCLASSCODE_W_FROM: 581,
  DLCLASSCODE_W_NOTES: 582,
  DLCLASSCODE_W_TO: 583,
  URL: 584,
  CALIBER: 585,
  MODEL: 586,
  MAKE: 587,
  NUMBER_OF_CYLINDERS: 588,
  SURNAME_OF_HUSBAND_AFTER_REGISTRATION: 589,
  SURNAME_OF_WIFE_AFTER_REGISTRATION: 590,
  DATE_OF_BIRTH_OF_WIFE: 591,
  DATE_OF_BIRTH_OF_HUSBAND: 592,
  CITIZENSHIP_OF_FIRST_PERSON: 593,
  CITIZENSHIP_OF_SECOND_PERSON: 594,
  CVV: 595,
  DATE_OF_INSURANCE_EXPIRY: 596,
  MORTGAGE_BY: 597,
  OLD_DOCUMENT_NUMBER: 598,
  OLD_DATE_OF_ISSUE: 599,
  OLD_PLACE_OF_ISSUE: 600,
  DLCLASSCODE_LR_FROM: 601,
  DLCLASSCODE_LR_TO: 602,
  DLCLASSCODE_LR_NOTES: 603,
  DLCLASSCODE_MR_FROM: 604,
  DLCLASSCODE_MR_TO: 605,
  DLCLASSCODE_MR_NOTES: 606,
  DLCLASSCODE_HR_FROM: 607,
  DLCLASSCODE_HR_TO: 608,
  DLCLASSCODE_HR_NOTES: 609,
  DLCLASSCODE_HC_FROM: 610,
  DLCLASSCODE_HC_TO: 611,
  DLCLASSCODE_HC_NOTES: 612,
  DLCLASSCODE_MC_FROM: 613,
  DLCLASSCODE_MC_TO: 614,
  DLCLASSCODE_MC_NOTES: 615,
  DLCLASSCODE_RE_FROM: 616,
  DLCLASSCODE_RE_TO: 617,
  DLCLASSCODE_RE_NOTES: 618,
  DLCLASSCODE_R_FROM: 619,
  DLCLASSCODE_R_TO: 620,
  DLCLASSCODE_R_NOTES: 621,
  DLCLASSCODE_CA_FROM: 622,
  DLCLASSCODE_CA_TO: 623,
  DLCLASSCODE_CA_NOTES: 624,
  CITIZENSHIP_STATUS: 625,
  MILITARY_SERVICE_FROM: 626,
  MILITARY_SERVICE_TO: 627,
  DLCLASSCODE_NT_FROM: 628,
  DLCLASSCODE_NT_TO: 629,
  DLCLASSCODE_NT_NOTES: 630,
  DLCLASSCODE_TN_FROM: 631,
  DLCLASSCODE_TN_TO: 632,
  DLCLASSCODE_TN_NOTES: 633,
  DLCLASSCODE_D3_FROM: 634,
  DLCLASSCODE_D3_TO: 635,
  DLCLASSCODE_D3_NOTES: 636,
  ALT_DATE_OF_EXPIRY: 637,
  DLCLASSCODE_CD_FROM: 638,
  DLCLASSCODE_CD_TO: 639,
  DLCLASSCODE_CD_NOTES: 640,
  PAYMENT_PERIOD_TO: 643,
  PAYMENT_PERIOD_FROM: 642,
  ISSUER_IDENTIFICATION_NUMBER: 641,
  VACCINATION_CERTIFICATE_IDENTIFIER: 644,
  FIRST_NAME: 645,
  DATE_OF_ARRIVAL: 646,
  SECOND_NAME: 647,
  THIRD_NAME: 648,
  FOURTH_NAME: 649,
  LAST_NAME: 650,
  DLCLASSCODE_RM_FROM: 651,
  DLCLASSCODE_RM_NOTES: 652,
  DLCLASSCODE_RM_TO: 653,
  DLCLASSCODE_PW_FROM: 654,
  DLCLASSCODE_PW_NOTES: 655,
  DLCLASSCODE_PW_TO: 656,
  DLCLASSCODE_EB_FROM: 657,
  DLCLASSCODE_EB_NOTES: 658,
  DLCLASSCODE_EB_TO: 659,
  DLCLASSCODE_EC_FROM: 660,
  DLCLASSCODE_EC_NOTES: 661,
  DLCLASSCODE_EC_TO: 662,
  DLCLASSCODE_EC1_FROM: 663,
  DLCLASSCODE_EC1_NOTES: 664,
  DLCLASSCODE_EC1_TO: 665,
  PLACE_OF_BIRTH_CITY: 666,
  YEAR_OF_BIRTH: 667,
  YEAR_OF_EXPIRY: 668,
  GRANDFATHER_NAME_MATERNAL: 669,
  FIRST_SURNAME: 670,
  MONTH_OF_BIRTH: 671,
  ADDRESS_FLOOR_NUMBER: 672,
  ADDRESS_ENTRANCE: 673,
  ADDRESS_BLOCK_NUMBER: 674,
  ADDRESS_STREET_NUMBER: 675,
  ADDRESS_STREET_TYPE: 676,
  ADDRESS_CITY_SECTOR: 677,
  ADDRESS_COUNTY_TYPE: 678,
  ADDRESS_CITY_TYPE: 679,
  ADDRESS_BUILDING_TYPE: 680,
  DATE_OF_RETIREMENT: 681,
  DOCUMENT_STATUS: 682,
  SIGNATURE: 683,
  UNIQUE_CERTIFICATE_IDENTIFIER: 684,
  EMAIL: 685,
  DATE_OF_SPECIMEN_COLLECTION: 686,
  TYPE_OF_TESTING: 687,
  RESULT_OF_TESTING: 688,
  METHOD_OF_TESTING: 689,
  DIGITAL_TRAVEL_AUTHORIZATION_NUMBER: 690,
  DATE_OF_FIRST_POSITIVE_TEST_RESULT: 691,
  EF_CARD_ACCESS: 692,
  SHORT_FLIGHT_NUMBER: 693,
  AIRLINE_CODE: 694,
  MVC_AGENCY: 695,
  ISSUING_STATE_CODE_ALPHA_2: 696,
  NATIONALITY_CODE_ALPHA_2: 697,
  FIRST_ISSUE_DATE_CHECKDIGIT: 698,
  FIRST_ISSUE_DATE_CHECKSUM: 699,
}

FieldType.getTranslation = async function (value) {
  return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTranslation", ["FieldType", value]);
}


/***/ }),

/***/ "./src/results/visual_results/GraphicField.js":
/*!****************************************************!*\
  !*** ./src/results/visual_results/GraphicField.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphicField: () => (/* binding */ GraphicField)
/* harmony export */ });
/* harmony import */ var _Results_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Results.js */ "./src/results/Results.js");
/* harmony import */ var _GraphicFieldType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphicFieldType.js */ "./src/results/visual_results/GraphicFieldType.js");
/* harmony import */ var _visual_results_Lights_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visual_results/Lights.js */ "./src/results/visual_results/Lights.js");
/* harmony import */ var _visual_results_Rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visual_results/Rect.js */ "./src/results/visual_results/Rect.js");





class GraphicField {
    sourceType;
    fieldType;
    fieldName;
    light;
    lightName;
    pageIndex;
    originalPageIndex;
    value;
    fieldRect;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new GraphicField();
        
        result.sourceType = jsonObject["sourceType"];
        result.fieldType = jsonObject["fieldType"];
        result.fieldName = jsonObject["fieldName"];
        result.light = jsonObject["light"];
        result.lightName = jsonObject["lightName"];
        result.pageIndex = jsonObject["pageIndex"];
        result.originalPageIndex = jsonObject["originalPageIndex"];
        result.value = jsonObject["value"];
        result.fieldRect = _visual_results_Rect_js__WEBPACK_IMPORTED_MODULE_3__.Rect.fromJson(jsonObject["fieldRect"]);
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "fieldType": this.fieldType,
            "fieldName": this.fieldName,
            "light": this.light,
            "lightName": this.lightName,
            "pageIndex": this.pageIndex,
            "originalPageIndex": this.originalPageIndex,
            "value": this.value,
            "fieldRect": this.fieldRect?.toJson(),
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/GraphicFieldType.js":
/*!********************************************************!*\
  !*** ./src/results/visual_results/GraphicFieldType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphicFieldType: () => (/* binding */ GraphicFieldType)
/* harmony export */ });
const GraphicFieldType = {
    PORTRAIT: 201,
    FINGERPR: 202,
    EYE: 203,
    SIGNATURE: 204,
    BAR_CODE: 205,
    PROOF_OF_CITIZENSHIP: 206,
    DOCUMENT_IMAGE: 207,
    COLOR_DYNAMIC: 209,
    GHOST_PORTRAIT: 210,
    STAMP: 211,
    PORTRAIT_OF_CHILD: 212,
    CONTACT_CHIP: 213,
    OTHER: 250,
    FINGER_LEFT_THUMB: 300,
    FINGER_LEFT_INDEX: 301,
    FINGER_LEFT_MIDDLE: 302,
    FINGER_LEFT_RING: 303,
    FINGER_LEFT_LITTLE: 304,
    FINGER_RIGHT_THUMB: 305,
    FINGER_RIGHT_INDEX: 306,
    FINGER_RIGHT_MIDDLE: 307,
    FINGER_RIGHT_RING: 308,
    FINGER_RIGHT_LITTLE: 309
}; 

/***/ }),

/***/ "./src/results/visual_results/GraphicResult.js":
/*!*****************************************************!*\
  !*** ./src/results/visual_results/GraphicResult.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphicResult: () => (/* binding */ GraphicResult)
/* harmony export */ });
/* harmony import */ var _GraphicField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphicField.js */ "./src/results/visual_results/GraphicField.js");


class GraphicResult {
    fields;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new GraphicResult();
        
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (const item of jsonObject["fields"]) {
                const field = _GraphicField_js__WEBPACK_IMPORTED_MODULE_0__.GraphicField.fromJson(item);
                if (field != null) {
                    result.fields.push(field);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "fields": this.fields?.map(e => e.toJson()),
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/LCID.js":
/*!********************************************!*\
  !*** ./src/results/visual_results/LCID.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LCID: () => (/* binding */ LCID)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/bridge */ "./src/internal/bridge.js");


const LCID = {
    LATIN: 0,
    ABKHAZIAN_CYRILLIC: 10011,
    AFRIKAANS: 1078,
    ALBANIAN: 1052,
    AMHARIC: 1118,
    ARABIC_ALGERIA: 5121,
    ARABIC_BAHRAIN: 15361,
    ARABIC_EGYPT: 3073,
    ARABIC_IRAQ: 2049,
    ARABIC_JORDAN: 11265,
    ARABIC_KUWAIT: 13313,
    ARABIC_LEBANON: 12289,
    ARABIC_LIBYA: 4097,
    ARABIC_MOROCCO: 6145,
    ARABIC_OMAN: 8193,
    ARABIC_QATAR: 16385,
    ARABIC_SAUDI_ARABIA: 1025,
    ARABIC_SYRIA: 10241,
    ARABIC_TUNISIA: 7169,
    ARABIC_UAE: 14337,
    ARABIC_YEMEN: 9217,
    ARABIC_ARMENIAN: 1067,
    ARABIC_WORLD: 4096,
    AZERI_CYRILIC: 2092,
    AZERI_LATIN: 1068,
    ASSAMESE: 1101,
    BASQUE: 1069,
    BANK_CARD: 10003,
    BANK_CARD_CVV2: 10004,
    BANK_CARD_NAME: 10002,
    BANK_CARD_NUMBER: 10000,
    BANK_CARD_VALID_THRU: 10001,
    BELARUSIAN: 1059,
    BENGALI_BANGLADESH: 2117,
    BENGALI_INDIA: 1093,
    BULGARIAN: 1026,
    CATALAN: 1027,
    CHINESE_HONGKONG_SAR: 3076,
    CHINESE_MACAO_SAR: 5124,
    CHINESE: 2052,
    CHINESE_SINGAPORE: 4100,
    CHINESE_TAIWAN: 1028,
    CROATIAN: 1050,
    CZECH: 1029,
    DANISH: 1030,
    DIVEHI: 1125,
    DUTCH_BELGIUM: 2067,
    DUTCH_NETHERLANDS: 1043,
    ENGLISH_AUSTRALIA: 3081,
    ENGLISH_BELIZE: 10249,
    ENGLISH_CANADA: 4105,
    ENGLISH_CARRIBEAN: 9225,
    ENGLISH_IRELAND: 6153,
    ENGLISH_JAMAICA: 8201,
    ENGLISH_NEW_ZEALAND: 5129,
    ENGLISH_PHILIPPINES: 13321,
    ENGLISH_SOUTH_AFRICA: 7177,
    ENGLISH_TRINIDAD: 11273,
    ENGLISH_UK: 2057,
    ENGLISH_US: 1033,
    ENGLISH_ZIMBABWE: 12297,
    ESTONIAN: 1061,
    FAEROESE: 1080,
    FARSI: 1065,
    FINNISH: 1035,
    FRENCH_BELGIUM: 2060,
    FRENCH_CANADA: 3084,
    FRENCH_FRANCE: 1036,
    FRENCH_LUXEMBOURG: 5132,
    FRENCH_MONACO: 6156,
    FRENCH_SWITZERLAND: 4108,
    FYRO_MACEDONIAN: 1071,
    GALICIAN: 1110,
    GEORGIAN: 1079,
    GERMAN_AUSTRIA: 3079,
    GERMAN_GERMANY: 1031,
    GERMAN_LIECHTENSTEIN: 5127,
    GERMAN_LUXEMBOURG: 4103,
    GERMAN_SWITZERLAND: 2055,
    GREEK: 1032,
    GUJARATI: 1095,
    HEBREW: 1037,
    HINDI_INDIA: 1081,
    HUNGARIAN: 1038,
    ICELANDIC: 1039,
    INDONESIAN: 1057,
    ITALIAN_ITALY: 1040,
    ITALIAN_SWITZERLAND: 2064,
    JAPANESE: 1041,
    KANNADA: 1099,
    KASHMIRI: 1120,
    KAZAKH: 1087,
    KONKANI: 1111,
    KOREAN: 1042,
    KYRGYZ_CYRILICK: 1088,
    LAO: 1108,
    LATVIAN: 1062,
    LITHUANIAN: 1063,
    MALAY_MALAYSIA: 1086,
    MALAY_BRUNEI_DARUSSALAM: 2110,
    MARATHI: 1102,
    MONGOLIAN_CYRILIC: 1104,
    NORWEGIAN_BOKMAL: 1044,
    NORWEGIAN_NYORSK: 2068,
    PASHTO: 1123,
    POLISH: 1045,
    PORTUGUESE_BRAZIL: 1046,
    PORTUGUESE_PORTUGAL: 2070,
    PUNJABI: 1094,
    RHAETO_ROMANIC: 1047,
    ROMANIAN: 1048,
    RUSSIAN: 1049,
    SANSKRIT: 1103,
    SERBIAN_CYRILIC: 3098,
    SERBIAN_LATIN: 2074,
    SINDHI: 2137,
    SINDHI_INDIA: 1113,
    SINHALA: 1115,
    SLOVAK: 1051,
    SLOVENIAN: 1060,
    SPANISH_ARGENTINA: 11274,
    SPANISH_BOLIVIA: 16394,
    SPANISH_CHILE: 13322,
    SPANICH_COLOMBIA: 9226,
    SPANISH_COSTA_RICA: 5130,
    SPANISH_DOMINICAN_REPUBLIC: 7178,
    SPANISH_ECUADOR: 12298,
    SPANISH_EL_SALVADOR: 17418,
    SPANISH_GUATEMALA: 4106,
    SPANISH_HONDURAS: 18442,
    SPANISH_MEXICO: 2058,
    SPANISH_NICARAGUA: 19466,
    SPANISH_PANAMA: 6154,
    SPANISH_PARAGUAY: 15370,
    SPANISH_PERU: 10250,
    SPANISH_PUERTO_RICO: 20490,
    SPANISH_TRADITIONAL_SORT: 1034,
    SPANISH_INTERNATIONAL_SORT: 3082,
    SPANISH_URUGUAY: 14346,
    SPANISH_VENEZUELA: 8202,
    SWAHILI: 1089,
    SWEDISH: 1053,
    SWEDISH_FINLAND: 2077,
    SYRIAC: 1114,
    TAMIL: 1097,
    TATAR: 1092,
    TELUGU: 1098,
    THAI_THAILAND: 1054,
    TURKISH: 1055,
    TAJIK_CYRILLIC: 1064,
    TURKMEN: 1090,
    UKRAINIAN: 1058,
    URDU: 1056,
    UZBEK_CYRILIC: 2115,
    UZBEK_LATIN: 1091,
    VIETNAMESE: 1066,
    CTC_SIMPLIFIED: 50001,
    CTC_TRADITIONAL: 50002,
    MALTESE: 1082,
    BURMESE: 1109,
    KHMER: 1107,
    KARAKALPAK_LATIN: 10012,
    MALAYALAM: 1100,
    NEPALI: 1121,
    ORIYA: 1096,
    URDU_DETECTION: 10560
};

LCID.getTranslation = async function (value) {
    return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTranslation", ["LCID", value]);
}


/***/ }),

/***/ "./src/results/visual_results/Lights.js":
/*!**********************************************!*\
  !*** ./src/results/visual_results/Lights.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lights: () => (/* binding */ Lights)
/* harmony export */ });
const Lights = {
    NONE: 0,
    UV: 128,
    WHITE_FULL: 6,
    IR: 16777216,
    IR_TOP: 8,
    IR_SIDE: 16,
    IR_FULL: 8 | 16,
    OVD: 67108864,
    WHITE_FULL_OVD: 6 | 67108864
}; 

/***/ }),

/***/ "./src/results/visual_results/RFIDOrigin.js":
/*!**************************************************!*\
  !*** ./src/results/visual_results/RFIDOrigin.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDOrigin: () => (/* binding */ RFIDOrigin)
/* harmony export */ });
class RFIDOrigin {
    dg;
    dgTag;
    entryView;
    tagEntry;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new RFIDOrigin();
        
        result.dg = jsonObject["dg"];
        result.dgTag = jsonObject["dgTag"];
        result.entryView = jsonObject["entryView"];
        result.tagEntry = jsonObject["tagEntry"];
        
        return result;
    }

    toJson() {
        return {
            "dg": this.dg,
            "dgTag": this.dgTag,
            "entryView": this.entryView,
            "tagEntry": this.tagEntry,
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/Rect.js":
/*!********************************************!*\
  !*** ./src/results/visual_results/Rect.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
class Rect {
    bottom;
    top;
    left;
    right;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Rect();
        
        result.bottom = jsonObject["bottom"];
        result.top = jsonObject["top"];
        result.left = jsonObject["left"];
        result.right = jsonObject["right"];
        
        return result;
    }
    
    toJson() {
        return {
            "bottom": this.bottom,
            "top": this.top,
            "left": this.left,
            "right": this.right,
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/Symbol.js":
/*!**********************************************!*\
  !*** ./src/results/visual_results/Symbol.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Symbol: () => (/* binding */ Symbol)
/* harmony export */ });
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ "./src/results/visual_results/Rect.js");


class Symbol {
    code;
    rect;
    probability;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Symbol();
        
        result.code = jsonObject["code"];
        result.rect = _Rect_js__WEBPACK_IMPORTED_MODULE_0__.Rect.fromJson(jsonObject["rect"]);
        result.probability = jsonObject["probability"];
        
        return result;
    }

    toJson() {
        return {
            "rect": this.rect?.toJson(),
            "code": this.code,
            "probability": this.probability,
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/TextField.js":
/*!*************************************************!*\
  !*** ./src/results/visual_results/TextField.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextField: () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var _visual_results_FieldType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visual_results/FieldType.js */ "./src/results/visual_results/FieldType.js");
/* harmony import */ var _LCID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LCID.js */ "./src/results/visual_results/LCID.js");
/* harmony import */ var _status_CheckResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status/CheckResult.js */ "./src/results/status/CheckResult.js");
/* harmony import */ var _visual_results_Value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visual_results/Value.js */ "./src/results/visual_results/Value.js");
/* harmony import */ var _Comparison_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comparison.js */ "./src/results/visual_results/Comparison.js");
/* harmony import */ var _visual_results_Validity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../visual_results/Validity.js */ "./src/results/visual_results/Validity.js");







class TextField {
    fieldType;
    fieldName;
    lcid;
    lcidName;
    value;
    getValue;
    values;
    status;
    comparisonList;
    validityList;
    comparisonStatus;
    validityStatus;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new TextField();
        
        result.fieldType = jsonObject["fieldType"];
        result.fieldName = jsonObject["fieldName"];
        result.lcid = jsonObject["lcid"];
        result.lcidName = jsonObject["lcidName"];
        result.value = jsonObject["value"];
        result.getValue = _visual_results_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromJson(jsonObject["getValue"]);
        result.status = jsonObject["status"];
        result.comparisonStatus = jsonObject["comparisonStatus"];
        result.validityStatus = jsonObject["validityStatus"];
        
        result.values = [];
        if (jsonObject["values"] != null) {
            for (const item of jsonObject["values"]) {
                const value = _visual_results_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromJson(item);
                if (value != null) {
                    result.values.push(value);
                }
            }
        }
        
        result.comparisonList = [];
        if (jsonObject["comparisonList"] != null) {
            for (const item of jsonObject["comparisonList"]) {
                const comparison = _Comparison_js__WEBPACK_IMPORTED_MODULE_4__.Comparison.fromJson(item);
                if (comparison != null) {
                    result.comparisonList.push(comparison);
                }
            }
        }
        
        result.validityList = [];
        if (jsonObject["validityList"] != null) {
            for (const item of jsonObject["validityList"]) {
                const validity = _visual_results_Validity_js__WEBPACK_IMPORTED_MODULE_5__.Validity.fromJson(item);
                if (validity != null) {
                    result.validityList.push(validity);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "fieldType": this.fieldType,
            "fieldName": this.fieldName,
            "lcid": this.lcid,
            "lcidName": this.lcidName,
            "value": this.value,
            "getValue": this.getValue?.toJson(),
            "values": this.values?.map(e => e.toJson()),
            "status": this.status,
            "comparisonList": this.comparisonList?.map(e => e.toJson()),
            "validityList": this.validityList?.map(e => e.toJson()),
            "comparisonStatus": this.comparisonStatus,
            "validityStatus": this.validityStatus,
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/TextResult.js":
/*!**************************************************!*\
  !*** ./src/results/visual_results/TextResult.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextResult: () => (/* binding */ TextResult)
/* harmony export */ });
/* harmony import */ var _status_CheckResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/CheckResult.js */ "./src/results/status/CheckResult.js");
/* harmony import */ var _visual_results_TextSource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visual_results/TextSource.js */ "./src/results/visual_results/TextSource.js");
/* harmony import */ var _TextField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.js */ "./src/results/visual_results/TextField.js");




class TextResult {
    status;
    comparisonStatus;
    validityStatus;
    availableSourceList;
    fields;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new TextResult();
        
        result.status = jsonObject["status"];
        result.comparisonStatus = jsonObject["comparisonStatus"];
        result.validityStatus = jsonObject["validityStatus"];
        
        result.availableSourceList = [];
        if (jsonObject["availableSourceList"] != null) {
            for (const item of jsonObject["availableSourceList"]) {
                const source = _visual_results_TextSource_js__WEBPACK_IMPORTED_MODULE_1__.TextSource.fromJson(item);
                if (source != null) {
                    result.availableSourceList.push(source);
                }
            }
        }
        
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (const item of jsonObject["fields"]) {
                const field = _TextField_js__WEBPACK_IMPORTED_MODULE_2__.TextField.fromJson(item);
                if (field != null) {
                    result.fields.push(field);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "status": this.status,
            "comparisonStatus": this.comparisonStatus,
            "validityStatus": this.validityStatus,
            "availableSourceList": this.availableSourceList?.map(e => e.toJson()),
            "fields": this.fields?.map(e => e.toJson()),
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/TextSource.js":
/*!**************************************************!*\
  !*** ./src/results/visual_results/TextSource.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextSource: () => (/* binding */ TextSource)
/* harmony export */ });
/* harmony import */ var _Results_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Results.js */ "./src/results/Results.js");
/* harmony import */ var _status_CheckResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../status/CheckResult.js */ "./src/results/status/CheckResult.js");



class TextSource {
    sourceType;
    source;
    validityStatus;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new TextSource();
        
        result.sourceType = jsonObject["sourceType"];
        result.source = jsonObject["source"];
        result.validityStatus = jsonObject["validityStatus"];
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "source": this.source,
            "validityStatus": this.validityStatus,
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/Validity.js":
/*!************************************************!*\
  !*** ./src/results/visual_results/Validity.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validity: () => (/* binding */ Validity)
/* harmony export */ });
/* harmony import */ var _Results_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Results.js */ "./src/results/Results.js");
/* harmony import */ var _status_CheckResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../status/CheckResult.js */ "./src/results/status/CheckResult.js");



class Validity {
    sourceType;
    status;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Validity();
        
        result.sourceType = jsonObject["sourceType"];
        result.status = jsonObject["status"];
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "status": this.status,
        }
    }
} 

/***/ }),

/***/ "./src/results/visual_results/Value.js":
/*!*********************************************!*\
  !*** ./src/results/visual_results/Value.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Value: () => (/* binding */ Value)
/* harmony export */ });
/* harmony import */ var _Results_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Results.js */ "./src/results/Results.js");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect.js */ "./src/results/visual_results/Rect.js");
/* harmony import */ var _RFIDOrigin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RFIDOrigin.js */ "./src/results/visual_results/RFIDOrigin.js");
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Symbol.js */ "./src/results/visual_results/Symbol.js");





class Value {
    sourceType;
    value;
    originalValue;
    pageIndex;
    boundRect;
    rfidOrigin;
    originalSymbols = [];
    probability;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Value();
        
        result.sourceType = jsonObject["sourceType"];
        result.value = jsonObject["value"];
        result.originalValue = jsonObject["originalValue"];
        result.pageIndex = jsonObject["pageIndex"];
        result.boundRect = _Rect_js__WEBPACK_IMPORTED_MODULE_1__.Rect.fromJson(jsonObject["boundRect"]);
        result.rfidOrigin = _RFIDOrigin_js__WEBPACK_IMPORTED_MODULE_2__.RFIDOrigin.fromJson(jsonObject["rfidOrigin"]);
        result.probability = jsonObject["probability"];
        
        if (jsonObject["originalSymbols"] != null) {
            for (const item of jsonObject["originalSymbols"]) {
                const symbol = _Symbol_js__WEBPACK_IMPORTED_MODULE_3__.Symbol.fromJson(item);
                if (symbol != null) {
                    result.originalSymbols.push(symbol);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "value": this.value,
            "originalValue": this.originalValue,
            "pageIndex": this.pageIndex,
            "boundRect": this.boundRect?.toJson(),
            "rfidOrigin": this.rfidOrigin?.toJson(),
            "originalSymbols": this.originalSymbols?.map(e => e.toJson()),
            "probability": this.probability,
        }
    }
} 

/***/ }),

/***/ "./src/rfid/PAAttribute.js":
/*!*********************************!*\
  !*** ./src/rfid/PAAttribute.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAAttribute: () => (/* binding */ PAAttribute)
/* harmony export */ });
class PAAttribute {
    type
    value

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new PAAttribute()

        result.type = jsonObject["type"] ?? ""
        result.value = jsonObject["value"] ?? ""

        return result
    }

    toJson() {
        return {
            "type": this.type,
            "value": this.value,
        }
    }
}


/***/ }),

/***/ "./src/rfid/PAResourcesIssuer.js":
/*!***************************************!*\
  !*** ./src/rfid/PAResourcesIssuer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAResourcesIssuer: () => (/* binding */ PAResourcesIssuer)
/* harmony export */ });
/* harmony import */ var _PAAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PAAttribute */ "./src/rfid/PAAttribute.js");


class PAResourcesIssuer {
    data
    friendlyName
    attributes

    constructor() {
        this.attributes = []
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new PAResourcesIssuer()

        result.data = jsonObject["data"]
        result.friendlyName = jsonObject["friendlyName"]
        for (const item of jsonObject["attributes"]) {
            const attribute = _PAAttribute__WEBPACK_IMPORTED_MODULE_0__.PAAttribute.fromJson(item)
            if (attribute != null) {
                result.attributes.push(attribute)
            }
        }

        return result
    }

    toJson() {
        return {
            "data": this.data,
            "friendlyName": this.friendlyName,
            "attributes": this.attributes?.map(e => e.toJson()),
        }
    }
}


/***/ }),

/***/ "./src/rfid/PKDCertificate.js":
/*!************************************!*\
  !*** ./src/rfid/PKDCertificate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PKDCertificate: () => (/* binding */ PKDCertificate),
/* harmony export */   PKDResourceType: () => (/* binding */ PKDResourceType)
/* harmony export */ });
class PKDCertificate {
    binaryData
    resourceType
    privateKey

    constructor(binaryData, resourceType, options) {
        this.binaryData = binaryData
        this.resourceType = resourceType
        this.privateKey = options?.privateKey
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new PKDCertificate(
            jsonObject["binaryData"],
            jsonObject["resourceType"],
            { privateKey: jsonObject["privateKey"] }
        )
    }

    toJson() {
        return {
            "binaryData": this.binaryData,
            "resourceType": this.resourceType,
            "privateKey": this.privateKey,
        }
    }
}

const PKDResourceType = {
    CERTIFICATE_PA: 0,
    CERTIFICATE_TA: 1,
    LDIF: 2,
    CRL: 3,
    ML: 4,
    DEFL: 5,
    DEVL: 6,
    BL: 7,

    getType(value) {
        switch (value) {
            case "pa":
                return PKDResourceType.CERTIFICATE_PA
            case "ta":
                return PKDResourceType.CERTIFICATE_TA
            case "ldif":
                return PKDResourceType.LDIF
            case "crl":
                return PKDResourceType.CRL
            case "ml":
                return PKDResourceType.ML
            case "defl":
                return PKDResourceType.DEFL
            case "devl":
                return PKDResourceType.DEVL
            case "bl":
                return PKDResourceType.BL
            default:
                return PKDResourceType.CERTIFICATE_PA
        }
    }
}


/***/ }),

/***/ "./src/rfid/RFIDErrorCodes.js":
/*!************************************!*\
  !*** ./src/rfid/RFIDErrorCodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDErrorCodes: () => (/* binding */ RFIDErrorCodes)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/bridge */ "./src/internal/bridge.js");


const RFIDErrorCodes = {
    UNDEFINED: 0,
    NO_ERROR: 1,
    ALREADY_DONE: 2,
    FAILED: -1,
    NO_CHIP_DETECTED: -2147418111,
    NOT_AVAILABLE: -2147418110,
    INVALID_PARAMETER: -2147418108,
    NOT_INITIALIZED: -2147418107,
    NOT_ENOUGH_MEMORY: -2147418106,
    INVALID_DIRECTORY: -2147418104,
    UNKNOWN_COMMAND: -2147418103,
    FILE_IO_ERROR: -2147418102,
    BUSY: -2147418101,
    OLD_FIRMWARE: -2147418100,
    PCSC_FAILED: -2147352576,
    PCSC_READER_NOT_AVAILABLE: -2147352575,
    PCSC_CANT_CONNECT_CARD: -2147352574,
    PCSC_CARD_IS_NOT_CONNECTED: -2147352573,
    PCSC_OPERATION_CANCELLED: -2147352572,
    PCSC_CARD_IS_BUSY: -2147352571,
    PCSC_FAILED_SCARD: -2147352570,
    PCSC_EXT_LE_FAILED: -2147352560,
    LAYER6_SECURITY_MANAGER: -2046820352,
    LAYER6_APP_SELECTION_FAILURE: -2046820351,
    LAYER6_MUTUAL_AUTH_MAC_FAIL: -2046819840,
    LAYER6_MUTUAL_AUTH_ENC_FAIL: -2046819839,
    LAYER6_MUTUAL_AUTH_FAILURE: -2046819838,
    LAYER6_MUTUAL_AUTH_FAILURE_DATA: -2046819837,
    LAYER6_SM_DO_8E_MISSING: -2046819584,
    LAYER6_SM_DO_87_MISSING: -2046819583,
    LAYER6_SM_DO_99_MISSING: -2046819582,
    LAYER6_SM_MAC_INCORRECT: -2046819581,
    LAYER6_SM_DO_87_INCORRECT: -2046819580,
    LAYER6_NON_TLV_RESPONSE_DATA: -2046819328,
    LAYER6_WRONG_RND_ICC_LENGTH: -2046819327,
    LAYER6_INT_AUTH_FAILURE: -2046819326,
    LAYER6_MSE_SET_KAT_FAILURE: -2046819325,
    LAYER6_MSE_SET_DST_FAILURE: -2046819324,
    LAYER6_PSO_CERTIFICATE_FAILURE: -2046819323,
    LAYER6_MSE_SET_AT_FAILURE: -2046819322,
    LAYER6_GET_CHALLENGE_FAILURE: -2046819321,
    LAYER6_EXT_AUTH_FAILURE: -2046819320,
    LAYER6_GENERAL_AUTH_FAILURE: -2046819319,
    LAYER6_FILE_NOT_FOUND: -2147456638,
    LAYER6_FILE_EOF1: -2147458142,
    LAYER6_FILE_EOF2: -2147456256,
    LAYER6_INCORRECT_PARAMS: -2147456640,
    LAYER6_NO_REFERENCE_DATA: -2147456632,
    LAYER6_PWD_SUSPEND: -2147458143,
    LAYER6_PWD_BLOCKED: -2147458144,
    LAYER6_PWD_DEACTIVATED: -2147458141,
    LAYER6_PWD_BLOCKED2: -2147457437,
    LAYER6_PWD_DEACTIVATED2: -2147457436,
    LAYER6_PWD_SUSPEND2: -2147457435,
    LAYER6_PWD_FAILED: -2146380864,
    NOT_PERFORMED: -2100080640,
    SESSION_IS_CLOSED: -2100080639,
    SESSION_TERMINAL_UNSUPPORTED_OPERATION: -2100080638,
    SESSION_TERMINAL_TYPE_UNKNOWN: -2100080624,
    SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: -2100080623,
    SESSION_TERMINAL_TYPE_NOT_SET: -2100080622,
    SESSION_PROCEDURE_TYPE_UNKNOWN: -2100080621,
    Session_Procedure_Type_Unsupported: -2100080620,
    SESSION_PROCEDURE_TYPE_NOT_SET: -2100080619,
    SESSION_ACCESS_KEY_UNKNOWN_TYPE: -2100080618,
    SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: -2100080617,
    SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: -2100080616,
    SESSION_ACCESS_KEY_RESTRICTED: -2100080615,
    SESSION_ACCESS_KEY_INCORRECT_DATA: -2100080614,
    SESSION_ACCESS_KEY_NOT_SET: -2100080613,
    SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: -2100080612,
    SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: -2100080608,
    SESSION_ACCESS_CONTROL_REQUIRES_SM: -2100080607,
    SESSION_ACCESS_CONTROL_REQUIRES_PACE: -2100080606,
    SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: -2100080605,
    SESSION_ACCESS_CONTROL_REQUIRES_TA: -2100080604,
    SESSION_ACCESS_CONTROL_REQUIRES_CA: -2100080603,
    SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: -2100080602,
    SESSION_ACCESS_CONTROL_CA_FAILED: -2100080601,
    SESSION_ACCESS_CONTROL_TA_FAILED: -2100080600,
    SESSION_ACCESS_CONTROL_AA_FAILED: -2100080599,
    SESSION_ACCESS_CONTROL_RI_FAILED: -2100080598,
    SESSION_PA_SIGNATURE_CHECK_FAILED: -2100080592,
    SESSION_PA_HASH_CHECK_FAILED: -2100080591,
    SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: -2100080576,
    SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: -2100080575,
    SESSION_INVALID_AUX_DATA_COMMUNITY_ID: -2100080574,
    SESSION_E_SIGN_REQUIRES_APP_SELECTION: -2100080560,
    SESSION_E_SIGN_PIN_NOT_SET: -2100080559,
    SESSION_E_SIGN_PIN_NOT_VERIFIED: -2100080558,
    SESSION_INCORRECT_DATA: -2100080544,
    SESSION_FILE_NOT_ENOUGH_DATA: -2099949568,
    SESSION_FILE_INCORRECT_DATA: -2099884032,
    SESSION_FILE_UNEXPECTED_DATA: -2099818496,
    SESSION_FILE_CONTENTS_UNEXPECTED_DATA: -2099752960,
    SESSION_FILE_WRONG_TAG: -2099687424,
    SESSION_FILE_CANT_USE_DATA: -2099621888,
    SESSION_FILE_CANT_READ_DATA: -2099556352,
    SESSION_FILE_ACCESS_DENIED: -2099490816,
    LAYER34_NO_ERROR: -2080374784,
    LAYER34_TIME_OUT: -2080309248,
    LAYER34_COLLISION: -2080243712,
    LAYER34_CRC: -2080178176,
    LAYER34_DATA_INTEGRITY: -2080112640,
    LAYER34_DATA_LENGTH: -2080047104,
    Layer34_RFU: -2079981568,
    LAYER34_COLLISION_TOO_MANY: -2079916032,
    LAYER34_PROTOCOL_B: -2079850496,
    LAYER34_DATA_CONTENTS: -2079784960,
    LAYER34_PROTOCOL: -2079719424,
    LAYER34_GLOBAL_TIME_OUT: -2079653888,
    LAYER34_MIFARE_AUTH: -2079588352,
    LAYER34_SAM_ERROR: -2079522816,
    LAYER34_SAM_COLLISION: -2079457280,
    LAYER34_SAM_ACKNOWLEDGE: -2079391744
}

RFIDErrorCodes.getTranslation = async function (value) {
    return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getTranslation", ["RFIDErrorCodes", value]);
}


/***/ }),

/***/ "./src/rfid/RFIDNotification.js":
/*!**************************************!*\
  !*** ./src/rfid/RFIDNotification.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RFIDNotification: () => (/* binding */ RFIDNotification),
/* harmony export */   RFIDNotificationCodes: () => (/* binding */ RFIDNotificationCodes)
/* harmony export */ });
/* harmony import */ var _results_rfid_RFIDDataFileType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../results/rfid/RFIDDataFileType */ "./src/results/rfid/RFIDDataFileType.js");


class RFIDNotification {
    notificationCode
    dataFileType
    progress

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new RFIDNotification()

        result.notificationCode = jsonObject["notificationCode"]
        result.dataFileType = jsonObject["dataFileType"]
        result.progress = jsonObject["progress"]

        return result
    }

    toJson() {
        return {
            "notificationCode": this.notificationCode,
            "dataFileType": this.dataFileType,
            "progress": this.progress,
        }
    }
}

const RFIDNotificationCodes = {
    ERROR: 65536,
    DOCUMENT_READY: 65537,
    READ_PROTOCOL4: 65539,
    READ_PROTOCOL3: 65546,
    PROGRESS: 65547,
    TA_STEP: 65550,
    SM_REQUIRED: 65551,
    ISO_ERROR: 69632,
    PA_REQUEST: 77824,
    SM_ESTABLISHED: 81935,
    PCSC_READER_DISCONNECTED: 131072,
    PCSC_READER_LIST_CHANGED: 131073,
    PCSC_BYTES_RECEIVED: 131074,
    PCSC_TOTAL_READING_TIME: 131075,
    PCSC_DATA_RECEIVED: 131076,
    PCSC_BYTES_SENT: 131077,
    PCSC_TOTAL_READING_SPEED: 131078,
    PCSC_TOTAL_PROCESS_TIME: 131079,
    PCSC_READER_LIST_CHANGING: 131080,
    PCSC_EXT_LENGTH_SUPPORT: 131088,
    PA_CERTIFICATE_CHAIN: 131089,
    PA_CERTIFICATE_CHAIN_ITEM: 131090,
    SCENARIO: 131104,
    PCSC_READING_DATAGROUP: 196608,
    PCSC_FILE_NOT_FOUND: 262144,
    PCSC_END_OF_FILE: 327680,
    PCSC_FILE_ACCESS_DENIED: 393216,
    PCSC_APPLICATION_SELECTED: 458752,
    AC_PROCEDURE_START: 524288,
    AC_PROCEDURE_FINISH: 589824,
    PA_SECURITY_OBJECT_CHECK: 655360,
    PA_FILE_CHECK: 720896,
    PCSC_UPDATING_DATAGROUP: 786432,
    AUXILIARY_DATA_VALIDATION: 851968,
    RI_SECTOR_ID: 917504,
    BIOMETRICS_EMPTY_PLACEHOLDER: 983040
}


/***/ }),

/***/ "./src/rfid/TAChallenge.js":
/*!*********************************!*\
  !*** ./src/rfid/TAChallenge.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TAChallenge: () => (/* binding */ TAChallenge)
/* harmony export */ });
class TAChallenge {
    data
    auxPCD
    challengePICC
    hashPK
    idPICC

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new TAChallenge()

        result.data = jsonObject["data"]
        result.auxPCD = jsonObject["auxPCD"] ?? ""
        result.challengePICC = jsonObject["challengePICC"] ?? ""
        result.hashPK = jsonObject["hashPK"] ?? ""
        result.idPICC = jsonObject["idPICC"] ?? ""

        return result
    }

    toJson() {
        return {
            "data": this.data,
            "auxPCD": this.auxPCD,
            "challengePICC": this.challengePICC,
            "hashPK": this.hashPK,
            "idPICC": this.idPICC,
        }
    }
}


/***/ }),

/***/ "./src/rfid/TccParams.js":
/*!*******************************!*\
  !*** ./src/rfid/TccParams.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TccParams: () => (/* binding */ TccParams)
/* harmony export */ });
/** TCC service related parameters for RFID session configuration. */
class TccParams {
    serviceUrlTA
    serviceUrlPA
    pfxCertUrl
    pfxPassPhrase
    pfxCert

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new TccParams()

        result.serviceUrlTA = jsonObject["serviceUrlTA"]
        result.serviceUrlPA = jsonObject["serviceUrlPA"]
        result.pfxCertUrl = jsonObject["pfxCertUrl"]
        result.pfxPassPhrase = jsonObject["pfxPassPhrase"]
        result.pfxCert = jsonObject["pfxCert"]

        return result
    }

    toJson() {
        return {
            "serviceUrlTA": this.serviceUrlTA,
            "serviceUrlPA": this.serviceUrlPA,
            "pfxCertUrl": this.pfxCertUrl,
            "pfxPassPhrase": this.pfxPassPhrase,
            "pfxCert": this.pfxCert,
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;