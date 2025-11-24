const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorEventos');
let eventos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById('nombreEvento').value.trim();
  const descripcion = document.getElementById('descripcionEvento').value.trim();
  const fecha = document.getElementById('fechaEvento').value.trim();

  if (nombre && descripcion && fecha) {
    const nuevoEvento = { id: Date.now(), nombre, descripcion, fecha };
    eventos.push(nuevoEvento);
    renderizarEvento(nuevoEvento);
    formulario.reset();
  }
});

function renderizarEvento({ id, nombre, descripcion, fecha }) {
  const div = document.createElement('div');
  div.className = 'evento';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${descripcion}</p>
    <p><strong>Fecha y Hora: ${fecha}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.evento');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    eventos = eventos.filter(ev => ev.id !== id);
    tarjeta.remove();
  }
});
