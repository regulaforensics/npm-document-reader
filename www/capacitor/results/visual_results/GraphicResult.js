import { GraphicField } from "./GraphicField.js";

export class GraphicResult {
    fields;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new GraphicResult();
        
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (const item of jsonObject["fields"]) {
                const field = GraphicField.fromJson(item);
                if (field != null) {
                    result.fields.push(field);
                }
            }
        }
        
        return result;
    }
} 