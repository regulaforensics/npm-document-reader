import { PAAttribute } from "./PAAttribute";

export class PAResourcesIssuer {
    data
    friendlyName
    attributes

    constructor() {
        this.attributes = []
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new PAResourcesIssuer()

        result.data = jsonObject["data"]
        result.friendlyName = jsonObject["friendlyName"]
        for (const item of jsonObject["attributes"]) {
            const attribute = PAAttribute.fromJson(item)
            if (attribute != null) {
                result.attributes.push(attribute)
            }
        }

        return result
    }
}
