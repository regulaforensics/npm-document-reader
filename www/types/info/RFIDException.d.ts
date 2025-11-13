import { RFIDErrorCodes } from "../rfid/RFIDErrorCodes";

export declare class RFIDException {
    readonly code: RFIDErrorCodes;
    readonly message: string;

    private constructor();
}
