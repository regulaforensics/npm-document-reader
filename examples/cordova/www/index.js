import { main } from './src/main.js'

export async function loadAsset(path) {
    path = cordova.file.applicationDirectory + "www/" + path
    return new Promise((resolve, _) => {
      window.resolveLocalFileSystemURL(path, (fileEntry) => {
        fileEntry.file((file) => {
          var reader = new FileReader()
          reader.onloadend = function (_) { resolve(this.result) }
          reader.readAsDataURL(file)
        })
      })
    })
  }
  
  export async function pickImage() {
    return new Promise((resolve, _) => {
      navigator.camera.getPicture(
        (imageData) => resolve(imageData),
        (_) => resolve(null),
        {
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          mediaType: Camera.MediaType.PICTURE
        }
      )
    })
  }
  
  document.addEventListener('ready', main)
