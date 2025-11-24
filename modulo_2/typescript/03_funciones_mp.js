function saludar(asistente) {
    return "Bienvenido ".concat(asistente);
}
console.log(saludar("Majo Taco"));

var sumar = function (eventosDia1, eventosDia2) {
    return eventosDia1 + eventosDia2;
};

function saludarDeNuevo() {
    console.log('Hola, organizador');
    console.log('Bienvenido al sistema de Gestión de Eventos y Conferencias');
}
saludarDeNuevo();

function calcularCostoEvento(capacidad) {
    console.log(50 * capacidad); 
}
console.log(calcularCostoEvento(100));
calcularCostoEvento(250);

