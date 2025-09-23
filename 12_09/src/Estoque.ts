export class Estoque {
    private produtos: string[] = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];
  
    
  
    // Sobrecargas
    remover(produto: string): void;
    remover(produtos: string[]): void;
  
    // Implementação
    remover(produtoOuLista: string | string[]): void {
      if (typeof produtoOuLista === "string") {
        const index = this.produtos.indexOf(produtoOuLista);
        if (index !== -1) {
          this.produtos.splice(index, 1);
          console.log(`Produto removido: ${produtoOuLista}`);
        } else {
          console.log(`Produto não encontrado: ${produtoOuLista}`);
        }
      } else {
        const removidos: string[] = [];
        const naoEncontrados: string[] = [];
  
        for (const item of produtoOuLista) {
          const index = this.produtos.indexOf(item);
          if (index !== -1) {
            this.produtos.splice(index, 1);
            removidos.push(item);
          } else {
            naoEncontrados.push(item);
          }
        }
  
        if (removidos.length > 0) {
          console.log(`Produtos removidos: ${removidos.join(", ")}`);
        }
        if (naoEncontrados.length > 0) {
          console.log(`Produtos não encontrados: ${naoEncontrados.join(", ")}`);
        }
      }
    }
  
    listar(): void {
      console.log("Estoque atual:", this.produtos.join(", "));
    }
  }
  