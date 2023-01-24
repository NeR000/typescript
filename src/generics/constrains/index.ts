export type ObjKey = <O, K extends keyof O>(
  obj: O,
  key: K,
) => (typeof obj)[typeof key];

const mostraValorChave: ObjKey = (obj, key) => obj[key];

const pessoa = {
  name: 'Diego',
  age: 23,
};

const nome = mostraValorChave(pessoa, 'name');
const idade = mostraValorChave(pessoa, 'age');

console.log(nome, idade);
