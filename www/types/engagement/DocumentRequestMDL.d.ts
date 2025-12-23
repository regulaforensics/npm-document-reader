import { NameSpaceMDL, MDLIntentToRetain } from "./NameSpaceMDL";

export declare class DocumentRequestMDL {
    constructor(docType: string);

    addNameSpace(namespace: NameSpaceMDL): void;

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): DocumentRequestMDL | null;
}

export declare class DocumentRequest18013MDL extends DocumentRequestMDL {
    familyName? : MDLIntentToRetain;
    givenName? : MDLIntentToRetain;
    birthDate? : MDLIntentToRetain;
    issueDate? : MDLIntentToRetain;
    expiryDate? : MDLIntentToRetain;
    issuingCountry? : MDLIntentToRetain;
    issuingAuthority? : MDLIntentToRetain;
    documentNumber? : MDLIntentToRetain;
    portrait? : MDLIntentToRetain;
    drivingPrivileges? : MDLIntentToRetain;
    unDistinguishingSign? : MDLIntentToRetain;
    administrativeNumber? : MDLIntentToRetain;
    sex? : MDLIntentToRetain;
    height? : MDLIntentToRetain;
    weight? : MDLIntentToRetain;
    eyeColour? : MDLIntentToRetain;
    hairColour? : MDLIntentToRetain;
    birthPlace? : MDLIntentToRetain;
    residentAddress? : MDLIntentToRetain;
    portraitCaptureDate? : MDLIntentToRetain;
    ageInYears? : MDLIntentToRetain;
    ageBirthYear? : MDLIntentToRetain;
    ageOver18? : MDLIntentToRetain;
    issuingJurisdiction? : MDLIntentToRetain;
    nationality? : MDLIntentToRetain;
    residentCity? : MDLIntentToRetain;
    residentState? : MDLIntentToRetain;
    residentPostalCode? : MDLIntentToRetain;
    residentCountry? : MDLIntentToRetain;
    biometricTemplateFace? : MDLIntentToRetain;
    biometricTemplateIris? : MDLIntentToRetain;
    biometricTemplateFinger? : MDLIntentToRetain;
    biometricTemplateSignatureSign? : MDLIntentToRetain;
    familyNameNationalCharacter? : MDLIntentToRetain;
    givenNameNationalCharacter? : MDLIntentToRetain;
    signatureUsualMark? : MDLIntentToRetain;

    disableIntentToRetainValues(): void
    enableIntentToRetainValues(): void

    /**
     * Allows you to deserialize object.
     * @param jsonObject
     */
    static fromJson(jsonObject: any): DocumentRequest18013MDL | null;
}
