'use strict';

var request = require('request');

var pollution = {};

pollution.getAllHourlyPollutionLevels = function() {
    request('http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json', function(error, response, body) {
        return 1;
    });
}

module.exports = pollution;
