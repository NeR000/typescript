// UNION TYPES É BASICAMENTE UMA MANEIRA DE UMA VARIÁVEL OU UM PARÂMETRO TER MAIS DE UM TIPO

let teste: number | string = 'Testando';
teste = 30;

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}
