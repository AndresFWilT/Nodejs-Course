const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = '/api/users';
    // Middlewares
    this.middlewares();
    // App routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // reading and parsing of the body
    this.app.use(express.json());
    // public path
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersRoutePath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port: ${this.port}`);
    });
  }
}

module.exports = Server;