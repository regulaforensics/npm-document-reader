import { AuthenticityResult } from "./authenticity/AuthenticityResult";
import { BarcodeResult } from "./barcode/BarcodeResult";
import { ImageQualityGroup } from "./image_quality/ImageQualityGroup";
import { RFIDSessionData } from "./rfid/RFIDSessionData";
import { ResultsStatus } from "./status/ResultsStatus";
import { FieldType } from "./visual_results/FieldType";
import { GraphicFieldType } from "./visual_results/GraphicFieldType";
import { LCID } from "./visual_results/LCID";
import { Lights } from "./visual_results/Lights";
import { GraphicField } from "./visual_results/GraphicField";
import { GraphicResult } from "./visual_results/GraphicResult";
import { TextResult } from "./visual_results/TextResult";
import { TextField } from "./visual_results/TextField";
import { VDSNCData } from "./visible_digital_seals/VDSNCData";
import { Position } from "./Position";
import { DocumentType } from "./DocumentType";
import { TransactionInfo } from "./TransactionInfo";

/** Class describing results returned on completion of Document Reader work. */
export declare class Results {
    /** Document type results. */
    readonly documentType: DocumentType[] | null;
    /** Textual results. */
    readonly textResult: TextResult | null;
    /** Graphic results. */
    readonly graphicResult: GraphicResult | null;
    /** Position of a document. */
    readonly documentPosition: Position[] | null;
    /** Position of a barcode. */
    readonly barcodePosition: Position[] | null;
    /** Position of MRZ. */
    readonly mrzPosition: Position[] | null;
    /** Image quality results. */
    readonly imageQuality: ImageQualityGroup[] | null;
    /** Status information for each operation. */
    readonly status: ResultsStatus;
    /** Authenticity results. */
    readonly authenticityResult: AuthenticityResult | null;
    /** RFID session data. */
    readonly rfidSessionData: RFIDSessionData | null;
    /**
     * Indicates which page of the document contains an RFID chip (0 if there's
     * no page containing it). Requires document type recognition, otherwise 1 by default.
     */
    readonly chipPage: number;
    /** Barcode results. */
    readonly barcodeResult: BarcodeResult | null;
    /** Visible Digital Seal data. */
    readonly vdsncData: VDSNCData | null;
    /** DTCVC data. */
    readonly dtcData: string | null;
    /** Document processing finish status, one of RGLProcessingFinishedStatus values. */
    readonly processingFinishedStatus: ProcessingFinishedStatus;
    /**
     * Indicates how many pages of a document remains to process.
     *  Requires Document Type recognition, otherwise 0 by default.
     */
    readonly morePagesAvailable: number;
    /** Indicates how much time has been required for document processing, milliseconds. */
    readonly elapsedTime: number;
    /** Indicates how much time has been required for RFID chip processing, milliseconds. */
    readonly elapsedTimeRFID: number;
    /** Raw results, i.e. in their initial view. */
    readonly rawResult: string;
    readonly transactionInfo: TransactionInfo | null;

    /** Allows you to get a value of a text field. */
    textFieldValueByType(fieldType: FieldType): Promise<string | null>;
    /** Allows you to get a value of a text field based on LCID. */
    textFieldValueByTypeLcid(fieldType: FieldType, lcid: LCID): Promise<string | null>;
    /** Allows you to get a value of a text field based on a source type. */
    textFieldValueByTypeSource(fieldType: FieldType, source: ResultType): Promise<string | null>;
    /** Allows you to get a value of a text field based on LCID and a source type. */
    textFieldValueByTypeLcidSource(fieldType: FieldType, lcid: LCID, source: ResultType): Promise<string | null>;
    /**
     * Allows you to get a value of a text field based on a source type and
     * its originality.
     */
    textFieldValueByTypeSourceOriginal(fieldType: FieldType, source: ResultType, original: boolean): Promise<string | null>;
    /**
     * Allows you to get a value of a text field based on LCID, a source type
     * and its originality.
     */
    textFieldValueByTypeLcidSourceOriginal(fieldType: FieldType, lcid: LCID, source: ResultType, original: boolean): Promise<string | null>;
    /** Allows you to get an instance of a text field. */
    textFieldByType(fieldType: FieldType): Promise<TextField | null>;
    /** Allows you to get an instance of a text field based on LCID. */
    textFieldByTypeLcid(fieldType: FieldType, lcid: LCID): Promise<TextField | null>;
    /**
     * Allows you to get an image of a graphic field based on a source type
     * and page index.
     */
    graphicFieldByTypeSource(fieldType: GraphicFieldType, source: ResultType): Promise<GraphicField | null>;
    /**
     * Allows you to get an image of a graphic field based on a source type
     * and page index.
     */
    graphicFieldByTypeSourcePageIndex(fieldType: GraphicFieldType, source: ResultType, pageIndex: number): Promise<GraphicField | null>;
    /**
     * Allows you to get an image of a graphic field based on a source type,
     * page index and light type.
     */
    graphicFieldByTypeSourcePageIndexLight(fieldType: GraphicFieldType, source: ResultType, pageIndex: number, light: Lights): Promise<GraphicField | null>;
    /** Allows you to get an image of a graphic field. */
    graphicFieldImageByType(fieldType: GraphicFieldType): Promise<string | null>;
    /** Allows you to get an image of a graphic field based on a source type. */
    graphicFieldImageByTypeSource(fieldType: GraphicFieldType, source: ResultType): Promise<string | null>;
    /**
     * Allows you to get an image of a graphic field based on a source type
     * and page index.
     */
    graphicFieldImageByTypeSourcePageIndex(fieldType: GraphicFieldType, source: ResultType, pageIndex: number): Promise<string | null>;
    /**
     * Allows you to get an image of a graphic field based on a source type,
     * page index and light type.
     */
    graphicFieldImageByTypeSourcePageIndexLight(fieldType: GraphicFieldType, source: ResultType, pageIndex: number, light: Lights): Promise<string | null>;
    /**
     * Method returns containers by result type. If result type doesn't exist,
     * the result of the search will be null.
     *
     * Returns original containers from rawResult including information about the transaction.
     */
    containers(resultType: ResultType[]): Promise<string | null>;
    /**
     * Method returns only containers for {@link ResultType.INTERNAL_RFID_SESSION},
     * {@link ResultType.INTERNAL_ENCRYPTED_RCL} and {@link ResultType.INTERNAL_LICENSE} values.
     *
     * For more details, see {@link containers} method.
     * Returns all encrypted containers from rawResult to reprocess data on the server side.
     */
    encryptedContainers(): Promise<string | null>;
    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Results | null;
}

/** Enumeration contains identifiers that determine the processing finish status. */
export declare enum ProcessingFinishedStatus {
    /** Processing is not finished. */
    NOT_READY = 0,
    /** Processing is finished. */
    READY = 1,
    /** Processing is finished by timeout. */
    TIMEOUT = 2
}

/**
 * Enumeration contains a pool of constants that determine the type of resulting
 * data formed during the data scanning and processing cycle and passed
 * to the user application.
 */
export declare enum ResultType {
    /** No result. */
    NONE = -1,
    /** Stores a graphic image. */
    EMPTY = 0,
    /** Represented as binary array which contains image of the image graphic file. */
    RAW_IMAGE = 1,
    /** Serves for storing text results of MRZ, document filling and bar-codes reading. */
    FILE_IMAGE = 2,
    /**
     * Serves for storing and passing to the user application of results of bar-codes
     * areas search on the scanned document page and their.
     */
    MRZ_OCR_EXTENDED = 3,
    /**
     * Serves for storing and passing to the user application of results of bar-codes
     * areas search on the scanned document page and their reading in binary non-formatted code.
     */
    BARCODES = 5,
    /** Serves for storing graphic results of document filling area and bar-codes reading. */
    GRAPHICS = 6,
    /** Serves for storing the information on document MRZ printing quality check results. */
    MRZ_TEST_QUALITY = 7,
    /**
     * Serves for storing information on candidate documents and passing it to the user
     * application when performing the recognition of the document type.
     */
    DOCUMENT_TYPES_CANDIDATES = 8,
    /** Contains information on one candidate document when determining the document type. */
    CHOSEN_DOCUMENT_TYPE_CANDIDATE = 9,
    /**
     * Not used. Serves for storing the full list of documents stored in the current
     * document database and passing it to the user application.
     */
    DOCUMENTS_INFO_LIST = 10,
    /**
     * Serves for storing the results of comparing the MRZ text data, document filling
     * area data, bar-codes data and data retrieved from RFID-chip memory and passing
     * it to the user application.
     */
    OCR_LEXICAL_ANALYZE = 15,
    /** Result stores a graphic image without compression. */
    RAW_UNCROPPED_IMAGE = 16,
    /** Result serves for storing text results of MRZ, document filling and bar-codes reading. */
    VISUAL_OCR_EXTENDED = 17,
    /** Result serves for storing text results of MRZ, document filling and bar-codes reading. */
    BAR_CODES_TEXT_DATA = 18,
    /** Serves for storing graphic results of document filling area and bar-codes reading. */
    BAR_CODES_IMAGE_DATA = 19,
    /**
     * Serves for storing the result of document authenticity check using
     * the images for different lighting schemes and passing it to the user
     * application.
     */
    AUTHENTICITY = 20,
    /** Not used */
    EXPERT_ANALYZE = 21,
    /** Not used */
    OCR_LEXICAL_ANALYZE_EX = 22,
    /** Stores a graphic image in without compression and passing it to the user application. */
    EOS_IMAGE = 23,
    /**Stores a graphic image in without compression and passing it to the user application. */
    BAYER_IMAGE = 24,
    /**Represented as binary array which contains array if data erade from magnetic stripe. */
    MAGNETIC_STRIPE = 25,
    /**Serves for storing text results of MRZ, document filling and bar-codes reading. */
    MAGNETIC_STRIPE_TEXT_DATA = 26,
    /**Represented as binary array which contains image of the graphic field image graphic file. */
    FIELD_FILE_IMAGE = 27,
    /**Serves for storing the result of documents database check. */
    DATABASE_CHECK = 28,
    /**Represented as binary array which contains ISO fingerprint template. */
    FINGERPRINT_TEMPLATE_ISO = 29,
    /**Used for storing input image quality check results list. */
    INPUT_IMAGE_QUALITY = 30,
    /**
     * Serves for storing the result of document authenticity check using live
     * portrait image.
     */
    LIVE_PORTRAIT = 32,
    /** Stores information about operations status. */
    STATUS = 33,
    /** Serves for storing the result of document authenticity check using portrait images. */
    PORTRAIT_COMPARISON = 34,
    /** Serves for storing the result of document authenticity check using external portait. */
    EXT_PORTRAIT = 35,
    /** Used for storing text results list. */
    TEXT = 36,
    /** Used for storing images results list. */
    IMAGES = 37,
    /** Serves to store RFID session as binary data. */
    INTERNAL_RFID_SESSION = 48,
    /** Serves to store the encrypted data object. */
    INTERNAL_ENCRYPTED_RCL = 49,
    /** Serves to store the encrypted license key. */
    INTERNAL_LICENSE = 50,
    /** Used for storing MRZ position. */
    MRZ_POSITION = 61,
    /** Used for storing barcode position. */
    BARCODE_POSITION = 62,
    /** Used for storing document position. */
    DOCUMENT_POSITION = 85,
    /** Not used */
    CUSTOM = 100,
    /**
     * Servers for storing the data reading results from the RFID-chip in a form
     * of a list of the logically separated data groups.
     */
    RFID_RAW_DATA = 101,
    /**
     * Servers for storing the results of data reading from the RFID-chip in a form
     * of a list of logically separated text data (text fields).
     */
    RFID_TEXT_DATA = 102,
    /**
     * Servers for storing the results of data reading from the RFID- chip in a form
     * of a list of logically separated graphic data (images, graphic fields).
     */
    RFID_IMAGE_DATA = 103,
    /**
     * Servers for storing the data reading results from the RFID-chip in a form
     * of a list of the logically separated data groups.
     */
    RFID_BINARY_DATA = 104,
    /**
     * Servers for storing the data reading results in a form of a list of objects
     * of the original binary representation of the graphics in memory of the RFID-chip.
     */
    RFID_ORIGINAL_GRAPHICS = 105,
    /** Digital Travel Credential data. */
    RFID_DTC_VC = 109
}
