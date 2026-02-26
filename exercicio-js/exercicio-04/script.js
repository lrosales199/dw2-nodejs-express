const num = 12;

function idade(num) {
  if (num >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(`Com base da sua idade você é ${idade(num)}`);