export class CertificateData {
    data
    length

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new CertificateData();
        result.data = jsonObject["data"];
        result.length = jsonObject["length"];
        
        return result;
    }

    toJson() {
        return {
            "data": this.data,
            "length": this.length,
        }
    }
} 