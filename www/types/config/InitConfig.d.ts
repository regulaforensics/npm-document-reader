/**
 * A configuration file for DocumentReader initialization.
 * Controls initialization time properties such as licenseUpdate and delayedNNLoad.
 */
export declare class InitConfig {
    /**
     * The license binary file. Base64 string.
     */
    readonly license: string;

    /**
     * Enables automatic license update check during {@link DocumentReader} initialization.
     * @default true
     */
    licenseUpdate: boolean;

    /**
     * Defines whether the {@link DocumentReader} delays loading of neural networks.
     *
     * When set to `true` the initialization starts in the background thread after
     * the method {@link DocumentReader#initialize} is called. If the document
     * processing is initiated before all the networks are loaded,
     * the {@link DocumentReader} will wait for it before starting the handling.
     *
     * When set to `false` the initialization is performed during
     * {@link DocumentReader#initialize} method.
     * @default false
     */
    delayedNNLoad: boolean;

    /**
     * The path to the database file.
     *
     * IOS only. For Android use {@link InitConfig#customDb}.
     */
    databasePath?: string;

    /**
     * Custom database binary. Base64 string.
     *
     * Android only. For iOS use {@link InitConfig#databasePath}.
     */
    customDb?: string;

    /**
     * Android only.
     */
    blackList?: Record<string, any>;

    /**
     * Constructor for initialization using a license binary.
     * @param license The license binary file. Base64 string.
     */
    constructor(license: string);

    /**
     * Constructor for initialization using a ble device.
     * Doesn't need a license file, it will be fetched automatically from your ble device.
     *
     * Requires [btdevice plugin](https://www.npmjs.com/package/@regulaforensics/react-native-document-reader-btdevice).
     */
    static withBleDevice(): InitConfig;
}
