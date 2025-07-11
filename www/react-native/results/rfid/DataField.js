import { RFIDDataFileType } from './RFIDDataFileType';

export class DataField {
    data
    fieldType

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new DataField();
        result.data = jsonObject["data"] ?? "";
        result.fieldType = jsonObject["fieldType"] ?? RFIDDataFileType.UNSPECIFIED;
        
        return result;
    }
} 