const prompt = require("prompt-sync")()

let num1 = parseInt(prompt("Tamanho 1: "));
let num2 = parseInt(prompt("Tamanho 2: "));
let num3 = parseInt(prompt("Tamanho 3: "));

if(num1 < num2 + num3 && num2 < num1 + num3 && num3 < num1 + num2){
    {
        if(num1 != num2 && num2 != num3 && num1 != num3){
            console.log("todos os valores sao diferentes, Escaleno:")
        }else if(num1 === num2 && num2 === num3 && num1 === num3){
            console.log("Todos os lados Diferentes, Eqüilátero:")
        }else if(num1 === num2 || num2 === num3 || num3 === num1){
            console.log("Dois dos lados são iguais, isósceles:")
        }else{
            console.log("ta tudo errado")
        }
    }
}