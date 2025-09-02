import { Circulo } from "./Circulo";
import { IFuncionario } from "./IFuncionario";
import { Ilivro } from "./ILivro";
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";
import { Quadrado } from "./Quadrado";
import { SistemaLogin } from "./SistemaLogin";

// aqui criamos um objeto de tipo usuario, ou seja, um objeto que SEGUE as REGRAS da interface que criamos
const meuUsuario:IUsuario = {
    nome: "davis",
    idade: 17

}
console.log(meuUsuario.nome)
//intrefaces podem ser usadas para tipar parametros de funçao 
//assim garanto que o objeto que eu usar tera tudo que eu preciso
function mostraProduto(produto:IProduto):void{
    console.log(`${produto.nome} custa R$ ${produto.preco}`)
}
const produto:IProduto = {
    nome: "camiseta",
    preco: 100
}
mostraProduto(produto)
mostraProduto({nome:"tenis", preco: 120})

export class Livro1 implements Ilivro{
    titulo: string;
    autor: string;
    anoPublicacao: number;

    constructor(titulo:string, autor:string,ano:number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = ano
    }

}



const livro1:Ilivro = {
    titulo: "salve jorge",
    autor: "marea",
    anoPublicacao: 1945
}
function mostrarLivro(livro:Ilivro):void{
console.log(`Titulo: ${livro.titulo}\nAutor:${livro.autor}\nano:${livro.anoPublicacao}`)
}

mostrarLivro(livro1)

const funcionario:IFuncionario = {
    nome: 'asdas',
    cargo: 'engenheiro',
    salario: 10000
}

function calcularBonus(funcionario:IFuncionario):number {
    return funcionario.salario * 0.10
}
console.log(calcularBonus(funcionario))

const quadrado:Quadrado = new Quadrado(30)
console.log(quadrado.calcularArea()) 



const circulo:Circulo = new Circulo(10)
console.log(circulo.calcularArea())

const verificacao:SistemaLogin = new SistemaLogin
console.log(verificacao.autenticar("admin", "1234"))

    
