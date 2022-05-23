//outra forma de criar objeto definindo a tipagem dos campos criados na variável.
// uma variável de "type alias" pode ter campos com tipagens diferentes.
// esse "type" será como uma nova tipagem criada no programa.

type usuario = {
    name: string; //defindo o campo e a tipagem.
    lastName: string;
    birthday: string;
    age?: number; //Colocando a interrogação, essa propriedade passa a ser OPICIONAL.

}

const maucon: usuario = { //obrigatoriamente essa constante precisa dos campos do "type" acima criado.
    name: "Maucon",
    lastName: "Rodrigues",
    birthday: "07/01/1991",
    age: 31,
}



// ------------- UNION TYPES -------------;

// São marcados pelo símbolo do "pipe" |
//Indica que a tipagem de um elemento será de um tipo OU de outro (função de "or").

type logLevel = 'info' | 'error' | 'debug'; //definimos um "tipo" e que ele terá um desses três valores.

function logMessage (message: string, level: logLevel) {
    console.log(`"${level} - ${message}`);
}


console.log(logMessage("Uma mensagem log", "error"))
/* O segundo parâmetro da função será um dos 3 valores do "logLevel". Outro valor dará erro; */


//  ------------- INTERSECTION TYPES  -------------

// São caracterizados pelo "&".
// Ele agrupa vários "type alias".

type about = {
    bio: string;
    interests: string[];    
}

type profile = usuario & about; //gerei um novo tipo com a união dos valores dos types "usuario" e "about".

const userWithProfile: profile = { 
    name: "Maucon",
    lastName: "Rodrigues",
    birthday: "07/01/1991",
    age: 31,
    bio: "Olá, meu nome é Maucon",
    interests: ["dinheiro", "paz"],

}; 
/* Essa constante está pedindo está pedindo os campos do type "usuario" (name, lastName, birthday e age?)
e também os valores do type "about" (bio e interests). */
