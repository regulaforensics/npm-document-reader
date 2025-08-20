import { DocumentReader } from '../../index';

export class EDLDataGroups {
    get dg1() { return this._dg1; }
    set dg1(val) {
        this._dg1 = val;
        this._set({ "DG1": val });
    }

    get dg2() { return this._dg2; }
    set dg2(val) {
        this._dg2 = val;
        this._set({ "DG2": val });
    }

    get dg3() { return this._dg3; }
    set dg3(val) {
        this._dg3 = val;
        this._set({ "DG3": val });
    }

    get dg4() { return this._dg4; }
    set dg4(val) {
        this._dg4 = val;
        this._set({ "DG4": val });
    }

    get dg5() { return this._dg5; }
    set dg5(val) {
        this._dg5 = val;
        this._set({ "DG5": val });
    }

    get dg6() { return this._dg6; }
    set dg6(val) {
        this._dg6 = val;
        this._set({ "DG6": val });
    }

    get dg7() { return this._dg7; }
    set dg7(val) {
        this._dg7 = val;
        this._set({ "DG7": val });
    }

    get dg8() { return this._dg8; }
    set dg8(val) {
        this._dg8 = val;
        this._set({ "DG8": val });
    }

    get dg9() { return this._dg9; }
    set dg9(val) {
        this._dg9 = val;
        this._set({ "DG9": val });
    }

    get dg10() { return this._dg10; }
    set dg10(val) {
        this._dg10 = val;
        this._set({ "DG10": val });
    }

    get dg11() { return this._dg11; }
    set dg11(val) {
        this._dg11 = val;
        this._set({ "DG11": val });
    }

    get dg12() { return this._dg12; }
    set dg12(val) {
        this._dg12 = val;
        this._set({ "DG12": val });
    }

    get dg13() { return this._dg13; }
    set dg13(val) {
        this._dg13 = val;
        this._set({ "DG13": val });
    }

    get dg14() { return this._dg14; }
    set dg14(val) {
        this._dg14 = val;
        this._set({ "DG14": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        var result = new EDLDataGroups();
        result._dg1 = jsonObject["DG1"];
        result._dg2 = jsonObject["DG2"];
        result._dg3 = jsonObject["DG3"];
        result._dg4 = jsonObject["DG4"];
        result._dg5 = jsonObject["DG5"];
        result._dg6 = jsonObject["DG6"];
        result._dg7 = jsonObject["DG7"];
        result._dg8 = jsonObject["DG8"];
        result._dg9 = jsonObject["DG9"];
        result._dg10 = jsonObject["DG10"];
        result._dg11 = jsonObject["DG11"];
        result._dg12 = jsonObject["DG12"];
        result._dg13 = jsonObject["DG13"];
        result._dg14 = jsonObject["DG14"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        var rfidScenarioJson = { "eDLDataGroups": json };
        var rfidScenario = DocumentReader.instance.rfidScenario;
        if (this === rfidScenario.eDLDataGroups) rfidScenario._set(rfidScenarioJson);
    }

    toJson() {
        return {
            "DG1": this.dg1,
            "DG2": this.dg2,
            "DG3": this.dg3,
            "DG4": this.dg4,
            "DG5": this.dg5,
            "DG6": this.dg6,
            "DG7": this.dg7,
            "DG8": this.dg8,
            "DG9": this.dg9,
            "DG10": this.dg10,
            "DG11": this.dg11,
            "DG12": this.dg12,
            "DG13": this.dg13,
            "DG14": this.dg14,
        }
    }
}
