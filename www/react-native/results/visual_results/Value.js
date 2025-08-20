import { ResultType } from "../Results.js";
import { Rect } from "./Rect.js";
import { RFIDOrigin } from "./RFIDOrigin.js";
import { Symbol } from "./Symbol.js";

export class Value {
    sourceType;
    value;
    originalValue;
    pageIndex;
    boundRect;
    rfidOrigin;
    originalSymbols = [];
    probability;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Value();
        
        result.sourceType = jsonObject["sourceType"];
        result.value = jsonObject["value"];
        result.originalValue = jsonObject["originalValue"];
        result.pageIndex = jsonObject["pageIndex"];
        result.boundRect = Rect.fromJson(jsonObject["boundRect"]);
        result.rfidOrigin = RFIDOrigin.fromJson(jsonObject["rfidOrigin"]);
        result.probability = jsonObject["probability"];
        
        if (jsonObject["originalSymbols"] != null) {
            for (const item of jsonObject["originalSymbols"]) {
                const symbol = Symbol.fromJson(item);
                if (symbol != null) {
                    result.originalSymbols.push(symbol);
                }
            }
        }
        
        return result;
    }

    toJson() {
        return {
            "sourceType": this.sourceType,
            "value": this.value,
            "originalValue": this.originalValue,
            "pageIndex": this.pageIndex,
            "boundRect": this.boundRect?.toJson(),
            "rfidOrigin": this.rfidOrigin?.toJson(),
            "originalSymbols": this.originalSymbols?.map(e => e.toJson()),
            "probability": this.probability,
        }
    }
} 