import Estoque from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";

/*
// Estoque de livros
const estoqueLivros = new Estoque<Livro>();
estoqueLivros.adicionar(new Livro("Harry Potter", "J.K. Rowling"));
estoqueLivros.adicionar(new Livro("O Hobbit", "Tolkien"));
console.log("📚 Livros no estoque:", estoqueLivros.listar());

// Estoque de roupas
const estoqueRoupas = new Estoque<Roupa>();
estoqueRoupas.adicionar(new Roupa("Camiseta", "M"));
estoqueRoupas.adicionar(new Roupa("Calça Jeans", "42"));
console.log("👕 Roupas no estoque:", estoqueRoupas.listar());
*/


function mostraTamanho<T extends { length: number }>(item: T): void {
   for(let i = 0; i < item.length; i ++ ){
    console.log(item[i])
   } 
   
  }
  
  mostraTamanho("simba") 
  mostraTamanho([1, 2, 3]);   
  




