class Carro {
    marca: string = 'Ford';
    modelo: string = 'T';
    cor: string;
    ano: number = 1908;
    velocidade: number = 0;

    constructor(novaCor: string) {
        this.cor = novaCor;
    }

    acelerar(velocidade?: number) {
        if (velocidade === undefined) {
            this.velocidade += 10;
        } else {
            this.velocidade += velocidade;
        }
        console.log("Nova velocidade: ", this.velocidade);
    }

    frear(valor?: number) {
        if (valor === undefined) {
            this.velocidade -= 10;
        } else {
            this.velocidade -= valor;
        }
        if (this.velocidade < 0) this.velocidade = 0; 
        console.log("Velocidade após frear: ", this.velocidade);
    }
}

const meuCarro = new Carro('Preto');
meuCarro.acelerar();
meuCarro.acelerar(15);
meuCarro.frear();
meuCarro.frear(5);