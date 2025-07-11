import { SignerInfo } from "./SignerInfo";

/**
 * Structure is used to describe the contents of a single document
 * security object (SO) and the results of its check within the context
 * of the communication session with electronic document.
 */
export declare class SecurityObject {
    /** Reference to the source file of the security object data. */
    readonly fileReference: number;
    /** Security object identifier. */
    readonly objectType?: string;
    /** Security object version. */
    readonly version: number;
    /**
     * List of containers to store information about digital
     * signature objects contained in the SO.
     */
    readonly signerInfos: SignerInfo[];
    /**
     * The list of remarks occured during the scanning procedure.
     * Each element belongs to the {@link LDSParsingErrorCodes}.
     */
    readonly notifications: number[];

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): SecurityObject | null;
}
