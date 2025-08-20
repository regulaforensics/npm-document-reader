import { CertificateChain } from '../rfid/CertificateChain';
import { BytesData } from './BytesData';

export class VDSNCData {
    type
    version
    issuingCountry
    message
    signatureAlgorithm
    signature
    certificate
    certificateChain
    notifications

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new VDSNCData();
        result.type = jsonObject["type"];
        result.version = jsonObject["version"];
        result.issuingCountry = jsonObject["issuingCountry"];
        result.message = jsonObject["message"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.signature = BytesData.fromJson(jsonObject["signature"]);
        result.certificate = BytesData.fromJson(jsonObject["certificate"]);
        result.notifications = jsonObject["notifications"];
        
        if (jsonObject["certificateChain"] != null) {
            result.certificateChain = [];
            for (const item of jsonObject["certificateChain"]) {
                const certificateChain = CertificateChain.fromJson(item);
                if (certificateChain != null) {
                    result.certificateChain.push(certificateChain);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "type": this.type,
            "version": this.version,
            "issuingCountry": this.issuingCountry,
            "message": this.message,
            "signatureAlgorithm": this.signatureAlgorithm,
            "signature": this.signature?.toJson(),
            "certificate": this.certificate?.toJson(),
            "certificateChain": this.certificateChain?.map(e => e.toJson()),
            "notifications": this.notifications,
        }
    }
}
