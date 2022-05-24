type jogoAssertion = {
    nome: string;
    descricao: string;
}

// let jogoTeste = {} as jogoAssertion; //estou dizendo que esse objeto terá as mesmas propriedade de jogoAssertion
// jogoTeste.nome = "safasfds";
// jogoTeste.descricao = "blasaksas";



let jogoTeste = <jogoAssertion> {};//estou dizendo que esse objeto terá as mesmas propriedade de jogoAssertion
jogoTeste.nome = "safasfds";
jogoTeste.descricao = "blasaksas";

// Evita de ficar tipando novas classes uma vez que já pode usar a tipagem de outra já feita.