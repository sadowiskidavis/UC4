function exibirAluno(nomeAluno:string, idadeAluno:number, estaMatriculado:boolean):void{
    console.log(`o aluni ${nomeAluno} tem ${idadeAluno} esta matriculado: ${estaMatriculado}`)
}

exibirAluno("athos", 17, true)

let alunos: string[] = ['athos', 'davis', 'arthur', 'leo', 'pedro'];

function recebeArray(alunos: string[]): string {
    return "Alunos:\n " + alunos.join("\n ");
}

console.log(recebeArray(alunos));


function saudacao(nome:string):void {
    console.log(`Saudações ${nome}`)
}

saudacao("athos")

function calculaMedia(nota1:number, nota2:number, nota3:number):number{
    let media:number = (nota1 + nota2 + nota3)/3
    return media
}

console.log(calculaMedia(10,10,10))

function contarAlunos(listaAlunos:string[]):void {
    let contaAlunos = listaAlunos.length
    console.log(`essa turma tem: ${contaAlunos} alunos`)
}
let array:string[] = ["athos", "decls", "brunao", "guilherme"]

contarAlunos(array)