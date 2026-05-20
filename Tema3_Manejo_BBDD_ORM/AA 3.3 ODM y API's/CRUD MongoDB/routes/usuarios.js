import express from 'express';

import { ObjectId } from 'mongodb';

const router = express.Router();


// GET
router.get('/', async (req, res) => {

    try {

        const db = req.app.locals.db;

        const usuarios = await db.collection('usuarios').find().toArray();

        res.json(usuarios);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

});


// POST
router.post('/', async (req, res) => {

    try {

        const db = req.app.locals.db;

        const nuevoUsuario = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            edad: req.body.edad
        };

        const resultado = await db.collection('usuarios').insertOne(nuevoUsuario);

        res.json(resultado);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

});


// PUT
router.put('/:id', async (req, res) => {

    try {

        const db = req.app.locals.db;

        const id = req.params.id;

        const datosActualizados = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            edad: req.body.edad
        };

        const resultado = await db.collection('usuarios').updateOne(
            { _id: new ObjectId(id) },
            { $set: datosActualizados }
        );

        res.json(resultado);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

});


// DELETE
router.delete('/:id', async (req, res) => {

    try {

        const db = req.app.locals.db;

        const id = req.params.id;

        const resultado = await db.collection('usuarios').deleteOne({
            _id: new ObjectId(id)
        });

        res.json(resultado);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

});

export default router;