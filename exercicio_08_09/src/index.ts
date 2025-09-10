import readlineSync from "readline-sync";
import { Estoque } from "./Estoque";
import { Livro } from "./Livro";
import { Roupas } from "./Roupa";
import { Brinquedo } from "./Brinquedo";
import { Eletronico } from "./Eletronico";

let controlador = true
const estoqueLivro = new Estoque()
const estoqueRoupa = new Estoque()
const estoqueBrinquedo = new Estoque()
const estoqueEletronico = new Estoque()


while(controlador){
    
    
    const P1 =  readlineSync.question("O que deseja fazer? \n1- Cadastrar um produto \n2- Listar produtos \n3- Remover produtos \n4- Sair do sistema \n")

    switch(P1){
        
 
        case "1":{
            const P2 =  Number(readlineSync.question("Qual tipo de produto deseja cadastrar? \n1- Livro\n2- Roupa\n3- Brinquedo\n4- Eletronico \n"))
            switch(P2){
                case 1:
                    const titulo =  readlineSync.question("Digite o titulo do livro: ")
                    const autor =  readlineSync.question("Digite o autor: ")
                    const precoLivro =  readlineSync.questionInt("Digite o preço:\n ") 

                    const livro = new Livro(titulo,autor,precoLivro)
                    estoqueLivro.adicionar(livro)
    
                    break;

                
                case 2:
                    const descricao = readlineSync.question("Qual a descriçao sobre o produto? ")
                    const tamanho = readlineSync.question("Qual o tamanho da roupa? ")
                    const precoRoupa = readlineSync.questionInt("Qual o preço da roupa? ")
                    const roupa = new Roupas(descricao,tamanho,precoRoupa)
                    estoqueRoupa.adicionar(roupa)
                    break;


                case 3:
                    const nome = readlineSync.question("Informe o nome do brinquedo: ")
                    const idadeMinima = readlineSync.questionInt("Qual a idade minima para esse brinquedo? ")
                    const precoBrinquedo = readlineSync.questionInt("Informe o valor do brinquedo: ")
                    const brinquedo = new Brinquedo(nome,idadeMinima,precoBrinquedo)
                    estoqueBrinquedo.adicionar(brinquedo)
                    break;
        
                
                case 4:
                    const modelo = readlineSync.question("Qual seria o modelo? ")
                    const marca = readlineSync.question("Qual seria a marca? ")
                    const precoEletronico = readlineSync.questionInt("Qual seria o valor? ")
                    const eletronico = new Eletronico(modelo,marca,precoEletronico)
                    estoqueEletronico.adicionar(eletronico)
                    break;
                

        

            }
           
        }break
        case "2":
            console.log(estoqueBrinquedo.listar())
            console.log(estoqueEletronico.listar())
            console.log(estoqueLivro.listar())
            console.log(estoqueRoupa.listar())
            
            break;
        
        case "3":
            const P3 = readlineSync.question("Qual produto voce quer remover? \n1- Livro\n2- Roupa\n3- Brinquedo\n4- Eletronico \n")
            switch(P3){
                case "1":
            const P4 = readlineSync.questionInt("Digite o indice do produto: ")
            console.log(estoqueLivro.remover(P4))
            break;
            case "2":
            const P5 = readlineSync.questionInt("Digite o indice do produto: ")
            console.log(estoqueRoupa.remover(P5))
            break;
            case "3":
            const P6 = readlineSync.questionInt("Digite o indice do produto: ")
            console.log(estoqueBrinquedo.remover(P6))




            }
            break;

        
        case "4":
            const modelo = readlineSync.question("Qual seria o modelo? ")
            const marca = readlineSync.question("Qual seria a marca? ")
            const preco = readlineSync.question("Qual seria o valor? ")
        

    }





}