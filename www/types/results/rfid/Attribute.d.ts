import { RFIDValue } from './RFIDValue';

export declare class Attribute {
    readonly type?: string;
    readonly value?: RFIDValue;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Attribute | null;
}
