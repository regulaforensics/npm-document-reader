import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'document-reader',
  name: 'DocumentReader',
  orientation: 'portrait',
  icon: './images/icon/icon.png',
  ios: {
    bundleIdentifier: 'com.regula.example.dr.react',
    infoPlist: {
      NSCameraUsageDescription: 'To use camera',
      NSPhotoLibraryUsageDescription: 'To use gallery',
      NFCReaderUsageDescription: 'To use NFC',
      NSBluetoothAlwaysUsageDescription: 'To use bluetooth',
      'com.apple.developer.nfc.readersession.iso7816.select-identifiers': [
        'A0000002471001',
        'E80704007F00070302',
        'A000000167455349474E',
        'A0000002480100',
        'A0000002480200',
        'A0000002480300',
        'A00000045645444C2D3031'
      ]
    },
    entitlements: { 'com.apple.developer.nfc.readersession.formats': ['TAG'] },
    appleTeamId: ''
  },
  android: {
    package: 'com.regula.example.dr.react',
    permissions: [
      'android.permission.BLUETOOTH_CONNECT',
      'android.permission.NFC'],
    adaptiveIcon: {
      foregroundImage: './images/icon/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    edgeToEdgeEnabled: true
  },
  plugins: [
    ['expo-custom-assets', { assetsPaths: ['./assets'] }],
    ['expo-build-properties', {
      android: {
        extraMavenRepos: [
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Beta' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Nightly' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Stage' }
        ]
      },
      // This fixes a bug in expo v53. https://github.com/expo/expo/issues/36908
      ios: { networkInspector: false }
    }]
  ]
})
