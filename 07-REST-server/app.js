// main node dependencies
// third party dependencies
// own dependencies
require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();