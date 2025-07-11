import { BarcodeField } from "./BarcodeField";

export class BarcodeResult {
    constructor() {
        this.fields = [];
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BarcodeResult();
        
        if (jsonObject["fields"] != null) {
            for (const item of jsonObject["fields"]) {
                const field = BarcodeField.fromJson(item);
                if (field != null) {
                    result.fields.push(field);
                }
            }
        }
        
        return result;
    }
}
