import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento{
    processar(): void {
        console.log(" sua compra no boleto esta sendo processada....")
    }
}