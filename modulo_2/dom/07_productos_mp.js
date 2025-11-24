const eventos = [
  { nombre: "Conferencia Innovación", descripcion: "Innovación empresarial", fecha: "2025-12-05 10:00", asistentes: 50, ubicacion: "Sala A" },
  { nombre: "Taller Gestión de Proyectos", descripcion: "Metodologías ágiles", fecha: "2025-12-06 14:00", asistentes: 30, ubicacion: "Sala B" },
  { nombre: "Charla Motivacional", descripcion: "Liderazgo y motivación", fecha: "2025-12-07 09:00", asistentes: 100, ubicacion: "Auditorio" },
  { nombre: "Panel Tecnología", descripcion: "Nuevas tendencias", fecha: "2025-12-08 11:00", asistentes: 40, ubicacion: "Sala C" },
  { nombre: "Networking Empresarial", descripcion: "Conexiones y contactos", fecha: "2025-12-09 16:00", asistentes: 60, ubicacion: "Lobby" },
  { nombre: "Taller Marketing Digital", descripcion: "Estrategias online", fecha: "2025-12-10 13:00", asistentes: 25, ubicacion: "Sala D" },
  { nombre: "Seminario Finanzas", descripcion: "Gestión financiera", fecha: "2025-12-11 10:00", asistentes: 35, ubicacion: "Sala E" },
  { nombre: "Exposición Innovación", descripcion: "Proyectos destacados", fecha: "2025-12-12 15:00", asistentes: 45, ubicacion: "Sala F" },
  { nombre: "Workshop Creatividad", descripcion: "Técnicas creativas", fecha: "2025-12-13 09:30", asistentes: 20, ubicacion: "Sala G" },
  { nombre: "Cierre de Evento", descripcion: "Resumen y despedida", fecha: "2025-12-14 18:00", asistentes: 80, ubicacion: "Auditorio" }
];

const tabla = document.getElementById('cuerpoTabla');
eventos.forEach(e => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${e.nombre}</td>
    <td>${e.descripcion}</td>
    <td>${e.fecha}</td>
    <td>${e.asistentes}</td>
    <td>${e.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
