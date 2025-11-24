var asistentes = 30;
var nombreEvento = "Conferencia de Tecnología";
var eventoActivo = true;
var salas = 6;

if (asistentes > 18 && eventoActivo) {
    console.log("Evento activo");
} else {
    console.log("Evento no disponible");
}

var conferencistas = ['Ana Torres', 'Carlos Ruiz', 'María López'];
for (var i = 0; i < conferencistas.length; i++) {
    console.log(conferencistas[i]);
}

var EstadoEvento;
(function (EstadoEvento) {
    EstadoEvento[EstadoEvento["Pendiente"] = 0] = "Pendiente";
    EstadoEvento[EstadoEvento["EnCurso"] = 1] = "EnCurso";
    EstadoEvento[EstadoEvento["Finalizado"] = 2] = "Finalizado";
})(EstadoEvento || (EstadoEvento = {}));

console.log(EstadoEvento);
console.log(EstadoEvento.Finalizado);
