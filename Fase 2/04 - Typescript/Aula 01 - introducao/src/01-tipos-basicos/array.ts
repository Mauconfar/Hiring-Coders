// estrutura de dados com uma sequência de valores dados de forma ordenada.

let gatos: string[] = [ //Usando [] eu identifico que será um array de strings.
    "Lora",
    "Logan"
]; 

gatos.push("Adilso");
//devido a tipagem, eu não poderia fazer um push de um number, por exemplo.

function exibeGatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(", ")}.` //"join" mostra cada elemento com uma ", " entre eles.
}

console.log(exibeGatos(gatos))