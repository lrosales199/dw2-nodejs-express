// Objetos Literais no JavaScript
document.write(
  "<h4>Objetos literais possuem Atributos(Propriedades) e Métodos(Funções)</h4>",
);
const pessoa = {};
document.write(typeof pessoa);

//Criando um objeto
const carro = {
  //Propriedades
  modelo: "gol",
  cor: "vermelho",
  //Métodos
  acelerar() {
    return "Vrummmm...";
  },
  frear() {
    return "Freando...";
  },
};
document.write(`<p>O modelo do carro é: ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é: ${carro.cor}</p>`);
document.write(`<p>Quando o carro acelera ele faz: ${carro.acelerar()}</p>`);
document.write(`<p>Ativando os freios: ${carro.frear()}</p>`);

//Manipulando Arrays de Objetos
const productsList = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultra resistente",
  },
];

//Exibindo o Array de Objetos através do forEach
document.write("<h4>Exibindo o array de objetos através do forEach:</h4>");
productsList.forEach((product) => {
  document.write(`
        Produto: ${product.nome} <br>
        Marca: ${product.marca} <br>
        Preço: ${product.preco} <br>
        Descrição: ${product.descricao} <br><br>
    `);
});