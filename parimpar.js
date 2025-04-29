/*
Professor, fiz esse codigo sem aplicar o solid porque eu nao sei separar os arquivos e importalos no js :(
*/

let EscP = prompt("Escolha par ou impar").toLocaleLowerCase();
let Invalidando = 0;
console.log(EscP);
if (EscP == "Par" || EscP == "par" || EscP == "Impar" || EscP == "impar") {
    parimpar();
} else {
    alert("invalido");
}

function parimpar() {
    let cachorro = Math.floor(Math.random() * 9) + 1;
    alert("o bot escolheu: " + cachorro);
    let esc = parseInt(prompt("Digite um numero de 1 a 9"));
    if (esc < 1 || esc > 9 || isNaN(esc)) {
        alert(" numero invalido");
    }
    let calcinha = esc + cachorro;
    alert("a soma do seu numero com o numero do bot foram " + calcinha);
    let imparCerto = calcinha % 2;
    let impar = (imparCerto == 1) ? 1 : 0;
    console.log(imparCerto);
    if (imparCerto == 1) {
        impar = 1
        console.log("impar");
    } else {
        console.log("Par");
    }
    if (EscP == "par") {
        if (impar == 1) {
            console.log("par \nJogador perdeu");
            alert("par \nJogador perdeu");
        } else {
            console.log("par \nJogador venceu");
            alert("par \njogador venceu");
        }
    } else {
        if (impar == 1) {
            console.log("impar \nJogador venceu");
            alert("impar \nJogador venceu");
        } else {
            console.log("impar \nJogador perdeu")      
            alert("impar \nJogador perdeu");
        }    
    }
}