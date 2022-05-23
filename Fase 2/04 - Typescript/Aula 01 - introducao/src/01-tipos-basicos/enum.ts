/* Cria uma espécie de objeto cujos valores internos se referenciam a valores ordenados.

No exemplo abaixo "admin" referencia o valor 0, "editor" ao valor 1, e "comum" ao valor 2.*/


enum permissoes {
    admin,
    editor,
    comum
}

const usuario = {
    nivel: permissoes.comum //será referenciado ao valor 2.
}

console.log(usuario)

/* Além da referenciação a valores numéricos ordenados como está acima, nós podemos colocar uma referencia
de uma string para cada item desse "enum". */


enum permissoes2 { //Agora a referência será aos valores das strings abaixo.
    admin = `ADMIN`,
    editor = `EDITOR`,
    comum = `COMUM`
}

const usuario2 = {
    nivel: permissoes2.admin //será referenciado a "ADMIN".
}

console.log(usuario2)