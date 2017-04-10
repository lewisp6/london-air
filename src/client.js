var http = require('http'),
    config = require('./config');

var options = {
    host: config.url,
    port: 80
}

module.exports = function(path) {
    var client = {};
    options.path = path;

    http.get(options)
}
