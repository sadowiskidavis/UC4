import { Animal } from "./Animal";

export class Owl extends Animal {
    
    constructor (name: string, weight: number){
        //o metodo 'super()' chama o constructor da classe pai 
        // assim, reutilizamos ele na classe filha 
        super(name,weight)
    }

    fly():void{
        console.log(`${this.name} is flying`)
    }

}