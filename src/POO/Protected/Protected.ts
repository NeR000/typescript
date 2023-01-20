export class Empresa {
  readonly name: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

class Udemy extends Empresa {
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    return colaborador ? colaborador : null;
  }
}

const empresa1 = new Udemy('codeAndArt', '111.11.11/0000-11');

const colaborador1 = new Colaborador('Diego', 'Fabbri');
const colaborador2 = new Colaborador('Miguel', 'Torres');
const colaborador3 = new Colaborador('João', 'Alves');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1.popColaborador());
console.log(empresa1);
