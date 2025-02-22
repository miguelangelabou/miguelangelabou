const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const sslify = require('express-sslify');
const cors = require('cors');

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);
app.use(sslify.HTTPS({ trustProtoHeader: true }));


app.use('/styles', express.static(path.join(__dirname, '../public/styles')));
app.use('/scripts', express.static(path.join(__dirname, '../public/scripts')));
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

app.get('/curriculum.pdf', (req, res) => {
    const filePath = path.join(__dirname, '../curriculum.pdf');
    res.sendFile(filePath);
});

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

app.get('/pt', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

module.exports = app;