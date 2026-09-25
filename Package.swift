// swift-tools-version: 5.9

import PackageDescription

let package = Package(
    name: "@regulaforensics/document-reader",
    platforms: [.iOS(.v15)],
    products: [.library(name: "@regulaforensics/document-reader", targets: ["@regulaforensics/document-reader"])],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(
            url: "https://github.com/regulaforensics/DocumentReader-Swift-Package",
            exact: "9.8.6944"
        )
    ],
    targets: [
        .target(
            name: "@regulaforensics/document-reader",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "DocumentReader", package: "DocumentReader-Swift-Package")
            ],
            path: "ios",
            exclude: ["RNDocumentReader.h", "RNDocumentReader.m"],
            publicHeadersPath: "spm"
        )
    ]
)
