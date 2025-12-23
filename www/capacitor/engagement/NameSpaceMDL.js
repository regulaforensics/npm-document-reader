export class NameSpaceMDL {
    name
    map = {}

    constructor(name) {
        this.name = name
    }

    addField(name, intentToRetain) {
        this.map[name] = intentToRetain;
      }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new NameSpaceMDL(jsonObject["name"])

        result.map = jsonObject["map"]

        return result
    }

    toJson() {
        return {
            "name": this.name,
            "map": this.map
        }
    }
}

export const MDLIntentToRetain = {
    FALSE: 0,
    TRUE: 1,
}
