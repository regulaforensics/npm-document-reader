/** Structure containing rfid origin values. */
export declare class RFIDOrigin {
    readonly dg: number;
    readonly dgTag: number;
    readonly entryView: number;
    readonly tagEntry: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): RFIDOrigin | null;
}
