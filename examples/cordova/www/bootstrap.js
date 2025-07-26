document.addEventListener('deviceready', () => {
    // imports
    window.DocumentReader = DocumentReaderPlugin.DocumentReader
    DocReaderAction = DocumentReaderPlugin.DocReaderAction
    FieldType = DocumentReaderPlugin.FieldType
    GraphicFieldType = DocumentReaderPlugin.GraphicFieldType
    InitConfig = DocumentReaderPlugin.InitConfig
    RecognizeConfig = DocumentReaderPlugin.RecognizeConfig
    ResultType = DocumentReaderPlugin.ResultType
    RFIDConfig = DocumentReaderPlugin.RFIDConfig
    ScannerConfig = DocumentReaderPlugin.ScannerConfig
    Scenario = DocumentReaderPlugin.Scenario
    RFIDDataFileType = DocumentReaderPlugin.RFIDDataFileType
    RFIDNotificationCodes = DocumentReaderPlugin.RFIDNotificationCodes

    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/src/main.html', (fileEntry) => {
        fileEntry.file((file) => {
            const reader = new FileReader()
            reader.onloadend = async function () {
                document.getElementById('content').innerHTML = this.result

                const script = document.createElement('script')
                script.src = 'bundle.js'
                script.onload = () => document.dispatchEvent(new CustomEvent("ready"))
                document.body.appendChild(script)
            }
            reader.readAsText(file)
        })
    })
})
