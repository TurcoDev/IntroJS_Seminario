function saludo1() {
    console.log('Firmes!!!');
}

saludo1();

function saludo2(nombre) {
    console.log('hola ' + nombre);
}

saludo2("Daniel");
let nombreGlobal = "Francisco"
saludo2(nombreGlobal);

function saludo3(nombre) {
    return 'hola ' + nombre;
}

let respuesta = saludo3("Daniel");
console.log(respuesta);
alert(respuesta);
document.write(respuesta);
// let no permite redefinir una variable var si
// let respuesta = "";

// funcion con 2 parametros
function suma(valor1, valor2) {
    var valorInterno = 8;   
    return valor1 + valor2 + valorInterno; 
}

// console.log(valor1);
// console.log(valorInterno);

const MAX_VALUE = 100;
// no puede modificarse el valor
// MAX_VALUE = 50;

const arreglo = [1,2,3,4,5];
for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    console.log(element);
}

// const permite cambiar los datos de un objeto
arreglo[2] = 6;
arreglo[8] = 40;
console.log(arreglo);
document.write(arreglo);
// no se puede redefinir el arreglo como tal
// arreglo = [];
console.log(bool);