const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url ='https://api.darksky.net/forecast/8ac4f163892c8d2c6b2765a49e34de18/' + longitude + ',' + latitude

    request({ url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.  There is a ' + response.body.currently.precipProbability + '% chance of rain')
        };
    });
};

module.exports = forecast;