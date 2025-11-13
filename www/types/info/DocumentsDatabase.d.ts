/**
 * Class contains properties to get the information about the database.
 */
export declare class DocumentsDatabase {
    /**
     * An ID of the database, e.g. BLR, RUS.
     */
    readonly databaseID?: string;

    /**
     * A version of the database.
     */
    readonly version?: string;

    /**
     * A date when the database was created.
     */
    readonly date?: string;

    /**
     * A list of supported documents in the database.
     */
    readonly databaseDescription?: string;

    /**
     * A number of countries included in the database.
     */
    readonly countriesNumber: number;

    /**
     * A number of documents included in the database.
     */
    readonly documentsNumber: number;

    /**
     * Database size. In bytes.
     * Available for database update check.
     */
    readonly size?: number;

    private constructor();
}
