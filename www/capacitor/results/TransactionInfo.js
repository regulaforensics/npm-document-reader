export class TransactionInfo {
    transactionId
    tag
    sessionLogFolder

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new TransactionInfo()

        result.transactionId = jsonObject["transactionId"]
        result.tag = jsonObject["tag"]
        result.sessionLogFolder = jsonObject["sessionLogFolder"]

        return result
    }

    toJson() {
        return {
            "transactionId": this.transactionId,
            "tag": this.tag,
            "sessionLogFolder": this.sessionLogFolder,
        }
    }
}
