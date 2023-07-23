/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
  
   console.log(string);
   

   // Debe retornar un string.
   // Tu código:
}
devolverString('strign Lore');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   var x = 5;
   var y = 5;
  

   return x + y;
 
    // Retorna el resultado de su suma.
    // Tu código:
 } console.log( suma);

 
   
 

function resta(x, y) {
   var x = 10;
   var y = 5;
   return x - y;
   // Retorna el resultado de la resta.
   // Tu código:
} console.log(resta);

function divide(x, y) {
   var x = 100;
   var y = 50;
   return x / y;

   // Retorna el resultado de su división.
   // Tu código:
} console.log(divide);

function multiplica(x, y) {
   var x = 25;
   var y = 5;
   return x * y;

   // Retorna el resultado de su multiplicación.
   // Tu código:
} console.log(multiplica);

function obtenerResto(x, y) {
   var x = 150;
   var y = 10;
   return x % y;

   // Obten el resto de la división de "x" entre "y".
   // Tu código:
} console.log(obtenerResto);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
