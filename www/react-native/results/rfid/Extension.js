export class Extension {
    data
    type

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Extension();
        result.data = jsonObject["data"];
        result.type = jsonObject["type"];
        
        return result;
    }
} 