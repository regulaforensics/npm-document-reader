import { BarcodeStatus } from "./BarcodeStatus";
import { BarcodeType } from "./BarcodeType";
import { PDF417Info } from "./PDF417Info";

/**
 * Structure describing single value of the field.
 */
export declare class BarcodeField {
    /**
     * Decoded barcode type.
     */
    readonly barcodeType: BarcodeType;
    /**
     * Indicates barcode reading result.
     */
    readonly status: BarcodeStatus;
    /**
     * Contains the information about the PDF417 barcode.
     */
    readonly pdf417Info?: PDF417Info;
    /**
     * Results of reading data from barcode modules.
     *
     * Base64 string.
     */
    readonly data?: string;
    /**
     * Indicates an index of the document page, whence the result is received.
     */
    readonly pageIndex: number;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): BarcodeField | null;
}
