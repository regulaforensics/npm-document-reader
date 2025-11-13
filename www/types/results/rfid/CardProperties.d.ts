/**
 * Structure is used to store extended information about the characteristics
 * of the RFID-chip located in the scope of the reader.
 */
export declare class CardProperties {
    /** Numeric ATQ_A value in hexadecimal format (e.g. "0x0000"). */
    readonly aTQA: number;
    /**
     * ATQ_B contents in text format. Each byte is represented by its
     * hexadecimal value. The individual bytes are sepa-rated by spaces
     * (e.g. "50 F9 4F 41 60 00 00 00 00 77 81 81").
     */
    readonly aTQB?: string;
    /**
     * aTR contents in text format. Each byte is represented by its hexadecimal value.
     * The individual bytes are separated by spaces
     * (e.g. "3B 88 81 11 FC 00 00 00 00 77 81 81 00 93").
     */
    readonly aTR?: string;
    /** Numeric Baudrate1 value in hexadecimal format (e.g. "0x0000000F"). */
    readonly baudrate1?: string;
    /** Numeric Baudrate2 value in hexadecimal format. */
    readonly baudrate2?: string;
    /** Numeric BitRateR value in hexadecimal format (e.g. "0x04"). */
    readonly bitRateR: number;
    /** Numeric BitRateS value in hexadecimal format (e.g. "0x04"). */
    readonly bitRateS: number;
    /** Text abbreviation of ChipType_A value. */
    readonly chipTypeA: number;
    /** Numeric MifareMemory value. */
    readonly mifareMemory: number;
    /** Text abbreviation of RFID_Type value. */
    readonly rfidType: number;
    /** Numeric SAK value in hexadecimal format (e.g. "0x00"). */
    readonly sAK: number;
    /** Boolean Support_4 value. */
    readonly support4: boolean;
    /** Boolean Support_Mifare value. */
    readonly supportMifare: boolean;
    /**
     * UID contents in text format. Each byte is represented by its hexadecimal value.
     * The individual bytes are separated by spaces (e.g. "F9 4F 41 60").
     */
    readonly uID?: string;

    /** Allows you to deserialize object. */
    static fromJson(jsonObject: any): CardProperties | null;
}
