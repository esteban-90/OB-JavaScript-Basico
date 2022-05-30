function funcionSinParametros() {
  return true;
}

console.log(funcionSinParametros());

function funcionAsincrona() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 5_000);
  });
}

funcionAsincrona().then(() => console.log("Hola soy una promesa"));

function* funcionGeneradora() {
  let index = 0;
  while (true) {
    index += 2;
    if (index === 10) return index;
    yield index;
  }
}

const generador = funcionGeneradora();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
