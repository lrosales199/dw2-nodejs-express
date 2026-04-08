// Forma de Importar CommonJS (antiga)
// const express = require("express");

// Importando o Express com ES6 Modules (nova)
import express from "express";

// Método do Express usado para criar as rotas da aplicação
const router = express.Router();

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // const clientes = [
  //   {
  //     nome: "Ana Silva",
  //     cpf: "123.456.789-00",
  //     endereco:
  //       "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678",
  //   },
  //   {
  //     nome: "Pedro Almeida",
  //     cpf: "987.654.321-00",
  //     endereco:
  //       "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
  //   },
  //   {
  //     nome: "Marina Oliveira",
  //     cpf: "456.789.123-00",
  //     endereco:
  //       "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
  //   },
  //   {
  //     nome: "Rafael Santos",
  //     cpf: "321.654.987-00",
  //     endereco:
  //       "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
  //   },
  // ];

  // Aqui iremos chamar o model "Cliente", invocar o método findAll() para buscar todos os registros da tabela de cliente
  Cliente.findAll().then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    }).catch((error) => {
      console.log("Ocorreu um erro ao buscar os clientes." + error);
    });
});

// Rota de Cadastro de Clientes (subrota / cadastrar)
router.post("/clientes/cadastrar", (req, res) => {
  // Criando as Variáveis que irão armazenar os dados vindos do Formulario
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Enviando os dados para o banco
  // O método create cadastra informações no BD
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    // Se a promessa for bem sucedida o usuário será redirencionado para a página de clientes
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log("Ocorreu um erro ao cadastrar o cliente" + error);
  });
});

// Exportando o módulo para usá-lo em outro arquivo
export default router;
