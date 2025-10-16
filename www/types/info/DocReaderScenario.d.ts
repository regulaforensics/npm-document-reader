export declare class DocReaderScenario {
    /**
     * ID of the scenario.
     */
    readonly name: string;
    /**
     * string representation of scenario ID.
     */
    readonly caption: string;
    /**
     * Description of the scenario.
     */
    readonly description: string;
    /**
     * Available orientation for scenario.
     */
    readonly frameOrientation: DocReaderOrientation;
    readonly uvTorch: boolean;
    readonly faceExt: boolean;
    readonly multiPageOff: boolean;
    readonly seriesProcessMode: boolean;
    readonly frameKWHLandscape: number;
    readonly frameKWHPortrait: number;
    readonly frameKWHDoublePageSpreadLandscape: number;
    readonly frameKWHDoublePageSpreadPortrait: number;
    readonly manualCrop: boolean;

    private constructor();
}

export declare enum Scenario {
    /** Processing scenario for obtaining MRZ data. */
    MRZ = "Mrz",
    /** Processing scenario for obtaining barcode data. */
    BARCODE = "Barcode",
    /** Processing scenario for detecting document boundaries. */
    LOCATE = "Locate",
    /** Processing scenario for obtaining visual zone OCR results. */
    OCR = "Ocr",
    /** Processing scenario for document type recognition. */
    DOCTYPE = "DocType",
    /** Processing scenario for obtaining MRZ and/or barcode data. */
    MRZ_OR_BARCODE = "MrzOrBarcode",
    /** Processing scenario for detecting document boundaries and/or obtaining MRZ data. */
    MRZ_OR_LOCATE = "MrzOrLocate",
    /** Processing scenario for detecting document boundaries and obtaining MRZ data. */
    MRZ_AND_LOCATE = "MrzAndLocate",
    /** Processing scenario for detecting document boundaries and obtaining barcode data. */
    BARCODE_AND_LOCATE = "BarcodeAndLocate",
    /** Processing scenario for obtaining MRZ data or visual zone OCR results. */
    MRZ_OR_OCR = "MrzOrOcr",
    /** Processing scenario for obtaining MRZ or barcode or visual zone OCR results. */
    MRZ_OR_BARCODE_OR_OCR = "MrzOrBarcodeOrOcr",
    /** Processing scenario for detecting document boundaries and obtaining MRZ data or visual zone OCR results. */
    LOCATE_VISUAL_AND_MRZ_OR_OCR = "LocateVisual_And_MrzOrOcr",
    /** Processing scenario for obtaining all document data. */
    FULL_PROCESS = "FullProcess",
    /** Processing scenario for obtaining all document data and document authentication. */
    FULL_AUTH = "FullAuth",
    /** Processing scenario for obtaining visual zone OCR results from Russian National Passport and MRZ data from any document. */
    ID3RUS = "Id3Rus",
    /** Processing scenario for obtaining data from registration stamps in Russian passports. */
    RUS_STAMP = "RusStamp",
    /** Processing scenario for obtaining OCR results of any image. */
    OCR_FREE = "OcrFree",
    /** Processing scenario for obtaining bank card data. */
    CREDIT_CARD = "CreditCard",
    /** Scenario for obtaining an original image without any processing. */
    CAPTURE = "Capture",
    /** Scenario for Digital Travel Credentials (DTC) processing. */
    DTC = "DTC",
    /** Processing scenario for RFID reading. */
    RFID = "RFID"
}

/**
 * Contains set of values of the application's orientation.
 */
export declare enum DocReaderOrientation {
    /** All interface orientations - orientation not set, activities will rotate. */
    ALL = 0,
    /** A portrait interface orientation. */
    PORTRAIT = 1,
    /** Both landscape-left and landscape-right interface orientation. */
    LANDSCAPE = 2,
    /** A landscape-left interface orientation. */
    LANDSCAPE_LEFT = 3,
    /** A landscape-right interface orientation. */
    LANDSCAPE_RIGHT = 4
}
