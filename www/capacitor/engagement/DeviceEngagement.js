import { DeviceRetrievalMethod } from "./DeviceRetrievalMethod";

export class DeviceEngagement {
    deviceRetrievalMethods = []

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DeviceEngagement()

        for (var item of jsonObject["deviceRetrievalMethods"]) {
            item = DeviceRetrievalMethod.fromJson(item);
            if (item != null) {
                result.deviceRetrievalMethods.push(item);
            }
        }

        return result
    }

    toJson() {
        return {
            "deviceRetrievalMethods": this.deviceRetrievalMethods.map(e => e.toJson()),
        }
    }
}

export const MDLDeviceEngagement = {
    QR: 0,
    NFC: 1,
}
