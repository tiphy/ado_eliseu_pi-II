class Tigre {
    nome: string;
    idade: number;
    peso: number; 
    
    constructor(nome: string, idade: number, peso: number) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    rugir() {
        console.log(`${this.nome} está rugindo!`);
    }

    correr(velocidade: number) {
        console.log(`${this.nome} corre a ${velocidade} km/h.`);
    }
}

const tigre1 = new Tigre("Shere Khan", 5, 220);
const tigre2 = new Tigre("Rajah", 3, 190);


console.log(`Tigre 1: ${tigre1.nome}`);
console.log(`Tigre 2: ${tigre2.nome}`);

tigre1.rugir();
tigre2.correr(60);