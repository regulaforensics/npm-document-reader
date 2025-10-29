import { FilterObject } from "./FilterObject";
import { AuthenticityParams } from "./AuthenticityParams";
import { BackendProcessingConfig } from "./BackendProcessingConfig";
import { FaceApiParams } from "./FaceApiParams";
import { ImageQA } from "./ImageQA";
import { RFIDParams } from "./RFIDParams";
import { Scenario } from "../../info/DocReaderScenario";
import { BarcodeType } from "../../results/barcode/BarcodeType";
import { DocType, DocFormat } from "../../results/DocumentType";
import { FieldType } from "../../results/visual_results/FieldType";
import { LCID } from "../../results/visual_results/LCID";
import { ResultType } from "../../results/Results";

/**
 * Params that influence the scanning process.
 */
export declare class ProcessParams {
    /**
     * If set to `true`, processing of more than one page of the document
     * (if they exist) will be triggered, otherwise, only one page will be processed.
     */
    multipageProcessing?: boolean;
    /**
     * If set to `true`, the DocumentReader logs will be shown in the console.
     */
    logs?: boolean;
    /**
     * If set to `true`, images will be saved to the application's directory.
     */
    debugSaveImages?: boolean;
    /**
     * If set to `true`, text logs will be saved to the application's directory.
     */
    debugSaveLogs?: boolean;
    /**
     * If set to `true`, an original (uncropped) image will be received,
     *  which is sent for recognition.
     */
    returnUncroppedImage?: boolean;
    /**
     * Set to `true` when torch is connected and enabled by user.
     *
     * Android only.
     */
    uvTorchEnabled?: boolean;
    /**
     * If set to `true`, cropped images will be saved to the application's directory.
     */
    debugSaveCroppedImages?: boolean;
    /**
     * If set to `true`, document focus check will be omitted.
     */
    disableFocusingCheck?: boolean;
    /**
     * If set to `true`, RFID sessions will be saved to the application's directory.
     */
    debugSaveRFIDSession?: boolean;
    /**
     * If set to `true`, allows to process up to two pages of the document
     * (so-called "a double-page spread") for one-shot if they are presented
     * on the frame (image).
     */
    doublePageSpread?: boolean;
    /**
     * If set to `true`, allows you to manually set the document's bounds
     * after it is detected.
     */
    manualCrop?: boolean;
    /**
     * Allows to build an integral image, taking into account the quality of
     * fixation of each of the individual images.
     */
    integralImage?: boolean;
    /**
     * If set to `true`, an image with cropped barcode will be returned.
     */
    returnCroppedBarcode?: boolean;
    /**
     * If set to `true`, in case required fields are not read, their values
     * will be empty.
     */
    checkRequiredTextFields?: boolean;
    /**
     * If set to `true`, personal information will be removed from logs.
     */
    depersonalizeLog?: boolean;
    /**
     * When enabled together with {@link doublePageSpread} and there is a passport
     * with two pages spread in the image, pages will be cropped, straightened
     * and aligned together, as if the document was captured on a flatbed scanner.
     */
    generateDoublePageSpreadImage?: boolean;
    /**
     * This option can be set to `true` if you know for sure that the image you
     * provide contains already cropped document by its edges. This was designed
     * to process on the server side images captured and cropped on mobile.
     */
    alreadyCropped?: boolean;
    /**
     * When disabled, text field OCR will be done as is and then the recognized
     * value will be matched to the field mask for validity. If enabled, we
     * are trying to read a field value with maximum efforts to match the mask
     * and provide a correctly formatted value, making assumptions based on the
     * provided field mask in the template.
     */
    matchTextFieldMask?: boolean;
    /**
     * When enabled, fail OCR field validity, if there is a glare over the text
     * ƒfield on the image.
     */
    updateOCRValidityByGlare?: boolean;
    /**
     * When enabled no graphic fields will be cropped from document image.
     */
    noGraphics?: boolean;
    /**
     * This option allows locating and cropping multiple documents
     * from one image if enabled.
     */
    multiDocOnImage?: boolean;
    /**
     * This option can be set to `true` to make sure that in series processing
     * MRZ is located fully inside the result document image, if present
     * on the document. Enabling this option may add extra processing time,
     * by disabling optimizations, but allows more stability in output image quality.
     */
    forceReadMrzBeforeLocate?: boolean;
    /**
     * When set to `false`, the Barcode code parsing will be skipped
     * and the raw information from the code will be returned instead.
     */
    parseBarcodes?: boolean;
    /**
     * When set to `true`, the `rawResults` property of the {@link Results}
     * will contain the encrypted containers of scanning results
     * that may be used for later reprocessing.
     */
    shouldReturnPackageForReprocess?: boolean;
    /**
     * When enabled, OCR of perforated fields in the document template
     * will not be performed.
     */
    disablePerforationOCR?: boolean;
    /**
     * @deprecated Use `strictImageQuality` instead.
     * When enabled, image quality checks status affects document optical
     * and overall status.
     */
    respectImageQuality?: boolean;
    /**
     * When enabled, the image quality check status affects the document optical and overall status.
     */
    strictImageQuality?: boolean;
    /**
     * When enabled, the Surname and GivenNames field ({@link TextField})
     * will be divided into fields with fieldTypes {@link FieldType.FIRST_NAME},
     * {@link FieldType.SECOND_NAME}, {@link FieldType.THIRD_NAME}, {@link FieldType.LAST_NAME}.
     */
    splitNames?: boolean;
    /**
     * Use this property to set up the Face API integration.
     */
    useFaceApi?: boolean;
    /**
     * This parameter is used to enable document authenticity check.
     */
    useAuthenticityCheck?: boolean;
    /**
     * @deprecated Use `authenticityParams.checkLiveness` instead.
     */
    checkHologram?: boolean;
    /**
     * This parameter is used to generate numeric representation for issuing state and nationality codes.
     */
    generateNumericCodes?: boolean;
    /**
     * If the certificates required for performing the Digital signature check are missing,
     * this parameter if enabled will make the Barcode format check failed.
     */
    strictBarcodeDigitalSignatureCheck?: boolean;
    /**
     * Select the longest value from the different value sources and write it to the value field
     * if comparison is done successfully. The parameter applies this logic to the personal names,
     * such as given name, surname, surname and given name, middle name and etc.
     */
    selectLongestNames?: boolean;
    /**
     * This parameter is used to generate DTCVC data.
     */
    generateDTCVC?: boolean;
    /**
     * Set to force DL categories expiry date status to either valid or not. By default,
     * if the DL category expiry date is correct, its status will be wasNotDone, otherwise error.
     */
    strictDLCategoryExpiry?: boolean;
    generateAlpha2Codes?: boolean;
    /**
     * This parameter if enabled will ignore the minimum barcode resolution needed to start processing.
     */
    disableAuthResolutionFilter?: boolean;
    /**
     * When enabled, this parameter marks security checks that don’t meet minimum requirements as 'Failed' (instead of 'WasNotDone'), which causes the overall security status to be 'Failed'.
     */
    strictSecurityChecks?: boolean;
    /**
     * Allows transliteration to be turned on or off.
     * Default: `true`.
     */
    returnTransliteratedFields?: boolean;
    /**
     * There are documents that contain barcodes which data can be parsed only
     * if document type verification is performed. The following property allows
     * setting the barcode parser type which should be used during recognition.
     * It allows parsing barcode data without performing document type verification.
     */
    barcodeParserType?: number;
    /**
     * @deprecated since 7.6
     * Allows you to set the maximum value of the deviation of the corners
     * of the document from the value of `90` degrees.
     */
    perspectiveAngle?: number;
    /**
     * Allows you to set the minimum acceptable DPI value of the camera frame
     * that is passed for recognition. Camera frames the DPI of which are less
     * than you set won't be passed for recognition.
     */
    minDPI?: number;
    /**
     * This option controls maximum resolution in dpi of output images.
     * Resolution will remain original in case `0` is set.
     */
    imageDpiOutMax?: number;
    /**
     * Force use of specified document format when locating and recognizing
     * document to reduce the number of candidates.
     */
    forceDocFormat?: DocFormat;
    /**
     * This option allows shifting the date of expiry into the future or past
     * for number of months specified. This is useful, for example, in some cases
     * when document might be still valid for some period after original
     * expiration date to prevent negative validity status for such documents.
     * Or by shifting the date to the past will set negative validity
     * for the documents that is about to expire in a specified number of months.
     */
    shiftExpiryDate?: number;
    /**
     * This options allows specifying the minimal age in years of the document
     * holder for the document to be considered valid.
     */
    minimalHolderAge?: number;
    /**
     * Maximum height of output images. In pixels.
     */
    imageOutputMaxHeight?: number;
    /**
     * Maximum width of output images. In pixels.
     */
    imageOutputMaxWidth?: number;
    /**
     * Accepts sum of {@link Authenticity} values.
     */
    processAuth?: number;
    /**
     * This option allows output text case transformation.
     * No changes applied by default to original values.
     */
    convertCase?: number;
    /**
     * Sets the level of logs detalization when used together with {@link logs} parameter.
     */
    logLevel?: LogLevel;
    /**
     * Make better MRZ detection on complex noisy backgrounds, like BW photocopy of some documents.
     * Works only in the single-frame processing.
     */
    mrzDetectMode?: MrzDetectionModes;
    /**
     * Measure system of fields' values that are presented in results.
     * Default: If the country code is `US` or `LR` or `MM`, the
     * {@link MeasureSystem.IMPERIAL} system of measurement, otherwise, the {@link MeasureSystem.METRIC}.
     */
    measureSystem?: MeasureSystem;
    /**
     * Force use of specific template ID and skip document type identification step.
     */
    forceDocID?: number;
    /**
     * Maximum number of pages to be processed in a PDF document.
     * If set, only the specified number of pages will be analyzed.
     */
    pdfPagesLimit?: number;
    /**
     * Change the format string of displayed dates in the results.
     *
     * Mask examples: `dd/mm/yyyy`, `mm/dd/yyyy`, `dd-mm-yyyy`, `mm-dd-yyyy`, `dd/mm/yy`.
     * Set to `null` to revert default value.
     *
     * @default depends on the device's locale.
     */
    dateFormat?: string;
    /**
     * Documents processing scenario.
     */
    scenario?: Scenario;
    /**
     * Documents processing scenario for the Capture button.
     */
    captureButtonScenario?: Scenario;
    /**
     * Allows you to set the time limit for document recognition (in seconds),
     * beyond which the recognition does not continue regardless of its result.
     * The countdown starts from the moment the scenario starts.
     * Setting value to `0` means infinity.
     */
    timeout?: number;
    /**
     * Allows you to set the time limit for document recognition (in seconds),
     * beyond which the recognition does not continue regardless of its result.
     * The countdown starts from the moment the document is detected.
     * Setting value to `0` means infinity.
     */
    timeoutFromFirstDetect?: number;
    /**
     * Allows you to set the time limit for document recognition (in seconds),
     * beyond which the recognition does not continue regardless of its result.
     * The countdown starts from the moment the document type is recognized.
     * Setting value to `0` means infinity.
     */
    timeoutFromFirstDocType?: number;
    /**
     * Specifies minimal area of the image that document should cover to be treated
     * as candidate when locating. Value should be in range from `0` to `1`,
     * where `1` is when document should fully cover the image.
     */
    documentAreaMin?: number;
    /**
     * Start the countdown from the moment the document liveness authenticity check is started (in seconds).
     * Setting value to `0` means infinity.
     */
    timeoutLiveness?: number;
    /**
     * Takes the list of the document IDs to process.
     * All documents will be processed if it's empty.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    documentIDList?: number[];
    /**
     * Set types of barcodes that you wish to recognize.
     * All barcodes will be recognized if it's empty.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    barcodeTypes?: BarcodeType[];
    /**
     * If you recognize the MRZ of documents, all fields will be extracted.
     * If you recognize the Visual zone of documents, you can set the list
     * of field types that you wish to extract, other fields will be skipped
     * during processing. All fields will be extracted if it is empty.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    fieldTypesFilter?: FieldType[];
    /**
     * Types of results to return in response.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    resultTypeOutput?: ResultType[];
    /**
     * This option allows limiting MRZ formats to be recognized by specifying
     * them in array.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    mrzFormatsFilter?: MRZFormat[];
    /**
     * Array of specific eligible document types to recognize from. You may,
     * for example, specify only passports to be recognized by setting this property.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    documentGroupFilter?: DocType[];
    /**
     * The list of LCID types to ignore during the recognition.
     * If empty, values with all LCID types will be extracted.
     * Narrowing down the list can reduce processing time.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    lcidIgnoreFilter?: LCID[];
    /**
     * The whitelist of LCID types to use during the recognition.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    lcidFilter?: LCID[];
    /**
     * Controls properties of {@link ImageQA} checks.
     */
    imageQA: ImageQA;
    /**
     * Custom RFID params.
     */
    rfidParams?: RFIDParams;
    /**
     * Custom Face API integration params.
     */
    faceApiParams?: FaceApiParams;
    /**
     * Set up the backend processing service parameters.
     */
    backendProcessingConfig?: BackendProcessingConfig;
    authenticityParams: AuthenticityParams;
    /**
     * Takes JSON with parameters that are not presented in the DocumentReader.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    customParams?: Record<string, any>;

    setCheckFilter(checkType: FilterCheckType, filter: FilterObject): void;

    removeCheckFilter(checkType: FilterCheckType): void;

    clearCheckFilter(): void;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): ProcessParams;
}

/**
 * The constants of the enumeration identify the system
 * for measuring distances and weight.
 */
export declare enum MeasureSystem {
    /**
     * The Metric System of Measurement, which uses the measuring units
     * such as meters and grams and adds prefixes like kilo, milli
     * and centi to count orders of magnitude.
     */
    METRIC = 0,

    /**
     * The Imperial System of Measurement, where things are measured in feet,
     * inches and pounds.
     */
    IMPERIAL = 1,
}

export declare enum MRZFormat {
    FORMAT_1X30 = "1x30",
    FORMAT_3X30 = "3x30",
    FORMAT_2X36 = "2x36",
    FORMAT_2X44 = "2x44",
    FORMAT_1X6 = "1x6",
    FORMAT_2X30 = "2x30",
}

export declare enum LogLevel {
    /** Fatal error. */
    FatalError = "FatalError",
    /** Error. */
    Error = "Error",
    /** Warning. */
    Warning = "Warning",
    /** Info. */
    Info = "Info",
    /** Debug. */
    Debug = "Debug",
}

/**
 * Enumeration contains the types of barcodes that can be processed.
 */
export declare enum MrzDetectionModes {
    DEFAULT = 0,
    RESIZE_BINARIZE_WINDOW = 1,
    BLUR_BEFORE_BINARIZATION = 2,
}

export declare enum FilterCheckType {
    AUTH = "checkAuth",
}
