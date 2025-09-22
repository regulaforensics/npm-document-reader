import { CertificateData } from "./CertificateData";

export declare class SecurityObjectCertificates {
    readonly securityObject?: CertificateData;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): SecurityObjectCertificates | null;
}
