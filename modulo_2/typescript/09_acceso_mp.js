"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conferencia = void 0;

var Conferencia = /** @class */ (function () {
    function Conferencia(titulo) {
        this.idGeneric = 'EVT-99182898988'; 
        this.titulo = titulo;
        this.generarCodigo();
    }

    Conferencia.prototype.generarCodigo = function () {
        this.codigo = (new Date()).toISOString();
    };

    Conferencia.prototype.getCodigo = function () {
        return this.codigo;
    };

    Conferencia.prototype.getAtributos = function () {
        return {
            titulo: this.titulo,
            codigo: this.codigo,
            id: this.idGeneric
        };
    };

    return Conferencia;
}());

exports.Conferencia = Conferencia;

