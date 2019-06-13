const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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
        title: 'Help',
        name: 'Sonny Gale',
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sonny',
        location: 'Sonny\'s House'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sonny Gale',
        errorMessage: 'Help Article not found.',
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sonny Gale',
        errorMessage: 'Page not found.',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});