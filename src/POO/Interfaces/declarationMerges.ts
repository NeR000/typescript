//Declaration merge é quando as interfaces com o mesmo nome se comportam como se fossem apenas uma

export interface Person {
  readonly name: string;
}
export interface Person {
  lastName: string;
}
export interface Person {
  age: number;
}

const person: Person = {
  name: '',
  lastName: '',
  age: 0,
};

person.name = 'Diego';
person.lastName = 'Fabbri';
person.age = 23;

console.log(person);
