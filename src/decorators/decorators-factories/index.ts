type Constructor = new (...args: any[]) => any;

@invert('nome', 'sobrenome')
export class Person {
  constructor(public name: string, public lastname: string) {}
}

function invert(params1: string, params2: string) {
  return function <T extends Constructor>(target: T): T {
    return class extends target {
      name: string;
      lastname: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverseString(args[0]) + ' ' + params1;
        this.lastname = this.inverseString(args[1]) + ' ' + params2;
      }

      inverseString(str: string): string {
        return str.split('').reverse().join('');
      }
    };
  };
}

const person = new Person('Diego', 'Fabbri');
console.log(person);
