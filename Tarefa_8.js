
const prompt = require("prompt-sync")()

let valor1 = parseInt(prompt("Digite um Valor 1: "));
let valor2 = parseInt(prompt("Digite um Valor 2: "));



if (valor1 != valor2) {
    if (valor1 > valor2) {
        console.log(valor2,valor1);
    } else if (valor2 > valor1){
        console.log(valor1,valor2)
    }   
}else{
    console.log("valor 1 e igual ao valor 2");
}