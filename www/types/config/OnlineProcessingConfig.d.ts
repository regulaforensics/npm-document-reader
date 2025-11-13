import { ProcessParams } from "../params/process_params/ProcessParams";

export declare class OnlineProcessingConfig {
    mode: OnlineMode;
    url: string;
    processParams: ProcessParams;
    imageFormat: ImageFormat;
    imageCompressionQuality: number;
    requestHeaders?: Record<string, string>;

    constructor(mode: OnlineMode);
}

export declare enum ImageFormat {
    PNG = 0,
    JPG = 1,
}

export declare enum OnlineMode {
    MANUAL = 0,
    AUTO = 1,
}
