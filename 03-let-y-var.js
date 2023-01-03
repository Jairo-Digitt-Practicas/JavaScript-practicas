//Pruebas con Let y Var
'Use strict'

var numero =40;
console.log(numero); //valor 40
if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con Let
var texto = "Curso de JavaScript";
console.log(texto); //valor js

if(true) {
    let texto = "Master de JavaScript"
    console.log(texto); //valor Master
}

console.log(texto); //valor js