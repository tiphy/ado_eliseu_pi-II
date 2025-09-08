class Carro2 {
    marca = "Ford";
    modelo = "T";
    cor = "";
    ano = 1908;
    velocidade = 0;
    constructor(novaCor) {
        this.cor = novaCor;
    }
    acelerar(...args) {
        if (args.length === 0) {
            // Sem argumentos
            this.velocidade += 10;
        } else if (args.length === 1
            && typeof args[0] === "number") {
            // Um argumento
            this.velocidade += args[0];
        } else {
            throw new Error("Número inválido.");
        }
    }
}
const meuCarro = new Carro2("Preto");
meuCarro.acelerar();
//Acessando o método sobrecarregado
meuCarro.acelerar(25);
console.log(meuCarro.cor);
console.log(meuCarro.velocidade);
