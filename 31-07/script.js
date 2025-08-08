"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
// nomeação
var nome = "davis";
var idade = 18;
var deMaior = true;
// arrays
var numeros = [1, 2, 3];
var nomes = ['leo', 'davis'];
//objeto
var pessoa = {
    nome: "davis",
    idade: 17
};
function calcula(num, num2) {
    return num + num2;
}
function mensagem(meuNome) {
    return "ola ".concat(meuNome, ", tudo bem|");
}
function frase() {
    console.log("e ae");
}
console.log(calcula(30, 30));
console.log(mensagem("davis"));
console.log(frase());
// function com parametros opcionais
function sayhello(nome) {
    console.log("hello", nome || "world");
}
sayhello();
sayhello("pedro pim");
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100), applyDiscount(100, 0.9));
// crio objetos apartir da classe dog
var myDog = new Dog_1.Dog("bobs", 10, "golden");
var myOtherDog = new Dog_1.Dog("felas", 5, "vira-lata");
// assim eu acesso os atributos 
console.log(myDog.breed);
console.log(myOtherDog.name);
// assim eu chamo os metodos 
myDog.bark();
myOtherDog.eat();
