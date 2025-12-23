import { CertificateChain } from "../rfid/CertificateChain";
import { BytesData } from './BytesData';
import { DocFeature } from "./DocFeature";

/** Visible Digital Seal. */
export declare class VDSData {
    readonly type?: number;
    readonly docType?: number;
    readonly featureRef?: number;
    /** Visible Digital Seal use case version. */
    readonly version?: number;
    /** Three letter code identifying the issuing state or organization. */
    readonly issuingCountry?: string;
    readonly docIssueDate?: string;
    /** The binary data of the verified digital signature. */
    readonly signature?: BytesData;
    readonly signatureDate?: string;
    readonly signer?: string;
    readonly certificate?: string;
    /** The certificate chain, used for the digital signature verification. */
    readonly certificateChain: CertificateChain[];
    /** The doc features. */
    readonly docFeatures: DocFeature[];
    /**
     * The list of remarks occured during the scanning procedure.
     * Each element belongs to the {@link LDSParsingErrorCodes} or the {@link LDSParsingNotificationCodes}.
     */
    readonly notifications: number[];

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): VDSData | null;
}
