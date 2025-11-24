const titulo = document.getElementById('titulo');
console.log("Título del evento: " + titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => 
    console.log("Nota del evento: " + nota.textContent)
);
const items = document.getElementsByClassName('item');
Array.from(items).forEach(item => 
    console.log("Actividad programada: " + item.textContent)
);
const usuarios = document.getElementsByName('usuario');
Array.from(usuarios).forEach(usuario => 
    console.log("Organizador: " + usuario.textContent)
);
