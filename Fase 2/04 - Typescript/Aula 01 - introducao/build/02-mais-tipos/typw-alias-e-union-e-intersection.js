"use strict";
const maucon = {
    name: "Maucon",
    lastName: "Rodrigues",
    birthday: "07/01/1991",
    age: 31,
};
function logMessage(message, level) {
    console.log(`"${level} - ${message}`);
}
console.log(logMessage("Uma mensagem log", "error"));
const userWithProfile = {
    name: "Maucon",
    lastName: "Rodrigues",
    birthday: "07/01/1991",
    age: 31,
    bio: "Olá, meu nome é Maucon",
    interests: ["dinheiro", "paz"],
};
