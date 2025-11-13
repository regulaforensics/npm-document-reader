export class DocReaderScenario {
    name
    caption
    description
    frameOrientation
    uvTorch
    faceExt
    multiPageOff
    seriesProcessMode
    frameKWHLandscape
    frameKWHPortrait
    frameKWHDoublePageSpreadLandscape
    frameKWHDoublePageSpreadPortrait
    manualCrop

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocReaderScenario()

        result.uvTorch = jsonObject["uvTorch"]
        result.frameOrientation = jsonObject["frameOrientation"]
        result.faceExt = jsonObject["faceExt"]
        result.multiPageOff = jsonObject["multiPageOff"]
        result.seriesProcessMode = jsonObject["seriesProcessMode"]
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"]
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"]
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"]
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"]
        result.name = jsonObject["name"]
        result.caption = jsonObject["caption"]
        result.description = jsonObject["description"]
        result.manualCrop = jsonObject["manualCrop"]

        return result
    }

    toJson() {
        return {
            "uvTorch": this.uvTorch,
            "frameOrientation": this.frameOrientation,
            "faceExt": this.faceExt,
            "multiPageOff": this.multiPageOff,
            "seriesProcessMode": this.seriesProcessMode,
            "frameKWHLandscape": this.frameKWHLandscape,
            "frameKWHPortrait": this.frameKWHPortrait,
            "frameKWHDoublePageSpreadPortrait": this.frameKWHDoublePageSpreadPortrait,
            "frameKWHDoublePageSpreadLandscape": this.frameKWHDoublePageSpreadLandscape,
            "name": this.name,
            "caption": this.caption,
            "description": this.description,
            "manualCrop": this.manualCrop,
        }
    }
}

export const Scenario = {
    MRZ: "Mrz",
    BARCODE: "Barcode",
    LOCATE: "Locate",
    OCR: "Ocr",
    DOCTYPE: "DocType",
    MRZ_OR_BARCODE: "MrzOrBarcode",
    MRZ_OR_LOCATE: "MrzOrLocate",
    MRZ_AND_LOCATE: "MrzAndLocate",
    BARCODE_AND_LOCATE: "BarcodeAndLocate",
    MRZ_OR_OCR: "MrzOrOcr",
    MRZ_OR_BARCODE_OR_OCR: "MrzOrBarcodeOrOcr",
    LOCATE_VISUAL_AND_MRZ_OR_OCR: "LocateVisual_And_MrzOrOcr",
    FULL_PROCESS: "FullProcess",
    FULL_AUTH: "FullAuth",
    ID3RUS: "Id3Rus",
    RUS_STAMP: "RusStamp",
    OCR_FREE: "OcrFree",
    CREDIT_CARD: "CreditCard",
    CAPTURE: "Capture",
    DTC: "DTC",
    RFID: "RFID"
}

export const DocReaderOrientation = {
    ALL: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
    LANDSCAPE_LEFT: 3,
    LANDSCAPE_RIGHT: 4
}
