const miAlturaCm = 175;

const miAlturaM = miAlturaCm / 100;

const miPeso = 80.5;

const miAlturaRedondeadaHaciaArriba = Math.ceil(miAlturaM).toLocaleString("en-US", {
  style: "unit",
  unit: "meter",
});

const miPesoRedondeadoHaciaAbajo = Math.floor(miPeso).toLocaleString("en-US", {
  style: "unit",
  unit: "kilogram",
});

const esIgual = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log(miAlturaCm);
console.log(miAlturaM);
console.log(miPeso);
console.log(miAlturaRedondeadaHaciaArriba);
console.log(miPesoRedondeadoHaciaAbajo);
console.log(esIgual);
