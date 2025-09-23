import { DiaDaSemana } from "./DiaDaSemana"
import { Pizza } from "./Pizza"
import { SaborPizza } from "./SaborPizza"
import { TamanhoPizza } from "./TamanhoPizza"



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
