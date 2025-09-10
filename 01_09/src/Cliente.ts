import { IAutentificavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Cliente extends UsuarioSistema implements IAutentificavel{
    nome:string
    
    constructor(nome:string) {
        super(nome)
        this.nome = nome
    }

    autenticar(usuario:string,senha:string):boolean{
        if(usuario == "davis" && senha == "1234"){
            
            console.log(` senha correta `)
            return true 
        } else{
        
            console.log(` senha incorreta`)
            return false
        }

    }
   
    acessarPainel(): boolean {
    if(this.autenticar = true){
        console.log("voce")
    }

    
}


}