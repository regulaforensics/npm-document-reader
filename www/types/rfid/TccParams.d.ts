/** TCC service related parameters for RFID session configuration. */
export declare class TccParams {
    /**
     * The TA URL for the TCC service. The value of the property
     * must be a valid URL string.
     */
    serviceUrlTA: string | null;
    /**
     * The PA URL for the TCC service. The value of the property
     * must be a valid URL string.
     */
    serviceUrlPA: string | null;
    /**
     * The URL for the certificate for a TCC service.
     * The value of the property must be a valid URL string.
     */
    pfxCertUrl: string | null;
    /** The passphrase for the cerficiate provided by the [pfxCertUrl] property. */
    pfxPassPhrase: string | null;
    /**
     * The bytes of the certificate for a TCC service.
     * This data will be used instead of loading the certificate via [pfxCertUrl].
     */
    pfxCert: string | null;
}
