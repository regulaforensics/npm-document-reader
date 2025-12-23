import { CheckResult } from './CheckResult';

export class AgeStatus {
    threshold
    overThreshold
    over18
    over21
    over25
    over65

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new AgeStatus();

        result.threshold = jsonObject["threshold"];
        result.overThreshold = jsonObject["overThreshold"];
        result.over18 = jsonObject["over18"];
        result.over21 = jsonObject["over21"];
        result.over25 = jsonObject["over25"];
        result.over65 = jsonObject["over65"];
        
        return result;
    }

    toJson() {
        return {
            "threshold": this.threshold,
            "overThreshold": this.overThreshold,
            "over18": this.over18,
            "over21": this.over21,
            "over25": this.over25,
            "over65": this.over65,
        }
    }
}
