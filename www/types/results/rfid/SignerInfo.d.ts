import { Authority } from "./Authority";
import { CertificateChain } from "./CertificateChain";
import { Extension } from "./Extension";
import { RFIDValue } from "./RFIDValue";

/**
 * Structure is used to store the result of the verification of a single digital
 * signature of the number present in EF.SOD.
 */
export declare class SignerInfo {
    /** Data to hash. */
    readonly dataToHash?: string;
    /** Digital signature hash-function algorithm identifier. */
    readonly digestAlgorithm?: string;
    /** Result of the digital signature verification. */
    readonly paStatus: number;
    /** Digital signature algorithm identifier. */
    readonly signatureAlgorithm?: string;
    /** Version of the digital signature data structure. */
    readonly version: number;
    /** Identifier of the necessary certificate issuer. */
    readonly issuer?: Authority;
    /** Serial number of the necessary certificate. */
    readonly serialNumber?: RFIDValue;
    /** Binary data of the verified digital signature. */
    readonly signature?: RFIDValue;
    /** List of the signed attributes. */
    readonly signedAttributes: Extension[];
    /** Signature object identifier of the necessary certificate. */
    readonly subjectKeyIdentifier?: RFIDValue;
    /** Certificate chain, used for the digital signature verification. */
    readonly certificateChain: CertificateChain[];
    /**
     * The list of remarks occured during the scanning procedure.
     * Each element belongs to the {@link LDSParsingErrorCodes}.
     */
    readonly notifications: number[];

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): SignerInfo | null;
}
