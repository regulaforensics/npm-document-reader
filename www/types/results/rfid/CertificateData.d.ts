export declare class CertificateData {
    readonly data?: string;
    readonly length: number;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): CertificateData | null;
} 