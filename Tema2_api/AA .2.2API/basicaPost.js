import axios from "axios";
const registrarUsuario = async () => {
    try {
        const respuesta = await axios.post('https://reqres.in/api/register', {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        },
            {
                headers: { "x-api-key": "pro_c90129b3189eefe252b8485ede0bd4b99ff29538a42aecc51f1aae8641998206" }
            });
        console.log('Registro exitoso:', respuesta.data);
    } catch (error) {
        console.error('Error en el registro:', error.respuesta.data);

    }
};

registrarUsuario();