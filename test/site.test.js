var fs = require('fs');
var path = require('path');
var wintersmith = require('wintersmith');
var test = require('tape');

test('static site generation', function(t) {
    t.plan(1);
    var env = wintersmith(path.join(__dirname, '../config.json'));
    env.build(function(err) {
        t.notOk(err, 'builds without error');
    });
});
