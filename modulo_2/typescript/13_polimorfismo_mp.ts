export class Evento {
    nombre: string;
    ubicacion: string;

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    iniciar(): void {
        console.log(`${this.nombre} ha iniciado en ${this.ubicacion}.`);
    }
}
