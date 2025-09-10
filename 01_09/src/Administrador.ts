import { IAutentificavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Administrador extends UsuarioSistema implements IAutentificavel {
  private senha: string;
  private autenticado: boolean;

  constructor(nome: string, senha: string) {
    super(nome);
    this.senha = senha;
    this.autenticado = false;
  }

  tipoUsuario(): string {
    return "Administrador";
  }

  autenticar(usuario: string, senha: string): boolean {
    if (usuario === this.nome && senha === this.senha) {
      this.autenticado = true;
      console.log("✅ Login realizado com sucesso!");
      this.acessarPainel();
      return true;
    }
    console.log("❌ Usuário ou senha inválidos.");
    return false;
  }

  acessarPainel(): void {
    if (this.autenticado) {
      console.log(`🔒 Painel do Administrador aberto para ${this.nome}`);
      console.log("📊 Opções disponíveis: [Gerenciar usuários] [Relatórios] [Configurações]");
    } else {
      console.log("⚠️ Acesso negado. Faça login primeiro.");
    }
  }
}
