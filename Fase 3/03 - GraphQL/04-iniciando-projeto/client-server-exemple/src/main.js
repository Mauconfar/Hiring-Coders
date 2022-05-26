import { createServer } from 'http';

const server = createServer((request, response) => {
  switch(request.url){
    case '/status':{
      response.writeHead(200, {
        'Content-Type': 'aplication/json',
      });
      response.write(
        JSON.stringify({
          status:'Okay',
        })
      );
      response.end();
      break;
    }
    default: { //Serve para qualquer outro caso que não se encaixe nos de cima.
      response.writeHead(404, 'Server not found.');
      response.end()
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || `127.0.0.1`;

server.listen( PORT, HOSTNAME, () => { //criando o IP do servidor local
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`)
});

