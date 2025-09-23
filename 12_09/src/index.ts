import { Calculadora } from "./Calculadora";
import { Desenhista } from "./Desenhista";
import { Mensageiro } from "./Mensageiro";
import { Repositorio } from "./Repositorio";

const calc:Calculadora = new Calculadora()

//passando numbers
calc.somar(1,2)
// passando strings
calc.somar("davis", " sadowiski") 


const mens:Mensageiro = new Mensageiro()


mens.enviar(["sou bom e novo", "decks amassa"], "clara godoy 3 pila")

const d = new Desenhista();
   d.desenhar(10);
   d.desenhar(20, 30);
   d.desenhar([[0,0],[1,0],[1,1],[0,1]]);

   const r = new Repositorio();
const u = r.buscar(1);     // retorna string
const lista = r.buscar("a"); // retorna string[]



import { Estoque } from "./Estoque";

const estoque = new Estoque();

estoque.remover("Arroz");

estoque.remover(["Feijão", "Açúcar", "Chocolate"]);


estoque.listar();

