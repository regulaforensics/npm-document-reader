export class FinalizeConfig {
    rawImages
    video
    rfidSession
    mdlSession

    constructor(options) {
        this.rawImages = options?.rawImages
        this.video = options?.video
        this.rfidSession = options?.rfidSession
        this.mdlSession = options?.mdlSession
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        var result = new FinalizeConfig();

        result.rawImages = jsonObject["rawImages"];
        result.video = jsonObject["video"];
        result.rfidSession = jsonObject["rfidSession"];
        result.mdlSession = jsonObject["mdlSession"];

        return result;
    }


    toJson() {
        return {
            "rawImages": this.rawImages,
            "video": this.video,
            "rfidSession": this.rfidSession,
            "mdlSession": this.mdlSession,
        }
    }
}
