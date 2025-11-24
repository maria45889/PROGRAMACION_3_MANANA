let organizador = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Quito",
    rol: "Coordinadora"
};

console.log(organizador);
console.log(organizador.nombre);
console.log(organizador.ciudad);
console.log(organizador["edad"]);

console.log("Modificación de una clave del objeto (organizador)");
organizador.nombre = "Maria Jose Taco";
console.log(organizador);

console.log("Incluir clave al objeto (dirección)");
organizador.direccion = "Av. Occidental";
console.log(organizador);

console.log("Eliminar clave del objeto (dirección)");
delete organizador.direccion;
console.log(organizador);

console.log("Recorrer un objeto (organizador)");
for (let clave in organizador) {
    console.log(clave, ":", organizador[clave]);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(organizador));

console.log("Mostrar valores con Object.values");
console.log(Object.values(organizador));

console.log("Objetos anidados — Ejemplo de evento");
let evento = {
    titulo: "Congreso de Tecnología",
    ubicacion: "Auditorio Central",
    fecha: "2025-10-20",
    contacto: {
        correo: "contacto@evento.com",
        telefono: "025162323",
        celular: "0985809696"
    },
    sesiones: [
        {
            nombre: "Apertura",
            hora: "09:00"
        },
        {
            nombre: "Taller JS",
            hora: "11:00"
        }
    ]
};

console.log("Evento:", evento);
console.log("Contacto evento:", evento.contacto);
console.log("Primera sesión:", evento.sesiones[0]);