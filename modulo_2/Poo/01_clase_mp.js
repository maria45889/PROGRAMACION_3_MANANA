class Evento {
    constructor(nombre, lugar) {
        this.nombre = nombre;
        this.lugar = lugar;
    }

    iniciar() {
        console.log(`El evento "${this.nombre}" en ${this.lugar} ha iniciado`);
    }

    enProgreso() {
        console.log(`El evento "${this.nombre}" en ${this.lugar} está en progreso`);
    }

    finalizar() {
        console.log(`El evento "${this.nombre}" en ${this.lugar} ha finalizado`);
    }
}

const miEvento = new Evento('Conferencia Innovación', 'Auditorio Principal');
miEvento.iniciar();
miEvento.enProgreso();
miEvento.finalizar();

console.log(miEvento.nombre);
console.log(miEvento.lugar);
