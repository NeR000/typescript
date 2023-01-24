class Stack<T> {
  private _counter = 0;
  private _object: { [key: number]: T } = {};

  push(value: T): void {
    this._object[this._counter] = value;
    this._counter++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;

    this._counter--;
    const deletedElement = this._object[this._counter];
    delete this._object[this._counter];

    return deletedElement;
  }

  isEmpty(): boolean {
    return this._counter === 0;
  }

  get object() {
    return this._object;
  }
}

const stack = new Stack<string | number>();
stack.push('Olá');
stack.push('Mundo');
console.log(stack.pop());
stack.push(2023);
console.log(stack.object);
