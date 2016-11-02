var fs = require('fs');
var path = require('path');
var test = require('tape');
var subject = require('../config.json');

test('config.json', function(t) {
    t.plan(1);

    fs.readFile(
        path.join(
            __dirname,
            '../contents/meetups/',
            subject.locals.featuredMeetup + '.md'
        ),
        function(err) {
            t.notOk(err, 'locals.featuredMeetup is a valid file');
        }
    );
});
