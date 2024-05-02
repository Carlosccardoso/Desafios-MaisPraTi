const prompt = require("prompt-sync")()

let valor = parseInt(prompt("digite"))

for (let i = 10; i >= 1; i--) {

    if (i % 2 === 0) {
        console.log(i, "par")
    }else {
        console.log(i, "impar")
    }
}