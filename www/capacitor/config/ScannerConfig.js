import { OnlineProcessingConfig } from "./OnlineProcessingConfig";

export class ScannerConfig {
    scenario
    onlineProcessingConfig
    livePortrait
    extPortrait
    cameraId

    constructor(scenario, onlineProcessingConfig) {
        this.scenario = scenario
        this.onlineProcessingConfig = onlineProcessingConfig
    }

    static withScenario(scenario) {
        const result = new ScannerConfig(scenario, undefined)
        return result
    }

    static withOnlineProcessingConfig(onlineProcessingConfig) {
        const result = new ScannerConfig(undefined, onlineProcessingConfig)
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null

        const result = new ScannerConfig(undefined, undefined)

        result.scenario = jsonObject["scenario"]
        result.onlineProcessingConfig = OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"])
        result.livePortrait = jsonObject["livePortrait"]
        result.extPortrait = jsonObject["extPortrait"]
        result.cameraId = jsonObject["cameraId"]

        return result
    }
}
