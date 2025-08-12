// a classe funciona como um molde para um tipo de dado
// export permite com que importemos depois esta classe para qualquer lugar do meu projeto
// a palavra class indica que isto é uma classe
// depois de class colocamos o nome da classe ( que deve ser exatamente igual ao nome do arquivo)
export class Cachorro {
    // atributos
    nome:string;
    raca:string;
    idade:number;


    // construtor da classe (funçao/metodo que é chamado automaticamente quando crio um objeto) é nele que eu defino os valores
    constructor(nomeCachorro:string,racaCachorro:string,idadeCachorro:number){
    this.nome = nomeCachorro,
    this.raca = racaCachorro,
    this.idade = idadeCachorro
    }

    // metodos (coisas que objetos desta classe fazem)
    // nao usamos FUNCTION
    latir():void{
    console.log(`o cachorro de nome ${this.nome} esta latindo`)
    }
    correr():void{
        console.log(` o cachorro de raça ${this.raca} esta correndo`)
    }
}
