@decorator
class Animal {
  constructor(public color: string) {}
}

interface Color {
  color: string;
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = args[0].split('').reverse().join('');
    }
  };
}

const animal = new Animal('azul');
console.log(animal);
