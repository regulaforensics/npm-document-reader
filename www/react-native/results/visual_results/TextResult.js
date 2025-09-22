import { CheckResult } from "../status/CheckResult.js";
import { TextSource } from "../visual_results/TextSource.js";
import { TextField } from "./TextField.js";

export class TextResult {
    status;
    comparisonStatus;
    validityStatus;
    availableSourceList;
    fields;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new TextResult();
        
        result.status = jsonObject["status"];
        result.comparisonStatus = jsonObject["comparisonStatus"];
        result.validityStatus = jsonObject["validityStatus"];
        
        result.availableSourceList = [];
        if (jsonObject["availableSourceList"] != null) {
            for (const item of jsonObject["availableSourceList"]) {
                const source = TextSource.fromJson(item);
                if (source != null) {
                    result.availableSourceList.push(source);
                }
            }
        }
        
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (const item of jsonObject["fields"]) {
                const field = TextField.fromJson(item);
                if (field != null) {
                    result.fields.push(field);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "status": this.status,
            "comparisonStatus": this.comparisonStatus,
            "validityStatus": this.validityStatus,
            "availableSourceList": this.availableSourceList?.map(e => e.toJson()),
            "fields": this.fields?.map(e => e.toJson()),
        }
    }
} 