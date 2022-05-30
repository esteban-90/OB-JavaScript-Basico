const fechaHoy = new Date();

const miFechaDeNacimiento = new Date("September 20, 1990");

const esMasTarde = fechaHoy.getTime() > miFechaDeNacimiento.getTime();

const miDiaDeNacimiento = miFechaDeNacimiento.getDate();

const miMesDeNacimiento = miFechaDeNacimiento.getMonth() + 1;

const miAnioDeNacimiento = miFechaDeNacimiento.getFullYear();

console.log({
  fechaHoy,
  miFechaDeNacimiento,
  esMasTarde,
  miDiaDeNacimiento,
  miMesDeNacimiento,
  miAnioDeNacimiento,
});
