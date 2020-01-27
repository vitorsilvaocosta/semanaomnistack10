const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://vidma06:15740601@cluster0-mgqf1.mongodb.net/test?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes);

server.listen(3333);

// Metodos HTTP: get, post , put , delete

// Tipos de parametros:
// Query params: request.query (filtros , ordenacao, paginacao, ...)
// Route params: request.params (identificar um recurso na alteracao ou remocao)
// Body: requuest.body (dados para criacao ou alteracao de um registro)

// MongoDB (Nao-relacional)