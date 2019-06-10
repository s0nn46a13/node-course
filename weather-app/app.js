const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'https://api.darksky.net/forecast/8ac4f163892c8d2c6b2765a49e34de18/37.8267,-122.4233';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location.');
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.  There is a ' + response.body.currently.precipProbability + '% chance of rain');
//     }
// });

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data',data)
});

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
  });