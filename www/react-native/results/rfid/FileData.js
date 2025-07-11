export class FileData {
    data
    length
    type
    status

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new FileData();
        result.data = jsonObject["data"];
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        
        return result;
    }
}
