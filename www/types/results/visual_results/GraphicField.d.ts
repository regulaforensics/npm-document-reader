import { ResultType } from "../Results";
import { GraphicFieldType } from "./GraphicFieldType";
import { Lights } from "./Lights";
import { Rect } from './Rect';

/** Structure, describing single graphic field extracted. */
export declare class GraphicField {
    /** Identifies zone whence data is extracted. */
    readonly sourceType: ResultType;
    /** Graphic field logical type. */
    readonly fieldType: GraphicFieldType;
    /** Graphic field symbolic name. */
    readonly fieldName: string;
    /** Light type. */
    readonly light: Lights;
    /** Light symbolic name. */
    readonly lightName: string;
    /** An index of the document page whence the graphic field is extracted. */
    readonly pageIndex: number;
    /** Original page index. */
    readonly originalPageIndex: number;
    /** An image. */
    readonly value?: string;
    /** Field area coordinates on the general image. */
    readonly fieldRect?: Rect;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): GraphicField | null;
}
