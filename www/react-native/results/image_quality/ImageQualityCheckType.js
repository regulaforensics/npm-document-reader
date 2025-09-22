import { exec } from "../../internal/bridge";

export const ImageQualityCheckType = {
    IMAGE_GLARES: 0,
    IMAGE_FOCUS: 1,
    IMAGE_RESOLUTION: 2,
    IMAGE_COLORNESS: 3,
    PERSPECTIVE: 4,
    BOUNDS: 5,
    SCREEN_CAPTURE: 6,
    PORTRAIT: 7,
    HANDWRITTEN: 8,
    BRIGHTNESS: 9,
    OCCLUSION: 10
}

ImageQualityCheckType.getTranslation = async function (value) {
    return await exec("getTranslation", ["ImageQualityCheckType", value]);
}
