import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule, Platform } from '@ionic/angular'
import { NgModule } from '@angular/core'

import { Component } from '@angular/core'
import { File } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera/ngx'

import { main } from './src/main'

export async function loadAsset(path: string): Promise<string> {
    var dir = await File.resolveDirectoryUrl(File.applicationDirectory + "www/assets")
    var fileEntry = await File.getFile(dir, path, null)
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
    return await cameraInstance.getPicture({
        destinationType: DestinationType.DATA_URL,
        mediaType: MediaType.PICTURE,
        sourceType: PictureSourceType.PHOTOLIBRARY
    })
}

var cameraInstance: Camera
@Component({
    selector: 'app-root',
    templateUrl: 'src/main.html',
    styleUrl: 'src/main.css'
})
class Main {
    constructor(platform: Platform, camera: Camera) {
        cameraInstance = camera
        platform.ready().then(main)
    }
}

@NgModule({
    bootstrap: [Main],
    providers: [Platform, Camera],
    imports: [BrowserModule, IonicModule.forRoot()]
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule)
