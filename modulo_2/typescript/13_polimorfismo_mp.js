"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConferenciaEspecial = void 0;
var _11_herencia_1 = require("./11_herencia");

var ConferenciaEspecial = /** @class */ (function (_super) {
    __extends(ConferenciaEspecial, _super);
    function ConferenciaEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConferenciaEspecial.prototype.getTema = function () {
        console.log('Conferencia sobre Gestión de Eventos y Conferencias');
    };
    return ConferenciaEspecial;
}(_11_herencia_1.Evento));

exports.ConferenciaEspecial = ConferenciaEspecial;

var miConferencia = new ConferenciaEspecial('Conferencia Innovación 2025', 'Auditorio Principal');
console.log(miConferencia.nombre);
console.log(miConferencia.ubicacion);
miConferencia.iniciar();
miConferencia.getTema();
