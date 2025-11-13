export class GlaresCheckParams {
    imgMarginPart
    maxGlaringPart

    constructor(options) {
        this.imgMarginPart = options?.imgMarginPart;
        this.maxGlaringPart = options?.maxGlaringPart;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new GlaresCheckParams({
            imgMarginPart: jsonObject["imgMarginPart"],
            maxGlaringPart: jsonObject["maxGlaringPart"]
        });
    }

    toJson() {
        return {
            "imgMarginPart": this.imgMarginPart,
            "maxGlaringPart": this.maxGlaringPart,
        }
    }
}
