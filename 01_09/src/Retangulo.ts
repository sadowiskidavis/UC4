import { Forma } from "./Forma";

export class Retangulo extends Forma{
    base:number
    altura:number

        constructor(base:number,altura:number){
          super(base,altura)  
          this.base = base
            this.altura = altura

        }
    calcularArea(base: number, altura: number): number {
    return base * altura 
}

}

