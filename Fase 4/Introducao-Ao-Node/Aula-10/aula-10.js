const http = require('http'); //incluindo biblioteca http.
const url = require('url'); //requetindo pacote npm de url
const queryString = require('query-string'); //Módulo que precisa ser INSTALADO

const hostname = '127.0.0.1'; //Definindo o endereço onde vai rodar. (localhost )
const port = 3000; //definindo a porta.


// Implementação da regra de negócios.
const server = http.createServer((req, res) => {

  // O que vou fazer?
  // Pegar a pergunta na URL
  
  
  const params = queryString.parse(url.parse(req.url, true).search) 
  // O "queryString" pega uma URL e retorna em um objeto para ser trabalhado.
  // O Search retira o "/ no início da URL"

  // console.log(params); //o req possui uma propriedade URL. Imprimirá o que está além da "/"

  // Verificar a pergunta e escolher a resposta;
  let resposta;
  if(params.pergunta == "melhor-filme"){
    resposta = "Star Wars";    
  }else if(params.pergunta == "melhor-tecnologia-backend"){
    resposta = "Node JS";
  }else{
    resposta = "Não sei, desculpe :( ";
  }

  // Retornar a resposta escolhida 

  res.statusCode = 200; //Código de que está tudo certo.
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta); //Parte do código que imprime o texto
});


// Comandos de execução do código.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});