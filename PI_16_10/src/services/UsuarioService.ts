import { Usuario } from "../models/Usuario";

export class UsuarioService {
    // o array simulando o banco
    private usuarios:Usuario[] = []
    private proximoID = 1
    //  esta classe deve ter todos os metodos do CRUD

    // CREATE - cria a informaçao

    criaUsuario(nome:string,email:string, senha:string):void{ 
        const novoUsuario = new Usuario(this.proximoID++,nome, email, senha)
        console.log(`Bem vindo ${nome}, Seus ID é ${novoUsuario.getID()}`)
        this.usuarios.push(novoUsuario)


    }
    // READ - le a informaçao
    listarUSuarios():void{
    for(let i = 0; i < this.usuarios.length; i++)
        console.log (this.usuarios[i].getID(), this.usuarios[i].getNome()) 
    }

    //READ tambem (para ler um usuario, passando o id)
    listarUSuario(id:number):void{
     for(let i = 0; i < this.usuarios.length; i++){
        const usuario1 = this.usuarios[i]
        if(usuario1.getID() === id){
            console.log(`ID: ${usuario1.getID()} | nome: ${usuario1.getNome()} | ${usuario1.getEmail()}`)
            return
    
     }
     console.log(`Usuario com id ${id} nao encontrado`)
    }
    }

    // UPDATE - Atualiza as informações 

    atualizarUsuario(id:number, novasenha:string):void {
        for(let i = 0; i < this.usuarios.length; i ++){
            const usuario = this.usuarios[i]
            if(usuario.getID() === id){
                usuario.trocaSenha(novasenha)
                console.log(`Senha atualizada! `)
                return
            }
        }
        console.log(`Usuário com id ${id} não encontrado.`)
    }

    // DELETE - Deleta as informações

    deletaUsuario(id:number):void{
        for(let i = 0; i < this.usuarios.length; i++){
            const usuario = this.usuarios[i]
            if(usuario.getID() === id){
                this.usuarios.splice(id - 1, 1)
                console.log(`Usuário deletado. `)
                return
            }
        }
        console.log(`Usuário com id ${id} não encontrado.`)
    }

}