//JAIRO amir cahun tamay grupo 8B

// a. Igualdad exacta con toBe
function suma (a, b) {
  return a + b;
}
 
// b. Comparación de objetos con toEqual
function crearUsuario(nombre, edad) {
  return { nombre, edad };
}
 
// c. Verificación de valores nulos y definidos
function obtenerValorNulo() {
  return null;
}
 
function obtenerValorUndefined() {
  return undefined;
}
 
function obtenerValorDefinido() {
  return 42;
}
 
// d. Comparaciones numéricas
function obtenerNumero() {
  return 10;
}
 
// e. Coincidencia de cadenas con Expresiones Regulares
function obtenerSaludo() {
  return "Hola, bienvenido al curso de Jest";
}
 
// f. Verificación de Contenido en Arrays
function obtenerFrutas() {
  return ["manzana", "pera", "uva", "mango"];
}
 
// g. Negación de Matchers con .not
function obtenerColor() {
  return "azul";
}
 
// h. Pruebas Asíncronas con Promesas
function promesaExitosa() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("éxito"), 100);
  });
}
 
function promesaFallida() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("algo salió mal")), 100);
  });
}
 
module.exports = {
  suma,
  crearUsuario,
  obtenerValorNulo,
  obtenerValorUndefined,
  obtenerValorDefinido,
  obtenerNumero,
  obtenerSaludo,
  obtenerFrutas,
  obtenerColor,
  promesaExitosa,
  promesaFallida,
};
 