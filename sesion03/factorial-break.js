let factorial = 10;
let i = factorial - 1;

while (i !== factorial) {
  if (i === 0) break;
  factorial *= i;
  i--;
}

console.log(factorial);
