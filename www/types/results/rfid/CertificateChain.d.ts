import { Authority } from "./Authority";
import { Extension } from "./Extension";
import { RFIDCertificateType } from "./RFIDCertificateType";
import { RFIDValidity } from "./RFIDValidity";
import { RFIDValue } from "./RFIDValue";

export declare class CertificateChain {
    /**
     * Define the type of certificate used in the procedure of document
     * security object digital signature verification.
     */
    readonly type: RFIDCertificateType;
    readonly extensions: Extension[];
    readonly fileName?: RFIDValue;
    readonly issuer?: Authority;
    readonly notifications: number[];
    readonly origin: number;
    readonly paStatus: number;
    readonly serialNumber?: string;
    readonly signatureAlgorithm?: string;
    readonly subject?: Authority;
    readonly subjectPKAlgorithm?: string;
    readonly validity?: RFIDValidity;
    readonly version: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): CertificateChain | null;
}
