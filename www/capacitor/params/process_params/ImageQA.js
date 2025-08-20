import { DocumentReader } from '../../index';
import { GlaresCheckParams } from './GlaresCheckParams';
import { ImageQualityCheckType } from '../../results/image_quality/ImageQualityCheckType';

export class ImageQA {
    get dpiThreshold() { return this._dpiThreshold; }
    set dpiThreshold(val) {
        this._dpiThreshold = val;
        this._set({ "dpiThreshold": val });
    }

    get angleThreshold() { return this._angleThreshold; }
    set angleThreshold(val) {
        this._angleThreshold = val;
        this._set({ "angleThreshold": val });
    }

    get focusCheck() { return this._focusCheck; }
    set focusCheck(val) {
        this._focusCheck = val;
        this._set({ "focusCheck": val });
    }

    get glaresCheck() { return this._glaresCheck; }
    set glaresCheck(val) {
        this._glaresCheck = val;
        this._set({ "glaresCheck": val });
    }

    get glaresCheckParams() { return this._glaresCheckParams; }
    set glaresCheckParams(val) {
        this._glaresCheckParams = val;
        this._set({ "glaresCheckParams": val });
    }

    get colornessCheck() { return this._colornessCheck; }
    set colornessCheck(val) {
        this._colornessCheck = val;
        this._set({ "colornessCheck": val });
    }

    get screenCapture() { return this._screenCapture; }
    set screenCapture(val) {
        this._screenCapture = val;
        this._set({ "screenCapture": val });
    }

    get expectedPass() { return this._expectedPass; }
    set expectedPass(val) {
        this._expectedPass = val;
        this._set({ "expectedPass": val });
    }

    get documentPositionIndent() { return this._documentPositionIndent; }
    set documentPositionIndent(val) {
        this._documentPositionIndent = val;
        this._set({ "documentPositionIndent": val });
    }

    get brightnessThreshold() { return this._brightnessThreshold; }
    set brightnessThreshold(val) {
        this._brightnessThreshold = val;
        this._set({ "brightnessThreshold": val });
    }

    get occlusionCheck() { return this._occlusionCheck; }
    set occlusionCheck(val) {
        this._occlusionCheck = val;
        this._set({ "occlusionCheck": val });
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ImageQA();
        result._dpiThreshold = jsonObject["dpiThreshold"];
        result._angleThreshold = jsonObject["angleThreshold"];
        result._focusCheck = jsonObject["focusCheck"];
        result._glaresCheck = jsonObject["glaresCheck"];
        result._colornessCheck = jsonObject["colornessCheck"];
        result._screenCapture = jsonObject["screenCapture"];
        result._expectedPass = jsonObject["expectedPass"];
        result._glaresCheckParams = GlaresCheckParams.fromJson(jsonObject["glaresCheckParams"]);
        result._documentPositionIndent = jsonObject["documentPositionIndent"];
        result._brightnessThreshold = jsonObject["brightnessThreshold"];
        result._occlusionCheck = jsonObject["occlusionCheck"];
        
        return result;
    }

    _apply() { this._set(this); }
    _set(json) {
        const parentJson = { "imageQA": json };
        var parent = DocumentReader.instance.processParams;
        if (this === parent.imageQA) parent._set(parentJson);
    }

    toJson() {
        return {
            "dpiThreshold": this.dpiThreshold,
            "angleThreshold": this.angleThreshold,
            "documentPositionIndent": this.documentPositionIndent,
            "focusCheck": this.focusCheck,
            "glaresCheck": this.glaresCheck,
            "colornessCheck": this.colornessCheck,
            "screenCapture": this.screenCapture,
            "expectedPass": this.expectedPass,
            "glaresCheckParams": this.glaresCheckParams?.toJson(),
            "brightnessThreshold": this.brightnessThreshold,
            "occlusionCheck": this.occlusionCheck,
        }
    }
}
