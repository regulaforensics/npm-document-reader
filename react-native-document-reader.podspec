Pod::Spec.new do |s|
  s.name         = 'react-native-document-reader'
  s.version      = '9.9.1117-beta'
  s.summary      = 'Regula React Native plugin.'
  s.license      = 'commercial'
  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'
  s.source       = { :path => '.' }
  s.ios.deployment_target = '15.0'
  s.source_files = [ 'ios/**/*.{h,m}', 'Sources/document-reader/**/*.{h,m}' ]
  s.exclude_files = [ 'Sources/document-reader/include/document-reader/CVDDocumentReader.h', 'Sources/document-reader/CVDDocumentReader.m' ]
  s.dependency 'DocumentReader', '9.8.6944'
  s.dependency 'React'
end
