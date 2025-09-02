import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario{
   

    constructor(nome:string){
        super(nome)

    }
    calcularSalario(salario: number): number {
      return salario  
    }


}