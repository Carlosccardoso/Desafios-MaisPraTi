const prompt = require("prompt-sync")()

let nota1 = parseInt(prompt("qual foi a nota 1: "));
let nota2 = parseInt(prompt("qual foi a nota 2: "));

resultado = (nota1 + nota2) / 2;

if(resultado >= 6){
    console.log("Está aprovado", resultado)
}else{
    console.log("Esta reprovado", resultado)
}