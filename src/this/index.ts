function test(this: Date, name: string): void {
  console.log(this);
  console.log(name);
}

test.call(new Date(), 'Diego');
test.apply(new Date(), ['Diego']);
