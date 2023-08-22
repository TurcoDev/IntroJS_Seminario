var texto = "Hola mundo!!!";
var numero = 5.5;
var bool = true; // false
/* comentario
de varias
lineas
*/
var Bool = false;
alert("Hola desde alert");
console.log("Hola desde consola");
document.write("<p>Hola desde el DOM</p>");

/*
Asignacion =
Aritmeticos +,-, *, /, %
Logicos &&, ||, !
Comparacion >, >=, <, <=, ==, !=, ===, !==
Incremento ++, Decremento --   condition  
*/
// Condicionales
// if (condicion) {
//     // codigo
// }

if (numero > 3) {
    console.log(!bool);
} else {
    console.log(texto + " como estas");
}
// Iteraciones
numero = 1;
while (numero < 5) {
    console.log('Iteracion while Nro: ' + numero);
    numero++;
}

for (let index = 1; index < 5; index++) {
    console.log('Iteracion for Nro: ' + index);
}

// do while se ejecuta su codigo al menos una vez
// do {
//     // codigo
// } while (condition);