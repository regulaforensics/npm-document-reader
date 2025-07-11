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
}
