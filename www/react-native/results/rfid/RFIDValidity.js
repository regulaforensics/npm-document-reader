import { RFIDValue } from './RFIDValue';

export class RFIDValidity {
    notAfter
    notBefore

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDValidity();
        result.notAfter = RFIDValue.fromJson(jsonObject["notAfter"]);
        result.notBefore = RFIDValue.fromJson(jsonObject["notBefore"]);

        return result;
    }

    toJson() {
        return {
            "notAfter": this.notAfter?.toJson(),
            "notBefore": this.notBefore?.toJson(),
        }
    }
}
