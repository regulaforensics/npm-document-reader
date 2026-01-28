import { MDLDeviceRetrieval } from "./DataRetrieval";

export declare class DeviceRetrievalMethod {
    readonly type: MDLDeviceRetrieval;
    readonly version?: number;
    readonly cmdMaxLength?: number;
    readonly respMaxLength?: number;
    readonly clientModeSupport?: boolean;
    readonly clientModeUUID?: string;
    readonly serverModeSupport?: boolean;
    readonly serverModeUUID?: string;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): DeviceRetrievalMethod | null;
}
