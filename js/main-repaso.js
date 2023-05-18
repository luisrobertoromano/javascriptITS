/*
const nombre = "Luis";
let edad = 39;
let esDocente = true;

console.log("Hola mundo");
console.log(nombre, edad, esDocente);

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(esDocente));
*/
const persona = {
    nombre: "Luis",
    edad: 39,
    esDocente: true
};

//console.log(persona.edad);

const coleccion = [34, 45, "Hola", 32.7, false];
/*
for (let i = 0; i < coleccion.length; i++) {
    console.log(coleccion[i]);
}
*/
/*
coleccion.forEach(function(item) {
    console.log(item);
})
*/
/*
function suma(a, b) {
    return a + b;
}
*/
/*
const suma = function(a, b) {
    return a + b;
}
*/
/*
const suma = (a, b) => {
    return a + b;
}
*/
//console.log(suma(3, 5));
let signo = "*";
let operacion = "";
/*
if (signo === "+") {
    operacion = "suma";
} else if (signo === "-") {
    operacion = "resta";
} else if (signo === "/") {
    operacion = "division";
} else if (signo === "*") {
    operacion = "multiplicacion";
} else {
    operacion = "operacion no valida";
}
*/

/*
switch (signo) {
    case "+":
        operacion = "suma";
        break;
    case "-":
        operacion = "resta";
        break;
    case "/":
        operacion = "division";
        break;
    case "*":
        operacion = "multiplicacion";
        break;
    default:
        operacion = "Operacion no valida";
}
*/
/*
const operaciones = {
    "+": "suma",
    "-": "resta",
    "/": "division",
    "*": "multiplicacion"
};
*/
console.log(operaciones[signo]);




//console.log(operacion);