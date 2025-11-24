"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _11_herencia_1 = require("./11_herencia");


var miConferencia = new _11_herencia_1.Conferencia('Conferencia de Innovación Tecnológica', 'Auditorio Principal');
console.log(miConferencia.nombre);
console.log(miConferencia.ubicacion);
miConferencia.iniciar();

var miTaller = new _11_herencia_1.Taller('Taller de Programación', 'Sala 101');
console.log(miTaller.nombre);
console.log(miTaller.ubicacion);
miTaller.iniciar();
