type MapStringCallbackFn = (item: string) => string;

function mapString(
  arr: string[],
  callbackFn: MapStringCallbackFn,
): Array<string> {
  const mappedArray: Array<string> = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callbackFn(arr[i]));
  }

  return mappedArray;
}

const array = ['a', 'b', 'c'];

console.log(mapString(array, (item) => item.toUpperCase()));
