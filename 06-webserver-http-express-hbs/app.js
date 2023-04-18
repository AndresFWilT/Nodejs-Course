const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine','hbs'); 
hbs.registerPartials( __dirname + '/views/partials/', function (err) {});

// serve static content
app.use(express.static('public'));

app.get('/', (req,res) => {
    user = {
        name: 'Andres Willis',
        status: 'Active'
    }
    res.render('home', user);
});

app.get('/elements', (req,res) => {
    user = {
        name: 'Andres Willis',
        status: 'Active'
    }
    res.render('elements', user);
});

app.get('/generic', (req,res) => {
    user = {
        name: 'Andres Willis',
        status: 'Active'
    }
    res.render('generic', user);
});

app.get('*', (req,res) => {
    res.send('404 | Page not found');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});