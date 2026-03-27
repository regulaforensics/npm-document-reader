export class BackendProcessingConfig {
    url
    httpHeaders
    rfidServerSideChipVerification
    mdlVerification
    timeoutConnection

    constructor(url, options) {
        this.url = url;
        this.rfidServerSideChipVerification = options?.rfidServerSideChipVerification;
        this.mdlVerification = options?.mdlVerification;
        this.httpHeaders = options?.httpHeaders;
        this.timeoutConnection = options?.timeoutConnection;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BackendProcessingConfig(jsonObject["url"]);
        
        result.rfidServerSideChipVerification = jsonObject["rfidServerSideChipVerification"];
        result.mdlVerification = jsonObject["mdlVerification"];
        result.httpHeaders = jsonObject["httpHeaders"];
        result.timeoutConnection = jsonObject["timeoutConnection"];
        
        return result;
    }

    toJson() {
        return {
            "url": this.url,
            "rfidServerSideChipVerification": this.rfidServerSideChipVerification,
            "mdlVerification": this.mdlVerification,
            "httpHeaders": this.httpHeaders,
            "timeoutConnection": this.timeoutConnection,
        }
    }
}
