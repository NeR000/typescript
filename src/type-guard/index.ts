interface Person {
  name: string;
}

interface Animal {
  color: string;
}

class Person1 implements Person {
  constructor(public name: string) {}
}

class Animal1 implements Animal {
  constructor(public color: string) {}
}

export function personOrAnimal(obj: Person | Animal) {
  // 'name' in obj && console.log(obj.name);
  // 'color' in obj && console.log(obj.color);
  obj instanceof Person1 && console.log('Objeto é do tipo Person');
  obj instanceof Animal1 && console.log('Objeto é do tipo Animal');
}

personOrAnimal(new Person1('Diego'));
personOrAnimal(new Animal1('preto'));
