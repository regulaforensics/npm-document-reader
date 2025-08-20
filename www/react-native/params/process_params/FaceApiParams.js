import { FaceApiSearchParams } from "./FaceApiSearchParams";

export class FaceApiParams {
    url
    mode
    threshold
    searchParams
    serviceTimeout
    proxy
    proxyPassword
    proxyType

    constructor(options) {
        this.url = options?.url ?? "https://faceapi.regulaforensics.com";
        this.mode = options?.mode ?? "match";
        this.threshold = options?.threshold ?? 75;
        this.searchParams = options?.searchParams;
        this.serviceTimeout = options?.serviceTimeout ?? 3000;
        this.proxy = options?.proxy;
        this.proxyPassword = options?.proxyPassword;
        this.proxyType = options?.proxyType;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new FaceApiParams({
            url: jsonObject["url"],
            mode: jsonObject["mode"],
            threshold: jsonObject["threshold"],
            searchParams: FaceApiSearchParams.fromJson(jsonObject["searchParams"]),
            serviceTimeout: jsonObject["serviceTimeout"],
            proxy: jsonObject["proxy"],
            proxyPassword: jsonObject["proxyPassword"],
            proxyType: jsonObject["proxyType"]
        });
    }

    toJson() {
        return {
            "url": this.url,
            "mode": this.mode,
            "threshold": this.threshold,
            "searchParams": this.searchParams?.toJson(),
            "serviceTimeout": this.serviceTimeout,
            "proxy": this.proxy,
            "proxyPassword": this.proxyPassword,
            "proxyType": this.proxyType,
        }
    }
}
