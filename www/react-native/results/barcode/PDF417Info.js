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

    toJson() {
        return {
            "errorLevel": this.errorLevel,
            "columns": this.columns,
            "rows": this.rows,
        }
    }
}
