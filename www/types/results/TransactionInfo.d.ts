export declare class TransactionInfo {
    readonly transactionId?: string;
    readonly tag?: string;
    /** The path to the logs folder of the session. */
    readonly sessionLogFolder?: string;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): TransactionInfo | null;
}
