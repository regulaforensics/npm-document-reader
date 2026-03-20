import { DocumentReader } from '../../index';

export class CustomizationContentModes {
    get nextPageIdCardFront() { return this._nextPageIdCardFront; }
    set nextPageIdCardFront(val) {
        this._nextPageIdCardFront = val;
        this._set({ "nextPageIdCardFront": val });
    }

    get nextPageIdCardBack() { return this._nextPageIdCardBack; }
    set nextPageIdCardBack(val) {
        this._nextPageIdCardBack = val;
        this._set({ "nextPageIdCardBack": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new CustomizationContentModes();

        result._nextPageIdCardFront = jsonObject["nextPageIdCardFront"];
        result._nextPageIdCardBack = jsonObject["nextPageIdCardBack"];

        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "contentModes": json };
        var parent = DocumentReader.instance.customization;
        if (this === parent.contentModes) parent._set(parentJson);
    }

    toJson() {
        return {
            "nextPageIdCardFront": this.nextPageIdCardFront,
            "nextPageIdCardBack": this.nextPageIdCardBack,
        }
    }
}

export const ViewContentMode = {
    SCALE_TO_FILL: 0,
    SCALE_ASPECT_FIT: 1,
    SCALE_ASPECT_FILL: 2,
    REDRAW: 3,
    CENTER: 4,
    TOP: 5,
    BOTTOM: 6,
    LEFT: 7,
    RIGHT: 8,
    TOP_LEFT: 9,
    TOP_RIGHT: 10,
    BOTTOM_LEFT: 11,
    BOTTOM_RIGHT: 12
};
