// Jairo Amir Cahun Tamay Grupo 8B

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const puerto = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión MongoDB
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => {
        console.log('Conexión exitosa a la base de datos');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

// Crear usuario
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});
console.log("MONGO_URI:", process.env.MONGO_URI);
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});