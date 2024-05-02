// const pronummpt = require("prompt-sync")()

// let Graus;

// Graus = prompt("Graus Celsius");

// console.log(Graus * 9/5 + 32 );

// //Primeira Tarefa

// const prompt = require("prompt-sync")()

// let brancos;
// let nulos;
// let validos;
// let eleitores;


// brancos = parseInt(prompt("Quantos votos em Brancos? "));
// nulos = parseInt(prompt("Quantos votos em Nulos? "));
// validos = parseInt(prompt("Quantos votos em Validos? "));
// eleitores = parseInt(prompt("Quantos votos em Eleitores? "));

// const total = eleitores + nulos + validos + brancos;

// let brancosPercent = (brancos / total) * 100
// let nulosPercent = (nulos / total) * 100
// let validoPercent = (validos / total) * 100
// let eleitoresPercent = (eleitores / total) * 100

// console.log(brancosPercent.toFixed(2))
// console.log(nulosPercent.toFixed(2))
// console.log(validoPercent.toFixed(2))
// console.log(eleitoresPercent.toFixed(2))

//Segunda tarefa

// const prompt = require("prompt-sync")()

// num1 = parseInt(prompt("Valor: "));
// num2 = parseInt(prompt("Valor: "));
// num3 = parseInt(prompt("Valor: "));
// num4 = parseInt(prompt("Valor: "));


// console.log(num1 + 25);
// console.log(num2 * 3);
// console.log(num3 * 0.12);
// console.log(num1 + num2 + num3 + num4, num4)

//Terceira Tarefa

// const prompt = require("prompt-sync")()

// let nota1 = parseInt(prompt("qual foi a nota 1: "));
// let nota2 = parseInt(prompt("qual foi a nota 2: "));

// resultado = (nota1 + nota2) / 2;

// if(resultado >= 6){
//     console.log("Está aprovado", resultado)
// }else{
//     console.log("Esta reprovado", resultado)
// }

//Quarta e Quinto Tarefa

// const prompt = require("prompt-sync")()

// let num1 = parseInt(prompt("Tamanho 1: "));
// let num2 = parseInt(prompt("Tamanho 2: "));
// let num3 = parseInt(prompt("Tamanho 3: "));

// if(num1 < num2 + num3 && num2 < num1 + num3 && num3 < num1 + num2){
//     {
//         if(num1 != num2 && num2 != num3 && num1 != num3){
//             console.log("todos os valores sao diferentes, Escaleno:")
//         }else if(num1 === num2 && num2 === num3 && num1 === num3){
//             console.log("Todos os lados Diferentes, Eqüilátero:")
//         }else if(num1 === num2 || num2 === num3 || num3 === num1){
//             console.log("Dois dos lados são iguais, isósceles:")
//         }else{
//             console.log("ta tudo errado")
//         }
//     }
// }

//Sexta Tarefa

// const prompt = require("prompt-sync")()

// let maça = parseInt(prompt("Quantas Maças voce vai querer? "));

// if(maça >= 12){
//     let MeiaDuzia = maça + 0.25;
//     console.log(maça,"deu esse valor",MeiaDuzia)
// }else{
//     let MenosDuzia = maça + 0.30;
//     console.log(maça,"deu esse valor",MenosDuzia)
// }

//Setima Tarefa

// const prompt = require("prompt-sync")()

// let valor1 = parseInt(prompt("Digite um Valor 1: "));
// let valor2 = parseInt(prompt("Digite um Valor 2: "));



// if (valor1 != valor2) {
//     if (valor1 > valor2) {
//         console.log(valor2,valor1);
//     } else if (valor2 > valor1){
//         console.log(valor1,valor2)
//     }   
// }else{
//     console.log("valor 1 e igual ao valor 2");
// }

//Oitava Tarefa

// const prompt = require("prompt-sync")()

// let valor = parseInt(prompt("Digite um Valor : "));



// switch (true) {

//     case valor == 1:
//         console.log("sul");
//         return;

//     case valor == 2:
//         console.log("Norte");
//         return;

//     case valor == 3:
//         console.log("leste");
//         return;

//     case valor == 4:
//         console.log("Oeste");
//         return;

//     case valor == 5 || valor == 6:
//         console.log("Nordeste")
//         return;

//     case valor >= 7 && valor <= 9:
//         console.log("Sudeste")
//         return;

//     case valor >= 10 && valor <= 25:

//         return console.log("Centro Oeste");

//     case valor >= 25 && valor <= 50:
//         return console.log("Nordeste");

//         default:
//             console.log("esse numero ta tirando ne");
//             break;
// }

// Nona Tarefa

// const prompt = require("prompt-sync")()

// let valor = parseInt(prompt("digite um valor"));

// for ( let i = 0; i <= 10; i++) {
//     console.log(valor)

// }

// Decima Tarefa



// const prompt = require("prompt-sync")()

// let valor = parseInt(prompt("digite"))

// for (let i = 10; i >= 1; i--) {

//     if (i % 2 === 0) {
//         console.log(i, "par")
//     }else {
//         console.log(i, "impar")
//     }
// }

//Decima Primeira Tarefa

// for (let i = 1000; i <= 1999; i++) {

//     if (i % 11 == 5) {
//         console.log(i);
//     }
// }

// Decima Segunda Tarefa



const numeroCorreto = Math.floor((Math.random() * 9)+1)
const numeroCorreto2 = Math.floor((Math.random() * 9)+1)
const numeroCorreto4 = Math.floor((Math.random() * 9)+1)
const numeroCorreto3 = Math.floor((Math.random() * 9)+1)
const numeroCorreto5 = Math.floor((Math.random() * 9)+1)

console.log(numeroCorreto,numeroCorreto2,numeroCorreto3,numeroCorreto4,numeroCorreto5)
    for(let i = 1; i <= numeroCorreto; i++){
        console.log(`${numeroCorreto} * ${i} =`,numeroCorreto * i);
    }
    for(let i = 1; i <= numeroCorreto5; i++){
    console.log(`${numeroCorreto5} * ${i} =`,numeroCorreto5 * i);
    }
    for(let i = 1; i <= numeroCorreto2; i++){
        console.log(`${numeroCorreto2} * ${i} =`,numeroCorreto2 * i);
    }
    for(let i = 1; i <= numeroCorreto3; i++){
        console.log(`${numeroCorreto3} * ${i} =`,numeroCorreto3 * i);
    }
    for(let i = 1; i <= numeroCorreto4; i++){
        console.log(`${numeroCorreto4} * ${i} =`,numeroCorreto4 * i);
    }

// Decima Terceira Tarefa




// média aritmética

// const prompt = require("prompt-sync")()

// var somador = 0;
// var contador = 0;
// var valor = null;


// do {
//     var valor = parseInt(prompt("Digite um valor"));
//     if(valor != 0) continue;

//     somador += valor;
//     contador++;

// } while(valor != 0);


// console.log(somador/contador);


// numero e peso
// const prompt = require("prompt-sync")()

// var numero = 0;
// var peso = 0;

// var somaNumero = 0;
// var somaPeso = 0;

// do {
//     var numero = parseInt(prompt("Digite um numero: "));
//     var peso = parseInt(prompt("Digite um peso: "));

//     if(numero == 0 || peso == 0) continue;

//     somaNumero += numero*peso;
//     somaPeso += peso;
// } while (numero != 0 && peso != 0)

// console.log(somaNumero/somaPeso)


// for (var numero = 1; numero <= 100; numero++) {

//     for (var i = 2; i <= numero; i++) {
//         if (numero == i) {
//             console.log("ai ele teu primo", i)
//         }
//         if (numero % i == 0) {
//             break;
//         }
//     }
// }


// var contador = 0;
// var numeroAtual = 100;

// do {
//     numeroAtual++
//     for (var i = 2; i <= numeroAtual; i++) {
//         if (numeroAtual == i) {
//             console.log("ai ele é teu primo", i)
//             contador++
//         }
//         if (numeroAtual % i == 0) {
//             break;
//         }
//     }

// } while (contador < 50)
