export class PACEProtocol {
    version
    stdDomainParams
    keyAlgorithm

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new PACEProtocol()

        result.version = jsonObject["version"]
        result.stdDomainParams = jsonObject["stdDomainParams"]
        result.keyAlgorithm = jsonObject["keyAlgorithm"]

        return result
    }

    toJson() {
        return {
            "version": this.version,
            "stdDomainParams": this.stdDomainParams,
            "keyAlgorithm": this.keyAlgorithm,
        }
    }
}
