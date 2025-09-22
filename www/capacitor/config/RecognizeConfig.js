import { OnlineProcessingConfig } from "./OnlineProcessingConfig";
import { Scenario } from "../info/DocReaderScenario";
import { Lights } from "../results/visual_results/Lights";

export class RecognizeConfig {
    scenario
    onlineProcessingConfig
    image
    images
    data
    imageInputData
    dtc
    livePortrait
    extPortrait
    oneShotIdentification

    constructor() {
        this.oneShotIdentification = false
    }

    static withScenario(scenario, options) {
        const result = new RecognizeConfig()
        result.scenario = scenario
        result.image = options?.image
        result.images = options?.images
        result.data = options?.data
        result.imageInputData = options?.imageInputData
        result.dtc = options?.dtc
        result.livePortrait = options?.livePortrait
        result.extPortrait = options?.extPortrait
        result.oneShotIdentification = options?.oneShotIdentification ?? false
        return result
    }

    static withOnlineProcessingConfig(onlineProcessingConfig, options) {
        const result = new RecognizeConfig()
        result.onlineProcessingConfig = onlineProcessingConfig
        result.image = options?.image
        result.images = options?.images
        result.data = options?.data
        result.imageInputData = options?.imageInputData
        result.dtc = options?.dtc
        result.livePortrait = options?.livePortrait
        result.extPortrait = options?.extPortrait
        result.oneShotIdentification = options?.oneShotIdentification ?? false
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new RecognizeConfig()

        result.scenario = jsonObject["scenario"]
        result.onlineProcessingConfig = OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"])
        result.image = jsonObject["image"]
        if (jsonObject["images"] != null) {
            result.images = []
            for (const item of jsonObject["images"]) {
                if (item != null) {
                    result.images.push(item)
                }
            }
        }
        result.data = jsonObject["data"]
        if (jsonObject["imageInputData"] != null) {
            result.imageInputData = []
            for (const item of jsonObject["imageInputData"]) {
                const imageInputData = ImageInputData.fromJson(item)
                if (imageInputData != null) {
                    result.imageInputData.push(imageInputData)
                }
            }
        }
        result.dtc = jsonObject["dtc"]
        result.livePortrait = jsonObject["livePortrait"]
        result.extPortrait = jsonObject["extPortrait"]
        result.oneShotIdentification = jsonObject["oneShotIdentification"]

        return result
    }

    toJson() {
        return {
            "scenario": this.scenario,
            "onlineProcessingConfig": this.onlineProcessingConfig?.toJson(),
            "image": this.image,
            "images": this.images,
            "data": this.data,
            "imageInputData": this.imageInputData?.map(e => e.toJson()),
            "dtc": this.dtc,
            "livePortrait": this.livePortrait,
            "extPortrait": this.extPortrait,
            "oneShotIdentification": this.oneShotIdentification,
        }
    }
}

export class ImageInputData {
    image
    light
    pageIndex

    constructor(image, options) {
        this.image = image
        this.light = options?.light ?? Lights.WHITE_FULL
        this.pageIndex = options?.pageIndex ?? 0
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageInputData(jsonObject["image"])

        result.pageIndex = jsonObject["pageIndex"]
        result.light = jsonObject["light"]

        return result
    }

    toJson() {
        return {
            "image": this.image,
            "light": this.light,
            "pageIndex": this.pageIndex,
        }
    }
}
