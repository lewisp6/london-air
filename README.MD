# London-Air

A JS wrapper for the London air quality API provided by http://www.londonair.org.uk/.

The API can be used to get real time pollution information for different London areas.

## Usage
### Install
`npm install london-air`

To begin using:

```
    var londonAir = require('london-air');
    londonAir.getHourlyPollutionLevels(null, function(error, response) {
        console.log(response);
    });
```
