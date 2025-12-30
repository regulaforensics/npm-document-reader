export class PKDCertificate {
    binaryData
    resourceType
    privateKey

    constructor(binaryData, resourceType, options) {
        this.binaryData = binaryData
        this.resourceType = resourceType
        this.privateKey = options?.privateKey
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new PKDCertificate(
            jsonObject["binaryData"],
            jsonObject["resourceType"],
            { privateKey: jsonObject["privateKey"] }
        )
    }

    toJson() {
        return {
            "binaryData": this.binaryData,
            "resourceType": this.resourceType,
            "privateKey": this.privateKey,
        }
    }
}

export const PKDResourceType = {
    CERTIFICATE_PA: 0,
    CERTIFICATE_TA: 1,
    LDIF: 2,
    CRL: 3,
    ML: 4,
    DEFL: 5,
    DEVL: 6,
    BL: 7,
    LDIF_TA: 8,
    ML_TA: 9,
    CBOR: 10,

    getType(value) {
        switch (value) {
            case "pa":
                return PKDResourceType.CERTIFICATE_PA
            case "ta":
                return PKDResourceType.CERTIFICATE_TA
            case "ldif":
                return PKDResourceType.LDIF
            case "crl":
                return PKDResourceType.CRL
            case "ml":
                return PKDResourceType.ML
            case "defl":
                return PKDResourceType.DEFL
            case "devl":
                return PKDResourceType.DEVL
            case "bl":
                return PKDResourceType.BL
            default:
                return PKDResourceType.CERTIFICATE_PA
        }
    }
}
