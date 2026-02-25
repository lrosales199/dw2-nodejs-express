// Tipos de Funções
// Função Simples
function showMessage() {
  const message = "<h2>Olá, bem-vindo!</h2>";
  document.write(message);
}
// Invocando a função
showMessage();

//Função com Parâmetro / Argumento
const user = "Leonardo Rosa";

function showUserMessage(user) {
  // Essa função recebe um parâmetro
  document.write(`<h3>O que deseja fazer hoje, ${user}</h3>`);
}

showUserMessage(user); // Envio de Argumento

// Função com mais de um Parâmetro
const n1 = 10;
const n2 = 5;

function sum(n1, n2) {
  // Essa função recebe dois parâmetros
  let result = n1 + n2;
  document.write(`<p>A soma de ${n1} + ${n2} é igual a ${result}.</p>`);
}

// Invocando a função
sum(n1, n2); // Enviando os argumentos

// Função com retorno
const num1 = 50;
const num2 = 3;

// É indicado que as Funções possuam o mínimo de responsabildades possíveis
// Essa função irá multiplicar dois números
function mult(num1, num2) {
  return num1 * num2;
}

document.write(`O resultado é ${mult(num1, num2)}`);

// Função com retorno condicional
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write(`<p>O número ${number} é ${parImpar(number)}.</p>`);

// Função Anônima
const divisao = function (n) {
  return n / 2;
};

let numero = 200;

document.write(`<p>A metade de ${numero} é ${divisao(numero)}.</p>`);

// Função seta (arrow function) -> É tipo de Função de Anônima
const dobro = (x) => {
  return x * 2;
};

const x = 300;

document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`);

// Arrow function com mais de um parâmetro
const calculadora = (a, operador, b) => {
  return eval(`${a} ${operador} ${b}`);
};

document.write(`<p>O resultado da operação matemática é ${calculadora(1100, "-", 2)}.`);