import { Authority } from "./Authority";
import { Extension } from "./Extension";
import { RFIDCertificateType } from "./RFIDCertificateType";
import { RFIDValidity } from "./RFIDValidity";
import { RFIDValue } from "./RFIDValue";

export class CertificateChain {
    type
    extensions
    fileName
    issuer
    notifications
    origin
    paStatus
    serialNumber
    signatureAlgorithm
    subject
    subjectPKAlgorithm
    validity
    version

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CertificateChain();
        result.type = jsonObject["type"];
        result.origin = jsonObject["origin"];
        result.paStatus = jsonObject["paStatus"];
        result.version = jsonObject["version"];
        result.serialNumber = jsonObject["serialNumber"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.subjectPKAlgorithm = jsonObject["subjectPKAlgorithm"];
        result.fileName = RFIDValue.fromJson(jsonObject["fileName"]);
        result.issuer = Authority.fromJson(jsonObject["issuer"]);
        result.subject = Authority.fromJson(jsonObject["subject"]);
        result.validity = RFIDValidity.fromJson(jsonObject["validity"]);
        result.notifications = jsonObject["notifications"];
        
        if (jsonObject["extensions"] != null) {
            result.extensions = [];
            for (const item of jsonObject["extensions"]) {
                const extension = Extension.fromJson(item);
                if (extension != null) {
                    result.extensions.push(extension);
                }
            }
        }
        
        return result;
    }
}
