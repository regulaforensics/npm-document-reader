import { OnlineProcessingConfig, ImageFormat, OnlineMode } from './config/OnlineProcessingConfig';
import { InitConfig } from './config/InitConfig';
import { RFIDConfig, RFIDCompletion, RFIDProgressCompletion, ChipDetectedCompletion, RetryReadChipCompletion, PaCertificateCompletion, TaCertificateCompletion, PKDCertificateRequest, TaSignatureCompletion, TASignatureRequest } from './config/RFIDConfig';
import { ScannerConfig } from './config/ScannerConfig';
import { RecognizeConfig, ImageInputData } from './config/RecognizeConfig';
export { OnlineProcessingConfig, ImageFormat, OnlineMode, InitConfig, RFIDConfig, RFIDCompletion, RFIDProgressCompletion, ChipDetectedCompletion, RetryReadChipCompletion, PaCertificateCompletion, TaCertificateCompletion, PKDCertificateRequest, TaSignatureCompletion, TASignatureRequest, ScannerConfig, RecognizeConfig, ImageInputData };

import { DocReaderVersion } from './info/DocReaderVersion';
import { PrepareProgress, DocumentReaderPrepareCompletion } from './info/PrepareProgress';
import { DocReaderException, ErrorCodes } from './info/DocReaderException';
import { DocumentsDatabase } from './info/DocumentsDatabase';
import { License } from './info/License';
import { DocReaderScenario, Scenario, DocReaderOrientation } from './info/DocReaderScenario';
import { RFIDException } from './info/RFIDException';
export { DocReaderVersion, PrepareProgress, DocumentReaderPrepareCompletion, DocReaderException, ErrorCodes, DocumentsDatabase, License, DocReaderScenario, Scenario, DocReaderOrientation, RFIDException };

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


/**
 * Entry point of the Regula Document Reader.
 */
export class DocumentReader {
    /**
     * The only instance of singleton class {@link DocumentReader}.
     */
    static get instance(): DocumentReader
    private constructor()

    /**
     * A list of scenarios that can be used for documents recognition based on
     * your license and Core framework capabilities.
     */
    get availableScenarios(): DocReaderScenario[];

    /** Information about the SDK. */
    get version(): DocReaderVersion | null;

    /** Information about your license. */
    get license(): License | null;

    /// Allows you to check if native RFID chip reading can be performed
    /// based on your license and Core framework capabilities.
    ///
    /// Returns `true` if native RFID chip reading is supported.
    isRFIDAvailableForUse(): Promise<boolean>;

    /**
     * Allows you to check if you can use external Regula Bluetooth devices for RFID
     * based on your license and Core framework capabilities.
     * @returns `true` if external Regula Bluetooth for RFID is supported.
     */
    isAuthenticatorRFIDAvailableForUse(): Promise<boolean>;

    /**
     * Allows you to check if you can use external Regula Bluetooth devices
     * based on your license, available scenarios and Core framework capabilities.
     * @returns `true` if available.
     */
    isAuthenticatorAvailableForUse(): Promise<boolean>;

    /**
     * Allows you to get a status of the RFID chip reading process.
     * IOS only.
     */
    rfidSessionStatus: string | null;

    /** Current Session identifier. */
    tag: string | null;

    /** Customer name. */
    tenant: string | null;

    /** Environment type. */
    env: string | null;

    /**
     * A localization dictionary to override default localization logic.
     * Allows to replace any string of DocumentReader SDK with an arbitrary string.
     *
     * To see all the localization keys, look up the `RegulaSDK.strings` file at
     * `ios/Pods/DocumentReader/DocumentReader.xcframework/ios-arm64/DocumentReader.framework/en.lproj/RegulaSDK.strings`.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    localizationDictionary: Record<string, string> | null;

    /** Params that influence the scanning process, camera view controller customization and etc. */
    functionality: Functionality;

    /** Params that influence the scanning process. */
    processParams: ProcessParams;

    /** Params that relate to the camera view controller customization and etc. */
    customization: Customization;

    /** Params that influence the RFID chip processing. */
    rfidScenario: RFIDScenario;

    /** Allows you to check if Document Reader is ready for use. */
    isReady(): Promise<boolean>;

    /** Allows you to get a status of Document Reader. */
    status(): Promise<string>;

    /** Use this method to reset all parameters to their default values. */
    resetConfiguration(): void;

    /** Set click listener for buttons from the UI customization layer. */
    set onCustomButtonTapped(completion: CustomButtonTappedCompletion);

    /** Allows user to receive a video file of current session. */
    set videoEncoderCompletion(completion: VideoEncoderCompletion);

    /** Allows you to initialize Document Reader.
     *
     * @param config - configuration file for DocumentReader initialization.
     *
     * @returns Returns boolean indicating success of initialization
     * and a nullable {@link DocReaderException}.
     */
    initialize(config: InitConfig): Promise<[boolean, DocReaderException | null]>;

    /** Used to connect to the ble device.
     *
     * Requires [btdevice plugin](https://www.npmjs.com/package/@regulaforensics/react-native-document-reader-btdevice).
     *
     * @param deviceName - name of the device to connect to.
     *
     * @returns Returns boolean indicating success of connection.
     */
    connectBluetoothDevice(deviceName: string): Promise<boolean>;

    /**  Used to deinitialize Document Reader and free up RAM as a consequence of this. */
    deinitializeReader(): Promise<void>;

    /**
     * Allows you to download a database from the Regula server.
     * If it exists in your app and compatible with the SDK, it won't be downloaded.
     * 
     * Requires `android.permission.INTERNET` android permission.
     * 
     * @param databaseID - Identifier of the database.
     * @param prepareCompletion - Optional callback for progress updates.
     * @returns Returns boolean indicating success of preparing database
     * and a nullable {@link DocReaderException}.
     */
    prepareDatabase(databaseID: string, prepareCompletion?: DocumentReaderPrepareCompletion): Promise<[boolean, DocReaderException | null]>;

    /**
     * Allows you to download a database from the Regula server.
     * Each new update of the database will be downloaded.
     * 
     * Requires `android.permission.INTERNET` android permission.
     * 
     * @param databaseID - Identifier of the database.
     * @param prepareCompletion - Optional callback for progress updates.
     * @returns Returns boolean indicating success of running auto update
     * and a nullable {@link DocReaderException}.
     */
    runAutoUpdate(databaseID: string, prepareCompletion?: DocumentReaderPrepareCompletion): Promise<[boolean, DocReaderException | null]>;

    /**
     * Allows you to to check database update.
     * 
     * Requires `android.permission.INTERNET` android permission.
     * 
     * @param databaseID - identifier of the database.
     * @returns Returns {@link DocumentsDatabase} or null.
     */
    checkDatabaseUpdate(databaseID: string): Promise<DocumentsDatabase | null>;

    /** Cancels any ongoing database update or preparation. */
    cancelDBUpdate(): Promise<void>;

    /** Removes the current document database. */
    removeDatabase(): Promise<void>;

    /** Used to start the processing of the next page of the document once the current one is processed. */
    startNewPage(): Promise<void>;

    /** Used to start a scanning process. */
    startNewSession(): Promise<void>;

    /**
     * Used for multiple frames processing which are captured from the camera(old UI).
     *
     * @param config - Scanning configuration.
     * @param completion - Block to execute after the recognition process finishes.
     */
    scan(config: ScannerConfig, completion: DocumentReaderCompletion): void;

    /**
     * Used for multiple frames processing which are captured from the camera(new UI).
     *
     * @param config - Scanning configuration.
     * @param completion - Block to execute after the recognition process finishes.
     */
    startScanner(config: ScannerConfig, completion: DocumentReaderCompletion): void;

    /**
     * Used for proccessing predefined images.
     *
     * @param config - Configuration for recognition.
     * @param completion - Block to execute after the recognition process finishes.
     */
    recognize(config: RecognizeConfig, completion: DocumentReaderCompletion): void;

    /**
     * Used for the RFID chip processing.
     * 
     * Requires `android.permission.NFC` android permission.
     *
     * @param config - chip reading configuration.
     */
    rfid(config: RFIDConfig): void;

    /** Stops the document scanner if it's active. */
    stopScanner(): Promise<void>;

    /** Stops the RFID reader if it's active. */
    stopRFIDReader(): Promise<void>;

    /** Used to pass certificates to Document Reader that will be used during the
     * RFID chip processing.
     *
     * @param certificates - PKD certificates.
     */
    addPKDCertificates(certificates: [PKDCertificate]): Promise<void>;

    /** It's used to remove certificates from your app that are used during the
     * RFID chip processing.
     */
    clearPKDCertificates(): Promise<void>;

    /** Sets the given `TCCParams` to the RFID  session.
     * The parameters are required to be set before starting RFID session.
     *
     * @param params - TCC related parameters.
     * @returns Returns boolean indicating success of setting TCC parameters
     * and a nullable {@link DocReaderException}.
     */
    setTCCParams(params: TccParams): Promise<[boolean, DocReaderException | null]>;

    /** It's used to finalize package during backend processing. 
     * 
     * @returns Returns action, info and error.
    */
    finalizePackage(): Promise<[action: DocReaderAction, info: TransactionInfo | null, error: DocReaderException | null]>;

    /** It's used to end transaction during backend processing. */
    endBackendTransaction(): Promise<void>;
}

/**
 * Callback for receiving answer from processing engine.
 *
 * @param action Defines current processing status.
 * @param results Defines current processing results.
 * @param error In case of anything is wrong - brief message for developer, `null` otherwise.
 */
export type DocumentReaderCompletion = (action: DocReaderAction, results: Results | null, error: DocReaderException | null) => void;

/**
 * Callback for receiving signal, when a custom button,
 * configured in {@link Customization.uiCustomizationLayer}, is pressed.
 *
 * @param tag Button id, indication which button was pressed.
 */
export type CustomButtonTappedCompletion = (tag: number) => void;

/**
 * Callback that allows user to receive a video file of current session.
 * Called by DocumentReader when recording process finished.
 *
 * @param filePath The output file URL. Contains URL to recording output for every scanning session.
 */
export type VideoEncoderCompletion = (filePath: string) => void;

/** Contains all possible DocumentReaderNotification callback codes */
export declare enum DocReaderAction {
    /** Processing finished, the results were received */
    COMPLETE = 0,
    /** Processing didn't finish, intermediate results may be obtained */
    PROCESS = 1,
    /** Processing of a page is completed, the next one can be processed */
    MORE_PAGES_AVAILABLE = 2,
    /** Processing was cancelled, incomplete results may be obtained */
    CANCEL = 3,
    /** An error occurred during processing, incomplete results may be obtained */
    ERROR = 4,
    /** Processing of a hologram is started */
    PROCESS_WHITE_FLASHLIGHT = 5,
    /** Processing is finished by timeout, intermediate results can be received. Processing finishes due to non-compliance with the image quality requirements */
    TIMEOUT = 6,
    /** Online processing is started */
    PROCESSING_ON_SERVICE = 7,
    /** Processing didn't finish, intermediate results may be obtained, UV images may be obtained */
    PROCESS_WHITE_UV_IMAGES = 102,
    /** Processing didn't finish, intermediate results may be obtained, IR images may be obtained */
    PROCESS_IR_FRAME = 103,
}

export declare namespace DocReaderAction {
    function finished(value: DocReaderAction): boolean;
    function interrupted(value: DocReaderAction): boolean;
    function stopped(value: DocReaderAction): boolean;
}
