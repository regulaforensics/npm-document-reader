export declare class NameSpaceMDL {
    constructor(name: string);

    addField(name: string, intentToRetain: MDLIntentToRetain): void;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): NameSpaceMDL | null;
}

export declare enum MDLIntentToRetain {
    FALSE = 0,
    TRUE = 1,
}
