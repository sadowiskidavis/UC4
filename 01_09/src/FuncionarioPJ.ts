import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario{
    
    constructor(nome:string){
        super(nome)

    }
    calcularSalario(salario: number, horasTrabalho: number ): number {
        return (salario * horasTrabalho) *22
         
    }



}