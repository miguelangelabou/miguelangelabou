const express = require('express');
const path = require('path');

const app = express();

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/es', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/en', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/ar', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/ch', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
    res.redirect('/en');
});
