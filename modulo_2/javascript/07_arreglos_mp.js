let numeros = [10,5,26,9];
let arrayVicio = new Array();
let arrayVicio2 = [];

console.log("Arreglo de asientos por sección (original) — GESTIÓN DE EVENTOS Y CONFERENCIAS", numeros)
console.log("arrayVacio (reservas) — GESTIÓN DE EVENTOS Y CONFERENCIAS", arrayVicio);
console.log("arrayVacio2 (recursos) — GESTIÓN DE EVENTOS Y CONFERENCIAS", arrayVicio2);
console.log("Acceso a datos del arreglo (asientos/recursos)");
console.log(numeros[0]);
console.log(numeros[3]); 
console.log("Modificar elemento del arreglo (actualizar asientos)");
numeros[0]=100;
console.log(numeros);
console.log("Agregar elemento al arreglo (nueva sección)");
numeros.push(500);
console.log(numeros);
console.log("Agregar elemento al inicio (prioridad)");
numeros.unshift(888);
console.log(numeros);
console.log("Eliminar el último elemento (remover última sección)");
numeros.pop();
console.log(numeros);
console.log("Eliminar el primer elemento (remover sección inicial)");
numeros.shift();
console.log(numeros);
console.log("Iteración con while (recorrer secciones)");
let indice=0
while(indice<numeros.length){
    console.log("sección ", indice, "asientos", numeros[indice]);
    indice++;
}
console.log("Iteración con For (recorrer secciones)");
for (let i=0; i <numeros.length;i++){
    console.log(numeros[i]);
}
console.log("Iteración con For..of (valores de secciones)");
for(let valor of numeros){
    console.log(valor);
}
console.log("Iteración con forEach (índice y asientos)");
numeros.forEach(function(valor, indice){
    console.log(indice, valor);
});