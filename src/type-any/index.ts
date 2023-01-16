// TIPO ANY SIGNIFICA QUE O DADO PODE TER QUALQUER TIPO. É SEMPRE BOM EVITAR ESSE TIPO DE COISA
// E SEMPRE DEIXAR OS DADOS BEM TIPADOS.

//Usar a tipagem any é algo que deve acontecer apenas em último caso
function message(msg: any) {
  return msg;
}

console.log(message('olá'));
