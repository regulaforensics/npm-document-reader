import { CheckResult } from "../status/CheckResult.js";
import { ResultType } from "../Results.js";

export class Comparison {
    sourceTypeLeft;
    sourceTypeRight;
    status;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Comparison();
        
        result.sourceTypeLeft = jsonObject["sourceTypeLeft"];
        result.sourceTypeRight = jsonObject["sourceTypeRight"];
        result.status = jsonObject["status"];
        
        return result;
    }

    toJson() {
        return {
            "sourceTypeLeft": this.sourceTypeLeft,
            "sourceTypeRight": this.sourceTypeRight,
            "status": this.status,
        }
    }
} 