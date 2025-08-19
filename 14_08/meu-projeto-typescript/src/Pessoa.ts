export class Pessoa {
    private nome:string;
    private idade:number;


    constructor(nomePessoa:string,idadePessoa:number){
    this.nome = nomePessoa
    this.idade = idadePessoa
    }

    apresentar():string {
        return ` meu nome é ${this.nome}, minha idade é ${this.idade}`

    }
    //Getter - metodo que pega um valor 

getNome():string{
    return this.nome
}
// Setter - metodo que define um valor 
setNome(novoNome:string):void{
this.nome = novoNome

}

getIdade():number{
 return this.idade
}
setIdade(novaIdade: number):void{
    if(novaIdade <= 0){
    console.log("nao pode ser idade negativa")

    } else{
        this.idade = novaIdade
        console.log(` sua idade é ${this.idade}`)
    }

}

}

