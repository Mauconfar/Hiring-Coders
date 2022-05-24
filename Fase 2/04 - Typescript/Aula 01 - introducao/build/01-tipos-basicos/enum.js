"use strict";
var permissoes;
(function (permissoes) {
    permissoes[permissoes["admin"] = 0] = "admin";
    permissoes[permissoes["editor"] = 1] = "editor";
    permissoes[permissoes["comum"] = 2] = "comum";
})(permissoes || (permissoes = {}));
const usuario = {
    nivel: permissoes.comum
};
console.log(usuario);
var permissoes2;
(function (permissoes2) {
    permissoes2["admin"] = "ADMIN";
    permissoes2["editor"] = "EDITOR";
    permissoes2["comum"] = "COMUM";
})(permissoes2 || (permissoes2 = {}));
const usuario2 = {
    nivel: permissoes2.admin
};
console.log(usuario2);
