import { ResultType } from "../Results.js";
import { GraphicFieldType } from "./GraphicFieldType.js";
import { Lights } from "../visual_results/Lights.js";
import { Rect } from "../visual_results/Rect.js";

export class GraphicField {
    sourceType;
    fieldType;
    fieldName;
    light;
    lightName;
    pageIndex;
    originalPageIndex;
    value;
    fieldRect;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new GraphicField();
        
        result.sourceType = jsonObject["sourceType"];
        result.fieldType = jsonObject["fieldType"];
        result.fieldName = jsonObject["fieldName"];
        result.light = jsonObject["light"];
        result.lightName = jsonObject["lightName"];
        result.pageIndex = jsonObject["pageIndex"];
        result.originalPageIndex = jsonObject["originalPageIndex"];
        result.value = jsonObject["value"];
        result.fieldRect = Rect.fromJson(jsonObject["fieldRect"]);
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "fieldType": this.fieldType,
            "fieldName": this.fieldName,
            "light": this.light,
            "lightName": this.lightName,
            "pageIndex": this.pageIndex,
            "originalPageIndex": this.originalPageIndex,
            "value": this.value,
            "fieldRect": this.fieldRect?.toJson(),
        }
    }
} 