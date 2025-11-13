/**
 * Class contains info about database preparation progress.
 */
export declare class PrepareProgress {
    readonly downloadedBytes: number;
    readonly totalBytes: number;
    readonly progress: number;

    constructor(downloadedBytes: number, totalBytes: number, progress: number);
}

/**
 * Callback for receiving notifications on Documents Database preparation.
 */
export type DocumentReaderPrepareCompletion = (progress: PrepareProgress) => void;
