class Estudiante {
  #nombre = "";
  #asignaturas = ["JavaScript", "HTML", "CSS"];

  constructor(nombre) {
    this.#nombre = nombre;
  }

  get obtenDatos() {
    return {
      nombre: this.#nombre,
      asignaturas: this.#asignaturas.join(", "),
    };
  }
}

const estudiante = new Estudiante("Esteban");
console.table(estudiante.obtenDatos);
