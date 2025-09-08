/* 
class Carro {
    marca = "Ford";
    modelo = "T";
    cor = "";
    ano = 1908;
    velocidade = 0;
    constructor(novaCor) {
        this.cor = novaCor;
    }
    acelerar() {
        this.velocidade += 10;
    }
    frear() {
        this.velocidade -= 10;
    }
}
const meuCarro = new Carro("Preto");
meuCarro.acelerar();
console.log(meuCarro.cor);
console.log(meuCarro.velocidade);
*/
class Carro{
    marca = "chevrolet";
    modelo = "opala";
    cor = "vermelho";
    ano = "1969";
    velocidade = 0;

    constructor(novaCor){
        this.cor = novaCor;
    }
    acelerar() {
        this.velocidade += 10;
    }
    frear() {
        this.velocidade -= 10;
    }
}

const meuCarro2 = new Carro("Preto");
meuCarro2.acelerar();
console.log(meuCarro2.cor);
console.log(meuCarro2.velocidade);


class Carro{
    marca = "toyota";
    modelo = "corolla cross";
    cor = "vermelho";
    ano = "2025";
    velocidade = 0;

    constructor(novaCor){
        this.cor = novaCor;
    }
    acelerar() {
        this.velocidade += 10;
    }
    frear() {
        this.velocidade -= 10;
    }
}

const meuCarro3 = new Carro("Azul");
meuCarro3.acelerar();
console.log(meuCarro3.cor);
console.log(meuCarro3.velocidade);

