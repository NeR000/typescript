const obj: {
  readonly chaveA: string;
  ChaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'Hello',
  ChaveB: 'World',
};

const obj2: Record<string, unknown> = {};

obj.chaveC = 'olaaa';
obj.chaveD = 'olaaa';
console.log(obj);
