//const http = require("http")
//const character = require("./utils/data")
//const PORT = 3001
//
//http.
//    createServer(req, res => {
//        res.setHeader('Access-Control-Allow-Origin', '*');
//        //ejemplo de la url que le pasen
//        ///req.rul: rickandmorty/character/4
//        // split [rickandmorty,character,4]
//        if (req.url.includes(`rickandmorty/character/`)) {
//            const id = req.url.split("/").pop();
//            //le decimos con este filter es que con cada character que le paso por data sea igual al id que guardamos y despues lo devolvemos
//            const character = character.filter(character => character.id === Number(id));
//            res.writeHead(200, { "content-type": "application-json" })
//            res.end(JSON.stringify(character[0]))
//        }
//    }).
//    listen(PORT, "localhost");
//

const express = require('express');
const router = require("./routes/index")
const getCharacterById = require('./controllers/getCharacterById');
const server = express();
const PORT = 3001;

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
server.use(express.json());
server.use(morgan("dev"))

//localhost


server.use(`/rickandmorty`, router)


server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});