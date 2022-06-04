 import { Router } from 'express'; //importando o Router.

const routes = new Router(); //instanciando o Router.
//Rotas são os endereços na nossa API que vão dar tratativas às funcionalidades do nosso APP.

routes.get('/', (req, res) => {
    return res.json({message: 'Okay'})

})

export default routes; //exportando pra ser acessado externamente.