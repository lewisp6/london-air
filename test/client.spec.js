'use strict';

var assert = require('assert'),
    client = require('../src/client');

describe('build Url', function() {
    it ('should pull the config and build the final url', function() {
        assert.equal('http://api.erg.kcl.ac.uk/AirQuality/test', client.buildUrl('test'));
    });
});
