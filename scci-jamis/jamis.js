const request = require('request');

const u = (Buffer.from('313031303639', 'hex')).toString();
const p = (Buffer.from('3672314646313768', 'hex')).toString();
const jamisURL = 'https://' + u + ':' + p + '@scci.jamisprime.com/odata/SCCI/TimeCardMonitoring2';
const getEmail = [];

const getAddress = () => {
    request({ url: jamisURL, json: true,}, (error, response) => {
        const results = response.body.value.filter((result) => result.YesterdaysHours === '0.00');
        
        results.forEach((result) => getEmail.push({
            name: (result.EmployeeName).split(' ')[1],
            email: result.Email,
            })
        );
        console.log(getEmail);
        // return results;
    });
};

module.exports = {
    getAddress: getAddress,
};