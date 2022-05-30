const misDatosPersonales = {
  nombre: "Esteban",
  apellido: "Vera",
  edad: 31,
  altura: 1.85,
  eresDesarrollador: true,
};

console.log(misDatosPersonales);

const { edad: miEdad } = misDatosPersonales;

console.log(miEdad);

const listaDatosPersonales = [
  misDatosPersonales,
  {
    nombre: "Miguel",
    apellido: "Montiel",
    edad: 32,
    altura: 1.8,
    eresDesarrollador: false,
  },
  {
    nombre: "Carlos",
    apellido: "Aranda",
    edad: 39,
    altura: 1.7,
    eresDesarrollador: true,
  },
];

console.log(listaDatosPersonales);

const listaOrdenadaDatosPersonales = [...listaDatosPersonales].sort(
  ({ edad: a }, { edad: b }) => b - a
);

console.log(listaOrdenadaDatosPersonales);
