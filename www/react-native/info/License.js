/**
 * Class contains properties to get the information about the license.
 */
export class License {
    expiryDate
    countryFilter
    isRfidAvailable

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new License()

        result.expiryDate = jsonObject["expiryDate"]
        result.countryFilter = jsonObject["countryFilter"]
        result.isRfidAvailable = jsonObject["isRfidAvailable"] ?? false

        return result
    }
}
