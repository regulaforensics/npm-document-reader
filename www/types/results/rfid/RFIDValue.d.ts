export declare class RFIDValue {
    readonly data?: string;
    readonly length: number;
    readonly status: number;
    readonly type: number;
    readonly format?: string;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): RFIDValue | null;
}
