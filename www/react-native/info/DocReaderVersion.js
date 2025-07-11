import { DocumentsDatabase } from "./DocumentsDatabase";

export class DocReaderVersion {
    api
    core
    coreMode
    database

    constructor() {
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocReaderVersion()

        result.api = jsonObject["api"]
        result.core = jsonObject["core"]
        result.coreMode = jsonObject["coreMode"]
        result.database = DocumentsDatabase.fromJson(jsonObject["database"])

        return result
    }
}
