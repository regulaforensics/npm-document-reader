import { BytesData } from "./BytesData";

export declare class DocFeature {
    readonly type: number;
    readonly data: BytesData;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): DocFeature | null;
}
