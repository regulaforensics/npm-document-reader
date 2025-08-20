import { BarcodeStatus } from "./BarcodeStatus";
import { BarcodeType } from "./BarcodeType";
import { PDF417Info } from "./PDF417Info";

export class BarcodeField {
    barcodeType
    status
    pdf417Info
    data
    pageIndex

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new BarcodeField();
        result.barcodeType = jsonObject["barcodeType"];
        result.status = jsonObject["status"];
        result.pageIndex = jsonObject["pageIndex"];
        result.pdf417Info = PDF417Info.fromJson(jsonObject["pdf417Info"]);
        result.data = jsonObject["data"];
        
        return result;
    }

    toJson() {
        return {
            "barcodeType": this.barcodeType,
            "status": this.status,
            "pdf417Info": this.pdf417Info?.toJson(),
            "data": this.data,
            "pageIndex": this.pageIndex,
        }
    }
}
