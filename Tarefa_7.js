
const prompt = require("prompt-sync")()

let maça = parseInt(prompt("Quantas Maças voce vai querer? "));

if(maça >= 12){
    let MeiaDuzia = maça + 0.25;
    console.log(maça,"deu esse valor",MeiaDuzia)
}else{
    let MenosDuzia = maça + 0.30;
    console.log(maça,"deu esse valor",MenosDuzia)
}