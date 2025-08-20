import { ResultType } from "../Results.js";
import { CheckResult } from "../status/CheckResult.js";

export class Validity {
    sourceType;
    status;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Validity();
        
        result.sourceType = jsonObject["sourceType"];
        result.status = jsonObject["status"];
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "status": this.status,
        }
    }
} 