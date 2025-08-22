import { ContaBancaria } from "./contaBancaria";

export class ContaPoupanca extends ContaBancaria {
constructor(saldo:number){
super(saldo)


}

 aplicarJuros(juros:number):void{
    this.atualizarSaldo(juros)

 }

}