const express = require('express');
const path = require('path');

const app = express();

app.use('/styles', express.static(path.join(__dirname, '../public/styles')));
app.use('/scripts', express.static(path.join(__dirname, '../public/scripts')));
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

app.get('/en', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

app.get('/es', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

app.get('/ar', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

app.get('/ch', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

module.exports = app;