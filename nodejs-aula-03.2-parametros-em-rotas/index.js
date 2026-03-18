// O arquivo index.js é o arquivo principal do projeto

// Importando o Módulo do express
const express = require("express");

// Criando uma instância do Express
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

// Criando a rota principal do site "/"
app.get("/", function (req, res) {
  //   res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>");
  res.render("index");
});

// Criando a rota de perfil do usuário
app.get("/perfil", (req, res) => {
  //   res.send("Bem-vindo ao seu perfil");
  res.render("perfil");
});

//Rota de CLiente
app.get("/clientes", (req, res) => {
  const listaCliente = ["Ana", "Leonardo", "Carlos"];
  res.render("clientes", {
    listaCliente: listaCliente,
  });
});

// Rota de Clientes - Com Parâmento
app.get("/clientes/:cliente", (req, res) => {
  const cliente = req.params.cliente;
  res.render("detalhesCliente", {
    cliente: cliente,
  });
});

// Rota de Produtos
app.get("/produtos", (req, res) => {
  // const produto = "";
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];

  res.render("produtos", {
    // Enviando variáveis para página HTML
    // produto: produto,
    listaProdutos: listaProdutos,
  });
});

// Rota de Produtos - Com Parâmetros
app.get("/produtos/:produto", (req, res) => {
  const produto = req.params.produto;
  res.render("detalhesProduto", {
    produto: produto,
  });
});

app.get("/servicos", (req, res) => {
  res.render("servicos");
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro!" + error);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});
