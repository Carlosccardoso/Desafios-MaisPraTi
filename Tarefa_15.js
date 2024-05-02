
const prompt = require("prompt-sync")()

var numero = 0;
var peso = 0;

var somaNumero = 0;
var somaPeso = 0;

do {
    var numero = parseInt(prompt("Digite um numero: "));
    var peso = parseInt(prompt("Digite um peso: "));

    if(numero == 0 || peso == 0) continue;

    somaNumero += numero*peso;
    somaPeso += peso;
} while (numero != 0 && peso != 0)

console.log(somaNumero/somaPeso)

//usei o continue, aprendi que ele quando entra na condição ele ignora e pula. 