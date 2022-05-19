const cpf = "Meu cpf é 123.456.569-22"

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}');

console.log(cpf.match(regex))

/* Cruza todo o input e a partir de uma expressão regular, o "match" vai buscar dentro desse texto 
o que você solicitou. */