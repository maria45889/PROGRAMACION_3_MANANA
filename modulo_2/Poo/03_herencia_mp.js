class Participante {
    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse() {
        console.log(`${this.nombre} está presente en el evento`);
    }
}

class Ponente extends Participante {
    hablar() {
        console.log(`${this.nombre} está dando su ponencia`);
    }
}

const juan = new Ponente('Juan Pérez');
const maria = new Participante('María López');

juan.presentarse();   
juan.hablar();         
maria.presentarse();   
