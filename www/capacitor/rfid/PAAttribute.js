export class PAAttribute {
    type
    value

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new PAAttribute()

        result.type = jsonObject["type"] ?? ""
        result.value = jsonObject["value"] ?? ""

        return result
    }

    toJson() {
        return {
            "type": this.type,
            "value": this.value,
        }
    }
}
