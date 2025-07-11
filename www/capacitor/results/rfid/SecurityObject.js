import { SignerInfo } from './SignerInfo';

export class SecurityObject {
    fileReference
    objectType
    version
    signerInfos
    notifications

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new SecurityObject();
        result.fileReference = jsonObject["fileReference"];
        result.version = jsonObject["version"];
        result.objectType = jsonObject["objectType"];
        result.notifications = jsonObject["notifications"];

        if (jsonObject["signerInfos"]) {
            result.signerInfos = [];
            for (const item of jsonObject["signerInfos"]) {
                const signerInfo = SignerInfo.fromJson(item);
                if (signerInfo) {
                    result.signerInfos.push(signerInfo);
                }
            }
        }

        return result;
    }
}
