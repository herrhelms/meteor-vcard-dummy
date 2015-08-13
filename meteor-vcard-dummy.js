if (Meteor.isClient) {
    var defaultText = 'Press generate to get your vcard';
    var defaultButtonText = 'Generate';

    var first = 'John';
    var last = 'Doe';
    var email = 'john.doe@emailprovider.com';

    var content = 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    'N:' + first + ' ' + last + ';;;;\n' +
    'EMAIL;type=INTERNET;type=pref:' + email + '\n' +
    'PROFILE:VCARD\n' +
    'END:VCARD\n';

    Meteor.startup(function() {
        Router.route('/', {
            path: '/'
        });
    });

    var dlStatusTxt = new ReactiveVar();
    var dlButtonStatus = new ReactiveVar();

    dlStatusTxt.set(defaultText);
    dlButtonStatus.set(false);

    UI.registerHelper('vCardGenerateButton', function() {
        var button = document.createElement('button');
        button.disabled = dlButtonStatus.get();
        button.setAttribute('class', 'btn btn-default generate-vcard');
        button.innerHTML = defaultButtonText;
        var wrapper = document.createElement('div');
        wrapper.appendChild(button);
        return Spacebars.SafeString(wrapper.innerHTML);
    });

    UI.registerHelper('vCardDownloadLink', function() {
        return Spacebars.SafeString('<div class="download-link-wrapper">' + dlStatusTxt.get() + '</div>');
    });

    UI.body.events({
        'click .generate-vcard': function(evt, tpl) {
            dlStatusTxt.set('Generating...');

            // simple ingration for now...
            Meteor.call('buildVcard', content, function(error, result) {
                if (!error && result) {

                    // adding some timeout here to be certain the physical file is available on server
                    Meteor.setTimeout(function() {
                        var txt = '<a href="' + result + '" class="download-vcard">download vcard<a>';
                        dlStatusTxt.set(txt);
                        dlButtonStatus.set(true);
                    }, 1000);
                }
            });
        },
        'click .download-vcard': function(evt, tpl) {
            var target = evt.currentTarget.getAttribute('href');
            target = target.replace('/download/', '');
            Meteor.setTimeout(function() {
                dlStatusTxt.set(defaultText);
                dlButtonStatus.set(false);
                Meteor.call('removeVcard', target);
            }, 300);
        }
    });

}

if (Meteor.isServer) {
    var fs = Npm.require('fs');

    Meteor.startup(function() {
        Router.route('/download/:filename', {
            where: 'server',
            action: function() {
                var filename = this.params.filename;
                var filePath = process.env.PWD + '/private/' + filename;
                var data = fs.readFileSync(filePath);
                this.response.writeHead(200, {
                    'Cache-Control': 'private, max-age=0, no-cache, must-revalidate, post-check=0, pre-check=0',
                    'Content-Type': 'text/x-vcard',
                    'Content-Disposition': 'attachment; filename= "' + filename + '";'
                });
                this.response.write(data);
                this.response.end();
            }
        });
    });

    Meteor.methods({
        buildVcard: function(content) {
            var filename = 'vcard-' + new Date().getTime() + '.vcf';
            var filePath = process.env.PWD + '/private/' + filename;
            fs.writeFileSync(filePath, content, 'binary');
            return '/download/' + filename;
        },
        removeVcard: function(filename) {
            var filePath = process.env.PWD + '/private/' + filename;
            Meteor.setTimeout(function () {
                fs.unlinkSync(filePath);
            }, 1000);
            return;
        }
    });
}
