import { Cachorro } from "./Cachorro";
import { Calculadora } from "./Calculadora";

// para podermos criar um objeto da classe cachorro criamos uma variavel com o nome cachorro
// depois passamos os valores da classe usando new e o nome da classe
// so colocar os parametros dentro dos parenteses 

// quando criamos um objetos, chamnamos isso de INSTANCIAR o objeto
const meuCachorro:Cachorro = new Cachorro("bob", "vira-lata", 5)
const meuOutroCachorro: Cachorro = new Cachorro("salamandra", "golden", 10)

// para chamarmos os metodos destes objetos, chamamos o nome da variavel mais . mais o nome do metodo
meuCachorro.correr()
meuCachorro.latir()

meuOutroCachorro.correr()
meuOutroCachorro.latir()

// para acessarmos o valor do atributo de um objeto, chamamos o nome da variavel mais . mais o nome do atributo
console.log(meuOutroCachorro.idade)
// para trocar o valor do atributo de um objeto, variavel mais . mais o nome do atributo, depois = e passamos o novo valor
meuCachorro.nome = "liso"
console.log(meuCachorro.nome)


//crie um novo arquivo chamado calculadora 
// dentro dele crie a classe calculadora
// crie dois atributos
//faça o constructor
// depois faça od metodos somar, subtrair, multiplicar, dividir
// apos isso, no index e teste


const minhaCalculadora:Calculadora = new Calculadora(6,5)

console.log(minhaCalculadora.soma())
console.log(minhaCalculadora.divisao())
console.log(minhaCalculadora.subtrair())
console.log(minhaCalculadora.multiplicar())