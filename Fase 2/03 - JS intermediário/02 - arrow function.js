// Função normal
function soma (x, y){
    return x + y;
}
console.log(soma(3 , 4));


//No ecmascript 5 surgiu um novo tipo:

const multiplicacao = function (x, y){
    return x * y;
}
console.log(multiplicacao(4, 5));



//Arrow function.

const dividir = (x , y) => {
    return x / y;
}

console.log(dividir(35, 5));

//função criando objeto
const objeto =  () => ({nome: "Maucon", sobrenome: "Rodrigues"});

let teste = objeto();

console.log(teste)