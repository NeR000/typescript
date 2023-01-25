// RECORD<> TIPA TODAS AS CHAVES E VALORES DE UM OBJETO
export const person: Record<string, string> = {};
person[1] = 'John';

console.log(person);

//REQUIRED<> TORNA TODOS OS DADOS EM OBRIGATÓRIOS DE SEREM PASSADOS
interface PersonProtocol {
  name?: string;
  lastname?: string;
  age?: number;
}

type PersonProtocolRequired = Required<PersonProtocol>;

const person2: PersonProtocolRequired = {
  name: 'John',
  lastname: 'Doe',
  age: 36,
};

// PARTIAL<> TRANSFORMA TODOS OS DADOS A SEREM PASSADOS EM OPCIONAIS
type PersonPartial = Partial<PersonProtocolRequired>;

const persone: PersonPartial = {
  name: 'John',
};

//READONLY<> TRANSFORMA TODOS OS DADOS EM READONLY
type PersonReadonly = Readonly<PersonProtocol>;

//PICK<> ESCOLHE AS PROPRIEDADES QUE QUISER DE DETERMINADO TIPO
type PersonPick = Pick<PersonProtocolRequired, 'name' | 'lastname'>;

// EXTRACT<> RECEBE DOIS TIPOS E TIPA APENAS COM OS TIPOS DO PRIMEIRO TIPO QUE TAMBÉM ESTÃO NO SEGUNDO
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type C = Extract<ABC, CDE>;

// EXCLUDE<> RECEBE DOIS TIPOS E TIPA APENAS COMO OS TIPOS DO PRIMEIRO QUE NÃO ESTÃO NO SEGUNDO
type AB = Exclude<ABC, CDE>;
