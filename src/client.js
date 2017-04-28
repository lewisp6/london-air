var http = require('http'),
    config = require('./config'),
    request = require('request');

var client = {};

client.makeRequest = function(path, callback) {
    var url = this.buildUrl(path);
    request(url, function(error, response, body) {
        callback(null, response);
    });
};

client.buildUrl = function(path) {
    return config.baseUrl + path;
};

module.exports = client;
