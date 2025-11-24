"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;

var Asistente = /** @class */ (function () {
    function A(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    Asistente.prototype.saludar = function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    };

    return Asistente;
}());

exports.Asistente = Asistente;
