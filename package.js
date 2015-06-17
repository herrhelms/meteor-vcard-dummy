Package.describe({
    name: 'herrhelms:meteor-vcards',
    version: '0.0.1',
    summary: 'Serve .vcf files for download within your meteor app',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.imply('iron:router@1.0.7');
    api.use(['templating', 'spacebars', 'reactive-var'], 'client');
    api.addFiles(['meteor-vcards.html'], 'client');
    api.addFiles('meteor-vcards.js');
});
