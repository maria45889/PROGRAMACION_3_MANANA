console.log("VARIABLES");

saludo="Hola Utilizando variables";
console.log("Variables Saludos",saludo);
console.log("Tipo de variable",typeof saludo);

numero=256
console.log("Variable Numero",numero);
console.log("Tipo de variable",typeof numero);

booleana=true
console.log("Variable Booleana",booleana);
console.log("Tipo de variable",typeof booleana);

indefinida=undefined
console.log("Variable Indefinida",indefinida);
console.log("Tipo de variable",typeof (indefinida));

nula=null
console.log("Variable Nula",nula);
console.log("Tipo de variable",typeof (nula));

bigentero=6765673434356743434345785n
console.log("Variable BiInt",bigentero);
console.log("Tipo de variable",typeof (bigentero));

persona = {
    nombre:"Juan", 
    edad:30, 
}
console.log("Variable Objeto",persona);
console.log("Tipo de variable",typeof (persona));

numero = [12,12,22,34,4,4]
console.log("Variable Array",numero);
console.log("Tipo de variable",typeof (numero));

console.log("VARIABLES — Gestión de Eventos y Conferencias");

const saludo = "Hola, usando variables para Gestión de Eventos y Conferencias";
console.log("Saludo:", saludo);
console.log("Tipo de variable:", typeof saludo);

const capacidad = 256;
console.log("Capacidad del evento (asientos):", capacidad);
console.log("Tipo de variable:", typeof capacidad);

const presencial = true;
console.log("¿Evento presencial?", presencial);
console.log("Tipo de variable:", typeof presencial);

let anfitrion; // indefinida por ahora
console.log("Anfitrión (indefinida):", anfitrion);
console.log("Tipo de variable:", typeof anfitrion);

const ubicacion = null; // aún no asignada
console.log("Ubicación (nula):", ubicacion);
console.log("Tipo de variable:", typeof ubicacion);

const asistentesBig = 900719925474099123n;
console.log("Asistentes estimados (BigInt):", asistentesBig);
console.log("Tipo de variable:", typeof asistentesBig);

const organizador = {
  nombre: "Maria Jose Taco",
  email: "maria.taco@ute.edu.ec",
  rol: "Coordinadora"
};
console.log("Organizador (objeto):", organizador);
console.log("Tipo de variable:", typeof organizador);

const horarios = ["09:00", "11:00", "14:00"];
console.log("Horarios (array):", horarios);
console.log("Tipo de variable:", typeof horarios);

// Variables concretas de un evento
const nombreEvento = "Congreso de Tecnología";
const fechaEvento = "2025-10-20";
const numeroAsistentes = 300;

console.log(`Evento: ${nombreEvento} — Fecha: ${fechaEvento} — Asistentes: ${numeroAsistentes}`);
console.log("Tipo nombreEvento:", typeof nombreEvento);
console.log("Tipo fechaEvento:", typeof fechaEvento);
console.log("Tipo numeroAsistentes:", typeof numeroAsistentes);