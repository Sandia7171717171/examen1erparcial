function saludar() {
    let nombre = prompt("Ingresa tu nombre:");
    if (nombre) {
        alert("Hola " + nombre + ", suerte en tu examen");
    }
}

function calcularCuadrado() {
    let numero = parseFloat(prompt("Ingresa un número:"));
    if (!isNaN(numero)) {
        alert("El cuadrado de " + numero + " es " + (numero * numero));
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}
