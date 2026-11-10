import { compare } from './utils'
import {
    InitConfig,
    OnlineProcessingConfig,
    ImageInputData,
    RecognizeConfig,
    ScannerConfig,
    FinalizeConfig,
    FaceApiSearchParams,
    FaceApiParams,
    LivenessParams,
    AuthenticityPropertiesParams,
    AuthenticityParams,
    GlaresCheckParams,
    OcclusionCheckParams,
    RFIDParams,
    ImageQA,
    BackendProcessingConfig,
    Bsi,
    ProcessParams,
    EDLDataGroups,
    EPassportDataGroups,
    EIDDataGroups,
    DTCDataGroup,
    RFIDScenario,
    CustomizationColors,
    CustomizationFonts,
    CustomizationImages,
    CustomizationTimings,
    CustomizationContentModes,
    CustomizationMatrices,
    Customization,
    Functionality,
    DocumentsDatabase,
    DocReaderVersion,
    DocReaderScenario,
    License,
    DocReaderException,
    RFIDException,
    PrepareProgress,
    AuthenticityElement,
    AuthenticityCheck,
    AuthenticityResult,
    PDF417Info,
    BarcodeField,
    BarcodeResult,
    ImageQuality,
    ImageQualityGroup,
    AccessControlProcedureType,
    FileData,
    CertificateData,
    SecurityObjectCertificates,
    File,
    Application,
    RFIDValue,
    Attribute,
    Authority,
    CardProperties,
    Extension,
    RFIDValidity,
    CertificateChain,
    DataField,
    SignerInfo,
    SecurityObject,
    RFIDSessionData,
    BytesData,
    VDSNCData,
    DocFeature,
    VDSData,
    OpticalStatus,
    AgeStatus,
    RFIDStatus,
    ResultsStatus,
    Comparison,
    Rect,
    GraphicField,
    GraphicResult,
    RFIDOrigin,
    Symbol,
    Validity,
    Value,
    TextField,
    TextSource,
    TextResult,
    DocumentType,
    Coordinate,
    Position,
    TransactionInfo,
    Results,
    RFIDNotification,
    PAAttribute,
    PAResourcesIssuer,
    PKDCertificate,
    TAChallenge,
    PACEProtocol,
    CAProtocol,
    TccParams,
    DeviceRetrievalMethod,
    DeviceEngagement,
    NameSpaceMDL,
    DocumentRequestMDL,
    DocumentRequest18013MDL,
    DataRetrieval,
} from '@regulaforensics/document-reader/www/capacitor'
import {
    initConfig,
    onlineProcessingConfig,
    imageInputData,
    recognizeConfig,
    recognizeConfig2,
    recognizeConfig3,
    scannerConfig,
    finalizeConfig,
    faceApiSearchParams,
    faceApiParams,
    livenessParams,
    propertiesParams,
    authenticityParams,
    glaresCheckParams,
    occlusionCheckParams,
    rfidParams,
    imageQA,
    backendProcessingConfig,
    bsi,
    processParams,
    eDLDataGroups,
    ePassportDataGroups,
    eIDDataGroups,
    dtcDataGroup,
    rfidScenario,
    customizationColors,
    customizationFonts,
    customizationImages,
    customizationTimings,
    customizationContentModes,
    customizationMatrices,
    customization,
    functionality,
    documentsDatabase,
    docReaderVersion,
    docReaderScenario,
    license,
    docReaderException,
    rfidException,
    prepareProgress,
    authenticityElement,
    authenticityCheck,
    authenticityResult,
    pdf417Info,
    barcodeField,
    barcodeResult,
    imageQuality,
    imageQualityGroup,
    accessControlProcedureType,
    fileData,
    certificateData,
    securityObjectCertificates,
    file,
    application,
    rfidValue,
    attribute,
    authority,
    cardProperties,
    extension,
    rfidValidity,
    certificateChain,
    dataField,
    signerInfo,
    securityObject,
    rfidSessionData,
    bytesData,
    vdsncData,
    docFeature,
    vdsData,
    opticalStatus,
    ageStatus,
    rfidStatus,
    resultsStatus,
    comparison,
    rect,
    graphicField,
    graphicResult,
    rfidOrigin,
    symbol,
    validity,
    value,
    textField,
    textSource,
    textResult,
    documentType,
    coordinate,
    position,
    transactionInfo,
    results,
    rfidNotification,
    paAttribute,
    paResourcesIssuer,
    pkdCertificate,
    taChallenge,
    paceProtocol,
    caProtocol,
    tccParams,
    deviceRetrievalMethod,
    deviceEngagement,
    nameSpaceMDL,
    documentRequestMDL,
    documentRequest18013MDL,
    dataRetrieval,
} from './json'

compare('initConfig', initConfig, InitConfig.fromJson);
compare('onlineProcessingConfig', onlineProcessingConfig, OnlineProcessingConfig.fromJson);
compare('imageInputData', imageInputData, ImageInputData.fromJson);
compare('recognizeConfig', recognizeConfig, RecognizeConfig.fromJson);
compare('recognizeConfig2', recognizeConfig2, RecognizeConfig.fromJson);
compare('recognizeConfig3', recognizeConfig3, RecognizeConfig.fromJson);
compare('scannerConfig', scannerConfig, ScannerConfig.fromJson);
compare('finalizeConfig', finalizeConfig, FinalizeConfig.fromJson);
compare('faceApiSearchParams', faceApiSearchParams, FaceApiSearchParams.fromJson);
compare('faceApiParams', faceApiParams, FaceApiParams.fromJson);
compare('livenessParams', livenessParams, LivenessParams.fromJson);
compare('propertiesParams', propertiesParams, AuthenticityPropertiesParams.fromJson);
compare('authenticityParams', authenticityParams, AuthenticityParams.fromJson);
compare('glaresCheckParams', glaresCheckParams, GlaresCheckParams.fromJson);
compare('occlusionCheckParams', occlusionCheckParams, OcclusionCheckParams.fromJson);
compare('rfidParams', rfidParams, RFIDParams.fromJson);
compare('imageQA', imageQA, ImageQA.fromJson);
compare('backendProcessingConfig', backendProcessingConfig, BackendProcessingConfig.fromJson);
compare('bsi', bsi, Bsi.fromJson);
compare('processParams', processParams, ProcessParams.fromJson, [
  "logs",
]);
compare('eDLDataGroups', eDLDataGroups, EDLDataGroups.fromJson);
compare('ePassportDataGroups', ePassportDataGroups, EPassportDataGroups.fromJson);
compare('eIDDataGroups', eIDDataGroups, EIDDataGroups.fromJson);
compare('dtcDataGroup', dtcDataGroup, DTCDataGroup.fromJson);
compare('rfidScenario', rfidScenario, RFIDScenario.fromJson);
compare('customizationColors', customizationColors, CustomizationColors.fromJson);
compare('customizationFonts', customizationFonts, CustomizationFonts.fromJson);
compare('customizationImages', customizationImages, CustomizationImages.fromJson);
compare('customizationTimings', customizationTimings, CustomizationTimings.fromJson);
compare('customizationContentModes', customizationContentModes, CustomizationContentModes.fromJson);
compare('customizationMatrices', customizationMatrices, CustomizationMatrices.fromJson);
compare('customization', customization, Customization.fromJson);
compare('functionality', functionality, Functionality.fromJson);
compare('documentsDatabase', documentsDatabase, DocumentsDatabase.fromJson);
compare('docReaderVersion', docReaderVersion, DocReaderVersion.fromJson);
compare('docReaderScenario', docReaderScenario, DocReaderScenario.fromJson);
compare('license', license, License.fromJson);
compare('docReaderException', docReaderException, DocReaderException.fromJson);
compare('rfidException', rfidException, RFIDException.fromJson);
compare('prepareProgress', prepareProgress, PrepareProgress.fromJson);
compare('authenticityElement', authenticityElement, AuthenticityElement.fromJson);
compare('authenticityCheck', authenticityCheck, AuthenticityCheck.fromJson);
compare('authenticityResult', authenticityResult, AuthenticityResult.fromJson);
compare('pdf417Info', pdf417Info, PDF417Info.fromJson);
compare('barcodeField', barcodeField, BarcodeField.fromJson);
compare('barcodeResult', barcodeResult, BarcodeResult.fromJson);
compare('imageQuality', imageQuality, ImageQuality.fromJson);
compare('imageQualityGroup', imageQualityGroup, ImageQualityGroup.fromJson);
compare('accessControlProcedureType', accessControlProcedureType, AccessControlProcedureType.fromJson);
compare('fileData', fileData, FileData.fromJson);
compare('certificateData', certificateData, CertificateData.fromJson);
compare('securityObjectCertificates', securityObjectCertificates, SecurityObjectCertificates.fromJson);
compare('file', file, File.fromJson);
compare('application', application, Application.fromJson);
compare('rfidValue', rfidValue, RFIDValue.fromJson);
compare('attribute', attribute, Attribute.fromJson);
compare('authority', authority, Authority.fromJson);
compare('cardProperties', cardProperties, CardProperties.fromJson);
compare('extension', extension, Extension.fromJson);
compare('rfidValidity', rfidValidity, RFIDValidity.fromJson);
compare('certificateChain', certificateChain, CertificateChain.fromJson);
compare('dataField', dataField, DataField.fromJson);
compare('signerInfo', signerInfo, SignerInfo.fromJson);
compare('securityObject', securityObject, SecurityObject.fromJson);
compare('rfidSessionData', rfidSessionData, RFIDSessionData.fromJson);
compare('bytesData', bytesData, BytesData.fromJson);
compare('vdsncData', vdsncData, VDSNCData.fromJson);
compare('docFeature', docFeature, DocFeature.fromJson);
compare('vdsData', vdsData, VDSData.fromJson);
compare('opticalStatus', opticalStatus, OpticalStatus.fromJson);
compare('ageStatus', ageStatus, AgeStatus.fromJson);
compare('rfidStatus', rfidStatus, RFIDStatus.fromJson);
compare('resultsStatus', resultsStatus, ResultsStatus.fromJson);
compare('comparison', comparison, Comparison.fromJson);
compare('rect', rect, Rect.fromJson);
compare('graphicField', graphicField, GraphicField.fromJson);
compare('graphicResult', graphicResult, GraphicResult.fromJson);
compare('rfidOrigin', rfidOrigin, RFIDOrigin.fromJson);
compare('symbol', symbol, Symbol.fromJson);
compare('validity', validity, Validity.fromJson);
compare('value', value, Value.fromJson);
compare('textField', textField, TextField.fromJson);
compare('textSource', textSource, TextSource.fromJson);
compare('textResult', textResult, TextResult.fromJson);
compare('documentType', documentType, DocumentType.fromJson);
compare('coordinate', coordinate, Coordinate.fromJson);
compare('position', position, Position.fromJson);
compare('transactionInfo', transactionInfo, TransactionInfo.fromJson);
compare('results', results, Results.fromJson);
compare('rfidNotification', rfidNotification, RFIDNotification.fromJson);
compare('paAttribute', paAttribute, PAAttribute.fromJson);
compare('paResourcesIssuer', paResourcesIssuer, PAResourcesIssuer.fromJson);
compare('pkdCertificate', pkdCertificate, PKDCertificate.fromJson);
compare('taChallenge', taChallenge, TAChallenge.fromJson);
compare('paceProtocol', paceProtocol, PACEProtocol.fromJson);
compare('caProtocol', caProtocol, CAProtocol.fromJson);
compare('tccParams', tccParams, TccParams.fromJson);
compare('deviceRetrievalMethod', deviceRetrievalMethod, DeviceRetrievalMethod.fromJson);
compare('deviceEngagement', deviceEngagement, DeviceEngagement.fromJson);
compare('nameSpaceMDL', nameSpaceMDL, NameSpaceMDL.fromJson);
compare('documentRequestMDL', documentRequestMDL, DocumentRequestMDL.fromJson);
compare('documentRequest18013MDL', documentRequest18013MDL, DocumentRequest18013MDL.fromJson);
compare('dataRetrieval', dataRetrieval, DataRetrieval.fromJson);
