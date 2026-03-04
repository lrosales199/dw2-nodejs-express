// Declarando e Exibindo itens de um Array
let produtos = [];
document.write(typeof produtos);

let products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);

document.write("<p>Exibindo os elementos do vetor através do índice:</p>");
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

document.write("<p>Exibindo elementos do vetor através do forEach:</p>");
products.forEach((product) => {
  document.write(`<p>${product}</p>`);
});

document.write(
  "<p>Exibindo elementos do vetor através do forEach com os Índices:</p>",
);
products.forEach((product, i) => {
  document.write(`<p>${i + 1} - ${product}</p>`);
});

// Métodos de Manipulaçãode Vetores
let frutas = ["Laranja", "Maça", "Morango"];
document.write(`<p>Nossa lista de frutas é: ${frutas}</p>`);
frutas[3] = "Morango";
document.write(`<p>Agora nossa lista de frutas é ${frutas}</p>`);

document.write(
  "<h4>O método PUSH - Insere um novo elemento no Final do vetor.</h4>",
);
frutas.push("Abacaxi");
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

document.write(
  "<h4>O método UNSHIFT - Insere um novo elemento no Início do vetor.</h4>",
);
frutas.unshift("Pera");
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

// Como contar os Elementos de um Vetor - Método Lenght
const items = frutas.length;

document.write(`<p>Na nossa lista temos ${items} frutas</p>`);