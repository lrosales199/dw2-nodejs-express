const soma = (n1, operador, n2, n3, n4) => {
  return eval(`${n1} ${operador} ${n2} ${operador} ${n3} ${operador} ${n4}`);
};

console.log(`O resultado é ${soma(24, "+", 38, "+", 58, "+", 30)}`);