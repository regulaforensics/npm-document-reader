export class OcclusionCheckParams {
    maxOcclusionPart

    constructor(options) {
        this.maxOcclusionPart = options?.maxOcclusionPart;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new OcclusionCheckParams({
            maxOcclusionPart: jsonObject["maxOcclusionPart"],
        });
    }

    toJson() {
        return {
            "maxOcclusionPart": this.maxOcclusionPart,
        }
    }
}
