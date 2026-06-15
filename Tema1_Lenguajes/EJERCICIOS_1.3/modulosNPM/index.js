// import generateName from 'sillyname';
// const nombre = generateName();
// console.log(`Mi nombre tonto es ${nombre}`);

import superheroes from 'superheroes';

const heroe = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`Superhéroe aleatorio: ${heroe}`);