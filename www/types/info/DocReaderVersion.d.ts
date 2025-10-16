import { DocumentsDatabase } from "./DocumentsDatabase";

/**
 * Class contains properties to get the information about the SDK.
 */
export declare class DocReaderVersion {
    /**
     * A version of the API framework.
     */
    readonly api?: string;

    /**
     * A version of the Core framework.
     */
    readonly core?: string;

    /**
     * A type of the Core framework.
     */
    readonly coreMode?: string;

    /**
     * A version of the database.
     */
    readonly database?: DocumentsDatabase;

    private constructor();
}
