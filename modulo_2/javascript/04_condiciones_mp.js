let temperatura = 35;

if (temperatura > 30) {
    console.log("Recinto muy caluroso: activar ventilación y revisar confort de asistentes");
}

let passaword = "admin123";
if (passaword === "admin123") {
    console.log("Acceso organizador concedido");
} else {
    console.log("Acceso organizador denegado");
}

let nota = 7;
if (nota >= 9) {
    console.log("Evaluación del evento: Excelente");
} else if (nota >= 6) {
    console.log("Evaluación del evento: Bueno");
} else {
    console.log("Evaluación del evento: Insuficiente");
}

let edad = 7;
let tiene_licencia = true;
if (edad >= 18 && tiene_licencia) {
    if (tiene_licencia) {
        console.log("Voluntario apto para operar equipamiento (mayor de edad y con licencia/certificado)");
    } else if (edad >= 18) {
        console.log("Voluntario mayor de edad pero requiere certificación para operar equipamiento");
    }
} else {
    console.log("Voluntario no apto para tareas que requieran edad o certificación");
}

// Estructura switch (planificación por día)
let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Planificación semanal: preparar logística y confirmaciones");
        break;
    case "vienres":
        console.log("Día del evento: verificar montaje y acreditaciones");
        break;
    default:
        console.log("Día normal: tareas administrativas y seguimiento");
}

let a = 80;
let b = 70;
let c = 90;
mayor = 0;
if (a > b) {
    mayor = a;
}
if (c > mayor) {
    mayor = c;
}
console.log("La mayor capacidad disponible es:", mayor);