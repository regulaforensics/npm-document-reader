export class CardProperties {
    aTQA
    aTQB
    aTR
    baudrate1
    baudrate2
    bitRateR
    bitRateS
    chipTypeA
    mifareMemory
    rfidType
    sAK
    support4
    supportMifare
    uID

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CardProperties();
        result.aTQA = jsonObject["aTQA"];
        result.aTQB = jsonObject["aTQB"];
        result.aTR = jsonObject["aTR"];
        result.baudrate1 = jsonObject["baudrate1"];
        result.baudrate2 = jsonObject["baudrate2"];
        result.bitRateR = jsonObject["bitRateR"];
        result.bitRateS = jsonObject["bitRateS"];
        result.chipTypeA = jsonObject["chipTypeA"];
        result.mifareMemory = jsonObject["mifareMemory"];
        result.rfidType = jsonObject["rfidType"];
        result.sAK = jsonObject["sAK"];
        result.support4 = jsonObject["support4"];
        result.supportMifare = jsonObject["supportMifare"];
        result.uID = jsonObject["uID"];
        
        return result;
    }
}
