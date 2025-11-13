export declare class BytesData {
    readonly data: string;
    readonly length: number;
    readonly status: number;
    readonly type: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): BytesData | null;
}
