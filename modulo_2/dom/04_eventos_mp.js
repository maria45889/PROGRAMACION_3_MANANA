let parrafo = null;

document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Información dinámica del evento generada con JavaScript";
    document.getElementById('contenedor').appendChild(parrafo);
});

document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert("¡Bienvenido al sistema de gestión de eventos!");
}

document.getElementById('parrafo')
    .addEventListener('dblclick', () => {
        alert("Se hizo doble clic para ver detalles del evento");
    });

document.getElementById('nombre')
   .addEventListener('input', (e) => {
        console.log("Escribiendo nombre del participante:", e.target.value);
    });