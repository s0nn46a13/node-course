const request = require('request');

const geocode = (address, callback) => {
    const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/' +  encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiczBubjQ2YTEzIiwiYSI6ImNqd2V0dmZ5dzEyejU0OW83bjBudTRvcDcifQ.jTcPg2mvcMhCUu3_N3TJng'

    request({ url: geocodeURL, json:true}, (error, response) => {
        if (error) {
            console.log('Unable to connect to location services!');
        } else if (response.body.features.length === 0) {
            console.log('Unable to find location.  Try another search.');
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            })
        };
    });
};

module.exports = geocode;