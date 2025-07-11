import { RFIDValue } from './RFIDValue';

export class Attribute {
    type
    value

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Attribute();
        result.type = jsonObject["type"];
        result.value = RFIDValue.fromJson(jsonObject["value"]);
        
        return result;
    }
}
