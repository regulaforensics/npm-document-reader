import { DocumentReader } from '../../index';

export class DTCDataGroup {
    get dg17() { return this._dg17; }
    set dg17(val) {
        this._dg17 = val;
        this._set({ "DG17": val });
    }

    get dg18() { return this._dg18; }
    set dg18(val) {
        this._dg18 = val;
        this._set({ "DG18": val });
    }

    get dg22() { return this._dg22; }
    set dg22(val) {
        this._dg22 = val;
        this._set({ "DG22": val });
    }

    get dg23() { return this._dg23; }
    set dg23(val) {
        this._dg23 = val;
        this._set({ "DG23": val });
    }

    get dg24() { return this._dg24; }
    set dg24(val) {
        this._dg24 = val;
        this._set({ "DG24": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        var result = new DTCDataGroup();
        result._dg17 = jsonObject["DG17"];
        result._dg18 = jsonObject["DG18"];
        result._dg22 = jsonObject["DG22"];
        result._dg23 = jsonObject["DG23"];
        result._dg24 = jsonObject["DG24"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        var rfidScenarioJson = { "dtcDataGroups": json };
        var rfidScenario = DocumentReader.instance.rfidScenario;
        if (this === rfidScenario.dtcDataGroups) rfidScenario._set(rfidScenarioJson);
    }

    toJson() {
        return {
            "DG17": this.dg17,
            "DG18": this.dg18,
            "DG22": this.dg22,
            "DG23": this.dg23,
            "DG24": this.dg24,
        }
    }
}
