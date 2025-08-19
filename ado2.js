const p1 = 5.6;
const p2 = 3;
const ado = 7.7;

let media = p1 * 0.35 + p2 * 0.35 + ado * 0.3;

console.log("A media é igual a " + media)

    if (media > 6){
        console.log("Aprovado")
    }
    else if (media < 6 && media > 3){
        console.log("Recuperaçao")
    }
    else if (media <= 3){
        console.log("Reprovado")
    }
