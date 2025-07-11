import { ProcessParams } from "../params/process_params/ProcessParams";
import { Scenario } from "../info/DocReaderScenario";

export class OnlineProcessingConfig {
    mode
    url
    processParams
    imageFormat
    imageCompressionQuality
    requestHeaders

    constructor(mode) {
        this.mode = mode
        this.processParams = new ProcessParams()
        this.processParams.scenario = Scenario.FULL_PROCESS
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        
        const result = new OnlineProcessingConfig(jsonObject["mode"])
        
        result.url = jsonObject["url"]
        result.imageFormat = jsonObject["imageFormat"]
        result.imageCompressionQuality = jsonObject["imageCompressionQuality"]
        result.processParams = ProcessParams.fromJson(jsonObject["processParams"])
        result.requestHeaders = jsonObject["requestHeaders"]
        
        return result
    }
}

export const ImageFormat = {
    PNG: 0,
    JPG: 1
}

export const OnlineMode = {
    MANUAL: 0,
    AUTO: 1
}
