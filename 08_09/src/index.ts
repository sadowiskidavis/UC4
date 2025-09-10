import { Estoque } from "./Estoque";
import { livro } from "./LIvro";
import { Roupas } from "./Roupas";


function pegaPrimeiro<T>(lista: T[]): T {
    return lista[0];
  }
  
  const numeros = [1, 2, 3];
  const palavras = ["a", "b", "c"];
  
  pegaPrimeiro(numeros);  // 1
  pegaPrimeiro(palavras); // "a"


function mostraTamanho<T extends { length: number }>(item: T): number {
    return item.length;
  }
  
  mostraTamanho("Oi");        // ✅ funciona (string tem length)
  mostraTamanho([1, 2, 3]);   // ✅ funciona (array tem length)
  //mostraTamanho(123);         // ❌ erro (number não tem length)


  
  
  function mostraValor<T extends string | number>(valor: T): T {
    return valor;
  }
  
  mostraValor("Olá");  // ✅ string permitido
  mostraValor(123);    // ✅ number permitido
  //mostraValor(true);   // ❌ boolean não é aceito
  


  const estoqueRoupas = new Estoque<Roupas>()
  estoqueRoupas.adicionar(new Roupas("camiseta preta", "P"))
  estoqueRoupas.adicionar(new Roupas("camiseta branca", "G"))
  estoqueRoupas.adicionar(new Roupas("camiseta verde", "M"))
  
  const estoqueLivros = new Estoque<livro>()
  estoqueLivros.adicionar(new livro("o senhor dos papeis", "JJ James"))
  estoqueLivros.adicionar(new livro("roblox o filme ", "Peter Parker"))