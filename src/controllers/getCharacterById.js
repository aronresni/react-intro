const axios = require("axios")
//
//const getCharacterById = (res, id) => {
//    axios
//        .get(`https://rickandmortyapi.com/api/character/${id}`)
//        .then(response => { response.data })
//        .then(data => {
//            const character = {
//                id: data.id,
//                name: data.name,
//                geneder: data.gender,
//                species: data.species,
//                origin: data.origin,
//                image: data.image,
//                status: data.status,
//            }
//            res
//                .writeHead(300, { "Content-Type": "application-json" })
//                .end(JSON.stringify(character))
//        })
//        .catch(error => {
//            res
//            .writeHead(500, { "Content-Type": "text/plain" })
//            .end(error.message)
//
//        })
//}
//
//
//module.exports = getCharacterById;

const URL = `https://rickandmortyapi.com/api/character/`

const getCharacterById = (res, req) => {
    const id = req.params.id;
    axios(URL + id)
        .then(response => {
            const { status, name, species, origin, image, gender } = response.data
            const character = {
                id: id
                , status: status
                , name: name
                , species: species
                , origin: origin
                , image: image
                , gender: gender

            }
            if (character.name) { return res.status(200).json(character) }
            else return res.status(404).send("Not found")
        })
        .catch(error => {
            return res.status(500).send(error.message);
        })
}
module.exports = getCharacterById;