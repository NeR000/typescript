export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const stringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
type FilterTypes<U> = (value: U, index?: number, array?: U[]) => boolean;

function myFilter<T>(array: T[], callbackFn: FilterTypes<T>): T[] {
  const newArray: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) newArray.push(array[i]);
  }
  return newArray;
}

const arrayFiltered = myFilter(arr, (value) => value < 5);

const strArrFiltered = myFilter(stringArr, (value) => value < 'd');

console.log(arrayFiltered);
console.log(strArrFiltered);
