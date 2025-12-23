import { BytesData } from './BytesData';

export class DocFeature {
    type
    data

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new DocFeature();
        result.type = jsonObject["type"];
        result.data = BytesData.fromJson(jsonObject["data"]);
        
        return result;
    }

    toJson() {
        return {
            "type": this.type,
            "data": this.data?.toJson(),
        }
    }
}
