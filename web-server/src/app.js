const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sonny Gale',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sonny Gale',
    });
});

app.get('/help', (req, res) => {
    res.render('Help', {
        helpText: 'This is some helpful text.',
    });
});

//
// Goal: Create a template for help page
//
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sonny',
        location: 'Sonny\'s House'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});