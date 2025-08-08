export class Dog {
    // atributos de um cachorro 
    name: string
    weight:number
    breed: string

    // o constructor é um metodo chamado automaticamente quando criamos um objeto a partir dessa classe. nele, normalmente, vamos passar valores para os atributos 
    constructor(dogName:string, dogweight: number, dogBreed:string){
        this.name = dogName
        this.weight = dogweight
        this.breed = dogBreed
    }
    bark(): void {
        console.log(`${this.name} is barking`)
    }
    eat():void {
        console.log (`${this.breed} is eating `)
    }
}
