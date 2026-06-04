const request = require('supertest');
const app = require('../index');

describe('POST /usuarios', () => {

    test('Debe crear un usuario correctamente', async () => {

        const response = await request(app)
            .post('/usuarios')
            .send({
                nombre: 'Amir',
                edad: 20,
                correo: 'amir@gmail.com'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.mensaje).toBe('Usuario creado');
    });

});