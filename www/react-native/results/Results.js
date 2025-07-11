import { exec } from '../internal/bridge';
import { AuthenticityResult } from "./authenticity/AuthenticityResult";
import { BarcodeResult } from "./barcode/BarcodeResult";
import { ImageQualityGroup } from "./image_quality/ImageQualityGroup";
import { RFIDSessionData } from "./rfid/RFIDSessionData";
import { ResultsStatus } from "./status/ResultsStatus";
import { FieldType } from "./visual_results/FieldType";
import { GraphicFieldType } from "./visual_results/GraphicFieldType";
import { LCID } from "./visual_results/LCID";
import { Lights } from "./visual_results/Lights";
import { GraphicField } from "./visual_results/GraphicField";
import { GraphicResult } from "./visual_results/GraphicResult";
import { TextResult } from "./visual_results/TextResult";
import { TextField } from "./visual_results/TextField";
import { VDSNCData } from "./visible_digital_seals/VDSNCData";
import { Position } from "./Position";
import { DocumentType } from "./DocumentType";
import { TransactionInfo } from "./TransactionInfo";

export class Results {
    documentType
    textResult
    graphicResult
    documentPosition
    barcodePosition
    mrzPosition
    imageQuality
    status
    authenticityResult
    rfidSessionData
    chipPage
    barcodeResult
    vdsncData
    dtcData
    processingFinishedStatus
    morePagesAvailable
    elapsedTime
    elapsedTimeRFID
    rawResult
    transactionInfo

    async textFieldValueByType(fieldType) {
        return await exec("textFieldValueByType", [
            this.rawResult,
            fieldType,
        ]);
    }

    async textFieldValueByTypeLcid(fieldType, lcid) {
        return await exec("textFieldValueByTypeLcid", [
            this.rawResult,
            fieldType,
            lcid,
        ]);
    }

    async textFieldValueByTypeSource(fieldType, source) {
        return await exec("textFieldValueByTypeSource", [
            this.rawResult,
            fieldType,
            source,
        ]);
    }

    async textFieldValueByTypeLcidSource(fieldType, lcid, source) {
        return await exec("textFieldValueByTypeLcidSource", [
            this.rawResult,
            fieldType,
            lcid,
            source,
        ]);
    }

    async textFieldValueByTypeSourceOriginal(fieldType, source, original) {
        return await exec("textFieldValueByTypeSourceOriginal", [
            this.rawResult,
            fieldType,
            source,
            original,
        ]);
    }

    async textFieldValueByTypeLcidSourceOriginal(fieldType, lcid, source, original) {
        return await exec("textFieldValueByTypeLcidSourceOriginal", [
            this.rawResult,
            fieldType,
            lcid,
            source,
            original,
        ]);
    }

    async textFieldByType(fieldType) {
        const result = await exec("textFieldByType", [
            this.rawResult,
            fieldType,
        ]);
        if (result == null) return null;
        return TextField.fromJson(JSON.parse(result));
    }

    async textFieldByTypeLcid(fieldType, lcid) {
        const result = await exec("textFieldByTypeLcid", [
            this.rawResult,
            fieldType,
            lcid,
        ]);
        if (result == null) return null;
        return TextField.fromJson(JSON.parse(result));
    }

    async graphicFieldByTypeSource(fieldType, source) {
        const result = await exec("graphicFieldByTypeSource", [
            this.rawResult,
            fieldType,
            source,
        ]);
        if (result == null) return null;
        return GraphicField.fromJson(JSON.parse(result));
    }

    async graphicFieldByTypeSourcePageIndex(fieldType, source, pageIndex) {
        const result = await exec("graphicFieldByTypeSourcePageIndex", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
        ]);
        if (result == null) return null;
        return GraphicField.fromJson(JSON.parse(result));
    }

    async graphicFieldByTypeSourcePageIndexLight(fieldType, source, pageIndex, light) {
        const result = await exec("graphicFieldByTypeSourcePageIndexLight", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
            light,
        ]);
        if (result == null) return null;
        return GraphicField.fromJson(JSON.parse(result));
    }

    async graphicFieldImageByType(fieldType) {
        const result = await exec("graphicFieldImageByType", [
            this.rawResult,
            fieldType,
        ]);
        return result;
    }

    async graphicFieldImageByTypeSource(fieldType, source) {
        const result = await exec("graphicFieldImageByTypeSource", [
            this.rawResult,
            fieldType,
            source,
        ]);
        return result;
    }

    async graphicFieldImageByTypeSourcePageIndex(fieldType, source, pageIndex) {
        const result = await exec("graphicFieldImageByTypeSourcePageIndex", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
        ]);
        return result;
    }

    async graphicFieldImageByTypeSourcePageIndexLight(fieldType, source, pageIndex, light) {
        const result = await exec("graphicFieldImageByTypeSourcePageIndexLight", [
            this.rawResult,
            fieldType,
            source,
            pageIndex,
            light,
        ]);
        return result;
    }

    async containers(resultType) {
        return await exec("containers", [this.rawResult, resultType]);
    }

    async encryptedContainers() {
        return await exec("encryptedContainers", [this.rawResult]);
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new Results();
        result.chipPage = jsonObject["chipPage"];
        result.processingFinishedStatus = jsonObject["processingFinishedStatus"];
        result.elapsedTime = jsonObject["elapsedTime"];
        result.elapsedTimeRFID = jsonObject["elapsedTimeRFID"];
        result.morePagesAvailable = jsonObject["morePagesAvailable"];
        result.graphicResult = GraphicResult.fromJson(jsonObject["graphicResult"]);
        result.textResult = TextResult.fromJson(jsonObject["textResult"]);
        result.rawResult = jsonObject["rawResult"];
        result.rfidSessionData = RFIDSessionData.fromJson(jsonObject["rfidSessionData"]);
        result.authenticityResult = AuthenticityResult.fromJson(jsonObject["authenticityResult"]);
        result.barcodeResult = BarcodeResult.fromJson(jsonObject["barcodeResult"]);
        result.status = ResultsStatus.fromJson(jsonObject["status"]);
        result.vdsncData = VDSNCData.fromJson(jsonObject["vdsncData"]);
        result.dtcData = jsonObject["dtcData"];
        result.transactionInfo = TransactionInfo.fromJson(jsonObject["transactionInfo"]);

        if (jsonObject["documentPosition"] != null) {
            result.documentPosition = [];
            for (const item of jsonObject["documentPosition"]) {
                const position = Position.fromJson(item);
                if (position != null) {
                    result.documentPosition.push(position);
                }
            }
        }

        if (jsonObject["barcodePosition"] != null) {
            result.barcodePosition = [];
            for (const item of jsonObject["barcodePosition"]) {
                const position = Position.fromJson(item);
                if (position != null) {
                    result.barcodePosition.push(position);
                }
            }
        }

        if (jsonObject["mrzPosition"] != null) {
            result.mrzPosition = [];
            for (const item of jsonObject["mrzPosition"]) {
                const position = Position.fromJson(item);
                if (position != null) {
                    result.mrzPosition.push(position);
                }
            }
        }

        if (jsonObject["imageQuality"] != null) {
            result.imageQuality = [];
            for (const item of jsonObject["imageQuality"]) {
                const imageQualityGroup = ImageQualityGroup.fromJson(item);
                if (imageQualityGroup != null) {
                    result.imageQuality.push(imageQualityGroup);
                }
            }
        }

        if (jsonObject["documentType"] != null) {
            result.documentType = [];
            for (const item of jsonObject["documentType"]) {
                const documentType = DocumentType.fromJson(item);
                if (documentType != null) {
                    result.documentType.push(documentType);
                }
            }
        }

        return result;
    }
}

export const ProcessingFinishedStatus = {
    NOT_READY: 0,
    READY: 1,
    TIMEOUT: 2
};

export const ResultType = {
    NONE: -1,
    EMPTY: 0,
    RAW_IMAGE: 1,
    FILE_IMAGE: 2,
    MRZ_OCR_EXTENDED: 3,
    BARCODES: 5,
    GRAPHICS: 6,
    MRZ_TEST_QUALITY: 7,
    DOCUMENT_TYPES_CANDIDATES: 8,
    CHOSEN_DOCUMENT_TYPE_CANDIDATE: 9,
    DOCUMENTS_INFO_LIST: 10,
    OCR_LEXICAL_ANALYZE: 15,
    RAW_UNCROPPED_IMAGE: 16,
    VISUAL_OCR_EXTENDED: 17,
    BAR_CODES_TEXT_DATA: 18,
    BAR_CODES_IMAGE_DATA: 19,
    AUTHENTICITY: 20,
    EXPERT_ANALYZE: 21,
    OCR_LEXICAL_ANALYZE_EX: 22,
    EOS_IMAGE: 23,
    BAYER_IMAGE: 24,
    MAGNETIC_STRIPE: 25,
    MAGNETIC_STRIPE_TEXT_DATA: 26,
    FIELD_FILE_IMAGE: 27,
    DATABASE_CHECK: 28,
    FINGERPRINT_TEMPLATE_ISO: 29,
    INPUT_IMAGE_QUALITY: 30,
    LIVE_PORTRAIT: 32,
    STATUS: 33,
    PORTRAIT_COMPARISON: 34,
    EXT_PORTRAIT: 35,
    TEXT: 36,
    IMAGES: 37,
    INTERNAL_RFID_SESSION: 48,
    INTERNAL_ENCRYPTED_RCL: 49,
    INTERNAL_LICENSE: 50,
    MRZ_POSITION: 61,
    BARCODE_POSITION: 62,
    DOCUMENT_POSITION: 85,
    CUSTOM: 100,
    RFID_RAW_DATA: 101,
    RFID_TEXT_DATA: 102,
    RFID_IMAGE_DATA: 103,
    RFID_BINARY_DATA: 104,
    RFID_ORIGINAL_GRAPHICS: 105,
    RFID_DTC_VC: 109
};
