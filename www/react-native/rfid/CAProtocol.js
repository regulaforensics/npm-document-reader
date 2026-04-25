export class CAProtocol {
    version
    scheme
    keyAlgorithm
    chipIndividual

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new CAProtocol()

        result.version = jsonObject["version"]
        result.scheme = jsonObject["scheme"]
        result.keyAlgorithm = jsonObject["keyAlgorithm"]
        result.chipIndividual = jsonObject["chipIndividual"]

        return result
    }

    toJson() {
        return {
            "version": this.version,
            "scheme": this.scheme,
            "keyAlgorithm": this.keyAlgorithm,
            "chipIndividual": this.chipIndividual,
        }
    }
}
