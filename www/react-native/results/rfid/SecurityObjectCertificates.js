import { CertificateData } from './CertificateData';

export class SecurityObjectCertificates {
    securityObject

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new SecurityObjectCertificates();
        result.securityObject = CertificateData.fromJson(jsonObject["securityObject"]);
        
        return result;
    }

    toJson() {
        return {
            "securityObject": this.securityObject?.toJson(),
        }
    }
}
