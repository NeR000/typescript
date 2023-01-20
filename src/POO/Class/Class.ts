export class Empresa {
  readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
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

const empresa1 = new Empresa('codeAndArt', '111.11.11/0000-11');

const colaborador1 = new Colaborador('Diego', 'Fabbri');
const colaborador2 = new Colaborador('Miguel', 'Torres');
const colaborador3 = new Colaborador('João', 'Alves');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
