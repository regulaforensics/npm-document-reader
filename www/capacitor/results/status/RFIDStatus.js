import { CheckResult } from './CheckResult';

export class RFIDStatus {
    overallStatus
    pa
    ca
    aa
    ta
    bac
    pace

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDStatus();
        result.pa = jsonObject["pa"];
        result.ca = jsonObject["ca"];
        result.aa = jsonObject["aa"];
        result.ta = jsonObject["ta"];
        result.bac = jsonObject["bac"];
        result.pace = jsonObject["pace"];
        result.overallStatus = jsonObject["overallStatus"];
        
        return result;
    }
}
