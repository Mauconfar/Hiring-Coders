let lista = [1, 2, 5];

let listaIncluir = [3, 4] //arrays a serem incluídos no cima no local correto.

for (let i = 0; i < listaIncluir.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){ //Se o valor da lista for maior que o que da listaIncluir?
            lista.splice(j, 0, listaIncluir[i])
            /*Corte na posição j, não exclua nenhum elemnto (0), e inclua o listaIncluir[i] */
            j++
            //Como a variável "lista" ficou maior, o j++ pula o valor incluído.
        }
    }
}

console.log(lista)


//Usando o operador spread.
let listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);

let arr = [`a`, `b`, `c`];

/* let arr2 = arr; Dessa forma, usa-se um atalho de memória, e aí as alterações no arr2 são refletidas no arr.
ao usar o spread operator, ele faz uma cópia dos valores, criando um novo array. */

let arr2 = [...arr];

arr.push(`d`) //Acrescentei a letra D ao final da lista "arr".

console.log(`arr = ${arr}`);
console.log(`arr2 = ${arr2}`);


