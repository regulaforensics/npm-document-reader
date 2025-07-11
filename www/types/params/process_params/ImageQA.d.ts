import { GlaresCheckParams } from "./GlaresCheckParams";
import { ImageQualityCheckType } from "../../results/image_quality/ImageQualityCheckType";

/**
 * Class contains properties to configure image quality.
 */
export declare class ImageQA {
    /**
     * This parameter sets threshold for Image QA check of the presented
     * document physical dpi. If actual document dpi is below this threshold,
     * check will fail.
     */
    dpiThreshold?: number;

    /**
     * This parameter sets threshold for Image QA check of the presented
     * document perspective angle in degrees. If actual document perspective
     * angle is above this threshold, check will fail.
     */
    angleThreshold?: number;

    /**
     * This option disabled focus check during performing image quality validation.
     */
    focusCheck?: boolean;

    /**
     * This option disabled glares check during performing image quality validation.
     */
    glaresCheck?: boolean;

    /**
     * Parameters for glares image quality validation.
     */
    glaresCheckParams?: GlaresCheckParams;

    /**
     * This option disabled colorness check during performing image quality validation.
     */
    colornessCheck?: boolean;

    /**
     * This option disabled moire patterns check during performing image quality validation.
     */
    screenCapture?: boolean;

    /**
     * This option controls the quality checks that the image should pass
     * in order to be considered a valid input during the scanning process.
     *
     * Unmodifiable property. Use setter instead of editing.
     */
    expectedPass?: ImageQualityCheckType[];

    /**
     * Specify the minimum indent from the corners of the document to the borders
     * of the image. The value reflects the allowed percentage for the indent
     * relative to the width of the document. If it is detected that the corners
     * of the document are closer than the specified value, the status will contain
     * an error in the `DocumentReaderResults.imageQuality.imageQualityList.result` field.
     */
    documentPositionIndent?: number;

    /**
     * Set the threshold for an actual document brightness below which the check fails.
     */
    brightnessThreshold?: number;

    /**
     * This option checks document image occlusion.
     */
    occlusionCheck?: boolean;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): ImageQA;
}
