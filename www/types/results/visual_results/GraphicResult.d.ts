import { GraphicField } from './GraphicField';

/** Structure, containing all graphic fields extracted. */
export declare class GraphicResult {
    /** An array of graphic results. */
    readonly fields: GraphicField[];

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): GraphicResult | null;
}
