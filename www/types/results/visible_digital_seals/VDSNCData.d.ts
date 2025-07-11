import { CertificateChain } from "../rfid/CertificateChain";
import { BytesData } from './BytesData';

/** Visible Digital Seal for Non Constrained environments. */
export declare class VDSNCData {
    /**
     * Visible Digital Seal use case type.
     * Type is set to `icao.test` for Proof of Testing (data defined by CAPSCA),
     * `icao.vacc` for Proof of Vaccination (data defined by WHO).
     * Other Types may be added in the future.
     */
    readonly type?: string;
    /** Visible Digital Seal use case version. */
    readonly version: number;
    /** Three letter code identifying the issuing state or organization. */
    readonly issuingCountry?: string;
    /** The message field contains the actual data as a dictionary (JSON). */
    readonly message?: Record<string, any>;
    /** The signature algorithm used to produce the signature. ECDSA scheme. */
    readonly signatureAlgorithm?: string;
    /** The binary data of the verified digital signature. */
    readonly signature?: BytesData;
    /** The binary data of the signer certificate. */
    readonly certificate?: BytesData;
    /** The certificate chain, used for the digital signature verification. */
    readonly certificateChain: CertificateChain[];
    /**
     * The list of remarks occured during the scanning procedure.
     * Each element belongs to the {@link LDSParsingErrorCodes} or the {@link LDSParsingNotificationCodes}.
     */
    readonly notifications?: number[];

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): VDSNCData | null;
}
