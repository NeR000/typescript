type Colors = typeof colors;
type CoresChaves = keyof Colors;

const colors = {
  vermelho: 'red',
  verde: 'greean',
  azul: 'blue',
};

function traduzCores(color: CoresChaves, colors: Colors) {
  console.log(colors[color]);
}

traduzCores('azul', colors);
