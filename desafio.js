const max = 10;
const min = 0;

let nota = 9;

if(nota < min || nota > max){
    console.log("ERRO")
}
else{

    if (nota < 6){
        console.log("insuficiente");
    }
    else if (nota >= 6 && nota < 7){
        console.log("regular");
    }
    else if (nota >= 7 && nota < 9){
        console.log("bom");
    }
    else{
        console.log("exelente");
    }
}


