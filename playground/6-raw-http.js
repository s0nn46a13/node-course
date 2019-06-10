const https = require('https');

const url ='https://api.darksky.net/forecast/8ac4f163892c8d2c6b2765a49e34de18/40,-75'

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();