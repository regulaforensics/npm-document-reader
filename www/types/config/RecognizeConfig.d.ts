import { OnlineProcessingConfig } from "./OnlineProcessingConfig";
import { Scenario } from "../info/DocReaderScenario";
import { Lights } from "../results/visual_results/Lights";

/**
 * Image processing configuration.
 */
export declare class RecognizeConfig {
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
     * Image for processing. Base64 string.
     */
    image?: string;

    /**
     * Images for processing. Array of base64 strings.
     */
    images?: string[];

    /**
     * Binary for processing. Base64 string.
     */
    data?: string;

    /**
     * Images(with input data) for processing.
     */
    imageInputData?: ImageInputData[];

    /**
     * DTC file for processing. Base64 string.
     */
    dtc?: string;

    /**
     * Live portrait photo.
     *
     * Requires network connection.
     */
    livePortrait?: string;

    /**
     * Portrait photo from an external source.
     *
     * Requires network connection.
     */
    extPortrait?: string;

    /**
     * This parameter is for processing an image that contains a person and
     * a document and compare the portrait photo from the document with
     * the person's face. It works only in the single-frame processing,
     * but not in the video frame processing. Requires network connection.
     * @default false
     */
    oneShotIdentification: boolean;

    private constructor();

    static withScenario(
        scenario: Scenario,
        options?: {
            image?: string,
            images?: string[],
            data?: string,
            imageInputData?: ImageInputData[],
            dtc?: string,
            livePortrait?: string,
            extPortrait?: string,
            oneShotIdentification?: boolean,
        }
    ): RecognizeConfig;

    static withOnlineProcessingConfig(
        onlineProcessingConfig: OnlineProcessingConfig,
        options?: {
            image?: string,
            images?: string[],
            data?: string,
            imageInputData?: ImageInputData[],
            dtc?: string,
            livePortrait?: string,
            extPortrait?: string,
            oneShotIdentification?: boolean,
        }
    ): RecognizeConfig;
}

export declare class ImageInputData {
    /**
     * An image. Base64 string.
     */
    readonly image: string;

    /**
     * Light type, one of RGLGraphicFieldLight values.
     * @default {@link Lights.WHITE_FULL}
     */
    light: Lights;

    /**
     * An index of the document page whence the graphic field is extracted.
     * @default 0
     */
    pageIndex: number;

    constructor(image: string, options?: { light?: Lights, pageIndex?: number });
}
