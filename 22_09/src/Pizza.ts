
import { PrecoPizza } from "./PrecoPizza";
import { SaborPizza } from "./SaborPizza";
import { TamanhoPizza } from "./TamanhoPizza";

export class Pizza {
    private sabor:SaborPizza
    private tamanho:TamanhoPizza
    private preco:PrecoPizza
   
    constructor (sabor:SaborPizza, tamanho:TamanhoPizza ){
        this.sabor = sabor
        this.tamanho = tamanho
        this.preco = this.calculaPreco()

        
    }
    calculaPreco():PrecoPizza{
        switch(this.tamanho){
            case TamanhoPizza.pequena:
                return this.preco = PrecoPizza.P
                
            case TamanhoPizza.media:
                return this.preco = PrecoPizza.M
            
            case TamanhoPizza.grande:
                return this.preco = PrecoPizza.G
        
            
        
        }
    }

    descricao():string{
        return `Pizza ${this.sabor}, Tamanho: ${this.tamanho}, Preco ${this.preco}`
    }
}