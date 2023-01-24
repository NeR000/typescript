function isNumeber(value: unknown): value is number {
  return typeof value === 'number';
}

function sum<T>(...args: T[]): number {
  const value = args.reduce((acc, value) => {
    if (isNumeber(acc) && isNumeber(value)) return acc + value;
    return acc;
  }, 0);

  return value;
}

console.log(sum('a', 'e'));
console.log(sum(2, 3, 4));
console.log(sum(...[1, 2, 3, 'a', 'e', 10]));
