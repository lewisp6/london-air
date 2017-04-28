'use strict';

var assert = require('assert'),
    pollution = require('../src/pollution');

describe('buildUrlPath', function() {
    it ('should return hourly url path no site', function() {
        assert.equal('Hourly/MonitoringIndex/GroupName=London/Json', pollution.buildUrlPath());
    });

    it ('should return hourly url path with site', function() {
        assert.equal('Hourly/MonitoringIndex/SiteCode=BG1/Json', pollution.buildUrlPath('BG1'));
    });
});

describe('getHourlyPollutionLevel', function() {
    it ('should return a response', function() {
        assert.equal(pollution.getHourlyPollutionLevels('BG1'), 1);
    });
});
