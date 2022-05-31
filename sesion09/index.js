import logger from "#logger";

const miFuncion = (dividendo, divisor) => {
  if (typeof dividendo !== "number" || typeof divisor !== "number") {
    throw new Error("El valor debe ser de tipo numérico");
  }

  if (divisor === 0 || divisor === -0) {
    throw new Error("No se puede dividir por cero");
  }

  const resultado = dividendo / divisor;

  return resultado;
};

try {
  miFuncion(3, 0);
} catch (error) {
  logger.error(error.message);
}

try {
  miFuncion("3", "1");
} catch (error) {
  logger.error(error.message);
}
