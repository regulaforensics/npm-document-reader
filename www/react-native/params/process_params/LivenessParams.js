import { DocumentReader } from '../../index';
import { FilterObject } from './FilterObject';

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

    _checkFilters = {};

    setCheckFilter(checkType, filter) {
        this._checkFilters[checkType] = filter;
        this._set({
            "setCheckFilter": {
                "checkType": checkType,
                "filterObject": filter.toJson(),
            },
        });
    }

    removeCheckFilter(checkType) {
        delete this._checkFilters[checkType];
        this._set({ "removeCheckFilter": checkType });
    }

    clearCheckFilter() {
        this._checkFilters = {};
        this._set({ "clearCheckFilter": '' });
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
        result._checkFilters = Object.fromEntries(Object.entries(jsonObject["checkFilters"] ?? {})
            .map(([k, v]) => [k, FilterObject.fromJson(v)]));

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
            "checkFilters": Object.fromEntries(Object.entries(this._checkFilters).map(([k, v]) => [k, v.toJson()])),
        }
    }
}

export const LivenessCheckType = {
    OVI: "checkOVI",
    MLI: "checkMLI",
    HOLO: "checkHolo",
    ED: "checkED",
    BLACK_AND_WHITE_COPY: "checkBlackAndWhiteCopy",
    DYNAPRINT: "checkDynaprint",
    GEOMETRY: "checkGeometry",
};
