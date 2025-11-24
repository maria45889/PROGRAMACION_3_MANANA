export class Evento {
    nombre: string;
    ubicacion: string;

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    iniciar() {
        console.log(`${this.nombre} ha iniciado en ${this.ubicacion}.`);
    }
}

export class Conferencia extends Evento {
    constructor(nombre: string, ubicacion: string) {
        super(nombre, ubicacion);
    }
}

export class Taller extends Evento {
    constructor(nombre: string, ubicacion: string) {
        super(nombre, ubicacion);
    }
}
