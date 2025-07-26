import { registerRootComponent } from 'expo'
import WebView from 'react-native-webview'
import React from 'react'
import * as RNFS from 'react-native-fs'
import { Platform } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { main } from './src/main'

var webViewRef: any
const onclicks: any = {}
const onMessage = (json: any) => {
  const event = JSON.parse(json.nativeEvent.data)
  if (event.id === "ready") main()
  if (event.id === "onclick") {
    onclicks[event.value]()
  }
}

export const document = {
  getElementById(id: string): any {
    return new Proxy({}, {
      set(_, prop: string, value) {
        if (prop == "onclick") {
          onclicks[id] = value
          webViewRef.injectJavaScript(`
            document.getElementById("${id}").onclick = () => {
              window.ReactNativeWebView.postMessage(JSON.stringify({ id: "onclick", value: "${id}" }));
            }; true
          `)
        } else
          webViewRef.injectJavaScript(`document.getElementById("${id}").${prop} = ${parseValue(value)}; true`)
        return true
      },
      get(_, prop: string) {
        if (prop === "style") return new Proxy({}, {
          set(_, styleProp: string, value) {
            webViewRef.injectJavaScript(`document.getElementById("${id}").style.${styleProp} = ${parseValue(value)}; true`)
            return true
          }
        })
        if (prop === "insertAdjacentHTML") return (position: string, html: string) => {
          webViewRef.injectJavaScript(`document.getElementById("${id}").insertAdjacentHTML('${position}', \`${html}\`); true`)
          return true
        }
        return undefined
      }
    }
    )
  }
}

function parseValue(value: any) {
  if (value !== true && value !== false) return `"${value}"`
  return value
}

registerRootComponent(() =>
  <WebView
    ref={ref => { webViewRef = ref }}
    onMessage={onMessage}
    source={require("./index.html")}
    scrollEnabled={false}
    overScrollMode={'content'}
  />
)

export async function loadAsset(path: string): Promise<string> {
  if (Platform.OS === 'ios') path = RNFS.MainBundlePath + "/" + path
  var readFile = Platform.OS === 'ios' ? RNFS.readFile : RNFS.readFileRes
  return await readFile(path, 'base64')
}

export async function pickImage(): Promise<string | null> {
  var response = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
    includeBase64: true
  })
  return response?.assets?.[0].base64!
}
