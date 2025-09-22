import { Authenticity } from "./Authenticity";
import { AuthenticityElement } from "./AuthenticityElement";
import { CheckResult } from "../status/CheckResult";

export class AuthenticityCheck {
    type
    status
    pageIndex
    elements
    typeName

    constructor() {
        this.elements = []
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new AuthenticityCheck()

        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.typeName = jsonObject["typeName"]
        result.pageIndex = jsonObject["pageIndex"]
        for (const item of jsonObject["elements"]) {
            const element = AuthenticityElement.fromJson(item)
            if (element != null) {
                result.elements.push(element)
            }
        }

        return result
    }

    toJson() {
        return {
            "type": this.type,
            "status": this.status,
            "pageIndex": this.pageIndex,
            "typeName": this.typeName,
            "elements": this.elements?.map(e => e.toJson()),
        }
    }
}
