'use strict';

var urlHelper = require('./UrlHelper'),
    request = require('request');

var healthMessage = {};

healthMessage.getUrlPath = function() {
    return 'AirQuality/Information/IndexHealthAdvice/Json';
};

healthMessage.getAllHealthMessages = function(handleResponse) {
    var path = this.getUrlPath();
    var url = urlHelper.buildUrl(path);

    request(url, function(error, response, body) {
        if (error) {
            return handleResponse(error);
        }

        return handleResponse(null, response);
    });
};

module.exports = healthMessage;
