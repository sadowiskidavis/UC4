export class Calculadora {

    // aqui crio as assinaturas de metodo
    // ou seja defino como esse metodo pode ser chamado

    somar(a: number, b: number): number;   // assina que pode receber dois números

    somar(a: string, b: string): string;   // assina que pode receber duas strings

    // aqui crio a implementaçao de metodo
    //ou seja, defino sua logica

    somar(a:any, b:any):any {
        console.log(a + b)
    }

}