import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

import usuariosRoutes from './routes/usuarios.js';

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function conectarDB() {

    try {

        await client.connect();

        console.log('MongoDB conectado');

        const db = client.db('crudmongodb');

        app.locals.db = db;

    } catch (error) {

        console.log(error);

    }

}

conectarDB();

app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});