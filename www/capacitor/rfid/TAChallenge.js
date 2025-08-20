export class TAChallenge {
    data
    auxPCD
    challengePICC
    hashPK
    idPICC

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new TAChallenge()

        result.data = jsonObject["data"]
        result.auxPCD = jsonObject["auxPCD"] ?? ""
        result.challengePICC = jsonObject["challengePICC"] ?? ""
        result.hashPK = jsonObject["hashPK"] ?? ""
        result.idPICC = jsonObject["idPICC"] ?? ""

        return result
    }

    toJson() {
        return {
            "data": this.data,
            "auxPCD": this.auxPCD,
            "challengePICC": this.challengePICC,
            "hashPK": this.hashPK,
            "idPICC": this.idPICC,
        }
    }
}
