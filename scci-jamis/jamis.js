const request = require('request');

const jamisURL = (Buffer.from('68747470733a2f2f54696d656d6f6e69746f723a507574757274316d33696e324441592140736363692e6a616d69737072696d652e636f6d2f6f646174612f534343492f54696d65436172644d6f6e69746f72696e6732', 'hex')).toString();;
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