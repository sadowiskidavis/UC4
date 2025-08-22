import { Carro } from "./carro";
import { ContaPoupanca } from "./contaPoupanca";


const carro:Carro = new Carro(70)
carro.acelerar(80)

const conta:ContaPoupanca = new ContaPoupanca(500)

conta.aplicarJuros(50)