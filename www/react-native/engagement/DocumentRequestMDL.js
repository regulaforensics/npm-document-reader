import { NameSpaceMDL, MDLIntentToRetain } from "./NameSpaceMDL";

export class DocumentRequestMDL {
    docType
    namespaces = []

    constructor(docType) {
        this.docType = docType
    }

    addNameSpace(namespace) {
        this.namespaces.push(namespace);
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        var docType = jsonObject["docType"];
        if (docType == "org.iso.18013.5.1.mDL") {
            return DocumentRequest18013MDL.fromJson(jsonObject);
        }
        var result = new DocumentRequestMDL(docType);

        result.namespaces = (jsonObject["namespaces"]).map(item => NameSpaceMDL.fromJson(item));

        return result;
    }

    toJson() {
        return {
            "docType": this.docType,
            "namespaces": this.namespaces.map(item => item.toJson())
        }
    }
}

export class DocumentRequest18013MDL extends DocumentRequestMDL {
    familyName
    givenName
    birthDate
    issueDate
    expiryDate
    issuingCountry
    issuingAuthority
    documentNumber
    portrait
    drivingPrivileges
    unDistinguishingSign
    administrativeNumber
    sex
    height
    weight
    eyeColour
    hairColour
    birthPlace
    residentAddress
    portraitCaptureDate
    ageInYears
    ageBirthYear
    ageOver18
    issuingJurisdiction
    nationality
    residentCity
    residentState
    residentPostalCode
    residentCountry
    biometricTemplateFace
    biometricTemplateIris
    biometricTemplateFinger
    biometricTemplateSignatureSign
    familyNameNationalCharacter
    givenNameNationalCharacter
    signatureUsualMark

    constructor() {
        super("org.iso.18013.5.1.mDL")
    }

    disableIntentToRetainValues() {
        this.setAll(MDLIntentToRetain.FALSE);
    }

    enableIntentToRetainValues() {
        this.setAll(MDLIntentToRetain.TRUE);
    }

    setAll(value) {
        this.familyName = value;
        this.givenName = value;
        this.birthDate = value;
        this.issueDate = value;
        this.expiryDate = value;
        this.issuingCountry = value;
        this.issuingAuthority = value;
        this.documentNumber = value;
        this.portrait = value;
        this.drivingPrivileges = value;
        this.unDistinguishingSign = value;
        this.administrativeNumber = value;
        this.sex = value;
        this.height = value;
        this.weight = value;
        this.eyeColour = value;
        this.hairColour = value;
        this.birthPlace = value;
        this.residentAddress = value;
        this.portraitCaptureDate = value;
        this.ageInYears = value;
        this.ageBirthYear = value;
        this.ageOver18 = value;
        this.issuingJurisdiction = value;
        this.nationality = value;
        this.residentCity = value;
        this.residentState = value;
        this.residentPostalCode = value;
        this.residentCountry = value;
        this.biometricTemplateFace = value;
        this.biometricTemplateIris = value;
        this.biometricTemplateFinger = value;
        this.biometricTemplateSignatureSign = value;
        this.familyNameNationalCharacter = value;
        this.givenNameNationalCharacter = value;
        this.signatureUsualMark = value;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentRequest18013MDL()

        result.namespaces = (jsonObject["namespaces"]).map(item => NameSpaceMDL.fromJson(item));
        result.familyName = jsonObject["familyName"]
        result.givenName = jsonObject["givenName"]
        result.birthDate = jsonObject["birthDate"]
        result.issueDate = jsonObject["issueDate"]
        result.expiryDate = jsonObject["expiryDate"]
        result.issuingCountry = jsonObject["issuingCountry"]
        result.issuingAuthority = jsonObject["issuingAuthority"]
        result.documentNumber = jsonObject["documentNumber"]
        result.portrait = jsonObject["portrait"]
        result.drivingPrivileges = jsonObject["drivingPrivileges"]
        result.unDistinguishingSign = jsonObject["unDistinguishingSign"]
        result.administrativeNumber = jsonObject["administrativeNumber"]
        result.sex = jsonObject["sex"]
        result.height = jsonObject["height"]
        result.weight = jsonObject["weight"]
        result.eyeColour = jsonObject["eyeColour"]
        result.hairColour = jsonObject["hairColour"]
        result.birthPlace = jsonObject["birthPlace"]
        result.residentAddress = jsonObject["residentAddress"]
        result.portraitCaptureDate = jsonObject["portraitCaptureDate"]
        result.ageInYears = jsonObject["ageInYears"]
        result.ageBirthYear = jsonObject["ageBirthYear"]
        result.ageOver18 = jsonObject["ageOver18"]
        result.issuingJurisdiction = jsonObject["issuingJurisdiction"]
        result.nationality = jsonObject["nationality"]
        result.residentCity = jsonObject["residentCity"]
        result.residentState = jsonObject["residentState"]
        result.residentPostalCode = jsonObject["residentPostalCode"]
        result.residentCountry = jsonObject["residentCountry"]
        result.biometricTemplateFace = jsonObject["biometricTemplateFace"]
        result.biometricTemplateIris = jsonObject["biometricTemplateIris"]
        result.biometricTemplateFinger = jsonObject["biometricTemplateFinger"]
        result.biometricTemplateSignatureSign = jsonObject["biometricTemplateSignatureSign"]
        result.familyNameNationalCharacter = jsonObject["familyNameNationalCharacter"]
        result.givenNameNationalCharacter = jsonObject["givenNameNationalCharacter"]
        result.signatureUsualMark = jsonObject["signatureUsualMark"]

        return result
    }

    toJson() {
        return {
            "docType": this.docType,
            "namespaces": this.namespaces.map(item => item.toJson()),
            "familyName": this.familyName,
            "givenName": this.givenName,
            "birthDate": this.birthDate,
            "issueDate": this.issueDate,
            "expiryDate": this.expiryDate,
            "issuingCountry": this.issuingCountry,
            "issuingAuthority": this.issuingAuthority,
            "documentNumber": this.documentNumber,
            "portrait": this.portrait,
            "drivingPrivileges": this.drivingPrivileges,
            "unDistinguishingSign": this.unDistinguishingSign,
            "administrativeNumber": this.administrativeNumber,
            "sex": this.sex,
            "height": this.height,
            "weight": this.weight,
            "eyeColour": this.eyeColour,
            "hairColour": this.hairColour,
            "birthPlace": this.birthPlace,
            "residentAddress": this.residentAddress,
            "portraitCaptureDate": this.portraitCaptureDate,
            "ageInYears": this.ageInYears,
            "ageBirthYear": this.ageBirthYear,
            "ageOver18": this.ageOver18,
            "issuingJurisdiction": this.issuingJurisdiction,
            "nationality": this.nationality,
            "residentCity": this.residentCity,
            "residentState": this.residentState,
            "residentPostalCode": this.residentPostalCode,
            "residentCountry": this.residentCountry,
            "biometricTemplateFace": this.biometricTemplateFace,
            "biometricTemplateIris": this.biometricTemplateIris,
            "biometricTemplateFinger": this.biometricTemplateFinger,
            "biometricTemplateSignatureSign": this.biometricTemplateSignatureSign,
            "familyNameNationalCharacter": this.familyNameNationalCharacter,
            "givenNameNationalCharacter": this.givenNameNationalCharacter,
            "signatureUsualMark": this.signatureUsualMark,
        }
    }
}
