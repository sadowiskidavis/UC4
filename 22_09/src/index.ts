import { getJSDocCommentsAndTags, isForInitializer } from "typescript";
import { DiaDaSemana } from "./DiaDaSemana"
import { Pizza } from "./Pizza"
import { SaborPizza } from "./SaborPizza"
import { TamanhoPizza } from "./TamanhoPizza"
import * as readline from 'readline-sync';


function verificaDia(dia: DiaDaSemana){
if (dia == 1){
    console.log("hoje é dia de UC4")
} else if (dia == 3){
    console.log("Hoje é dia de Ingles")
} else {
    console.log("Hoje é dia de PI")
}}

verificaDia(DiaDaSemana.Quarta)


const pedido1:Pizza = new Pizza(SaborPizza.calabresa,TamanhoPizza.pequena)


console.log(pedido1.descricao())


function saborEscolhido(){
    Object.values(SaborPizza).forEach((sabor:SaborPizza, index:number) =>{
        console.log(`${index + 1}. ${sabor}`)
    })


const escolha = readline.questionInt("Digite o numero do sabor: ")
const valores = Object.values(SaborPizza)
const saborescolhido = valores[escolha - 1]

return saborescolhido as SaborPizza
}


function tamanhoEscolhido(){
    Object.values(TamanhoPizza).forEach((tamanho:TamanhoPizza, index:number) =>{
        console.log(`${index + 1}. ${tamanho}`)
    })


const escolha = readline.questionInt("Digite o numero do sabor: ")
const valores = Object.values(TamanhoPizza)
const tamanhoescolhido = valores[escolha - 1]

return tamanhoescolhido as TamanhoPizza
}


function fazerPedido():void {
    let opcao:number = 0
    while(opcao !==2){
        
        opcao = readline.questionInt("==== MENU PIZZARIA ==== \n1- Fazer Pedido \n2- sair ");
    
        switch(opcao){
    
        case 1:
            const sabor = saborEscolhido()
            const tamanho = tamanhoEscolhido()
            const pizza:Pizza = new Pizza(sabor, tamanho)
            console.log(pizza.descricao())
    
        break;
        case 2:
            console.log("Saindo... ")
            break;
            default:
                console.log("Opção invalida. ")
                break
    
    }
    
    
    }
}



fazerPedido()
