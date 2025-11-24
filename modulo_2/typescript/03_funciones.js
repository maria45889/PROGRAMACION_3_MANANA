function saludar(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludar("Francisco"));
var sumar = function (a, b) {
    return a + b;
};
function saludarDeNuevo() {
    console.log('Hola');
    console.log('Bienvenido a Typescript');
}
saludarDeNuevo();
function calcularAreaCirculo(radio) {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(5));
calcularAreaCirculo(7);
