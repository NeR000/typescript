class Calculator {
  constructor(public num: number) {}

  add(value: number): this {
    this.num += value;
    return this;
  }

  sub(value: number): this {
    this.num -= value;
    return this;
  }

  div(value: number): this {
    this.num /= value;
    return this;
  }

  mul(value: number): this {
    this.num *= value;
    return this;
  }
}

const calc = new Calculator(10);
console.log(calc.add(5).mul(2));

// BUILDER

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(
      `Enviando informação via método: ${this.method} para url: ${this.url}`,
    );
  }
}

const request = new RequestBuilder();

request.setMethod('get').setUrl('https://api.twitter.com').send();
