export declare class Extension {
    readonly data: string | null;
    readonly type: string | null;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Extension | null;
} 