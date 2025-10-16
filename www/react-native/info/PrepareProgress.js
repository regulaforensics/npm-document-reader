/**
 * Class contains info about database preparation progress.
 */
export class PrepareProgress {
    downloadedBytes
    totalBytes
    progress

    constructor(downloadedBytes, totalBytes, progress) {
        this.downloadedBytes = downloadedBytes
        this.totalBytes = totalBytes
        this.progress = progress
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new PrepareProgress(
            jsonObject["downloadedBytes"],
            jsonObject["totalBytes"],
            jsonObject["progress"]
        )
    }

    toJson() {
        return {
            "downloadedBytes": this.downloadedBytes,
            "totalBytes": this.totalBytes,
            "progress": this.progress,
        }
    }
}
