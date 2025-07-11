import { Attribute } from './Attribute';
import { RFIDValue } from './RFIDValue';

export class Authority {
    attributes
    data
    friendlyName

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Authority();
        result.data = jsonObject["data"];
        result.friendlyName = RFIDValue.fromJson(jsonObject["friendlyName"]);
        
        if (jsonObject["attributes"] != null) {
            result.attributes = [];
            for (const item of jsonObject["attributes"]) {
                const attribute = Attribute.fromJson(item);
                if (attribute != null) {
                    result.attributes.push(attribute);
                }
            }
        }
        
        return result;
    }
}
