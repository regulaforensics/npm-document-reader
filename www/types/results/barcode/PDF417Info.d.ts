export declare class PDF417Info {
    /** Barcode error correction level. */
    readonly errorLevel: number;
    /** Number of columns in a barcode. */
    readonly columns: number;
    /** Number of rows in a barcode. */
    readonly rows: number;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): PDF417Info | null;

}
