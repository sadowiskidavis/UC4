import { Dog } from "./Dog";

// nomeação
let nome: string = "davis";
let idade: number = 18
let deMaior: boolean= true

// arrays
let numeros: Array<number> = [1,2,3]
let nomes: string[] = ['leo','davis']

//objeto
let pessoa: {nome: string, idade: number} ={
    nome:"davis",
    idade: 17
}


function calcula(num:number, num2:number):number {     
    return num + num2
}


function mensagem(meuNome:string):string{
    return `ola ${meuNome}, tudo bem|`

}


 function frase(): void {
    console.log("e ae")
 }

console.log(
calcula(30,30)
)

console.log(
    mensagem("davis")
    )
    console.log(
       frase()
        )


        // function com parametros opcionais
        function sayhello (nome?: string): void {
                console.log("hello", nome || "world")
        }
        sayhello()
        sayhello("pedro pim")

        function applyDiscount(price: number, discount: number = 0.05): number {
            return price * (1 -  discount)
        }

        console.log(
            applyDiscount(100),
            applyDiscount(100,0.9)

        )
            // crio objetos apartir da classe dog
        let myDog:Dog = new Dog("bobs", 10, "golden")
        let myOtherDog:Dog = new Dog("felas",5, "vira-lata")

        // assim eu acesso os atributos 
        console.log(myDog.breed)
        console.log(myOtherDog.name)

        // assim eu chamo os metodos 
        myDog.bark()
        myOtherDog.eat()