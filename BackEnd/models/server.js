const express = require('express');
const cors = require('cors');
const connectionDB = require('../database/config.js');
class Server {

    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.usuariosPath = "/api/usuarios";
        this.authPath = "/api/auth";
        this.lectorPath = "/api/lector";
        this.libroPath = "/api/libro";
        this.feedBackPath = "/api/feedback"
        this.eventosPath = "/api/evento"
        this.chatPath = "/api/chat"

        //Middlewares

        this.middlewares();

        //routes

        this.routes();

        //Database Conexión

        this.connectDB();
    }

    async connectDB(){
        await connectionDB();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //express
        this.app.use(express.json());
        
        //PUBLIC DIRECTORY
        this.app.use(express.static(__dirname + '/../FrontEnd'));
    }

    routes(){
      this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));
      this.app.use(this.authPath, require("../routes/auth.routes.js"));
      this.app.use(this.lectorPath, require("../routes/lector.routes.js"));
      this.app.use(this.libroPath, require("../routes/libro.routes.js"));
      this.app.use(this.feedBackPath, require("../routes/feedback.routes.js"));
      this.app.use(this.eventosPath, require("../routes/eventos.routes.js"));
      this.app.use(this.chatPath, require("../routes/chats.routes.js"));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server Running on port: ${this.port}`);
        })
    }

}

module.exports = Server;