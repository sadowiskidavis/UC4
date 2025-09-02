import * as readline from 'readline-sync';

export class NumeroSecreto {
    gerarNumeroSecreto(): number {
        
        return Math.floor(Math.random()* 100) + 1;

    }

    adivinharNumero():void{
        let condicao = true
        let tentativas:number = 0
        let numeroSecreto = this.gerarNumeroSecreto()

        while(condicao){

            let palpites:number = Number(readline.question ("De um palpite: "))
            tentativas++
            if(palpites < numeroSecreto){
                console.log(" Numero esta muito baixo!")
            }
            else if(palpites > numeroSecreto){
                console.log(" Numero esta muito alto!")
            } else {
                console.log(`Parabens você acertou o numero!!!!!  ${numeroSecreto} \n  Seu numero de tentativas foi:${tentativas}` )
                condicao = false

            }



        }

    }
}

    