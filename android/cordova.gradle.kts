repositories {
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Beta") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Nightly") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Stage") }
}

dependencies {
    //noinspection GradleDependency
    add("implementation", "com.regula.documentreader:api:9.9.13459") {
        isTransitive = true
    }
}
