'use strict';

var assert = require('chai').assert,
    client = require('../src/Client'),
    nock = require('nock');

describe('makeRequest', function() {
    var successRequest = nock('http://api.erg.kcl.ac.uk')
                            .get('/AirQuality/Information/IndexHealthAdvice/Json')
                            .reply(200,
                                {"AirQualityIndexHealthAdvice":{
                                  "HealthAdvice":[
                                     {
                                        "@AirQualityBand":"Low",
                                        "@LowerAirQualityIndex":"1",
                                        "@UpperAirQualityIndex":"3",
                                        "@Group":"At-risk individuals",
                                        "@Advice":"Enjoy your usual outdoor activities."
                                     }
                                  ]
                               }
                            });

    it('should return a success response on succesful request', function(done) {
        client.makeRequest('Information/IndexHealthAdvice/Json', function(error, response) {
            assert.equal(response.statusCode, 200);
            //assert.equal(response.body.AirQualityIndexHealthAdvice.HealthAdvice[0].AirQualityBand, 'Low');
            done();
        });
    });
});
