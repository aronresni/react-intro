const axios = require("axios")


const URL = `https://rickandmortyapi.com/api/character/`

const getCharacById = (res, req) => {
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
module.exports = getCharacById;