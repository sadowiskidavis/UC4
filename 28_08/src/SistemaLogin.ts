import { IAutentificavel } from "./IAutenticavel";

export class SistemaLogin implements IAutentificavel{
    usuario:string
    senha:string
    
    
    autenticar(usuario:string, senha:string): boolean {
        return usuario === "admin" && senha === '1234'
    }

}