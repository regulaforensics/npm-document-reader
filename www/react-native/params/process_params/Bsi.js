export class Bsi {
    generateResult

    constructor(params) {
        this.generateResult = params?.generateResult;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Bsi();
        
        result.generateResult = jsonObject["generateResult"];
        
        return result;
    }

    toJson() {
        return {
            "generateResult": this.generateResult,
        }
    }
}
