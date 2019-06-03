const request = require('request');

const u = ;
const p = ;
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
