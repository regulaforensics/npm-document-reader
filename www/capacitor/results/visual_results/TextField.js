import { FieldType } from "../visual_results/FieldType.js";
import { LCID } from "./LCID.js";
import { CheckResult } from "../status/CheckResult.js";
import { Value } from "../visual_results/Value.js";
import { Comparison } from "./Comparison.js";
import { Validity } from "../visual_results/Validity.js";

export class TextField {
    fieldType;
    fieldName;
    lcid;
    lcidName;
    value;
    getValue;
    values;
    status;
    comparisonList;
    validityList;
    comparisonStatus;
    validityStatus;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new TextField();
        
        result.fieldType = jsonObject["fieldType"];
        result.fieldName = jsonObject["fieldName"];
        result.lcid = jsonObject["lcid"];
        result.lcidName = jsonObject["lcidName"];
        result.value = jsonObject["value"];
        result.getValue = Value.fromJson(jsonObject["getValue"]);
        result.status = jsonObject["status"];
        result.comparisonStatus = jsonObject["comparisonStatus"];
        result.validityStatus = jsonObject["validityStatus"];
        
        result.values = [];
        if (jsonObject["values"] != null) {
            for (const item of jsonObject["values"]) {
                const value = Value.fromJson(item);
                if (value != null) {
                    result.values.push(value);
                }
            }
        }
        
        result.comparisonList = [];
        if (jsonObject["comparisonList"] != null) {
            for (const item of jsonObject["comparisonList"]) {
                const comparison = Comparison.fromJson(item);
                if (comparison != null) {
                    result.comparisonList.push(comparison);
                }
            }
        }
        
        result.validityList = [];
        if (jsonObject["validityList"] != null) {
            for (const item of jsonObject["validityList"]) {
                const validity = Validity.fromJson(item);
                if (validity != null) {
                    result.validityList.push(validity);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "fieldType": this.fieldType,
            "fieldName": this.fieldName,
            "lcid": this.lcid,
            "lcidName": this.lcidName,
            "value": this.value,
            "getValue": this.getValue?.toJson(),
            "values": this.values?.map(e => e.toJson()),
            "status": this.status,
            "comparisonList": this.comparisonList?.map(e => e.toJson()),
            "validityList": this.validityList?.map(e => e.toJson()),
            "comparisonStatus": this.comparisonStatus,
            "validityStatus": this.validityStatus,
        }
    }
} 