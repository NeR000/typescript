export interface Veiculo {
  marca: string;
  ano: string;
}

interface Car {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
}

const carro: Car = {
  brand: 'FIAT',
  year: '2022',
  name: 'Argo',
};

console.log(carro);
