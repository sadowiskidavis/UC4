import { Pacote } from "./Pacote"

export class Entregador {
private nome:string

constructor(nome:string){
    this.nome = nome
} // metodo que recebe um objeto do tipo pacote e acessa sua propriedade 
 entregarPacote(pacote:Pacote){
    console.log(`${this.nome} esta entregando um pacote de ${pacote.getPeso()}KG para ${pacote.getDestino()}`)

 }

// metodo que altera os metodos do tipo pacote

 trocarEndereco(pacote:Pacote, novoEndereco:string){
pacote.setDestino(novoEndereco)
console.log(`o novo endereço é ${novoEndereco}.`)
 }










}

