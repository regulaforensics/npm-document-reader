import { Scenario } from "../info/DocReaderScenario";
import { OnlineProcessingConfig } from "./OnlineProcessingConfig";

/**
 * A configuration file for the scanner screen.
 */
export declare class ScannerConfig {
    /**
     * Documents processing scenario.
     */
    readonly scenario?: Scenario;

    /**
     * Configuration class for online processing.
     *
     * Requires network connection.
     */
    readonly onlineProcessingConfig?: OnlineProcessingConfig;

    /**
     * Live portrait photo. Base64 string.
     *
     * Requires network connection.
     */
    livePortrait?: string;

    /**
     * Portrait photo from an external source. Base64 string.
     *
     * Requires network connection.
     */
    extPortrait?: string;

    /**
     * Camera id.
     *
     * Android only.
     */
    cameraId?: number;

    constructor(scenario: Scenario, onlineProcessingConfig: OnlineProcessingConfig);

    /**
     * Creates a configuration with a specific processing scenario.
     * @param scenario The documents processing scenario.
     */
    static withScenario(scenario: Scenario): ScannerConfig;

    /**
     * Creates a configuration for online processing.
     * @param onlineProcessingConfig The configuration for online processing.
     */
    static withOnlineProcessingConfig(onlineProcessingConfig: OnlineProcessingConfig): ScannerConfig;
}
