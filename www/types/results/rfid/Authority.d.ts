import { Attribute } from './Attribute';
import { RFIDValue } from './RFIDValue';

export declare class Authority {
    readonly attributes: Attribute[];
    readonly data?: string;
    readonly friendlyName?: RFIDValue;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): Authority | null;
}
