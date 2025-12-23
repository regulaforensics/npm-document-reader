import { CheckResult } from './CheckResult';
import { OpticalStatus } from './OpticalStatus';
import { AgeStatus } from './AgeStatus';
import { RFIDStatus } from './RFIDStatus';

export class ResultsStatus {
    overallStatus
    optical
    detailsOptical
    rfid
    detailsRFID
    portrait
    stopList
    mDL
    age
    captureProcessIntegrity
    ageStatus

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new ResultsStatus();
        result.overallStatus = jsonObject["overallStatus"];
        result.optical = jsonObject["optical"];
        result.detailsOptical = OpticalStatus.fromJson(jsonObject["detailsOptical"]);
        result.rfid = jsonObject["rfid"];
        result.detailsRFID = RFIDStatus.fromJson(jsonObject["detailsRFID"]);
        result.portrait = jsonObject["portrait"];
        result.stopList = jsonObject["stopList"];
        result.mDL = jsonObject["mDL"];
        result.age = jsonObject["age"];
        result.captureProcessIntegrity = jsonObject["captureProcessIntegrity"];
        result.ageStatus = AgeStatus.fromJson(jsonObject["detailsAge"]);
        
        return result;
    }

    toJson() {
        return {
            "overallStatus": this.overallStatus,
            "optical": this.optical,
            "rfid": this.rfid,
            "portrait": this.portrait,
            "stopList": this.stopList,
            "mDL": this.mDL,
            "age": this.age,
            "captureProcessIntegrity": this.captureProcessIntegrity,
            "detailsOptical": this.detailsOptical?.toJson(),
            "detailsRFID": this.detailsRFID?.toJson(),
            "detailsAge": this.ageStatus?.toJson(),
        }
    }
}
