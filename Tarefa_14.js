

const prompt = require("prompt-sync")()

var somador = 0;
var contador = 0;
var valor = null;


do {
    var valor = parseInt(prompt("Digite um valor"));
    if(valor != 0) continue;

    somador += valor;
    contador++;

} while(valor != 0);


console.log(somador/contador);

// usei var nessas questoes de while pq let tava dando conflito, nao sei o motivo mais com let nao funcionou e com var sim, gostaria de um motivo :p