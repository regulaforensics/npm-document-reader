export class RFIDOrigin {
    dg;
    dgTag;
    entryView;
    tagEntry;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new RFIDOrigin();
        
        result.dg = jsonObject["dg"];
        result.dgTag = jsonObject["dgTag"];
        result.entryView = jsonObject["entryView"];
        result.tagEntry = jsonObject["tagEntry"];
        
        return result;
    }

    toJson() {
        return {
            "dg": this.dg,
            "dgTag": this.dgTag,
            "entryView": this.entryView,
            "tagEntry": this.tagEntry,
        }
    }
} 