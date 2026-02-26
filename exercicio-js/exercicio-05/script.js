const media = function (nota1, nota2) {
  return (nota1 + nota2) / 2;
};

function resultado(media) {
  if (media <= 5) {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
}

let nota1 = 6;
let nota2 = 5;

console.log(`Você foi ${resultado(nota1,nota2)}`);