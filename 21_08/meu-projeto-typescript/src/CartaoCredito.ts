import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento{
processar(): void {
    console.log(" sua compra no cartao de credito esta sendo processada....")
}

}