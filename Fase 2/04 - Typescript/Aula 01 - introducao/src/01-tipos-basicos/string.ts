let nome: string; //Agora a variável está definida como string.

nome = "Maucon"; //se eu atribuir algo que não seja string (como um númeri inteiro), dará erro.


function nomeCompleto (nome:string, sobrenome:string) {
    return `${nome} ${sobrenome}`;
}

nomeCompleto("Maucon", "Rodrigues");


/*A tipagem obriga que os valores atribuídos sejam os mesmo das tipagens, ou dará erro.*/