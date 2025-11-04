export class Usuario{
    private id: number
    private nome:string
    private email:string
    private senha:string


    constructor(id:number, nome:string, email:string, senha:string){
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha

    }

    validarSenha(senhaRecebida:string): boolean{
        return senhaRecebida === this.senha
    }

    trocaSenha(novaSenha:string):void{
        this.senha = novaSenha
    }


    getID(){
        return this.id
    }

    getNome(){
        return this.nome
    }

    getEmail(){
        return this.email
    }
}