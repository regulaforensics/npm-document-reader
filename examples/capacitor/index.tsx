import '@ionic/react/css/core.css'
import '/src/main.css'
import { setupIonicReact } from '@ionic/react'
import { StatusBar, Style } from '@capacitor/status-bar'
import { File } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera'
import { main } from './src/main'

document.addEventListener('deviceready', async () => {
    document.getElementById("content").innerHTML = await fetch("main.html").then(r => r.text())
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    document.dispatchEvent(new Event('ready'))
})

export async function loadAsset(path: string): Promise<string> {
    var dir = await File.resolveDirectoryUrl(File.applicationDirectory + "public/assets")
    var fileEntry = await File.getFile(dir, path, {})
    var result = await new Promise<string>((resolve, _) => {
        fileEntry.file(file => {
            var reader = new FileReader()
            reader.onloadend = (_) => resolve(reader.result as string)
            reader.readAsDataURL(file)
        })
    })
    return result
}

export async function pickImage(): Promise<string | null> {
    return await Camera.getPicture({
        destinationType: DestinationType.DATA_URL,
        mediaType: MediaType.PICTURE,
        sourceType: PictureSourceType.PHOTOLIBRARY
    })
}

document.addEventListener('ready', main)

setupIonicReact()
StatusBar.setStyle({ style: Style.Light })
