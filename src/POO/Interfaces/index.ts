export interface PersonType {
  name: string;
}

interface StudentType {
  registration: string;
  schoolYear: string;
}

interface PersonStudent extends PersonType, StudentType {}

class Student implements PersonStudent {
  constructor(
    public name: string,
    public registration: string,
    public schoolYear: string,
  ) {}
}

const student = new Student('Diego', '2230-111-00', 'senior year');

console.log(student);
