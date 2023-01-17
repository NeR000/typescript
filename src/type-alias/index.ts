type Pessoa = {
  nome: string;
  idade: number;
  corPreferida?: string;
};

type corRgb = 'azul' | 'verde' | 'vermelho';
type outrasCores = 'roxo' | 'preto' | 'laranja';
type CorPreferida = corRgb | outrasCores;

const pessoa: Pessoa = {
  nome: 'Diego',
  idade: 23,
};

export function setCor(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCor(pessoa, 'roxo'));
