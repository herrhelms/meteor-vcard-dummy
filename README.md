# meteor-vcards
Serving [.vcard files](https://en.wikipedia.org/wiki/VCard) (vCards) to download from within your meteor app.

### installation

Make sure to have a `/private` directory inside your project root directory.

Add the package to your project with `meteor add herrhelms:meteor-vcards`.

### basic usage
This package exposes two UI helpers you can put anywhere in your project.

 - `{{vCardGenerateButton}}` to generate a new .vcard file on the fly.
    The file will be called 'vcard-CURRENT_TIMESTAMP.vcf' and will reside in the `/private` directory.

 - `{{vCardDownloadLink}}` div element as placeholder for the link to download the generated vcard.

### vcard content
~~The content of the vCard can be injected at any time by via `ReactiveDict` ...~~

for now this is hard-coded (see ./meteor-vcards.js line 5-14)

### example integration
Dummy integration in yourtemplate.html

```HTML
    <!-- generator button -->
    {{vCardGenerateButton}}
    <!-- download link -->
    {{vCardDownloadLink}}
```

This is just a dummy playground version of a more complex `meteor-vcards` package I am working on. Stay tuned. Once ready I will release it to [atmosphere.js](https://atmospherejs.com/herrhelms).
