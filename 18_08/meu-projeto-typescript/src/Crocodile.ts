import { Animal } from "./Animal";

export class Crocodile extends Animal{
    
    constructor (name: string, weight: number){
        //o metodo 'super()' chama o constructor da classe pai 
        // assim, reutilizamos ele na classe filha 
        super(name,weight)
    }

    swim():void{
        console.log(`${this.name} is swimin`)
    }

}