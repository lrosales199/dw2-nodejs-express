// Classes no JavaScript
//Nome de classes devem iniciar com a primeira letra maiúscula
class Carro {
  // Definindo os Atributos
  constructor(marca, modelo, ano) {
    //this é uma referência às instâncias que serão criadas através dessa classe
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // Definindo os Métodos
  buzinar() {
    return "Beep!, Beep!";
  }
}

//Instânciando Objetos
const carroPopular = new Carro("Fiat", "Uno", "2012");

document.write(
  `<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`,
);

// Instância carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
document.write(
  `<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do 
ano ${carroEsportivo.ano} e também faz ${carroEsportivo.buzinar()}</p>`,
);

// Adicionando um novo atributo
carroEsportivo.corNeon = "Azul";
// Adicionando um novo método
carroEsportivo.turbo = function () {
  return "Vrummmm! O carro está acelerando!!!";
};
document.write(
  `<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo}
também tem neon da cor ${carroEsportivo.corNeon}. 
${carroEsportivo.turbo()}</p>`,
);
