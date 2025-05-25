console.log("Listado de ejercicios:")
console.log("1- Variables y Operadores:")
var numero1 = 2
var numero2 = 2
var sumaVariables = numero1 + numero2

console.log(sumaVariables)

var string1 = "UNO"
var string2 = "DOS"
var concatenarStrings = string1 + string2

console.log(concatenarStrings)

var stringLength1 = "UNO"
var stringLength2 = "DOS"
var sumaStrings = stringLength1.length + stringLength2.length

console.log(sumaStrings)

console.log("2- Strings:")
var string = "mayusculas"
console.log(string.toUpperCase())

var substring1 =  "substrings"
var substring2 = substring1.substring(0,5)
console.log(substring2)

var substring3 = "substrings"
var substring4 = substring3.substring(substring3.length - 3)
console.log(substring4)

var stringConTodo = "stringConTodo"
var stringConTodo2 = stringConTodo.substring(0,1).toUpperCase() + stringConTodo.substring(1).toLowerCase()
console.log(stringConTodo2)

var espacioBlanco = "espacio en blanco"
var espacioBlanco2 = espacioBlanco.indexOf(" ")
console.log(espacioBlanco2)

var stringsLargos = "stringLargo1 stringLargo2"
var stringsLargos2 = stringsLargos.substring(0,1).toUpperCase() + stringsLargos.substring(1,stringsLargos.indexOf(" ")).toLowerCase() + " " + stringsLargos.substring(stringsLargos.indexOf(" ") + 1).substring(0,1).toUpperCase() + stringsLargos.substring(stringsLargos.indexOf(" ") + 1).substring(1).toLowerCase()
console.log(stringsLargos2)

console.log("3- Arrays:")
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(array[4] + " " + array[10])

var arrayAlfabeticamente = array.sort()
console.log(arrayAlfabeticamente)

var arrayAgregar = array.unshift("Principio") + array.push("Final")
console.log(arrayAgregar)

var arrayBorrar = array.shift() + array.pop()
console.log(arrayBorrar)

var arrayJoin = array.join(" - ")
console.log(arrayJoin)

var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var arraySlice = array.slice(4,11)
console.log(arraySlice)

console.log("4- IF Else:")
var numeroRandom  = Math.random()
if (numeroRandom >= 0.5){
    console.log("Greater than 0.5:",numeroRandom)
} else {
    console.log("Lower than 0.5:",numeroRandom)
}

var age = 76

if (age < 2) {
    console.log("Bebe")
} else if ( 2 <= age && age <= 12){
    console.log("Niño")
} else if (13 <= age && age <= 19){
    console.log("Adolescente")
} else if (20 <= age && age <= 30 ){
    console.log("Joven")
} else if (31 <= age && age <= 60){
    console.log("Adulto")
} else if (61 <= age && age <= 75){
    console.log("Adulto Mayor")
} else if (age > 75){
    console.log("Anciano")
}

console.log("5- For:")
var arrayFor = ["calculo","desarrollo","analisis","ingles","fisica"]

for (let i = 0; i < arrayFor.length;i++){
    console.log(arrayFor[i])
}

var arrayFor = ["calculo","desarrollo","analisis","ingles","fisica"]

for (var i = 0; i < arrayFor.length;i++){
    var arrayForModificado = arrayFor[i][0].toUpperCase() + arrayFor[i].slice(1)
    console.log(arrayForModificado)
}

var arrayFor = ["calculo","desarrollo","analisis","ingles","fisica"]
var sentence = ""
for (var i = 0; i < arrayFor.length;i++){
    sentence += arrayFor[i]
}
console.log(sentence)

var numeros = []
for (var i = 0; i < 10; i++) {
    numeros.push(i)
}
console.log(numeros)

console.log("6- Function:")
function suma(a, b) {
    return a + b
}

var resultado = suma(5, 3)
console.log("Resultado:", resultado)

function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return NaN
    }
    return a + b
}

var resultado = suma(5, "hola")
console.log("Resultado:", resultado)

function validateInteger(num) {
    return typeof num === "number" && num % 1 === 0;
}

console.log(validateInteger(4));
console.log(validateInteger(4.5));

function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Uno de los parámetros no es un número.");
        return NaN;
    }

    if (a % 1 !== 0) {
        console.log("El primer número no es entero. Se redondeará.");
        a = Math.round(a);
    }
    if (b % 1 !== 0) {
        console.log("El segundo número no es entero. Se redondeará.");
        b = Math.round(b);
    }

    return a + b;
}

var resultado = suma(5.7, 3.2);
console.log("Resultado:", resultado);


function validateAndRound(num) {
    if (typeof num === "number" && num % 1 !== 0) {
        return Math.round(num);
    }
    return num;
}

function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return NaN;
    }

    a = validateAndRound(a);
    b = validateAndRound(b);

    return a + b;
}

var resultado = suma(2.8, 7.5);
console.log("Resultado:", resultado);