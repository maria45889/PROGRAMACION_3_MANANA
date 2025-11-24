try {
    console.log(detalleEventoNoDeclarado);
} catch (error) {
    console.log("Error al acceder datos del evento:", error.message);
}

try {
    console.log("Intentando cargar la agenda del evento...");
    throw new Error("Agenda del evento no encontrada");
} catch (error) {
    console.log("Error al cargar agenda del evento:", error.message);
} finally {
    console.log("Finalizando intento de carga de agenda — liberar recursos y notificar equipo de logística");
}
