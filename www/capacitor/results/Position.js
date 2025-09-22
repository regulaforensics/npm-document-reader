import { DocFormat } from './DocumentType.js';
import { CheckResult } from './status/CheckResult.js';

export class Position {
    docFormat;
    width;
    height;
    angle;
    dpi;
    inverse;
    perspectiveTr;
    objArea;
    objIntAngleDev;
    resultStatus;
    center;
    leftTop;
    leftBottom;
    rightTop;
    rightBottom;
    pageIndex;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Position();

        result.docFormat = jsonObject["docFormat"];
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        result.angle = jsonObject["angle"];
        result.dpi = jsonObject["dpi"];
        result.inverse = jsonObject["inverse"];
        result.perspectiveTr = jsonObject["perspectiveTr"];
        result.objArea = jsonObject["objArea"];
        result.objIntAngleDev = jsonObject["objIntAngleDev"];
        result.resultStatus = jsonObject["resultStatus"];
        result.pageIndex = jsonObject["pageIndex"];
        result.center = Coordinate.fromJson(jsonObject["center"]);
        result.leftTop = Coordinate.fromJson(jsonObject["leftTop"]);
        result.leftBottom = Coordinate.fromJson(jsonObject["leftBottom"]);
        result.rightTop = Coordinate.fromJson(jsonObject["rightTop"]);
        result.rightBottom = Coordinate.fromJson(jsonObject["rightBottom"]);

        return result;
    }

    toJson() {
        return {
            "docFormat": this.docFormat,
            "resultStatus": this.resultStatus,
            "width": this.width,
            "height": this.height,
            "angle": this.angle,
            "dpi": this.dpi,
            "inverse": this.inverse,
            "perspectiveTr": this.perspectiveTr,
            "objArea": this.objArea,
            "objIntAngleDev": this.objIntAngleDev,
            "pageIndex": this.pageIndex,
            "center": this.center?.toJson(),
            "leftTop": this.leftTop?.toJson(),
            "leftBottom": this.leftBottom?.toJson(),
            "rightTop": this.rightTop?.toJson(),
            "rightBottom": this.rightBottom?.toJson(),
        }
    }
}

export class Coordinate {
    x;
    y;

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;
        const result = new Coordinate();

        result.x = jsonObject["x"];
        result.y = jsonObject["y"];

        return result;
    }

    toJson() {
        return {
            "x": this.x,
            "y": this.y,
        }
    }
}
