import { Entregador } from "./Entregador";
import { Pacote } from "./Pacote";
import { Pessoa } from "./Pessoa";

const apresentacao:Pessoa = new Pessoa ("davis", 17)

console.log(apresentacao.apresentar())

console.log(apresentacao.getNome())

apresentacao.setIdade(18)
console.log(apresentacao.getIdade())

const entregador:Entregador = new Entregador("davis")
const pacote:Pacote = new Pacote("Novo Hamburgo", 5)


entregador.trocarEndereco(pacote,"sao leopoldo")
entregador.entregarPacote(pacote)