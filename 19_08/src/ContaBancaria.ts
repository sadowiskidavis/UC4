export class ContaBancaria {
protected saldo:number



constructor(saldo:number){
    this.saldo = saldo


}
protected atualizarSaldo(novoSaldo:number):void{

    console.log(`Novo Saldo: ${this.saldo += novoSaldo}`)
}

}