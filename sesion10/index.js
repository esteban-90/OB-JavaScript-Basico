import chalk from "chalk";
import { suma, multiplica } from "./controller.js";

const resultadoSuma1 = suma(1, 2);
const resultadoSuma2 = suma(4, 5);

const resultadoSumaMultiplica = multiplica(resultadoSuma1, resultadoSuma2);

console.log(chalk.green(resultadoSumaMultiplica));
