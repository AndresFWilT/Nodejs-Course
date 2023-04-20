const express = require("express");
const cors = require('cors');
const { dbConnection } = require("../database/config.db");

class Server {
  constructor() {
    // Initialization and server config
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = '/api/users';
    // Database connection
    this.connectDatabase();
    // Middlewares
    this.middlewares();
    // App routes
    this.routes();
  }

  async connectDatabase () {
    // Database connection
    await dbConnection();
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
    //API routes
    this.app.use(this.usersRoutePath, require('../routes/user'));
  }

  listen() {
    // Port listening
    this.app.listen(this.port, () => {
      console.log(`App listening on port: ${this.port}`);
    });
  }
}

module.exports = Server;