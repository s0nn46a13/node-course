const request = require('request');

const u = (Buffer.from('54696d656d6f6e69746f72', 'hex')).toString();
const p = (Buffer.from('507574757274316d33696e3244415921', 'hex')).toString();
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
