const listaDeCompras = ["Jabón", "Desodorante", "Detergente", "Shampoo", "Gel"];
console.log(listaDeCompras);

listaDeCompras.push("Aceite de girasol");
console.log(listaDeCompras);

listaDeCompras.pop();
console.log(listaDeCompras);

const peliculasFavoritas = [
  { titulo: "El exorcista", director: "William Friedkin", fecha: 1973 },
  { titulo: "Iron Man", director: "Jon Favreau", fecha: 2008 },
  { titulo: "Mad Max: Furia en el camino", director: "George Miller", fecha: 2015 },
];

const peliculasPosterioresA2010 = peliculasFavoritas.filter(({ fecha }) => fecha > 2010);

const directores = peliculasFavoritas.map(({ director }) => director);

const titulos = peliculasFavoritas.map(({ titulo }) => titulo);

const directoresYTitulosConcat = directores.concat(titulos);

const directoresYTitulosProp = [...directores, ...titulos];

console.log(peliculasPosterioresA2010);
console.log(directores);
console.log(titulos);
console.log(directoresYTitulosConcat);
console.log(directoresYTitulosProp);
