let factorial = 10;
let i = factorial - 1;

while (i) {
  if (!i) break;
  factorial *= i;
  i--;
}

console.log(factorial);
