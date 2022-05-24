"use strict";
class jogo {
    constructor(nome) {
        this.nome = nome;
    }
}
const ghost = new jogo("The Sims");
console.log(ghost.nome);
class jogo2 {
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        return `O nome do jogo é: ${this.nome}`;
    }
}
const ghost2 = new jogo2("Ghost of Tsushima");
console.log(ghost2.dizerNome());
class jogoComDescricao extends jogo2 {
    constructor(nome, descricao) {
        super(nome);
        this.descricao = descricao;
    }
    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome}`; 
    }
}
const ghost3 = new jogoComDescricao("Fifa", "É um jogo de futebol.");
console.log(ghost3.dizerNome());
