for(let voltas: number = 0; voltas < 10; voltas ++) {
    console.log(`o ciclista deu tantas ${voltas} voltas. `)
}


let voltas: number = 0
while (voltas <= 10 ){
    console.log(`o ciclista deu tantas ${voltas} voltas. `)
    voltas ++
}


const numeros:number[]= [10,20,30,40,50]

for (let i:number = 0; i < numeros.length; i ++){
    console.log("numeros:" + numeros[i])
}

for (let numero of numeros){
    console.log("numero: "+ numero)
}


const pessoa: {nome:string, idade:number} = {
    nome: 'davis',
    idade: 30
}

for (const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`); 
}

// foreach
const personagens:string[]= ['frodo','gangalf', 'legolas']

/* o froeach é usado em arrays
ele serve para executar uma funçaõ para cada item deste array
essa funçao é chamada como parametro do foreach (callbeck)
o primeiro paremetro dessa funçao é o valor do item, e o segundo é o seu indice
*/

personagens.forEach((nome, indice)=>{
    console.log (`personagem ${indice}: ${nome}`)
})

let contador = 0;

do {
  console.log(`Contador: ${contador}`);
  contador++;
} while (contador < 5);

/*Use for ou for...of quando precisar de controle completo ou parar o loop.
Use forEach para código mais limpo em arrays.
Use while quando a condição depende de algo que muda dentro do loop.
Use do...while quando o bloco deve rodar pelo menos uma vez.
Evite for...in em arrays, pois os índices retornados são strings.
*/






const sociedade:string[]= ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir']

for (let i:string = ['frodo','sam', 'pippin', 'merry'] ; i < sociedade.length; i ++){
    console.log("hobbit encontrado:" + sociedade[i])
}

const personagens = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
  ];

for (let jedi of personagens){
    if(jedi === true){
        console.log(personagens.nome)
    }
    
    
}



