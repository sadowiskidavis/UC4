import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";



const meuAnimal:Cachorro = new Cachorro()
const outroAnimal:Gato = new Gato()

meuAnimal.falar()
outroAnimal.falar()



const veiculo:Veiculo[] = [
    new Veiculo(),
    new Carro(),
    new Bicicleta()
]
for(const saindo of veiculo){
saindo.mover()

}



const pagamento:Pagamento[]= [
new Pagamento(),
new CartaoCredito(),
new Boleto()

]

for(const formas of pagamento){
 formas.processar()
}