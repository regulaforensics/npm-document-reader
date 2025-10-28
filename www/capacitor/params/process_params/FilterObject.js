export class FilterObject {
    docIDsFilter
    docFormatsFilter
    docCategoriesFilter
    docCountriesFilter

    static fromJson(json) {
        var result = new FilterObject();
        result.docIDsFilter = FilterObjectType.fromJson(json["docIDsFilter"]);
        result.docFormatsFilter = FilterObjectType.fromJson(json["docFormatsFilter"]);
        result.docCategoriesFilter = FilterObjectType.fromJson(json["docCategoriesFilter"]);
        result.docCountriesFilter = FilterObjectType.fromJson(json["docCountriesFilter"]);
        return result;
    }

    toJson() {
        return {
            "docIDsFilter": this.docIDsFilter?.toJson(),
            "docFormatsFilter": this.docFormatsFilter?.toJson(),
            "docCategoriesFilter": this.docCategoriesFilter?.toJson(),
            "docCountriesFilter": this.docCountriesFilter?.toJson()
        }
    }
}

export class FilterObjectType {
    _list
    _isInclude

    static createIncludeList(list) {
        var result = new FilterObjectType();
        result._list = list;
        result._isInclude = true;
        return result;
    }

    static createExcludeList(list) {
        var result = new FilterObjectType();
        result._list = list;
        result._isInclude = false;
        return result;
    }

    static fromJson(json) {
        if (json == null) return null;
        if (json["isInclude"]) {
            return FilterObjectType.createIncludeList(json["list"]);
        } else {
            return FilterObjectType.createExcludeList(json["list"]);
        }
    }

    toJson() {
        return {
            "list": this._list,
            "isInclude": this._isInclude,
        }
    }
}

