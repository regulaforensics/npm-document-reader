export class RFIDValue {
    data
    length
    status
    type
    format

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDValue();
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.data = jsonObject["data"];
        result.format = jsonObject["format"];
        
        return result;
    }
}
