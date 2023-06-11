let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites)
}
const deleteFav = (req, res) => {
    const id = req.params.id;
    myFavorites = myFavorites.filter(char => {
        return char.id !== id;// preguntamos si es distinto al ID que nos esta llegando
    })
    return res.status(200).json(myFavorites)
}
module.exports = { postFav, deleteFav };

