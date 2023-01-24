//encadeamento opcional '?' e operador de coalescência nula '??'

interface Documento {
  name: string;
  registro: string;
  data?: Date;
}

const documento: Documento = {
  name: 'Diego Fabbri',
  registro: '112-122-98-2',
};

console.log(documento.data?.toDateString() ?? 'A data não foi informada.');
