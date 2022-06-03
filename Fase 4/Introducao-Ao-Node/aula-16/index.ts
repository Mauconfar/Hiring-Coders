import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http'; //forma de importar biblioteca

const port = 5000;
var resposta: string;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {//tenho que informar o parâmetro.

  const urlparse = url.parse(request.url ? request.url : '', true)
  //usei o ternário para corrir possível erro apontado pelo TS da url poder estar vazia.

  const params = parse(urlparse.search ? urlparse.search : ''); //mesma correção de acima.

  //Criar e atualizar um usuário 
  if (urlparse.pathname == "/criar-usuario") { //pathname é o que vem antes do "?" da url        
    //Salvar informações do usuário
    writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
      if (err) throw err;
      console.log("Saved!");

      resposta = "Usuário criado/atualizado com sucesso!"
      
      response.statusCode = 200; //Código de que está tudo certo.
      response.setHeader('Content-Type', 'application/json');
      response.end(resposta); //Parte do código que imprime o texto
    });    
  }
  
});





server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})