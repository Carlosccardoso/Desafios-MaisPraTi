const prompt = require("prompt-sync")()

let valor = parseInt(prompt("Digite um Valor : "));



switch (true) {

    case valor == 1:
        console.log("sul");
        return;

    case valor == 2:
        console.log("Norte");
        return;

    case valor == 3:
        console.log("leste");
        return;

    case valor == 4:
        console.log("Oeste");
        return;

    case valor == 5 || valor == 6:
        console.log("Nordeste")
        return;

    case valor >= 7 && valor <= 9:
        console.log("Sudeste")
        return;

    case valor >= 10 && valor <= 25:

        return console.log("Centro Oeste");

    case valor >= 25 && valor <= 50:
        return console.log("Nordeste");

        default:
            console.log("esse numero ta tirando ne");
            break;
}

// nesse caso nao sabia como fazer um case ter uma condição, entao mudei o valor esperado para boleano ai ao inves de ele querer achar um valor especifico ele procura se e true ou false, dessa forma consigo por condiçoes no meu case,
// nao sei se era assim que voce esperava ou se ta certo mais gostei mais assim do que fazer um monte de cases infinitos ou usar o if.