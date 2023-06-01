const http= require("http");

const routes = require('./exportreadwrite');

const server=http.createServer(routes); //(routes.help)

server.listen(3000);