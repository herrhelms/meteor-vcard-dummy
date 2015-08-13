Package.describe({
    name: 'herrhelms:meteor-vcard-dummy',
    version: '0.0.1',
    summary: 'Playground package to generate and download .vcf files within your meteor app',
    git: 'https://github.com/herrhelms/meteor-vcards-dummy.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.imply('iron:router@1.0.7');
    api.use(['templating', 'spacebars', 'reactive-var'], 'client');
    api.addFiles('meteor-vcard-dummy.js');
});
