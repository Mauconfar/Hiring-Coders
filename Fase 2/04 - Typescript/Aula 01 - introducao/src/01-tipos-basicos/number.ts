let idade: number;

idade = 25; //se eu colocar entre aspas, entenderá que é string e dará erro.


function somaIdade(idadeInicial: number, anosSePassaram: number) {
    return idadeInicial + anosSePassaram;
}


somaIdade(25, 6);