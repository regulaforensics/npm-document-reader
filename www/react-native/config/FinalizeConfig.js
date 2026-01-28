export class FinalizeConfig {
    rawImages
    video
    rfidSession

    constructor(options) {
        this.rawImages = options?.rawImages
        this.video = options?.video
        this.rfidSession = options?.rfidSession
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        var result = new FinalizeConfig();

        result.rawImages = jsonObject["rawImages"];
        result.video = jsonObject["video"];
        result.rfidSession = jsonObject["rfidSession"];

        return result;
    }


    toJson() {
        return {
            "rawImages": this.rawImages,
            "video": this.video,
            "rfidSession": this.rfidSession,
        }
    }
}
