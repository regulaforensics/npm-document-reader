import { CheckResult } from "../status/CheckResult";
import { ImageQuality } from "./ImageQuality";

export class ImageQualityGroup {
    count
    result
    imageQualityList
    pageIndex

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ImageQualityGroup();
        result.count = jsonObject["count"];
        result.result = jsonObject["result"];
        result.pageIndex = jsonObject["pageIndex"];
        
        if (jsonObject["imageQualityList"] != null) {
            result.imageQualityList = [];
            for (const item of jsonObject["imageQualityList"]) {
                const imageQuality = ImageQuality.fromJson(item);
                if (imageQuality != null) {
                    result.imageQualityList.push(imageQuality);
                }
            }
        }
        
        return result;
    }
}
