import { DocumentReader } from '../../index';

export class LivenessParams {
    get checkOVI() { return this._checkOVI; }
    set checkOVI(val) {
        this._checkOVI = val;
        this._set({ "checkOVI": val });
    }

    get checkMLI() { return this._checkMLI; }
    set checkMLI(val) {
        this._checkMLI = val;
        this._set({ "checkMLI": val });
    }

    get checkHolo() { return this._checkHolo; }
    set checkHolo(val) {
        this._checkHolo = val;
        this._set({ "checkHolo": val });
    }

    get checkED() { return this._checkED; }
    set checkED(val) {
        this._checkED = val;
        this._set({ "checkED": val });
    }

    get checkBlackAndWhiteCopy() { return this._checkBlackAndWhiteCopy; }
    set checkBlackAndWhiteCopy(val) {
        this._checkBlackAndWhiteCopy = val;
        this._set({ "checkBlackAndWhiteCopy": val });
    }

    get checkDynaprint() { return this._checkDynaprint; }
    set checkDynaprint(val) {
        this._checkDynaprint = val;
        this._set({ "checkDynaprint": val });
    }

    get checkGeometry() { return this._checkGeometry; }
    set checkGeometry(val) {
        this._checkGeometry = val;
        this._set({ "checkGeometry": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return new LivenessParams();
        
        const result = new LivenessParams();
        result._checkOVI = jsonObject["checkOVI"];
        result._checkMLI = jsonObject["checkMLI"];
        result._checkHolo = jsonObject["checkHolo"];
        result._checkED = jsonObject["checkED"];
        result._checkBlackAndWhiteCopy = jsonObject["checkBlackAndWhiteCopy"];
        result._checkDynaprint = jsonObject["checkDynaprint"];
        result._checkGeometry = jsonObject["checkGeometry"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "livenessParams": json };
        var parent = DocumentReader.instance.processParams.authenticityParams;
        if (this === parent.livenessParams) parent._set(parentJson);
    }

    toJson() {
        return {
            "checkOVI": this.checkOVI,
            "checkMLI": this.checkMLI,
            "checkHolo": this.checkHolo,
            "checkED": this.checkED,
            "checkBlackAndWhiteCopy": this.checkBlackAndWhiteCopy,
            "checkDynaprint": this.checkDynaprint,
            "checkGeometry": this.checkGeometry,
        }
    }
}
