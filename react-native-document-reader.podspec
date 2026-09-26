Pod::Spec.new do |s|
  s.name         = 'react-native-document-reader'
  s.version      = '9.8.1169-rc'
  s.summary      = 'Regula React Native plugin.'
  s.license      = 'commercial'
  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'
  s.source       = { :path => '.' }
  s.ios.deployment_target = '15.0'
  s.source_files = 'ios/*.{h,m}'
  s.exclude_files = [ 'ios/CVDDocumentReader.h', 'ios/CVDDocumentReader.m' ]
  s.dependency 'DocumentReaderStage', '9.9.7059'
  s.dependency 'React'
end
