import { DeviceRetrievalMethod } from "./DeviceRetrievalMethod";

export declare class DeviceEngagement {
    deviceRetrievalMethods: DeviceRetrievalMethod[];

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): DeviceEngagement | null;
}

export declare enum MDLDeviceEngagement {
    QR = 0,
    NFC = 1,
}
