import { FaceApiSearchParams } from "./FaceApiSearchParams";

export declare class FaceApiParams {
    /**
     * The URL of the Regula Face SDK service instance to be used.
     * @default "https://faceapi.regulaforensics.com"
     */
    readonly url: string;

    /**
     * The processing mode: "match" or "match+search".
     * @default "match"
     */
    readonly mode: string;

    /**
     * The similarity threshold, 0-100. Above 75 means that the faces' similarity
     * is verified, below 75 is not.
     * @default 75
     */
    readonly threshold: number;

    /**
     * A search filter that can be applied if the "match+search" mode is enabled.
     */
    readonly searchParams?: FaceApiSearchParams;

    /**
     * The service request timeout, ms.
     * @default 3000
     */
    readonly serviceTimeout: number;

    /**
     * Proxy to use, should be set according to the cURL standart.
     */
    readonly proxy?: string;

    /**
     * Username and password to use for proxy authentication,
     * should be set according to the cURL standart.
     */
    readonly proxyPassword?: string;

    /**
     * Proxy protocol type, should be set according to the cURL standart.
     */
    readonly proxyType?: number;

    constructor(
        options?: {
            url?: string,
            mode?: string,
            threshold?: number,
            searchParams?: FaceApiSearchParams,
            serviceTimeout?: number,
            proxy?: string,
            proxyPassword?: string,
            proxyType?: number,
        }
    );

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): FaceApiParams;
}
