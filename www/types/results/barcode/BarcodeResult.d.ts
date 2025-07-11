import { BarcodeField } from "./BarcodeField";

/**
 * Structure, describing single barcode extracted.
 */
export declare class BarcodeResult {
    readonly fields: BarcodeField[];

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): BarcodeResult | null;
}
