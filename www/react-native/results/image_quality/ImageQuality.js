import { CheckResult } from "../status/CheckResult";
import { Rect } from "../visual_results/Rect";
import { ImageQualityCheckType } from "./ImageQualityCheckType";

export class ImageQuality {
    featureType
    result
    type
    boundRects

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ImageQuality();
        result.featureType = jsonObject["featureType"];
        result.result = jsonObject["result"];
        result.type = jsonObject["type"];
        
        if (jsonObject["boundRects"] != null) {
            result.boundRects = [];
            for (const item of jsonObject["boundRects"]) {
                const rect = Rect.fromJson(item);
                if (rect != null) {
                    result.boundRects.push(rect);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "featureType": this.featureType,
            "result": this.result,
            "type": this.type,
            "boundRects": this.boundRects?.map(e => e.toJson()),
        }
    }
}
