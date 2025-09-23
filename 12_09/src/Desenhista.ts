 export class Desenhista {
    // Assinaturas (só diz ao TypeScript como pode ser chamado)
   desenhar(raio: number): void;
   desenhar(largura: number, altura: number): void;
   desenhar(pontos: [number, number][]): void;
   
   // Implementação real (uma só!)
   desenhar(a: any, b?: any): void {  // <--- aqui usamos 'any' para cobrir todas as assinaturas
     if (typeof a === "number" && b === undefined) {
       console.log(`Círculo de raio ${a}`);
     } else if (typeof a === "number" && typeof b === "number") {
       console.log(`Retângulo ${a}x${b}`);
     } else {
       console.log(`Polígono com ${a.length} pontos`);
     }
   }
}