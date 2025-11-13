var _exec = (completion, params) => cordova.exec(completion, null, "DocumentReader", "exec", params)

export const NativeModules = {
    RNDocumentReader: {
        exec: async (name, params) => new Promise((resolve, _) => _exec(data => resolve(data), [name, ...params]))
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