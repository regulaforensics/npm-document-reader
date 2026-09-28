import '/src/main.css'
import mainHtml from './src/main.html?raw'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { main } from './src/main'

document.addEventListener('deviceready', async () => {
    document.getElementById("content").innerHTML = mainHtml
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    document.dispatchEvent(new Event('ready'))
})

export async function loadAsset(path: string): Promise<string> {
    var response = await fetch(`assets/${path}`)
    if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`)
    var blob = await response.blob()
    return new Promise((resolve, reject) => {
        var reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = () => reject(reader.error)
        reader.readAsDataURL(blob)
    })
}

export async function pickImage(): Promise<string | null> {
    return (await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos
    })).base64String ?? null
}

document.addEventListener('ready', main)
