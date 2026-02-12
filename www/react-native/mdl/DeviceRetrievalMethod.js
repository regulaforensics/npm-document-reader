import { MDLDeviceRetrieval } from "./DataRetrieval";

export class DeviceRetrievalMethod {
    type
    version
    cmdMaxLength
    respMaxLength
    clientModeSupport
    clientModeUUID
    serverModeSupport
    serverModeUUID

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DeviceRetrievalMethod()

        result.type = jsonObject["type"]
        result.version = jsonObject["version"]
        result.cmdMaxLength = jsonObject["cmdMaxLength"]
        result.respMaxLength = jsonObject["respMaxLength"]
        result.clientModeSupport = jsonObject["clientModeSupport"]
        result.clientModeUUID = jsonObject["clientModeUUID"]
        result.serverModeSupport = jsonObject["serverModeSupport"]
        result.serverModeUUID = jsonObject["serverModeUUID"]

        return result
    }

    toJson() {
        return {
            "type": this.type,
            "version": this.version,
            "cmdMaxLength": this.cmdMaxLength,
            "respMaxLength": this.respMaxLength,
            "clientModeSupport": this.clientModeSupport,
            "clientModeUUID": this.clientModeUUID,
            "serverModeSupport": this.serverModeSupport,
            "serverModeUUID": this.serverModeUUID,
        }
    }
}
