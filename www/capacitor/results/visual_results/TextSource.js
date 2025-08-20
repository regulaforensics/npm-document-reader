import { ResultType } from "../Results.js";
import { CheckResult } from "../status/CheckResult.js";

export class TextSource {
    sourceType;
    source;
    validityStatus;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new TextSource();
        
        result.sourceType = jsonObject["sourceType"];
        result.source = jsonObject["source"];
        result.validityStatus = jsonObject["validityStatus"];
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "source": this.source,
            "validityStatus": this.validityStatus,
        }
    }
} 