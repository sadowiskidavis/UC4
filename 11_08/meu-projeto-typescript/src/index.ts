import * as readline from 'readline-sync';

let sistema = true

function soma(n1:number,n2:number):number { 
    return n1 + n2

}
function subtrai(n3:number,n4:number):number{
    return n3 - n4 

}
function multiplica(n5:number,n6:number):number {
    return n5 * n6
    
}
function divisao(n7:number,n8:number):void {
    if( n8 === 0){
        console.log("Nao pode dividir um numero por 0!!")
    } else{
        console.log(n7 / n8) 
    }
    
    
}





while(sistema){
    console.log("====== CALCULADORA ======")
    console.log("1- SOMAR")
    console.log("2- SUBTRAIR")
    console.log("3- MULTIPLICAR")
    console.log("4- DIVIDIR")
    console.log("5- SAIR")

    const numero = Number(readline.question("Digite um número: "));

    switch(numero) {
        case 1:
            const n1 = Number(readline.question("Digite um número: "));
            const n2 = Number(readline.question("Digite um número: "));    
        console.log(soma(n1,n2))
        break;
        case 2: 
        const n3 = Number(readline.question("Digite um número: "));
        const n4 = Number(readline.question("Digite um número: "));
        console.log(subtrai(n3,n4))    
        break;
        case 3:
        const n5 = Number(readline.question("Digite um número: "));
        const n6 = Number(readline.question("Digite um número: "));
        console.log(multiplica(n5,n6))
        break;
        case 4:
        const n7 = Number(readline.question("Digite um número: "));
        const n8 = Number(readline.question("Digite um número: "));
        divisao(n7,n8)
        break
        case 5:
            console.log("Saindo...");
            sistema = false
            break
    
    }




















}