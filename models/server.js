const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    // Middlewares
    this.middlewares();

    //App Routes
    this.routes();
  }

  middlewares() {
    // Cors
    this.app.use(cors());

    // Body Read & Parse 
    this.app.use(express.json());

    //Public Directory
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server Running on Port ', this.port);
    });
  }
}

module.exports = Server;