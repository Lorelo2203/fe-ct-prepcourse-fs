/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   var x = 5;
   var y = 6;
   return x == y;
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
} console.log(sonIguales);

function tienenMismaLongitud(str1, str2) {
   var str1 = 'Lore';
   var str2 = 'mi';
   return str1 === str2
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
} console.log(tienenMismaLongitud);

function menosQueNoventa(num) {
   var num = 90;
   return num === 90;
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
} console.log(menosQueNoventa);

function mayorQueCincuenta(num) {
   
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   var num = 50;
   return num > 50;
} console.log(mayorQueCincuenta);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 0);
    { console.log(true)};
    
 } 
 esPar(10);
 esPar(3);
 esPar(1.5);
   
 
function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 != 0);
   {console.log(true)};
}
esImpar(10)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
