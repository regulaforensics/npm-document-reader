export class PDF417Info {
    errorLevel
    columns
    rows

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new PDF417Info();
        result.errorLevel = jsonObject["errorLevel"];
        result.columns = jsonObject["columns"];
        result.rows = jsonObject["rows"];
        
        return result;
    }
}
