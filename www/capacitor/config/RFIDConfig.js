import { DocReaderAction } from "../index";
import { Results } from "../results/Results";
import { RFIDException } from "../info/RFIDException";
import { RFIDNotification } from "../rfid/RFIDNotification";
import { PAResourcesIssuer } from "../rfid/PAResourcesIssuer";
import { PKDCertificate } from "../rfid/PKDCertificate";
import { TAChallenge } from "../rfid/TAChallenge";
import { PACEProtocol } from "../rfid/PACEProtocol";
import { CAProtocol } from "../rfid/CAProtocol";

export class RFIDConfig {
    _completion
    _rfidCompletion
    _disableUI
    onProgress
    onChipDetected
    onRetryReadChip
    onRequestPACertificates
    onRequestTACertificates
    onRequestTASignature
    onRequestPACEProtocol
    onRequestCAProtocol

    constructor(completion) {
        this._completion = completion
        this._disableUI = false
    }

    static withoutUI(completion) {
        const result = new RFIDConfig(null)
        result._rfidCompletion = completion
        result._disableUI = true
        return result
    }

    toJson() {
        return {
            "paCertificates": this.onRequestPACertificates != null,
            "taCertificates": this.onRequestTACertificates != null,
            "taSignature": this.onRequestTASignature != null,
            "paceProtocol": this.onRequestPACEProtocol != null,
            "caProtocol": this.onRequestCAProtocol != null,
        }
    }
}
