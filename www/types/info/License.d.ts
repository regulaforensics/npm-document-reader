/**
 * Class contains properties to get the information about the license.
 */
export declare class License {
    /**
     * Allows you to get an expiration date of your license.
     */
    readonly expiryDate?: string;

    /**
     * Allows you to get a list of country identifiers which are defined for
     * processing in the license. If the array is empty, there are no
     * restrictions for processing.
     */
    readonly countryFilter?: string[];

    /**
     * Allows you to verify that RFID chip reading capabilities are added to your license.
     */
    readonly isRfidAvailable: boolean;

    private constructor();
}
