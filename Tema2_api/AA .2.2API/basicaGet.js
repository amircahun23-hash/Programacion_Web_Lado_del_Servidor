import axios from "axios";
const obtenerUsuario = async () => {
try {
const response = await axios.get('https://reqres.in/api/users/4', {
headers: {
'Authorization': 'Basic ' + Buffer. from('eve.holt@reqres.in:pistol'). toString('base64'),
"x-api-key": "pro_c90129b3189eefe252b8485ede0bd4b99ff29538a42aecc51f1aae8641998206"
}
});
console. log('Datos del usuario:', response.data);
} catch (error) {
console.error('Error al obtener datos del usuario:', error. response.data);
}
};

obtenerUsuario();