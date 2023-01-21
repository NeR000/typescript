export class Writer {
  private _tools: Tools | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tools | null) {
    this._tools = tool;
  }

  write(): void {
    if (!this._tools) {
      console.log('Você não tem uma ferramenta para escrever');
      return;
    }
    this._tools?.write();
  }
}

abstract class Tools {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  abstract write(): void;
}

class Pen extends Tools {
  write() {
    console.log(`${this.name} está escrevendo`);
  }
}

class Typewriter extends Tools {
  write() {
    console.log(`${this.name} está escrevendo`);
  }
}

const pen = new Pen('A caneta');
const typewriter = new Typewriter('A máquina de escrever');

const writer = new Writer('Diego');
writer.tool = null;
writer.write();
