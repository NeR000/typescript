interface Person<T, U> {
  name: T;
  age: U;
}

const person: Person<string, number> = {
  name: 'John',
  age: 22,
};

interface Student<T = string, U = number> {
  name: T;
  test_grade: U;
}

const student: Student = {
  name: 'Diego',
  test_grade: 9.3,
};

interface ICallbackFn<U> {
  (value: U, index?: number, array?: U[]): U;
}

function map<T>(arr: T[], callbackFn: ICallbackFn<T>) {
  const newArray: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(callbackFn(arr[i]));
  }
}

const strArr = ['a', 'b', 'c', 'd'];

map(strArr, (value) => value.toUpperCase());
