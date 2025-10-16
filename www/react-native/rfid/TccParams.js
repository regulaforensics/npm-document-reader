/** TCC service related parameters for RFID session configuration. */
export class TccParams {
    serviceUrlTA
    serviceUrlPA
    pfxCertUrl
    pfxPassPhrase
    pfxCert

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new TccParams()

        result.serviceUrlTA = jsonObject["serviceUrlTA"]
        result.serviceUrlPA = jsonObject["serviceUrlPA"]
        result.pfxCertUrl = jsonObject["pfxCertUrl"]
        result.pfxPassPhrase = jsonObject["pfxPassPhrase"]
        result.pfxCert = jsonObject["pfxCert"]

        return result
    }

    toJson() {
        return {
            "serviceUrlTA": this.serviceUrlTA,
            "serviceUrlPA": this.serviceUrlPA,
            "pfxCertUrl": this.pfxCertUrl,
            "pfxPassPhrase": this.pfxPassPhrase,
            "pfxCert": this.pfxCert,
        }
    }
}
