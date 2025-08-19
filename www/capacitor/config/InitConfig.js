export class InitConfig {
    license
    licenseUpdate
    delayedNNLoad
    databasePath
    customDb
    blackList
    useBleDevice

    static withBleDevice() {
        var result = new InitConfig()
        result.useBleDevice = true
        return result
    }

    constructor(license, options) {
        this.license = license
        this.licenseUpdate = options?.licenseUpdate ?? true
        this.delayedNNLoad = options?.delayedNNLoad ?? false
        this.databasePath = options?.databasePath
        this.customDb = options?.customDb
        this.blackList = options?.blackList
        this.useBleDevice = false
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        var result = new InitConfig(jsonObject["license"]);

        result.customDb = jsonObject["customDb"];
        result.delayedNNLoad = jsonObject["delayedNNLoad"];
        result.licenseUpdate = jsonObject["licenseUpdate"];
        result.blackList = jsonObject["blackList"];
        result.databasePath = jsonObject["databasePath"];
        result.useBleDevice = jsonObject["useBleDevice"];

        return result;
    }


    toJson() {
        return {
            "license": this.license,
            "delayedNNLoad": this.delayedNNLoad,
            "licenseUpdate": this.licenseUpdate,
            "blackList": this.blackList,
            "customDb": this.customDb,
            "databasePath": this.databasePath,
            "useBleDevice": this.useBleDevice,
        }
    }
}
