import { Forma } from "./Forma";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

const salarioPJ:FuncionarioPJ = new FuncionarioPJ("davis")

console.log(salarioPJ.calcularSalario(50,50))
const salarioCLT:FuncionarioCLT = new FuncionarioCLT("athao")
console.log(salarioCLT.calcularSalario(1800))

const formas: Forma[] = [
    new Retangulo(5,6),
    new Triangulo(5,6),
    
  ];
  
  for (let i = 0; i < formas.length; i++) {
    console.log(`area: ${formas[i].calcularArea(4,5)}`)}    

    import { Administrador } from "./Administrador";




    const admin = new Administrador("Davis", "1234");


admin.autenticar("Davis", "0000");


admin.autenticar("Davis", "1234"); 

