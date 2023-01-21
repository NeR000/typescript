export type Name = {
  name: string;
};

type LastName = {
  lastName: string;
};

type CompleteName = {
  completeName: string;
};

class Person implements Name, LastName, CompleteName {
  constructor(
    public name: string,
    public lastName: string,
    public completeName: string,
  ) {}
}

const person = new Person('Diego', 'Fabbri', 'Diego Fabbri');

console.log(person.completeName);
