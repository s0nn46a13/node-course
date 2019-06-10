const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const forecastURL ='https://api.darksky.net/forecast/8ac4f163892c8d2c6b2765a49e34de18/' +  latitude + longitude

    request({ url: forecastURL, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!');
        } else if (response.body.currently.length === 0) {
            callback('Unable to find location.  Try another search.');
        } else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability,
            })
        };
    });
};

module.exports = forecast;