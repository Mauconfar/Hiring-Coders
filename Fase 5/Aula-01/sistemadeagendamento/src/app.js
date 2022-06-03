const express = require('express');
const router = require('./router'); //importando o router que criamos.

class app {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes(); 
    }

    middlewares(){ //middlewares são cadeias de responsabilidades.
        this.server.use(express.json())

    }
//PAREI EM 15:50
    routes(){}
}