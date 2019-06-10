const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sonny',
        location: 'Sonny\'s House'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});