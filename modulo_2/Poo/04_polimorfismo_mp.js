class Participante {
    constructor(nombre, beneficio) {
        this.nombre = nombre;
        this.beneficio = beneficio; 
    }

    asistir() {
        console.log(`${this.nombre} está participando en el evento`);
    }

    calcularBeneficio() {
        return this.beneficio * 0.15;
    }

    horasExtra(horas) {
        return horas * 2; 
    }
}

class Ponente extends Participante {
    calcularBeneficio() {
        return this.beneficio * 0.20;
    }

    horasExtra(horas) {
        return horas * 3; 
    }
}

class Organizador extends Participante {
    calcularBeneficio() {
        return this.beneficio * 0.10;
    }
}

const ponentePedro = new Ponente('Pedro', 2000);
const organizadorJuan = new Organizador('Juan', 1200);

ponentePedro.asistir();
organizadorJuan.asistir();

console.log(ponentePedro.calcularBeneficio());
console.log(organizadorJuan.calcularBeneficio());

console.log(ponentePedro.horasExtra(5));
console.log(organizadorJuan.horasExtra(4));
