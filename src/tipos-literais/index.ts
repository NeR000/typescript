// TIPOS LITERAIS SÃO SUBTIPOS DE TIPOS

// Todas as const são um subtipo de um tipo, por que as const são imutáveis
const nome = 'Diego'; // O tipo da variavel nome será um subtipo de uma string

// As let retornam um tipo, por que como elas são mutáveis, podem receber qualquer dado que se encaixe no tipo específico
let sobrenome = 'Fabbri' as const; // É possível fazer uma let ter um comportamento de const adicionando as const ao final da variável

const pessoa = {
  nome: 'Diego',
  sobrenome: 'fabbri' as const, // Também é possível adicionar um comportamento de const à o valor de uma chave de um objeto
};

// Esta função também retorna um subtipo, pois retorna valores específicos que pertencem ao tipo string
function cor(cor: 'azul' | 'roxo' | 'preto') {
  return cor;
}

console.log(cor('azul'));
export default 1;
