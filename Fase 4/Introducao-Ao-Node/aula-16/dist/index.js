"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http"); //forma de importar biblioteca
const port = 5000;
const server = (0, http_1.createServer)((request, response) => {
    response.end("Hello World");
});
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
