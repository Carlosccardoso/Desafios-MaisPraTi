let contador = 0;
let numeroAtual = 100;

do {
    numeroAtual++
    for (let i = 2; i <= numeroAtual; i++) {
        if (numeroAtual == i) {
            console.log("ai ele é teu primo", i)
            contador++
        }
        if (numeroAtual % i == 0) {
            break;
        }
    }

} while (contador < 50)