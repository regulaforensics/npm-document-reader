export class RFIDParams {
    paIgnoreNotificationCodes

    constructor(options) {
        this.paIgnoreNotificationCodes = options?.paIgnoreNotificationCodes;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new RFIDParams({
            paIgnoreNotificationCodes: jsonObject["paIgnoreNotificationCodes"]
        });
    }
}
