var _exec = (completion, params, errorCallback = null) => cordova.exec(completion, errorCallback, "DocumentReader", "exec", params)

export const NativeModules = {
    RNDocumentReader: {
        exec: async (name, params) => new Promise((resolve, reject) => _exec(resolve, [name, ...params], error => reject(new Error(error))))
    }
}

export class NativeEventEmitter {
    addListener(id, completion) {
        _exec(completion, ["setEvent", id])
    }

    removeAllListeners(id) {
        _exec(null, ["setEvent", id])
    }
}