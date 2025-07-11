require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
source = File.join(__dir__, 'ios')

Pod::Spec.new do |s|
  s.name         = 'RNDocumentReader'
  s.version      = '8.2.186-beta'
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'

  s.source       = { http: "file:#{source}" }
  s.ios.deployment_target = '13.0'
  s.source_files = 'ios/**/*.{h,m}'
  s.exclude_files = [ 'ios/CVDDocumentReader.h', 'ios/CVDDocumentReader.m' ]
  s.dependency 'DocumentReader', '8.1.4772'
  s.dependency 'React'
end
