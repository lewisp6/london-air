'use strict';

var client = require('./client');
var pollution = {};

pollution.getHourlyPollutionLevels = function(siteCode) {
    var path = this.buildUrlPath(siteCode);

    client.makeRequest(url, function(error, response) {
        return 1;
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
