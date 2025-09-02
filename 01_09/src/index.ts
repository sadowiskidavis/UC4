import { Forma } from "./Forma";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

const salarioPJ:FuncionarioPJ = new FuncionarioPJ("davis")

console.log(salarioPJ.calcularSalario(50,50))
const salarioCLT:FuncionarioCLT = new FuncionarioCLT("athao")
console.log(salarioCLT.calcularSalario(1800))


const forma:Forma = [Retangulo,Triangulo]
 
