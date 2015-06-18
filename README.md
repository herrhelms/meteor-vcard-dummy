# meteor-vcards
Serving [.vcard files](https://en.wikipedia.org/wiki/VCard) (vCards) to download from within your meteor app.

### installation

Make sure to have a `/private` directory inside your project root directory.

Add the package to your project with `meteor add herrhelms:meteor-vcards`.

### basic usage
This package exposes two UI helpers you can include anywhere in your project.

 - `{{vCardGenerateButton}}` button to generate a new .vcard file on the fly.
    The file will be called 'vcard-CURRENT_TIMESTAMP.vcf' and resides in your `/private` directory.

 - `{{vCardDownloadLink}}` div element as placeholder for the link to download the generated vcard.

### vcard content
~~The content of the vCard can be injected at any time by a `new ReactiveDict`  ...~~

for now this is hard-coded

### example integration
Dummy integration in yourtemplate.html

```HTML
    {{vCardGenerateButton}}
    <fieldset>
        <legend>Download vCard</legend>
        {{vCardDownloadLink}}
    </fieldset>
```
