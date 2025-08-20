import { Rect } from "./Rect.js";

export class Symbol {
    code;
    rect;
    probability;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Symbol();
        
        result.code = jsonObject["code"];
        result.rect = Rect.fromJson(jsonObject["rect"]);
        result.probability = jsonObject["probability"];
        
        return result;
    }

    toJson() {
        return {
            "rect": this.rect?.toJson(),
            "code": this.code,
            "probability": this.probability,
        }
    }
} 