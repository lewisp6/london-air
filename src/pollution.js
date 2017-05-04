'use strict';

var urlHelper = require('./UrlHelper'),
    request = require('request');

var pollution = {};

pollution.getHourlyPollutionLevels = function(siteCode, callback) {
    var path = this.buildUrlPath(siteCode);
    var url = urlHelper.buildUrl(path);

    request(url, function(error, response, body) {
        if (error) {
            return callback(error);
        }

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
