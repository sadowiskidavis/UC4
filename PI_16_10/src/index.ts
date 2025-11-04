import { Usuario } from "./models/Usuario";
import { UsuarioService } from "./services/UsuarioService";


const usuarioNew:UsuarioService = new UsuarioService()

usuarioNew.criaUsuario("davis","davis@pintinho.com","sapequinha123")
usuarioNew.criaUsuario("davis2343","davis@pintinho3432.com","sapequinha32423434")

usuarioNew.listarUSuarios()
usuarioNew.listarUSuario(1)

usuarioNew.atualizarUsuario(1,"salabas")
usuarioNew.deletaUsuario(1)