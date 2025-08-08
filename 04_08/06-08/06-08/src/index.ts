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



// 1 - Sociedade do Anel - Hobbits
const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

for (let i = 0; i < sociedade.length; i++) {
    if (sociedade[i] === 'Frodo'
        || sociedade[i] === 'Sam'
        || sociedade[i] === 'Merry'
        || sociedade[i] === 'Pippin') {
        console.log(`Hobbit encontrado: ${sociedade[i]}`);
    }
}

// 2 - Star Wars - Jedis
const personagensSW = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];

for (let personagem of personagensSW) {
    if (personagem.jedi) {
        console.log(`Jedi encontrado: ${personagem.nome}`);
    }
}

// 3 - Naruto - Clãs
const personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};

for (let personagem in personagensNaruto) {
    console.log(`${personagem} pertence ao clã ${personagensNaruto[personagem as keyof typeof personagensNaruto]}`);
}

 4 - Dragon Ball - Poder
const personagensDBZ = [
{ nome: 'Goku', poder: 15000 },
{ nome: 'Vegeta', poder: 14999 },
{ nome: 'Krillin', poder: 7500 },
{ nome: 'Freeza', poder: 20000 },
];

personagensDBZ.forEach((personagem) => {
if (personagem.poder > 8000) {
console.log(`O poder de ${personagem.nome} é de mais de 8000!`);
}
});

// 5 - Pokémon - While
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let contador = 0;

while (contador < pokemons.length) {
if (pokemons[contador] === 'Mewtwo') {
console.log('Pokémon lendário encontrado: Mewtwo!');
break;
}
console.log(`Capturando ${pokemons[contador]}`);
contador++;
}

// 6 - Terra Média - do...while
let passos = 0;
const passosParaMordor = 5;

do {
console.log(`Dando passo ${passos}`);
passos++;
} while (passos < passosParaMordor);

console.log('Chegamos em Mordor!');
