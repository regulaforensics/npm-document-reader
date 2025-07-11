import { AccessControlProcedureType } from './AccessControlProcedureType';
import { Application } from './Application';
import { SecurityObject } from './SecurityObject';
import { CardProperties } from './CardProperties';
import { RFIDErrorCodes } from '../../rfid/RFIDErrorCodes';
import { DataField } from './DataField';
import { RFIDDataFileType } from './RFIDDataFileType';

export class RFIDSessionData {
    accessControls
    applications
    securityObjects
    cardProperties
    totalBytesReceived
    totalBytesSent
    status
    extLeSupport
    processTime
    dataFields
    dataGroups

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        
        const result = new RFIDSessionData();
        result.totalBytesReceived = jsonObject["totalBytesReceived"];
        result.totalBytesSent = jsonObject["totalBytesSent"];
        result.status = jsonObject["status"];
        result.extLeSupport = jsonObject["extLeSupport"];
        result.processTime = jsonObject["processTime"];
        result.cardProperties = CardProperties.fromJson(jsonObject["cardProperties"]);
        result.dataGroups = jsonObject["dataGroups"];

        if (jsonObject["accessControls"]) {
            result.accessControls = [];
            for (const item of jsonObject["accessControls"]) {
                const accessControl = AccessControlProcedureType.fromJson(item);
                if (accessControl) {
                    result.accessControls.push(accessControl);
                }
            }
        }

        if (jsonObject["applications"]) {
            result.applications = [];
            for (const item of jsonObject["applications"]) {
                const application = Application.fromJson(item);
                if (application) {
                    result.applications.push(application);
                }
            }
        }

        if (jsonObject["securityObjects"]) {
            result.securityObjects = [];
            for (const item of jsonObject["securityObjects"]) {
                const securityObject = SecurityObject.fromJson(item);
                if (securityObject) {
                    result.securityObjects.push(securityObject);
                }
            }
        }

        if (jsonObject["dataFields"]) {
            result.dataFields = [];
            for (const item of jsonObject["dataFields"]) {
                const dataField = DataField.fromJson(item);
                if (dataField) {
                    result.dataFields.push(dataField);
                }
            }
        }

        return result;
    }
}
