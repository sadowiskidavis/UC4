import { Animal } from "./Animal"

// usamos a palavra reservada 'extends' para identificar que uma classe é filha de outra
export class Dog extends Animal {


    constructor (name: string, weight: number){
        //o metodo 'super()' chama o constructor da classe pai 
        // assim, reutilizamos ele na classe filha 
        super(name,weight)
    }
    // Dog, como é filho da classe animal, ja herda os atributos 'name' e 'weigth'
    bark():void{
        console.log(`${this.name} is barking`)
    }


}