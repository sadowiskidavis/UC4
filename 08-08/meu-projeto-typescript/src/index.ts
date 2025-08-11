

const idade = 17;
const temCarteira = true 


if (idade >= 18 && temCarteira) {
  console.log("Você pode dirigir ");
} else if (idade >= 18 && !temCarteira){
    console.log("voce é de maior, mas nao tem carteira. nao pode dirigir. ")
}
else {
    console.log("voce é menor de idade.");
}

const pontuacao = 85;

const resultado = pontuacao >= 60 ? "Aprovado" : "Reprovado";

console.log(resultado); // "Aprovado"


const fruta:string = "maçã";

switch (fruta) {
  case "banana":
    console.log("Banana é rica em potássio.");
    break;
  case "maçã":
    console.log("Maçã ajuda na digestão.");
    break;
  case "laranja":
    console.log("Laranja tem muita vitamina C.");
    break;
  default:
    console.log("Fruta desconhecida.");
}


import * as readline from 'readline-sync';

console.log("=== MENU PRINCIPAL ===");
console.log("1 - Olá");
console.log("2 - Sobre");
console.log("3 - Sair");

const opcao = readline.question("Escolha uma opção: ");

switch (opcao) {
  case "1":
    console.log("Olá! Seja bem-vindo!");
    break;
  case "2":
    console.log("Este é um exemplo de menu com switch.");
    break;
  case "3":
    console.log("Saindo...");
    break;
  default:
    console.log("Opção inválida.");
}


const estaChovendo = true;

if(estaChovendo === true){
    console.log("levar guarda-chuva")
} else{
    console.log("está um bom dia para caminhar.")
}



const nota = 7;

const resultado2 = nota >= 6 ? "Aprovado" : "Reprovado";

console.log(resultado2); // "Aprovado"


const animal:string = "gato";

switch (animal) {
  case "cachrro":
    console.log("auau");
    break;
  case "gato":
    console.log("miau");
    break;
  default:
    console.log("animal desconhecida.");
}


// Crie um menu com opções:
// 1 - Jogar
// 2 - Carregar Jogo
// 3 - Sair

// Importe readline-sync e use switch para mostrar uma mensagem para cada opção.
// Desafio: encontre um modo de fazer com que, toda vez que eu digitar uma opção, 
//o menu apareça novamente, ou seja, o código só deve parar quando eu clicar em 'sair'.
// Dica: que estrutura de código usamos para repetir alguma coisa?
let controlador = true 
while(controlador) {
console.log("=== MENU PRINCIPAL ===");
console.log("1 - Jogar");
console.log("2 - Carregar jogo");
console.log("3 - Sair");

const opcao2 = readline.question("Escolha uma opção: ");

switch (opcao2) {
  case "1":
    console.log("Olá! Seja bem-vindo ao meu jogo!");
    break;
  case "2":
    console.log("Seu jogo está carregando....");
    console.log("Jogo carregado com sucesso!")
    break;
  case "3":
    console.log("Saindo...");
    controlador = false
    break;
  default:
    console.log("Opção inválida.");
}
}