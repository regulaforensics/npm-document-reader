import { DocumentReaderCompletion, DocReaderAction } from "../index";
import { Results } from "../results/Results";
import { RFIDException } from "../info/RFIDException";
import { RFIDNotification } from "../rfid/RFIDNotification";
import { PAResourcesIssuer } from "../rfid/PAResourcesIssuer";
import { PKDCertificate } from "../rfid/PKDCertificate";
import { TAChallenge } from "../rfid/TAChallenge";

/**
 * A configuration file for the RFID chip processing.
 */
export declare class RFIDConfig {
    /**
     * Callback for reveiving notification about RFID reading process.
     */
    onProgress?: RFIDProgressCompletion;

    /**
     * Callback for receiving signal when RFID chip is recognized
     * by a phone and chip reading is started.
     *
     * Only used with default constructor. If {@link RFIDConfig.withoutUI} was used,
     * you will receive this update via {@link DocumentReaderCompletion}.
     */
    onChipDetected?: ChipDetectedCompletion;

    /**
     * Fires when RFID chip reading was interrupted with no severe reasons
     * (for example connection to the chip was lost) and will be reestablished automatically.
     *
     * Only used with default constructor. If {@link RFIDConfig.withoutUI} was used,
     * you will receive this update via {@link DocumentReaderCompletion}
     * and chip reading will not be reestablished.
     */
    onRetryReadChip?: RetryReadChipCompletion;

    /**
     * Callback for receiving RFID request data
     */
    onRequestPACertificates?: PaCertificateCompletion;

    /**
     * Callback for receiving RFID request data
     */
    onRequestTACertificates?: TaCertificateCompletion;

    /**
     * Callback for receiving RFID request data
     */
    onRequestTASignature?: TaSignatureCompletion;

    /**
     * Regular RFID chip reading.
     *
     * @param completion - block to execute after the chip reading process finishes.
     */
    constructor(completion: DocumentReaderCompletion);

    /**
     * RFID chip reading with no UI.
     *
     * User is supposed to implement the UI.
     *
     * Since this constructor accepts {@link RFIDCompletion}
     * instead of {@link DocumentReaderCompletion}, user will be provided
     * with more in-depth error information.
     *
     * @param completion - block to execute after the chip reading process finishes.
     */
    static withoutUI(completion: RFIDCompletion): RFIDConfig;
}

/**
 * Callback for receiving answer from processing engine.
 *
 * @param action - defines current processing status.
 * @param results - defines current processing results.
 * @param error - in case of anything is wrong - brief message for developer, `null` otherwise.
 */
export type RFIDCompletion = (action: DocReaderAction, results: Results | null, error: RFIDException | null) => void;

/**
 * Completion for reveiving notification about RFID reading process.
 */
export type RFIDProgressCompletion = (notification: RFIDNotification) => void;

/**
 * Callback for receiving signal when RFID chip is recognized
 * by a phone and chip reading is started.
 *
 * Only used with default constructor. If {@link RFIDConfig.withoutUI} was used,
 * you will receive this update via {@link DocumentReaderCompletion}.
 */
export type ChipDetectedCompletion = () => void;

/**
 * Fires when RFID chip reading was interrupted with no severe reasons
 * (for example connection to the chip was lost) and will be reestablished automatically.
 *
 * Only used with default constructor. If {@link RFIDConfig.withoutUI} was used,
 * you will receive this update via {@link DocumentReaderCompletion}
 * and chip reading will not be reestablished.
 *
 * @param error - a brief message for developer.
 */
export type RetryReadChipCompletion = (error: RFIDException) => void;

/**
 * Callback for receiving RFID request data
 */
export type PaCertificateCompletion = (serialNumber: string, issuer: PAResourcesIssuer | null, request: PKDCertificateRequest) => void;

/**
 * Callback for receiving RFID request data
 */
export type TaCertificateCompletion = (keyCAR: string | null, request: PKDCertificateRequest) => void;

/**
 * Provided to a user for passing PKDCertificates to the native part of DocumentReader.
 */
export type PKDCertificateRequest = (certificates?: PKDCertificate[]) => Promise<void>;

/**
 * Callback for receiving RFID request data
 */
export type TaSignatureCompletion = (challenge: TAChallenge | null, request: TASignatureRequest) => void;

/**
 * Provided to a user for passing TASignature to the native part of DocumentReader. Base64 string.
 */
export type TASignatureRequest = (signature?: string) => Promise<void>; 
