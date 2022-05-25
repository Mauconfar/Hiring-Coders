import React from "react";
import * as S from './styled'; //Importar tudo através da variável "S"

export default function Repositories(){

    return(
        <S.Container>
            <S.Title> Repositorios</S.Title>
            <S.List>
                <S.ListItem> Repositorio: Nome do Repositorio</S.ListItem>
            </S.List>
        </S.Container>
    )
}