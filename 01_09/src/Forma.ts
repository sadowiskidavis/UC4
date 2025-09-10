export abstract class Forma{
    base:number
    altura:number

        constructor(base:number,altura:number){
            this.base = base
            this.altura = altura

        }
    abstract calcularArea(base:number, altura:number):number


}