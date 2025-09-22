import { RFIDDataFileType } from './RFIDDataFileType';

export declare class DataField {
    readonly data: string;
    readonly fieldType: RFIDDataFileType;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): DataField | null;
} 