/* Toda função e JS tem um retorno.
Se a função não tem um retorno explicito, ela retornará undefined.

Porém, em TS, o retorno de funções sem retorno explícito é "void". (vazio), pode ser usado quando
se quer executar uma função que não vai ter retorno explícito.*/

function principal(): void {
    console.log("Executando")
} //Irá imprimir algo mas não retornará nada.

/* Never é usado para um função NUNCA retonar nada. Ajuda a evitar loopings infinitos ou quando uma 
função dispara um erro. */

function funcaoQueNuncaRetorno (): never {
    while(true){
        
    }
}