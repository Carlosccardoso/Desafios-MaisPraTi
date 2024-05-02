const prompt = require("prompt-sync")()

let brancos;
let nulos;
let validos;
let eleitores;


brancos = parseInt(prompt("Quantos votos em Brancos? "));
nulos = parseInt(prompt("Quantos votos em Nulos? "));
validos = parseInt(prompt("Quantos votos em Validos? "));
eleitores = parseInt(prompt("Quantos votos em Eleitores? "));

const total = eleitores + nulos + validos + brancos;

let brancosPercent = (brancos / total) * 100
let nulosPercent = (nulos / total) * 100
let validoPercent = (validos / total) * 100
let eleitoresPercent = (eleitores / total) * 100

console.log(brancosPercent.toFixed(2))
console.log(nulosPercent.toFixed(2))
console.log(validoPercent.toFixed(2))
console.log(eleitoresPercent.toFixed(2))