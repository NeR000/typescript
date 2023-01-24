//TIPANDO DADOS COM TYPESCRIPT

// TIPOS BÁSICOS ONDE OCORRE INFERÊNCIA DE TIPOS
const nome = 'Diego';
const idade = 23;
const adulto = true;
const simbolo = Symbol('qualquer simbolo');
const bigint = 10n;

// TIPANDO ARRAYS
const arrayDeNumeros: number[] = [1, 2, 3];
const arrayDdNumeross: Array<number> = [3, 2, 1];

//TIPANDO OBJETOS
const pessoa: {
  nome: string;
  idade: number;
  raça?: string;
} = {
  nome: 'Diego',
  idade: 23,
};

//TIPANDO FUNÇÕES
function calcula(x: number, y: number): number {
  return x + y;
}

const calcula2: (x: number, y: number) => number = (x, y) => x + y;
console.log(calcula2(2, 3));
