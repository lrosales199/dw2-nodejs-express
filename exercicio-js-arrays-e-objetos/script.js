// Exercício 01
const listaClientes = [
  {
    nome: "Leonardo",
    endereco: "Rua 09",
    cpf: 11111111100,
  },
  {
    nome: "Ana",
    endereco: "Rua 10",
    cpf: 22222222200,
  },
  {
    nome: "Heloysa",
    endereco: "rua 11",
    cpf: 33333333300,
  },
];

// Exercício 02
document.write("<h2>Exercício 02 - Listar os clientes</h2>");
listaClientes.forEach((listar) => {
  document.write(`
        Nome do Cliente: ${listar.nome} <br>
        Endereço do Cliente: ${listar.endereco} <br>
        CPF do Cliente: ${listar.cpf} <br><br>
        `);
});

// Exercício 03
document.write("<h2>Exercício 03 - Adicionar no Final</h2>");

listaClientes.push({
  nome: "Carlos",
  endereco: "Rua 08",
  cpf: 44444444400,
});

listaClientes.forEach((listar) => {
  document.write(`
        Nome do Cliente: ${listar.nome} <br>
        Endereço do Cliente: ${listar.endereco} <br>
        CPF do Cliente: ${listar.cpf} <br><br>
        `);
});

// Exercício 04
document.write("<h2>Exercício 04 - Adicionar no Início</h2>");

listaClientes.unshift({
  nome: "Jenny",
  endereco: "Rua 07",
  cpf: 55555555500,
});

listaClientes.forEach((listar) => {
  document.write(`
        Nome do Cliente: ${listar.nome} <br>
        Endereço do Cliente: ${listar.endereco} <br>
        CPF do Cliente: ${listar.cpf} <br><br>
        `);
});

// Exercício 05
document.write("<h2>Exercício 05 - Contar o número</h2>");
document.write(`<p>Total de clientes: ${listaClientes.length}</p>`);