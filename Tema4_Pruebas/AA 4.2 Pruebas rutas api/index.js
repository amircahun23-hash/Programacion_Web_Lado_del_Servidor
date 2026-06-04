//jairo amir cahun tamay
const express = require('express');

const app = express();

app.use(express.json());

app.post('/usuarios', (req, res) => {
    res.status(201).json({
        mensaje: 'Usuario creado',
        usuario: req.body
    });
});

module.exports = app;