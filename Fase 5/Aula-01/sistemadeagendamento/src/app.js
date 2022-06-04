import express from 'express';
import routes from './router'; //importando o router que criamos.

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes(); 
    }

    middlewares(){ //middlewares são cadeias de responsabilidades.
        this.server.use(express.json())

    }
//PAREI EM 15:50
    routes(){
        this.server.use(routes);
    }
}

export default new App().server;