# meteor-vcards
Serving [.vcard files](https://en.wikipedia.org/wiki/VCard) (vCards) to download from within your meteor app.

### installation

Make sure to have a `public` directory inside your project root directory.
Add the package to your project with `meteor add herrhelms:meteor-vcards`.

### basic usage

This package exposes two template helpers you can include anywhere in your project.

{{vCardGenerateButton}} - for generating a new .vcf file on the fly ('vcard-CURRENT_TIMESTAMP.vcf')
{{vCardDownloadLink}} - for a reactive div with link to the generated file to download.

vCard content can be injected at any time by a `new ReactiveDict`  ...
