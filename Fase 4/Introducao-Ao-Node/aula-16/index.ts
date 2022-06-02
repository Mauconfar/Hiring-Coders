import * as queryString from 'query-string';
import * as url from 'url';
import * as fs from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http'; //forma de importar biblioteca

const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {//tenho que informar o parâmetro.
    response.end("Hello World");
});


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})