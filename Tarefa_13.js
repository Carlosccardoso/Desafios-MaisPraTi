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

    