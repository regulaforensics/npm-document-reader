export declare class BackendProcessingConfig {
    readonly url: string;
    readonly httpHeaders?: Record<string, string>;
    readonly rfidServerSideChipVerification?: boolean;

    /**
     * Timeout in seconds that can be configured for backend transaction creation and package finalization.
     */
    readonly timeoutConnection?: number;

    constructor(
        url: string,
        options?: {
            rfidServerSideChipVerification?: boolean,
            httpHeaders?: Record<string, string>,
            timeoutConnection?: number,
        }
    );

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): BackendProcessingConfig;
}
