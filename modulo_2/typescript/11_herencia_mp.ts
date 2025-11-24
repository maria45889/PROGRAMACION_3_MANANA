export class Evento {
    public nombre: string;
    public fecha: string;

    constructor(
        nombre: string,
        fecha: string
    ) {
        this.nombre = nombre;
        this.fecha = fecha;
    }

    iniciar(): void {
        console.log('Evento iniciado');
    }
}

export class Conferencia extends Evento {}
