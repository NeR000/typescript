// O TIPO NEVER É USADO PARA FUNÇÕES OU MÉTODOS QUE NUNCA RETORNARÃO NADA

function throwErr(): never {
  throw new Error('erro qualquer');
}
