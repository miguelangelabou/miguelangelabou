const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta public
app.use('/styles', express.static(path.join(__dirname, '../public/styles')));
app.use('/scripts', express.static(path.join(__dirname, '../public/scripts')));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

// Manejar otras rutas si es necesario
app.get('/en', (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
});

// Exportar la aplicación
module.exports = app;