console.log("OBJETOS");
let persona = {
    nombre:"Ana",
    edad: 30,
    cuidad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.cuidad);
console.log(persona["edad"]);
console.log("Modificacion de una clave del objeto");
persona.nombre= "Maria"
console.log(persona);
console.log("Incluir clave al objeto");
persona.direcion="Av. Occidental";
console.log(persona);
console.log("Eliminar clave al objeto");
delete persona.direcion;
console.log(persona);

console.log("Recorrer un objeto");
for(let clave in persona){
    console.log(clave);
}
console.log("Mostrar claves con objet.keys");
console.log(Object.keys(persona));
console.log("Mostrar claves con objet.values");
console.log(Object.values(persona));
console.log("Objetos Anidados");
let estudiante = {
    nombre:"Pedro",
    Apellido: "Perez",
    contacto: {
        correo: "pedro@gmail.com",
        telefono: "025162323",
        celular: "0985809696"
    },
    materias: [
        {
        nombre: "programacion III",
        calificacion: 8
        },
        {
        nombre: "base de datos II",
        calificacion: 9 
        },
    ]
};
console.log("Estudiante:  ", estudiante);