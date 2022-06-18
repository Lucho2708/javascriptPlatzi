// Este es el código del cuadrado

console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();

// Este es el código del triangulo

console.group("Triangulo")

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Este es el código del circulo
console.group("Circulos");

// Diametro

function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio){

   return (radio * radio)*PI;
}