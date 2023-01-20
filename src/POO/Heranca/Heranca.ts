export class Person {
  constructor(
    public _name: string,
    public _lastName: string,
    private _age: number,
    protected _cpf: string,
  ) {}

  get age() {
    return this._age;
  }

  get cpf() {
    return this._cpf;
  }

  get completeName() {
    return `${this._name} ${this._lastName}`;
  }
}

class Student extends Person {
  constructor(
    _name: string,
    _lastName: string,
    _age: number,
    _cpf: string,
    public _sala: string,
  ) {
    super(_name, _lastName, _age, _cpf);
  }
  get completeName() {
    return `this name belongs to student ${this._name} ${this._lastName}`;
  }
}

const person = new Person('João', 'Miguel', 18, '111.111.111-11');
const student = new Student('Diego', 'Fabbri', 23, '000.000.000-00', '223');

console.log(person.completeName);
console.log(student.completeName);
console.log(student);
