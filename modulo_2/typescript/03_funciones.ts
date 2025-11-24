function saludar(nombre?: string):string{
    return `Hola ${nombre}`;
}  

console.log(saludar("Francisco"));

const sumar =(a: number, b: number): number => {
    return a+b ;
}

function saludarDeNuevo(): void {
    console.log('Hola');
    console.log('Bienvenido a Typescript')
}
saludarDeNuevo();

function calcularAreaCirculo(radio: number): void{
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(5));
calcularAreaCirculo(7);