import { DocumentReader } from '../../index';

export class CustomizationTimings {
    get nextPageIdCardStartDelay() { return this._nextPageIdCardStartDelay; }
    set nextPageIdCardStartDelay(val) {
        this._nextPageIdCardStartDelay = val;
        this._set({ "nextPageIdCardStartDelay": val });
    }

    get nextPageIdCardEndDelay() { return this._nextPageIdCardEndDelay; }
    set nextPageIdCardEndDelay(val) {
        this._nextPageIdCardEndDelay = val;
        this._set({ "nextPageIdCardEndDelay": val });
    }

    get nextPagePassportShiftStartDelay() { return this._nextPagePassportShiftStartDelay; }
    set nextPagePassportShiftStartDelay(val) {
        this._nextPagePassportShiftStartDelay = val;
        this._set({ "nextPagePassportShiftStartDelay": val });
    }

    get nextPagePassportShiftEndDelay() { return this._nextPagePassportShiftEndDelay; }
    set nextPagePassportShiftEndDelay(val) {
        this._nextPagePassportShiftEndDelay = val;
        this._set({ "nextPagePassportShiftEndDelay": val });
    }

    get nextPagePassportFlipStartDelay() { return this._nextPagePassportFlipStartDelay; }
    set nextPagePassportFlipStartDelay(val) {
        this._nextPagePassportFlipStartDelay = val;
        this._set({ "nextPagePassportFlipStartDelay": val });
    }

    get nextPagePassportFlipEndDelay() { return this._nextPagePassportFlipEndDelay; }
    set nextPagePassportFlipEndDelay(val) {
        this._nextPagePassportFlipEndDelay = val;
        this._set({ "nextPagePassportFlipEndDelay": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new CustomizationTimings();

        result._nextPageIdCardStartDelay = jsonObject["nextPageIdCardStartDelay"];
        result._nextPageIdCardEndDelay = jsonObject["nextPageIdCardEndDelay"];
        result._nextPagePassportShiftStartDelay = jsonObject["nextPagePassportShiftStartDelay"];
        result._nextPagePassportShiftEndDelay = jsonObject["nextPagePassportShiftEndDelay"];
        result._nextPagePassportFlipStartDelay = jsonObject["nextPagePassportFlipStartDelay"];
        result._nextPagePassportFlipEndDelay = jsonObject["nextPagePassportFlipEndDelay"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "timings": json };
        var parent = DocumentReader.instance.customization;
        if (this === parent.timings) parent._set(parentJson);
    }

    toJson() {
        return {
            "nextPageIdCardStartDelay": this.nextPageIdCardStartDelay,
            "nextPageIdCardEndDelay": this.nextPageIdCardEndDelay,
            "nextPagePassportShiftStartDelay": this.nextPagePassportShiftStartDelay,
            "nextPagePassportShiftEndDelay": this.nextPagePassportShiftEndDelay,
            "nextPagePassportFlipStartDelay": this.nextPagePassportFlipStartDelay,
            "nextPagePassportFlipEndDelay": this.nextPagePassportFlipEndDelay,
        }
    }
}
