var assert = require('assert'),
    pollution = require('../src/pollution');

describe('getAllHourlyPollutionLevels', function() {
    it ('should return an expected response', function() {
        assert.equal(1, pollution.getAllHourlyPollutionLevels());
    });
});
