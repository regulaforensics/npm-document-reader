export class DocumentsDatabase {
    databaseID
    version
    date
    databaseDescription
    countriesNumber
    documentsNumber
    size

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentsDatabase()

        result.databaseID = jsonObject["databaseID"]
        result.version = jsonObject["version"]
        result.date = jsonObject["date"]
        result.databaseDescription = jsonObject["databaseDescription"]
        result.countriesNumber = jsonObject["countriesNumber"]
        result.documentsNumber = jsonObject["documentsNumber"]
        result.size = jsonObject["size"]

        return result
    }

    toJson() {
        return {
            "databaseID": this.databaseID,
            "version": this.version,
            "date": this.date,
            "databaseDescription": this.databaseDescription,
            "countriesNumber": this.countriesNumber,
            "documentsNumber": this.documentsNumber,
            "size": this.size,
        }
    }
}
