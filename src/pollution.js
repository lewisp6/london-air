'use strict';

var client = require('./client');
var pollution = {};

pollution.getHourlyPollutionLevels = function(siteCode, callback) {
    var path = this.buildUrlPath(siteCode);

    client.makeRequest(path, function(error, response) {
        return callback(null, response);
    });
};

pollution.buildUrlPath = function(siteCode) {
    var url = 'Hourly/MonitoringIndex/GroupName=London/Json';

    if (siteCode) {
        url = 'Hourly/MonitoringIndex/SiteCode=BG1/Json';
    }

    return url;
};

module.exports = pollution;
