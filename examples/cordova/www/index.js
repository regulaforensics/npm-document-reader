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
                await loadModule('src/main.js')
                await loadModule('src/extra/bt_device.js')
                await loadModule('src/extra/custom_rfid.js')

                document.getElementById('content').innerHTML = this.result
                document.dispatchEvent(new CustomEvent("ready"))
            }
            reader.readAsText(file)
        })
    })
})

function loadModule(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
    });
}
