"use strict";
let gatos = [
    "Lora",
    "Logan"
];
gatos.push("Adilso");
function exibeGatos(gatos) {
    return `Os gatos são: ${gatos.join(", ")}.`;
}
console.log(exibeGatos(gatos));
