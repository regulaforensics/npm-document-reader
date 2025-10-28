import { FilterObject } from "./FilterObject";

export declare class LivenessParams {
    checkOVI?: boolean;
    checkMLI?: boolean;
    checkHolo?: boolean;
    checkED?: boolean;
    checkBlackAndWhiteCopy?: boolean;

    /**
     * This parameter is used to enable Dynaprint detection.
     */
    checkDynaprint?: boolean;

    checkGeometry?: boolean;

    setCheckFilter(checkType: LivenessCheckType, filter: FilterObject): void;

    removeCheckFilter(checkType: LivenessCheckType): void;

    clearCheckFilter(): void;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): LivenessParams;
}

export declare enum LivenessCheckType {
    OVI = "checkOVI",
    MLI = "checkMLI",
    HOLO = "checkHolo",
    ED = "checkED",
    BLACK_AND_WHITE_COPY = "checkBlackAndWhiteCopy",
    DYNAPRINT = "checkDynaprint",
    GEOMETRY = "checkGeometry",
}
