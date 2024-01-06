const http = require('http');

const routes = require('./routes')

const { buffer } = require('stream/consumers');
const { text } = require('stream/consumers');

const server = http.createServer(routes);

server.listen(3000);