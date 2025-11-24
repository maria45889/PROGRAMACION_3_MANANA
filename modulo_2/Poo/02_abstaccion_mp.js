class Asistente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    verificarEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad y puede asistir al evento`);
        } else {
            console.log(`${this.nombre} es menor de edad y necesita autorización para asistir`);
        }
    }

    mostrar() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const pedro = new Asistente('Pedro', 17);
pedro.verificarEdad();
pedro.mostrar();
