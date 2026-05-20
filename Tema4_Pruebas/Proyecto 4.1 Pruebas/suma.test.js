// jairo amir cahun tamay  grupo 8B
const {
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
} = require("./suma");

test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

// a. toBe — Igualdad exacta
test("10 + 10 es igual a 20", () => {
  expect(suma(10, 10)).toBe(20);
});

// b. toEqual — Comparación de objetos
test("dos objetos con las mismas propiedades y valores son iguales", () => {
  const usuario = crearUsuario("Ana", 25);
  expect(usuario).toEqual({ nombre: "Ana", edad: 25 });
});

// c. toBeNull / toBeUndefined / toBeDefined
test("el valor retornado es null", () => {
  expect(obtenerValorNulo()).toBeNull();
});

test("el valor retornado es undefined", () => {
  expect(obtenerValorUndefined()).toBeUndefined();
});

test("el valor retornado está definido", () => {
  expect(obtenerValorDefinido()).toBeDefined();
});

// d. Comparaciones numéricas
test("10 es mayor que 5", () => {
  expect(obtenerNumero()).toBeGreaterThan(5);
});

test("10 es menor que 20", () => {
  expect(obtenerNumero()).toBeLessThan(20);
});

test("10 es mayor o igual a 10", () => {
  expect(obtenerNumero()).toBeGreaterThanOrEqual(10);
});

// e. toMatch — Expresiones Regulares
test('el saludo contiene la subcadena "bienvenido"', () => {
  expect(obtenerSaludo()).toMatch(/bienvenido/);
});

test('el saludo empieza con "Hola"', () => {
  expect(obtenerSaludo()).toMatch(/^Hola/);
});

// f. toContain — Contenido en Arrays
test('el array de frutas contiene "mango"', () => {
  expect(obtenerFrutas()).toContain("mango");
});

test('el array de frutas contiene "pera"', () => {
  expect(obtenerFrutas()).toContain("pera");
});

// g. .not.toBe — Negación de Matchers
test('el color no es "rojo"', () => {
  expect(obtenerColor()).not.toBe("rojo");
});

test("sumar(2, 3) no es igual a 10", () => {
  expect(suma(2, 3)).not.toBe(10);
});

// h. Promesas — resolves / rejects
test("la promesa se resuelve con 'éxito'", () => {
  return expect(promesaExitosa()).resolves.toBe("éxito");
});

test("la promesa es rechazada con un error", () => {
  return expect(promesaFallida()).rejects.toThrow("algo salió mal");
});
