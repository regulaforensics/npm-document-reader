export class BytesData {
    data
    length
    status
    type

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BytesData();
        result.data = jsonObject["data"];
        result.length = jsonObject["length"];
        result.status = jsonObject["status"];
        result.type = jsonObject["type"];
        
        return result;
    }
}
