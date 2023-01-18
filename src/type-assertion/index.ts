//RECOMENDADO
const body = document.querySelector('body');
if (body) body.style.background = 'red';

const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'blue';

//NÃO RECOMENDADO
const body3 = document.querySelector('body')!; // non-null assertion
body3.style.background = 'blue';

const body4 = document.querySelector('body') as unknown as number;
body4.toFixed();
