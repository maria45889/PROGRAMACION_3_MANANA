"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libro = void 0;
var libro = /** @class */ (function () {
    function libro(titulo) {
        this.idGeneric = '99182898988';
        this.titulo = titulo;
        this.generarCota();
    }
    libro.prototype.generarCota = function () {
        this.cota = (new Date()).toISOString();
    };
    libro.prototype.getCota = function () {
        return this.cota;
    };
    libro.prototype.getAtributes = function () {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    };
    return libro;
}());
exports.libro = libro;
