'use strict';
const msj ="hola";
const numeroletras = msj.length // numeroletras= 4
console.log(numeroletras);
const mensaje = msj.concat ("mundo"); // mensaje = "holamundo"
console.log(mensaje);

const msj2 = "Hola";
const msjupper = msj2.toUpperCase(); // msj2 = "HOLA";
console.log(msjupper);

const msj3 = "Hola";
const msjlower =msj3.toLowerCase(); //msjlower = "hola";
console.log(msjlower);

const porcion = mensaje.substring(2) //porcion = "lamundo";

const mensajelargo = "Hola Mundo, soy una cadena";
const palabras = mensajelargo.split (""); // palabras = ["Hola", "Mundo", "soy", "una", "cadena"];
console.log (palabras);

//Ejercicio 1 PAR O IMPAR

function checkNumber (numerouser){
    if (numerouser%2==0){ 
        console.log("par")
        return "este numero es par"
    } else {
        console.log("impar")
        return "este numero es impar"
    }
};
// const reultado = checkNumber(26);
// alert(resultado)

//Ejercicio 2 MAYUSCULA O MINuSCULA

let frase = prompt("Indique su frase");
const mayusculas = frase.toUpperCase();
const minusculas = frase.toLowerCase();
if (frase ===mayusculas){
    alert("TU FRASE ESTÁ ESCRITA EN MAYÚSCULAS");
} else if (frase === minusculas){
    alert( "tu frase está escrita en minúsculas");
} else {
    alert(" Tu frase está tanto en minúsculas como en mayúsculas");
};

//En funcion:

// let prueba = "HOLA";

// function checkLetter (mensaje){
//     const mayusculas = mensaje.toUpperCase();
//     const minusculas = mensaje.toLowerCase();
//     if (mensaje === mayusculas){
//     console.log("MAYUSCULAS");
//     return "esta frase está en mayusculas";
//     } else if (mensaje === minusculas){
//         console.log ("minusculas");
//         return "esta frase está en minusculas";
//     } else {
//         console.log ("mayusculas y minusculas");
//         return "esta frase está tanto en minusculas como en mayusculas";
//     }
// };

// const resultado = checkLetter (prueba);
// console.log(resultado);

// Funciones de Array

const numbers = [2,50,32];
const biggerNumbers = numbers.map (function (number){
    return number *2
});
console.log(biggerNumbers); //[4, 100, 64]

//Ejercicio 3

const topics = ["JavaScript", "Variables", "funciones","condicionales", "bucles"]

const arraytopics = topics.map (function (mayustopics){
    return mayustopics.toUpperCase();

});

//Función flecha
const arraytopics2 = topics.map (elemento => elemento.toLocaleUpperCase());

// arraytopics.reverse();
console.log(arraytopics);

//Array filtrado

const topicsFiltered = topics.filter(function(palabra){
    return palabra.length >6  ;
});
console.log (topicsFiltered)
// Con flecha
// const topicsFiltered2= topics.filter (item => item.length > 6);
// console.log (topicsFiltered2);

//Ejercicio 4

const number =[ 253,8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const pares = number.filter(function(elemento){
    if (elemento %2 == 0){
        return elemento
    
}});
console.log(pares)

const impares = number.filter(function (numero){
    if (numero %2 !=0)
    return numero;

});

console.log(impares);

//Reduce

const palabrasR = ["aa", "b", "DDD"];

let resultado = "";
// acc= acumulador; current = currentValue
palabrasR.reduce(function(acc, current){
    if (acc.length > current.length){
        return resultado = acc
    } else {
        return resultado = current
    }
}, "");
console.log(resultado);

//Ejercicio 5

const times = [60,75,79,80,55,59];
let suma= 0;

times.reduce(function(acumulador, currentvalor){
    suma = (acumulador + currentvalor);
    return suma;
}, 0);

console.log(suma);
const media = suma / times.length ;
console.log (media);

//Palabra mas larga

const words = ['Envioronmental', 'Systemn', 'Research', 'Institute'];

let palabralarga = '';
words.reduce(function(acumulador1, valorinicial){
    if (acumulador1.length > valorinicial.length){
        return palabralarga=acumulador1
    } else {
        return palabralarga= valorinicial
    }
}, '');
console.log(palabralarga);
