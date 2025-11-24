"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var persona = /** @class */ (function () {
    function persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    persona.prototype.saludar = function () {
        console.log(Hola, soy, $, { this: .nombre }, y, tengo, $, { this: .edad }, años);
    };
    return persona;
}());
exports.persona = persona;
