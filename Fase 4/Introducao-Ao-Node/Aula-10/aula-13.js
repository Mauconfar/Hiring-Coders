const http = require('http'); //incluindo biblioteca http.
const url = require('url'); //requetindo pacote npm de url
const queryString = require('query-string'); //Módulo que precisa ser INSTALADO
const fs = require('fs'); //incluindo pacote File System do nomde
const { stringify } = require('querystring');


const hostname = '127.0.0.1'; //Definindo o endereço onde vai rodar. (localhost )
const port = 3000; //definindo a porta.


// Implementação da regra de negócio.
const server = http.createServer((req, res) => {

  var resposta;
  const urlparse = url.parse(req.url, true)

  //Receber informações do usuário
  const params = queryString.parse(urlparse.search);
  //pega dados da da URL com o pacote URL. E o queryString quebra ele na parte após o "localhost?porta"

  //Criar e atualizar um usuário 
  if (urlparse.pathname == "/criar-usuario") { //pathname é o que vem antes do "?" da url        
    //Salvar informações do usuário
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      
      resposta = "Usuário criado com sucesso!"

      console.log('Saved!');
      res.statusCode = 200; //Código de que está tudo certo.
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta); //Parte do código que imprime o texto
    });
    
  }
  //Selecionar usuário
  else if (urlparse.pathname == "/selecionar-usuario") {
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
      resposta = err ? "usuario nao encontrado!" : data;

      res.statusCode = 200; //Código de que está tudo certo.
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta); //Parte do código que imprime o texto

      /* O "res" (respsota) ficou dentro das funções devido o fato do JS ser assíncrono.
      antes ele estava abaixo e fora da função, porém o JS não executa o código de forma totalmente
      ordenada, pulando a função e executando a resposta antes das funções mudarem os valores das
      variáveis, gerando uma resposta vazia. */
    });
  }
  //Remover usuário
  else if (urlparse.pathname == "/remover-usuario"){
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted!');

      resposta = err ? "Usuario nao encontrado" : "Usuario removido" // IF ternário.

      res.statusCode = 200; //Código de que está tudo certo.
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta); //Parte do código que imprime o texto
    });
  }

});


// Comandos de execução do código.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//PARÂMETRO UTILIZADOS
// http://127.0.0.1:3000/criar-usuario?nome=Maucon-Rodrigues&idade=31&id=1
// http://127.0.0.1:3000/selecionar-usuario?id=1
// http://127.0.0.1:3000/remover-usuario?id=1