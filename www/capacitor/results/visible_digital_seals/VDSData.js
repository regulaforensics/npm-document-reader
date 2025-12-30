import { CertificateChain } from '../rfid/CertificateChain';
import { BytesData } from './BytesData';
import { DocFeature } from './DocFeature';

export class VDSData {
    type
    docType
    featureRef
    version
    issuingCountry
    docIssueDate
    signature
    signatureDate
    signer
    certificate
    certificateChain
    docFeatures
    notifications

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new VDSData();

        result.type = jsonObject["type"];
        result.docType = jsonObject["docType"];
        result.featureRef = jsonObject["featureRef"];
        result.version = jsonObject["version"];
        result.issuingCountry = jsonObject["issuingCountry"];
        result.docIssueDate = jsonObject["docIssueDate"];
        result.signature = BytesData.fromJson(jsonObject["signature"]);
        result.signatureDate = jsonObject["signatureDate"];
        result.signer = jsonObject["signer"];
        result.certificate = jsonObject["certificate"];
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
        if (jsonObject["docFeatures"] != null) {
            result.docFeatures = [];
            for (const item of jsonObject["docFeatures"]) {
                const docFeature = DocFeature.fromJson(item);
                if (docFeature != null) {
                    result.docFeatures.push(docFeature);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "type": this.type,
            "docType": this.docType,
            "featureRef": this.featureRef,
            "version": this.version,
            "issuingCountry": this.issuingCountry,
            "docIssueDate": this.docIssueDate,
            "signature": this.signature?.toJson(),
            "signatureDate": this.signatureDate,
            "signer": this.signer,
            "certificate": this.certificate,
            "certificateChain": this.certificateChain?.map(e => e.toJson()),
            "docFeatures": this.docFeatures?.map(e => e.toJson()),
            "notifications": this.notifications,
        }
    }
}
