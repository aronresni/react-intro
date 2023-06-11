const express = require('express');
const getCharById = require('./controllers/getCharById');
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const cors = require("cors")
var morgan = require('morgan')


server.use(express.json());
server.use(morgan("dev"))
server.use(cors())

//localhost


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

//con este middleware analiza las rutas
server.use(`/rickandmorty`, router)



server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});


