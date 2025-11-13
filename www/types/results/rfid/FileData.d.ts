export declare class FileData {
    readonly data?: string;
    readonly length: number;
    readonly type: number;
    readonly status: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): FileData | null;
}
