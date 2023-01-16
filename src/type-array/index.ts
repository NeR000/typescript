function multiplica(...args: number[]): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

function concatena(...args: Array<string>): string {
  return args.join('');
}

function toUpperCase(...args: string[]): string[] {
  return args.map((item) => item.toUpperCase());
}

console.log(multiplica(2, 15, 44));
console.log(concatena('n', 'j', 'l', 'w'));
console.log(toUpperCase('a', 'b', 'd'));
