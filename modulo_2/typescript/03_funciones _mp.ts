function saludar(asistente?: string): string {
    return `Hola ${asistente}, gracias por asistir al evento`;
}

console.log(saludar("Majo Taco"));

const sumar = (conferenciasDia1: number, conferenciasDia2: number): number => {
    return conferenciasDia1 + conferenciasDia2;
}

function saludarDeNuevo(): void {
    console.log('Hola organizador');
    console.log('Bienvenido al sistema de Gestión de Eventos y Conferencias');
}
saludarDeNuevo();

function calcularCostoEvento(capacidad: number): void {
    // Ejemplo: costo calculado según la capacidad de asistentes
    console.log(50 * capacidad);
}

console.log(calcularCostoEvento(100));
calcularCostoEvento(250);
