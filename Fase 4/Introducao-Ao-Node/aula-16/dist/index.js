"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
const http_1 = require("http"); //forma de importar biblioteca
const port = 5000;
var resposta;
const server = (0, http_1.createServer)((request, response) => {
    const urlparse = url.parse(request.url ? request.url : '', true);
    //usei o ternário para corrir possível erro apontado pelo TS da url poder estar vazia.
    const params = (0, query_string_1.parse)(urlparse.search ? urlparse.search : ''); //mesma correção de acima.
    //Criar e atualizar um usuário 
    if (urlparse.pathname == "/criar-usuario") { //pathname é o que vem antes do "?" da url        
        //Salvar informações do usuário
        (0, fs_1.writeFile)('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log("Saved!");
            resposta = "Usuário criado/atualizado com sucesso!";
            response.statusCode = 200; //Código de que está tudo certo.
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta); //Parte do código que imprime o texto
        });
    }
});
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
