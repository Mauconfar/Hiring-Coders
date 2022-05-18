var elementos = [];
var topo = -1;
const max = 10;

function push (num){
    if (topo < max){
        topo = topo + 1; //Contador iniciando a contar as casas do array.        
        elementos[topo] = num; //Array na posição "topo" recebe um número.
    }else{
        console.log("Pilha está cheia!");
    }
}

function estaVazia(){
    return topo == -1;
}

function pop (){ //Função pop que retira o último valor do array e tem esse número como retorno.
    if(topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    }else{
        console.log("A pilha está vazia.")
}
}

// Utilizando as funções

/*
push(10);
push(20);
push(30);


console.log(elementos) //coloquei os 3

console.log(por()) //imprime cada número retirado do array.
console.log(por())
console.log(por())
 */

/* COMO DESCOBRIR O VALOR BINÁRIO DE UM NÚMERO.  
Basta dividí-lo por 2 sucessivamente, armazenando o resto das divisões (0 ou 1) e exibí-los na ordem inversa
a qual surgiram. */

var numDecimal = 10;
var resto;

while(numDecimal != 0){
    resto = parseInt(numDecimal % 2); //descobrindo o resto da primeira divisão. 
    //parseInt pra forçar o número a permanecer inteiro
    push(resto); //acrescentando o resto ao array elemento.
    numDecimal = parseInt(numDecimal / 2); // Forçando o resultado ser um número inteiro
    console.log(elementos);

    /*O ciclo retornará ao início até a última divisão, resultado num array que deverá ser invertido
    para mostrar o valor binário do número. */

}

while (!estaVazia()){
    console.log(pop())
}