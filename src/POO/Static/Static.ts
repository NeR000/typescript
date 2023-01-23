export class Person {
  static completeName = 'Diego Fabbri';

  constructor(
    public _name: string,
    public _lastName: string,
    public _age: number,
  ) {}

  static createPerson(): Person {
    return new Person('Luan', 'Brito', 0);
  }

  showStaticProperties(): void {
    console.log(Person.completeName);
  }
}

const person = new Person('Diego', 'Fabbri', 20);
const person2 = Person.createPerson();
person.showStaticProperties();
