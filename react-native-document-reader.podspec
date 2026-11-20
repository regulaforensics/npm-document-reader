Pod::Spec.new do |s|
  s.name         = 'react-native-document-reader'
  s.version      = '9.11.1336-rc'
  s.summary      = 'Regula React Native plugin.'
  s.license      = 'commercial'
  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'
  s.source       = { :path => '.' }
  s.ios.deployment_target = '16.0'
  s.source_files = 'ios/*.{h,m}'
  s.exclude_files = [ 'ios/CVDDocumentReader.h', 'ios/CVDDocumentReader.m' ]
  s.dependency 'DocumentReaderStage', '9.11.7397'
  s.dependency 'React'
end
