//TUPLAS SÃO ARRAYS COM TIPOS ESPECIFICOS E COM TAMANHO FIXO

// Seria possível burlar o funcionamento padrão das tuplas com os métodos de inserção e remoção dos  arrays. Para evitar isso basta declarar o array como um readonly.

const dadosClientes: readonly [number, string] = [13, 'Diego'];
const dadosClientes2: [string, string, boolean?] = ['Hello', 'World'];

console.log(dadosClientes);
console.log(dadosClientes2);
