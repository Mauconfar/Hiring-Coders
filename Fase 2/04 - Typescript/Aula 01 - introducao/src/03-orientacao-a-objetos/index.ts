class jogo {
    public nome;
    constructor(nome: string) {
        this.nome = nome;
    }
}
//A propriedade "nome" está pública, eu consigo acessar ele mesmo por algo fora da função.

const ghost = new jogo("The Sims");
console.log(ghost.nome)




// ---------------------------------- //

/*Caso eu não queira que uma propriedade fique acessível externamente à função */

class jogo2 {
    // private nome; Não funcionaria na classe abaixo.
    protected nome;
    constructor(nome: string) {
        this.nome = nome;
    }
    dizerNome() {
        return `O nome do jogo é: ${this.nome}` //Instanciei uma função para poder ver o valor privado.
    }
}

const ghost2 = new jogo2("Ghost of Tsushima");
console.log(ghost2.dizerNome())


// ---------------------------------- //

/*A diferença do "private" para o "protected" é que quando os valores de uma classe com alguma propriedade 
em "protected, ela será também transferida a essa nova classe. 
Já as em "private" não podem ser acessadas em outra classe, só na original. */

class jogoComDescricao extends jogo2 { //vai extender a classe jogo2.
    private descricao;

    constructor(nome: string, descricao: string) {
        super(nome); //passando o parâmetro da função "jogo2" que está extendida.

        this.descricao = descricao;

    }
    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome}`
        //só está sendo acessado porque na classe jogo2 está protected.
    }
}

const ghost3 = new jogoComDescricao("Fifa", "É um jogo de futebol.")

console.log(ghost3.dizerNome())