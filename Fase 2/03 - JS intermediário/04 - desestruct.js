// Objeto

const pessoa = {
    nome: "Maucon",
    sobrenome: "Rodrigues",
    idade: 31,
    profissao: "Asessor Parlamentar"
}

console.log(pessoa);

//forma errada, quebrando em diversas variáveis.
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;


//Forma mais usada, com DESESTRUCT
let {nome, sobrenome, idade, profissao} = pessoa;
//Cada índice do objeto virou uma variável externa a ele. Tem que ter o mesmo nome da chave interna ao objeto.

console.log(nome, sobrenome, idade, profissao)