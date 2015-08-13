# meteor-vcard-dummy
Serving [.vcard files](https://en.wikipedia.org/wiki/VCard) (vCards) to download from within your meteor app.

### installation

Make sure to have a `/private` directory inside your projects root directory.
Goto packages directory  (`mkdir packages` or `cd packages`)

`git clone https://github.com/herrhelms/meteor-vcard-dummy.git`

Add this package to your project with `meteor add herrhelms:meteor-vcard-dummy`.

### basic usage
This package exposes two UI helpers you can put anywhere in your projects template files.

```HTML
    <!-- generator button -->
    {{vCardGenerateButton}}
    <!-- download link -->
    {{vCardDownloadLink}}
```

 - `{{vCardGenerateButton}}` to generate a new .vcard file on the fly.
    The file will be called 'vcard-CURRENT_TIMESTAMP.vcf' and will reside in the `/private` directory.

 - `{{vCardDownloadLink}}` div element as placeholder for the link to download the generated vcard.

### vcard content
~~The content of the vCard can be injected at any time by via `ReactiveDict` ...~~

For now the vcards content is hard-coded (see ./meteor-vcards.js line 5-14)

**This is just a dummy playground version** of a more complex `meteor-vcards` package I am currently working on.
Stay tuned, once it's ready I will release it to [atmosphere.js](https://atmospherejs.com/herrhelms).

Happy to hear from you via [Github](https://github.com/herrhelms) or [Twitter](https://twitter.com/herrhelms).
