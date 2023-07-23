/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if(num > 0){
   console.log( "Es positivo");
   } else if (num < 0){
      console.log("Es negativo");
   } else {
      console.log(false);
   }

   
   
} esPositivo(12)
esPositivo(0);
   

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   var str =" Hello word";
   str = str + "!"
   return str 
} console.log(agregarSimboloExclamacion);

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código: 
   var nombre = "Lorena";
   nombre = nombre + " " + "Lopez";
   return nombre ;
} console.log(combinarNombres);

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   var Martin = "Martin";
   Martin = "Hola" + " " + Martin + "!"
   return Martin

} console.log(obtenerSaludo);

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   var alto = 10;
   var ancho = 15;
   var area = alto * ancho ;
   return area;

}console.log(obtenerAreaRectangulo);

var alto = 10;
var ancho = 15;
var area = alto * ancho ;
return area;

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   var lado = 10;
   perimetro = lado * 4 ;
   return perimetro;
} console.log(retornarPerimetro);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   var base = 6;
   var altura = 4;
   return base * altura;
} console.log(areaDelTriangulo)

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   var euro = 10;
   var dolar = 1.20;
   return dolar * euro ;

} console.log(deEuroAdolar);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (letra==="a") {return "Es Vocal";}
 else if (letra==="e") {return "Es Vocal";}
 else if (letra==="i") {return "Es Vocal";}
 else if (letra==="o") {return "Es Vocal";}
 else if (letra==="u") {return "Es Vocal";}
 else { return "Dato incorrecto";}
}console.log(esVocal);
      
    
   


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
