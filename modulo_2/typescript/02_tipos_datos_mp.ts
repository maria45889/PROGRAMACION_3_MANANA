let asistentes: number = 30;
let nombreEvento: string = "Conferencia Internacional";
let eventoActivo: boolean = true;
let capacidadSala: any = 150;

if (asistentes > 18 && eventoActivo) {
    console.log("Evento en funcionamiento");
} else {
    console.log("Evento inactivo");
}

let conferencistas: string[] = ['Ana Torres', 'Carlos Ruiz', 'María López'];
for (let i = 0; i < conferencistas.length; i++) {
    console.log(conferencistas[i]);
}

enum EstadoEvento {
    Pendiente,
    EnCurso,
    Finalizado
}

console.log(EstadoEvento);
console.log(EstadoEvento.Finalizado);
