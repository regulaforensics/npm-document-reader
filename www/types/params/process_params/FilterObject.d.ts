export declare class FilterObject {
    docIDsFilter?: FilterObjectType;
    docFormatsFilter?: FilterObjectType;
    docCategoriesFilter?: FilterObjectType;
    docCountriesFilter?: FilterObjectType;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): FilterObject;

    /** Allows you to serialize object. */
    toJson(): Record<string, any>;
}

export declare class FilterObjectType {
    private constructor()

    static createIncludeList(list: any[]): FilterObjectType;

    static createExcludeList(list: any[]): FilterObjectType;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): FilterObjectType;

    /** Allows you to serialize object. */
    toJson(): Record<string, any>;
}
