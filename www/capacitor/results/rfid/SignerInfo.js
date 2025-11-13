import { Authority } from './Authority';
import { RFIDValue } from './RFIDValue';
import { Extension } from './Extension';
import { CertificateChain } from './CertificateChain';

export class SignerInfo {
    dataToHash
    digestAlgorithm
    paStatus
    signatureAlgorithm
    version
    issuer
    serialNumber
    signature
    signedAttributes
    subjectKeyIdentifier
    certificateChain
    notifications

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new SignerInfo();
        result.dataToHash = jsonObject["dataToHash"];
        result.digestAlgorithm = jsonObject["digestAlgorithm"];
        result.paStatus = jsonObject["paStatus"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.version = jsonObject["version"];
        result.issuer = Authority.fromJson(jsonObject["issuer"]);
        result.serialNumber = RFIDValue.fromJson(jsonObject["serialNumber"]);
        result.signature = RFIDValue.fromJson(jsonObject["signature"]);
        result.subjectKeyIdentifier = RFIDValue.fromJson(jsonObject["subjectKeyIdentifier"]);
        result.notifications = jsonObject["notifications"];
        
        if (jsonObject["signedAttributes"] != null) {
            result.signedAttributes = [];
            for (const item of jsonObject["signedAttributes"]) {
                const extension = Extension.fromJson(item);
                if (extension != null) {
                    result.signedAttributes.push(extension);
                }
            }
        }
        
        if (jsonObject["certificateChain"] != null) {
            result.certificateChain = [];
            for (const item of jsonObject["certificateChain"]) {
                const certificateChainItem = CertificateChain.fromJson(item);
                if (certificateChainItem != null) {
                    result.certificateChain.push(certificateChainItem);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "dataToHash": this.dataToHash,
            "digestAlgorithm": this.digestAlgorithm,
            "version": this.version,
            "paStatus": this.paStatus,
            "signatureAlgorithm": this.signatureAlgorithm,
            "issuer": this.issuer?.toJson(),
            "serialNumber": this.serialNumber?.toJson(),
            "signature": this.signature?.toJson(),
            "subjectKeyIdentifier": this.subjectKeyIdentifier?.toJson(),
            "signedAttributes": this.signedAttributes?.map(e => e.toJson()),
            "certificateChain": this.certificateChain?.map(e => e.toJson()),
            "notifications": this.notifications,
        }
    }
}
