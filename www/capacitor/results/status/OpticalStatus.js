import { CheckResult } from './CheckResult';

export class OpticalStatus {
    overallStatus
    mrz
    text
    docType
    security
    imageQA
    expiry
    vds
    pagesCount

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new OpticalStatus();
        result.overallStatus = jsonObject["overallStatus"];
        result.mrz = jsonObject["mrz"];
        result.text = jsonObject["text"];
        result.docType = jsonObject["docType"];
        result.security = jsonObject["security"];
        result.imageQA = jsonObject["imageQA"];
        result.expiry = jsonObject["expiry"];
        result.vds = jsonObject["vds"];
        result.pagesCount = jsonObject["pagesCount"];
        
        return result;
    }
}
