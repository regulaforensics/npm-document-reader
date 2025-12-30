import { exec } from '../../internal/bridge';
import { DocumentReader } from '../../index';
import { ImageQA } from './ImageQA';
import { RFIDParams } from './RFIDParams';
import { FaceApiParams } from './FaceApiParams';
import { BackendProcessingConfig } from './BackendProcessingConfig';
import { AuthenticityParams } from './AuthenticityParams';

export class ProcessParams {
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

    get returnTransliteratedFields() { return this._returnTransliteratedFields; }
    set returnTransliteratedFields(val) {
        this._returnTransliteratedFields = val;
        this._set({ "returnTransliteratedFields": val });
    }

    get checkCaptureProcessIntegrity() { return this._checkCaptureProcessIntegrity; }
    set checkCaptureProcessIntegrity(val) {
        this._checkCaptureProcessIntegrity = val;
        this._set({ "checkCaptureProcessIntegrity": val });
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

    get fieldTypesIgnoreFilter() { return this._fieldTypesIgnoreFilter; }
    set fieldTypesIgnoreFilter(val) {
        this._fieldTypesIgnoreFilter = val;
        this._set({ "fieldTypesIgnoreFilter": val });
    }

    _imageQA = new ImageQA();
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

    _authenticityParams = new AuthenticityParams();
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
        result._returnTransliteratedFields = jsonObject["returnTransliteratedFields"];
        result._checkCaptureProcessIntegrity = jsonObject["checkCaptureProcessIntegrity"];
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
        result._fieldTypesIgnoreFilter = jsonObject["fieldTypesIgnoreFilter"];
        result._imageQA = ImageQA.fromJson(jsonObject["imageQA"]);
        result._rfidParams = RFIDParams.fromJson(jsonObject["rfidParams"]);
        result._faceApiParams = FaceApiParams.fromJson(jsonObject["faceApiParams"]);
        result._backendProcessingConfig = BackendProcessingConfig.fromJson(jsonObject["backendProcessingConfig"]);
        result._authenticityParams = AuthenticityParams.fromJson(jsonObject["authenticityParams"]);
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
            "returnTransliteratedFields": this.returnTransliteratedFields,
            "checkCaptureProcessIntegrity": this.checkCaptureProcessIntegrity,
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
            "fieldTypesIgnoreFilter": this.fieldTypesIgnoreFilter,
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
        if (this === DocumentReader.instance.processParams)
            exec("setProcessParams", [json]);
    }
}

export const MeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1
};

export const MRZFormat = {
    FORMAT_1X30: "1x30",
    FORMAT_3X30: "3x30",
    FORMAT_2X36: "2x36",
    FORMAT_2X44: "2x44",
    FORMAT_1X6: "1x6",
    FORMAT_2X30: "2x30"
};

export const LogLevel = {
    FatalError: "FatalError",
    Error: "Error",
    Warning: "Warning",
    Info: "Info",
    Debug: "Debug"
};

export const MrzDetectionModes = {
    DEFAULT: 0,
    RESIZE_BINARIZE_WINDOW: 1,
    BLUR_BEFORE_BINARIZATION: 2
};
