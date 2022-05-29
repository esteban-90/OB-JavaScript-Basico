const nombre = "Esteban";

const apellido = "Vera";

const estudiante = nombre.concat(" ", apellido);

const estudianteMayus = estudiante.toUpperCase();

const estudianteMinus = estudiante.toLowerCase();

const { length: numeroDeLetras } = estudiante;

const primeraLetra = nombre.charAt(0);

const ultimaLetra = apellido.charAt(apellido.length - 1);

const sinEspacios = estudiante.replace(/\s/g, "");

const estaContenido = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numeroDeLetras);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(sinEspacios);
console.log(estaContenido);
