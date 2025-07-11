export class FaceApiSearchParams {
    limit
    threshold
    groupIds

    constructor(options) {
        this.limit = options?.limit ?? 100;
        this.threshold = options?.threshold ?? 1;
        this.groupIds = options?.groupIds;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        return new FaceApiSearchParams({
            limit: jsonObject["limit"],
            threshold: jsonObject["threshold"],
            groupIds: jsonObject["groupIds"]
        });
    }
}
