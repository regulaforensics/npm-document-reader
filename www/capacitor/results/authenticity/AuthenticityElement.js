import { SecurityFeatureType } from "./SecurityFeatureType";
import { CheckDiagnose } from "./CheckDiagnose";
import { CheckResult } from "../status/CheckResult";

export class AuthenticityElement {
    status
    elementType
    elementDiagnose
    elementTypeName
    elementDiagnoseName

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new AuthenticityElement()

        result.status = jsonObject["status"]
        result.elementType = jsonObject["elementType"]
        result.elementDiagnose = jsonObject["elementDiagnose"]
        result.elementTypeName = jsonObject["elementTypeName"]
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"]

        return result
    }
}
