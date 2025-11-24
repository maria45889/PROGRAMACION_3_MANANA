interface Asistente {
    id: number;
    nombre: string;
    correo?: string;
}

const asistente1: Asistente = {
    id: 101,
    nombre: 'María José Taco'
}

const asistente2: Asistente = {
    id: 102,
    nombre: 'Maria Jose Taco',
    correo: 'Maria@conferencia.com'
}

console.log(asistente1);
console.log(asistente1.id);
console.log(asistente1.nombre);
console.log(asistente1.correo);
console.log(asistente2);
console.log(asistente2.id);
console.log(asistente2.id); 
console.log(asistente2.nombre);
console.log(asistente2.correo);
