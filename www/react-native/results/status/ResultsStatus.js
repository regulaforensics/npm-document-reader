import { CheckResult } from './CheckResult';
import { OpticalStatus } from './OpticalStatus';
import { RFIDStatus } from './RFIDStatus';

export class ResultsStatus {
    overallStatus
    optical
    detailsOptical
    rfid
    detailsRFID
    portrait
    stopList

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
        
        return result;
    }
}
