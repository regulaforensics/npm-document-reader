import { AuthenticityCheck } from "./AuthenticityCheck";
import { CheckResult } from "../status/CheckResult";

export class AuthenticityResult {
    status
    checks

    constructor() {
        this.checks = []
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new AuthenticityResult()

        result.status = jsonObject["status"]
        for (const item of jsonObject["checks"]) {
            const check = AuthenticityCheck.fromJson(item)
            if (check != null) {
                result.checks.push(check)
            }
        }

        return result
    }

    toJson() {
        return {
            "status": this.status,
            "checks": this.checks?.map(e => e.toJson()),
        }
    }
}
