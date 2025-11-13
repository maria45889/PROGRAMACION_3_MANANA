const cuadro = document.getElementById('cuadro');

function cambiarColor() {
  const colores = ['#08213eff', '#de2214ff', '#09e509ff', '#e229e2ff', '#ffff00ff','#ff2929ff'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  cuadro.style.backgroundColor = randomColor;
}

function aumentarTamano() {
  const width = parseInt(cuadro.style.width);
  const height = parseInt(cuadro.style.height);
  cuadro.style.width = (width + 20) + 'px';
  cuadro.style.height = (height + 20) + 'px';
}

function reiniciar() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#58a6ff';
}
