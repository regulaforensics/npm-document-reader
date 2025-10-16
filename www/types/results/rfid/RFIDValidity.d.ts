import { RFIDValue } from './RFIDValue';

export declare class RFIDValidity {
    readonly notAfter?: RFIDValue;
    readonly notBefore?: RFIDValue;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): RFIDValidity | null;
}
