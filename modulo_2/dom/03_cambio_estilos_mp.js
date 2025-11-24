const mensaje = document.getElementById('mensaje');
mensaje.textContent = "Información del Evento Actualizada";
mensaje.style.color = "red";

const link = document.getElementById('link');
link.setAttribute('href', "#detalle-evento");
link.textContent = "Ir a detalles del evento";

