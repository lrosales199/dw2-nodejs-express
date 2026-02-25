// Variáveis podem ser declaradas de 3 formas:
// VAR, LET E CONST

// VAR: No geral evite o seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando NÃO precisar reatribuir o valor da variável.

var cidade = "Registro";
var cidade = "Sete Barras";

document.write(cidade);

let nome = "Diego";
nome = "Leonardo";

document.write("<br>");
document.write(nome);

const pais = "Brasil";
pais = "Argentina";
// O valor de uma constante não pode ser alterado

document.write("<br>");
document.write(pais);