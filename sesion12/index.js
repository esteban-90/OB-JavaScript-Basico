function fibonacci(num) {
  let num1 = 1;
  let num2 = num1;
  let num3;

  const lista = [num1, num2];

  debugger;
  for (let i = 3; i <= num; i++) {
    num3 = num1 + num2;

    lista.push(num3);

    num1 = num2;
    num2 = num3;
  }

  return lista;
}

console.log(fibonacci(6));
