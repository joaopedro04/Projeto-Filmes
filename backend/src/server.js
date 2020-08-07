const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(9157, () => {
    console.log('Servidor iniciado em http://localhost:9157');
});