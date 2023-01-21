class Car {
  private readonly _carEngine = new CarEngine();

  turnOnTheCar(): void {
    this._carEngine.turnOnTheCar();
  }
  speedUpTheCar(): void {
    this._carEngine.speedUpTheCar();
  }
  brakingTheCar(): void {
    this._carEngine.brakingTheCar();
  }
  turnOffTheCar(): void {
    this._carEngine.turnOffTheCar();
  }
}

class CarEngine {
  turnOnTheCar(): void {
    console.log('Ligando o carro');
  }
  speedUpTheCar(): void {
    console.log('Acelerando o carro');
  }
  brakingTheCar(): void {
    console.log('Freiando o carro');
  }
  turnOffTheCar(): void {
    console.log('Desligando o carro');
  }
}

const car = new Car();
car.turnOnTheCar();
car.speedUpTheCar();
car.brakingTheCar();
car.turnOffTheCar();
