const users = require("../utils/users");


module.exports = (req, res) => {
    const { email, password } = req.query;
    let access = false;
    users.forEach((user) => {
        if (
            user.email === email &&
            user.password === password
        ) { access = true; }
        else { null }
    })
    return res.status(200).json({ access: access });//lo pongo entre llaves ya que manda un objeto teniendo la propiedad acces que vale true or false
    
};