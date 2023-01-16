//TIPANDO DADOS COM TYPESCRIPT

// TIPOS BÁSICOS ONDE OCORRE INFERÊNCIA DE TIPOS
let nome: string = 'Diego';
let idade: number = 23;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer simbolo');
let bigint: bigint = 10n;

// TIPANDO ARRAYS
let arrayDeNumeros: number[] = [1, 2, 3];
let arrayDdNumeross: Array<number> = [3, 2, 1];

//TIPANDO OBJETOS
let pessoa: {
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
