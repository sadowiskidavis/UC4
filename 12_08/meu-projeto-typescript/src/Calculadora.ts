

export class Calculadora {
    number1:number;
    number2:number;
    


    constructor(n1:number,n2:number){
    this.number1 = n1
    this.number2 = n2
    }
    soma():number{
   return this.number1 + this.number2  
    }
    subtrair():number{
    return this.number1 - this.number2
    }
    multiplicar():number{
    return this.number1 * this.number2
    }
    divisao():number{
    return this.number1 / this.number2

    }

}