let estaAtivo: boolean;

estaAtivo = true;


function mapearStatusDeUsuario(status: boolean): string { //tipagem do retorno da função como "string"
    if(status){ //se for status for true.
        return `Usuário está ativo`;
    }else {
        return `Usuário NÃO está ativo`;
    }
}

mapearStatusDeUsuario(true);